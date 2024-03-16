export default function Input(props) {
  return (
    <div className="w-full px-4 py-0 text-lg">
      <label htmlFor={props.label} className="ml-2 text-white">
        {props.label}:
      </label>
      <input
        id={props.id}
        type={props.type}
        className="w-full px-4 py-2 m-1 bg-white rounded ring-solid ring-secondary ring-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-none"
        value={props.value}
        onChange={props.setValue}
        onBlur={props.onBlur}
      />
    </div>
  );
}
