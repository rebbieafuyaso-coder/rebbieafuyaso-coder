export default function PrimaryButton({ name, clickFunction }) {
  return(
    <button
    className="py-2 px-4 m-1"
    onClick={clickFunction()}>{name}</button>
  )
}