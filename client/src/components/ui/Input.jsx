export default function Input(props) {
  return (
    <div className="flex items-center w-full m-1 text-lg rounded bg-lightBlue">
      
      {props.children}
      
      <input
        id={props.id}
        type={props.type}
        className="w-full m-1 text-base rounded-r focus:outline-none placeholder:text-black bg-lightBlue "
        value={props.value}
        onChange={props.setValue}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
      />
    </div>
  );
}
