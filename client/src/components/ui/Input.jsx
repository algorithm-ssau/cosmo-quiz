export default function Input(props) {
    return (
        <div className="px-4 py-2 text-lg bg-white">
            <label htmlFor={props.label} className="ml-2 text-grey">
                {props.label}:
            </label>
            <input
                id={props.label}
                type="text"
                className="w-full px-4 py-2 m-1 border border-solid rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-none"
                value={props.value}
                onChange={(event) => props.setValue(event.target.value)}
            />
        </div>
    );
}