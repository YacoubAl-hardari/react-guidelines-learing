import React from "react";

export default function MyButton() {
    let name = "أحمد";

    return (
        <div>
            <button onClick={() => { name = "يعقوب"; }}>
                Click Me
            </button>
            <h1>{name}</h1>
        </div>
    );
}

