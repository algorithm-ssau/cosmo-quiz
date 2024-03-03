export default function Input(props) {
    return (
        <div className="px-4 py-2 text-lg">
            <label htmlFor={props.label}>{props.label}:</label>
            <input
                id={props.label}
                type="text"
                className="w-full px-4 py-2 m-1 border border-solid rounded focus:outline-none focus:border-2 focus:border-accent"
                value={props.value}
                onChange={(event) => props.setValue(event.target.value)}
            />
        </div>
    );
}
