export default function Input(props) {
  return (
    <div className="relative flex items-center w-full px-3 py-2 mt-2 text-lg rounded bg-lightBlue">
      
      {props.children}
      
      <input
        id={props.id}
        type={props.type}
        className="w-full pl-2 m-1 text-base rounded-r focus:outline-none placeholder:text-black bg-lightBlue"
        value={props.value}
        onChange={props.setValue}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
        onFocus={props.onFocus}
      />
    </div>
  );
}
