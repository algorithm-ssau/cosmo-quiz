import { useState } from "react";

export default function Input(props) {
    const [value, setValue] = useState("");

    return (
        <>
            <label htmlFor={props.label}>{props.label}:</label>
            <input
                id={props.label}
                type="text"
                className="border border-solid rounded py-2 px-4 w-full m-1"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </>
    );
}
