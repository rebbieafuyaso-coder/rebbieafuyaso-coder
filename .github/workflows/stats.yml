name: Generate Developer Statistics

on:
  # Automatically update once every day.
  schedule:
    - cron: "17 0 * * *"

  # Gives you a "Run workflow" button.
  workflow_dispatch:

permissions:
  contents: write

jobs:
  generate:
    runs-on: ubuntu-latest

    steps:

      # --------------------------------------------------
      # CHECKOUT
      # --------------------------------------------------

      - name: Checkout profile repository
        uses: actions/checkout@v4

      # --------------------------------------------------
      # FETCH DATA + GENERATE SVGs
      # --------------------------------------------------

      - name: Generate statistics
        env:
          GH_TOKEN: ${{ secrets.STATS_TOKEN }}
          USERNAME: rebbieafuyaso-coder
        run: |

          python3 <<'PY'

          import json
          import math
          import os
          import urllib.parse
          import urllib.request
          from collections import Counter
          from concurrent.futures import ThreadPoolExecutor, as_completed
          from datetime import datetime, timedelta, timezone
          from html import escape


          # ==================================================
          # CONFIGURATION
          # ==================================================

          USERNAME = os.environ["USERNAME"]
          TOKEN = os.environ["GH_TOKEN"]

          API = "https://api.github.com"

          HEADERS = {
              "Authorization": f"Bearer {TOKEN}",
              "Accept": "application/vnd.github+json",
              "X-GitHub-Api-Version": "2022-11-28",
              "User-Agent": "rebbie-profile-stats"
          }


          # ==================================================
          # HTTP HELPERS
          # ==================================================

          def request_json(url, method="GET", payload=None):

              data = None

              if payload is not None:
                  data = json.dumps(payload).encode("utf-8")

              request = urllib.request.Request(
                  url,
                  data=data,
                  headers=HEADERS,
                  method=method
              )

              with urllib.request.urlopen(request, timeout=30) as response:

                  return json.loads(
                      response.read().decode("utf-8")
                  )


          def github_api(path):

              return request_json(
                  f"{API}{path}"
              )


          def graphql(query, variables=None):

              payload = {
                  "query": query
              }

              if variables:
                  payload["variables"] = variables

              return request_json(
                  f"{API}/graphql",
                  method="POST",
                  payload=payload
              )


          # ==================================================
          # USER
          # ==================================================

          print("Fetching user information...")

          user = github_api(
              f"/users/{USERNAME}"
          )


          # ==================================================
          # REPOSITORIES
          #
          # Authenticated /user/repos gives access to
          # repositories the token can see.
          #
          # We only keep repositories owned by USERNAME.
          # This prevents unrelated collaborator repositories
          # from being counted.
          # ==================================================

          print("Fetching repositories...")

          repositories = []

          page = 1

          while True:

              params = urllib.parse.urlencode({
                  "visibility": "all",
                  "affiliation": "owner",
                  "per_page": 100,
                  "page": page,
                  "sort": "updated"
              })

              data = github_api(
                  f"/user/repos?{params}"
              )

              if not data:
                  break

              repositories.extend(data)

              if len(data) < 100:
                  break

              page += 1


          print(
              f"Repositories accessible to {USERNAME}: "
              f"{len(repositories)}"
          )


          # ==================================================
          # LANGUAGE STATISTICS
          # ==================================================

          print("Calculating language statistics...")

          language_totals = Counter()


          def fetch_languages(repo):

              try:

                  owner = repo["owner"]["login"]
                  name = repo["name"]

                  return github_api(
                      f"/repos/{owner}/{name}/languages"
                  )

              except Exception as error:

                  print(
                      f"Language error for repository: {error}"
                  )

                  return {}


          with ThreadPoolExecutor(max_workers=8) as executor:

              futures = [
                  executor.submit(
                      fetch_languages,
                      repo
                  )
                  for repo in repositories
              ]

              for future in as_completed(futures):

                  result = future.result()

                  for language, bytes_count in result.items():

                      language_totals[language] += bytes_count


          total_language_bytes = sum(
              language_totals.values()
          )


          languages = []

          if total_language_bytes:

              for language, amount in language_totals.most_common(8):

                  percentage = (
                      amount /
                      total_language_bytes
                  ) * 100

                  languages.append({
                      "name": language,
                      "bytes": amount,
                      "percentage": percentage
                  })


          # ==================================================
          # REPOSITORY METRICS
          # ==================================================

          stars = sum(
              repo.get("stargazers_count", 0)
              for repo in repositories
          )

          forks = sum(
              repo.get("forks_count", 0)
              for repo in repositories
          )

          watchers = sum(
              repo.get("watchers_count", 0)
              for repo in repositories
          )

          open_issues = sum(
              repo.get("open_issues_count", 0)
              for repo in repositories
          )


          # ==================================================
          # CONTRIBUTION DATA
          #
          # Last 365 days.
          #
          # Contribution data comes from GitHub GraphQL,
          # authenticated as the user.
          # ==================================================

          print("Fetching contribution activity...")

          today = datetime.now(
              timezone.utc
          ).date()

          one_year_ago = today - timedelta(
              days=365
          )

          from_date = (
              f"{one_year_ago.isoformat()}T00:00:00Z"
          )

          to_date = (
              f"{today.isoformat()}T23:59:59Z"
          )


          contribution_query = """

          query($from: DateTime!, $to: DateTime!) {

            viewer {

              login

              contributionsCollection(
                from: $from
                to: $to
              ) {

                totalCommitContributions

                restrictedContributionsCount

                totalIssueContributions

                totalPullRequestContributions

                totalRepositoryContributions

                totalPullRequestReviewContributions

                contributionCalendar {

                  totalContributions

                  weeks {

                    contributionDays {

                      date

                      contributionCount

                      contributionLevel

                    }

                  }

                }

              }

            }

          }

          """


          contribution_result = graphql(
              contribution_query,
              {
                  "from": from_date,
                  "to": to_date
              }
          )


          contribution_data = (
              contribution_result
              .get("data", {})
              .get("viewer", {})
              .get("contributionsCollection", {})
          )


          calendar = (
              contribution_data
              .get("contributionCalendar", {})
          )


          total_contributions = calendar.get(
              "totalContributions",
              0
          )


          commits = contribution_data.get(
              "totalCommitContributions",
              0
          )


          private_contributions = contribution_data.get(
              "restrictedContributionsCount",
              0
          )


          issues = contribution_data.get(
              "totalIssueContributions",
              0
          )


          pull_requests = contribution_data.get(
              "totalPullRequestContributions",
              0
          )


          repositories_contributed = (
              contribution_data.get(
                  "totalRepositoryContributions",
                  0
              )
          )


          reviews = (
              contribution_data.get(
                  "totalPullRequestReviewContributions",
                  0
              )
          )


          # ==================================================
          # FLATTEN CONTRIBUTION DAYS
          # ==================================================

          contribution_days = []

          for week in calendar.get("weeks", []):

              for day in week.get(
                  "contributionDays",
                  []
              ):

                  contribution_days.append(day)


          # ==================================================
          # DATA FILE
          # ==================================================

          os.makedirs(
              "assets",
              exist_ok=True
          )


          stats = {

              "username": USERNAME,

              "name": (
                  user.get("name")
                  or USERNAME
              ),

              "repositories": len(repositories),

              "followers": user.get(
                  "followers",
                  0
              ),

              "following": user.get(
                  "following",
                  0
              ),

              "stars": stars,

              "forks": forks,

              "watchers": watchers,

              "open_issues": open_issues,

              "commits": commits,

              "private_contributions":
                  private_contributions,

              "issues": issues,

              "pull_requests": pull_requests,

              "reviews": reviews,

              "repositories_contributed":
                  repositories_contributed,

              "total_contributions":
                  total_contributions,

              "languages":
                  languages,

              "contribution_days":
                  contribution_days
          }


          with open(
              "stats-data.json",
              "w",
              encoding="utf-8"
          ) as file:

              json.dump(
                  stats,
                  file,
                  indent=2
              )


          # ==================================================
          # SVG HELPERS
          # ==================================================

          def base_svg(
              title,
              subtitle,
              width=900,
              height=420
          ):

              return f'''<svg
              xmlns="http://www.w3.org/2000/svg"
              width="{width}"
              height="{height}"
              viewBox="0 0 {width} {height}">

              <defs>

                <linearGradient
                  id="background"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%">

                  <stop
                    offset="0%"
                    stop-color="#0d1117"/>

                  <stop
                    offset="100%"
                    stop-color="#161b22"/>

                </linearGradient>

                <linearGradient
                  id="accent"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%">

                  <stop
                    offset="0%"
                    stop-color="#58a6ff"/>

                  <stop
                    offset="50%"
                    stop-color="#a371f7"/>

                  <stop
                    offset="100%"
                    stop-color="#f778ba"/>

                </linearGradient>

                <filter id="shadow">

                  <feDropShadow
                    dx="0"
                    dy="8"
                    stdDeviation="12"
                    flood-opacity="0.3"/>

                </filter>

                <style>

                  .title {{
                    font-family:
                      -apple-system,
                      BlinkMacSystemFont,
                      "Segoe UI",
                      sans-serif;

                    font-size: 27px;
                    font-weight: 700;
                    fill: #f0f6fc;
                  }}

                  .subtitle {{
                    font-family:
                      -apple-system,
                      BlinkMacSystemFont,
                      "Segoe UI",
                      sans-serif;

                    font-size: 14px;
                    fill: #8b949e;
                  }}

                  .label {{
                    font-family:
                      -apple-system,
                      BlinkMacSystemFont,
                      "Segoe UI",
                      sans-serif;

                    font-size: 14px;
                    fill: #8b949e;
                  }}

                  .value {{
                    font-family:
                      -apple-system,
                      BlinkMacSystemFont,
                      "Segoe UI",
                      sans-serif;

                    font-size: 27px;
                    font-weight: 700;
                    fill: #f0f6fc;
                  }}

                  .card {{
                    fill: #161b22;
                    stroke: #30363d;
                    stroke-width: 1;
                  }}

                  .fade {{
                    animation:
                      fadeIn 0.8s ease-out both;
                  }}

                  @keyframes fadeIn {{

                    from {{
                      opacity: 0;
                      transform:
                        translateY(8px);
                    }}

                    to {{
                      opacity: 1;
                      transform:
                        translateY(0);
                    }}

                  }}

                </style>

              </defs>

              <rect
                width="100%"
                height="100%"
                rx="20"
                fill="url(#background)"
                filter="url(#shadow)"/>

              <rect
                width="100%"
                height="4"
                rx="2"
                fill="url(#accent)"/>

              <text
                x="36"
                y="52"
                class="title">

                {escape(title)}

              </text>

              <text
                x="36"
                y="78"
                class="subtitle">

                {escape(subtitle)}

              </text>
          '''


          def finish_svg():

              return "</svg>"


          def save_svg(
              filename,
              content
          ):

              with open(
                  f"assets/{filename}",
                  "w",
                  encoding="utf-8"
              ) as file:

                  file.write(
                      content
                  )


          # ==================================================
          # CARD 1 — GITHUB OVERVIEW
          # ==================================================

          svg = base_svg(
              "GitHub Overview",
              f"@{USERNAME} · public + authorized private activity",
              900,
              405
          )


          overview_cards = [

              ("Repositories", len(repositories)),

              ("Stars", stars),

              ("Forks", forks),

              ("Followers", user.get(
                  "followers",
                  0
              )),

              ("Following", user.get(
                  "following",
                  0
              )),

              ("Open Issues", open_issues)

          ]


          positions = [

              (36, 115),
              (325, 115),
              (614, 115),

              (36, 270),
              (325, 270),
              (614, 270)

          ]


          for index, (label, value) in enumerate(
              overview_cards
          ):

              x, y = positions[index]

              delay = index * 0.08

              svg += f'''

              <g
                class="fade"
                style="animation-delay:{delay}s">

                <rect
                  x="{x}"
                  y="{y}"
                  width="250"
                  height="120"
                  rx="15"
                  class="card"/>

                <text
                  x="{x + 22}"
                  y="{y + 39}"
                  class="label">

                  {escape(label)}

                </text>

                <text
                  x="{x + 22}"
                  y="{y + 82}"
                  class="value">

                  {value:,}

                </text>

              </g>

              '''


          svg += '''

          <text
            x="36"
            y="385"
            class="subtitle">

            Automatically generated · updated daily

          </text>

          '''


          save_svg(
              "github-stats.svg",
              svg + finish_svg()
          )


          # ==================================================
          # CARD 2 — TOP LANGUAGES
          # ==================================================

          svg = base_svg(
              "Top Languages",
              "Language usage across repositories visible to the stats token",
              900,
              470
          )


          language_y = 120

          for index, language in enumerate(
              languages
          ):

              name = language["name"]

              percentage = language["percentage"]

              max_bar = 600

              bar_width = (
                  max_bar *
                  percentage /
                  100
              )

              bar_width = max(
                  8,
                  bar_width
              )

              delay = index * 0.08

              svg += f'''

              <g
                class="fade"
                style="animation-delay:{delay}s">

                <text
                  x="36"
                  y="{language_y}"
                  class="label">

                  {escape(name)}

                </text>

                <text
                  x="860"
                  y="{language_y}"
                  class="label"
                  text-anchor="end">

                  {percentage:.1f}%

                </text>

                <rect
                  x="36"
                  y="{language_y + 12}"
                  width="{max_bar}"
                  height="11"
                  rx="5"
                  fill="#21262d"/>

                <rect
                  x="36"
                  y="{language_y + 12}"
                  width="{bar_width}"
                  height="11"
                  rx="5"
                  fill="url(#accent)">

                  <animate
                    attributeName="width"
                    from="0"
                    to="{bar_width}"
                    dur="1.1s"
                    begin="{delay}s"
                    fill="freeze"/>

                </rect>

              </g>

              '''

              language_y += 40


          svg += '''

          <text
            x="36"
            y="445"
            class="subtitle">

            Private repository names are never exposed.

          </text>

          '''


          save_svg(
              "top-languages.svg",
              svg + finish_svg()
          )


          # ==================================================
          # CARD 3 — DEVELOPER ACTIVITY
          # ==================================================

          svg = base_svg(
              "Developer Activity",
              "Contribution activity over the last 12 months",
              900,
              470
          )


          activity = [

              ("Commits", commits),

              ("Pull Requests", pull_requests),

              ("Issues", issues),

              ("Code Reviews", reviews),

              ("Contributed Repositories",
               repositories_contributed),

              ("Total Contributions",
               total_contributions)

          ]


          for index, (label, value) in enumerate(
              activity
          ):

              column = index % 3

              row = index // 3

              x = 36 + (
                  column * 289
              )

              y = 115 + (
                  row * 155
              )

              delay = index * 0.08

              svg += f'''

              <g
                class="fade"
                style="animation-delay:{delay}s">

                <rect
                  x="{x}"
                  y="{y}"
                  width="250"
                  height="125"
                  rx="15"
                  class="card"/>

                <text
                  x="{x + 22}"
                  y="{y + 40}"
                  class="label">

                  {escape(label)}

                </text>

                <text
                  x="{x + 22}"
                  y="{y + 86}"
                  class="value">

                  {value:,}

                </text>

              </g>

              '''


          svg += '''

          <text
            x="36"
            y="445"
            class="subtitle">

            Includes authenticated contribution data where GitHub makes it available.

          </text>

          '''


          save_svg(
              "developer-activity.svg",
              svg + finish_svg()
          )


          # ==================================================
          # CARD 4 — CONTRIBUTION HEATMAP
          # ==================================================

          svg = base_svg(
              "Contribution Activity",
              f"{total_contributions:,} contributions · last 12 months",
              900,
              300
          )


          days = contribution_days

          if days:

              max_count = max(
                  day.get(
                      "contributionCount",
                      0
                  )
                  for day in days
              )

              max_count = max(
                  max_count,
                  1
              )


          start_x = 36

          start_y = 115

          cell = 13

          gap = 3


          for index, day in enumerate(
              days
          ):

              count = day.get(
                  "contributionCount",
                  0
              )

              # Contribution level from GitHub
              level = day.get(
                  "contributionLevel",
                  "NONE"
              )

              colors = {

                  "NONE": "#161b22",

                  "FIRST_QUARTILE":
                      "#0e4429",

                  "SECOND_QUARTILE":
                      "#006d32",

                  "THIRD_QUARTILE":
                      "#26a641",

                  "FOURTH_QUARTILE":
                      "#39d353"

              }

              fill = colors.get(
                  level,
                  "#161b22"
              )

              date = day.get(
                  "date",
                  ""
              )

              # Arrange approximately by week.
              week = index // 7

              weekday = index % 7

              x = (
                  start_x +
                  week * (cell + gap)
              )

              y = (
                  start_y +
                  weekday * (cell + gap)
              )

              svg += f'''

              <rect
                x="{x}"
                y="{y}"
                width="{cell}"
                height="{cell}"
                rx="3"
                fill="{fill}">

                <title>
                  {escape(date)} · {count} contributions
                </title>

              </rect>

              '''


          svg += '''

          <text
            x="36"
            y="275"
            class="subtitle">

            Contribution activity includes private contributions where GitHub reports them as restricted activity.

          </text>

          '''


          save_svg(
              "contributions.svg",
              svg + finish_svg()
          )


          print("")
          print("====================================")
          print("Statistics generated successfully.")
          print("====================================")
          print(f"Repositories: {len(repositories)}")
          print(f"Stars: {stars}")
          print(f"Forks: {forks}")
          print(f"Followers: {user.get('followers', 0)}")
          print(f"Commits: {commits}")
          print(f"Pull Requests: {pull_requests}")
          print(f"Issues: {issues}")
          print(f"Reviews: {reviews}")
          print(f"Contributions: {total_contributions}")
          print("")
          print("Generated files:")
          print("assets/github-stats.svg")
          print("assets/top-languages.svg")
          print("assets/developer-activity.svg")
          print("assets/contributions.svg")

          PY

      # --------------------------------------------------
      # COMMIT GENERATED SVGs
      # --------------------------------------------------

      - name: Commit generated statistics
        run: |

          git config user.name "github-actions[bot]"

          git config user.email \
            "41898282+github-actions[bot]@users.noreply.github.com"

          git add assets/*.svg

          if git diff --cached --quiet; then

            echo "No statistics changes."

          else

            git commit \
              -m "chore: update developer statistics"

            git push

          fi
