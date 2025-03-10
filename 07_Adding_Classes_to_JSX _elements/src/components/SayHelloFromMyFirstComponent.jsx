import '../App.css';

export default function SayHelloFromMyFirstComponent() {
    const style = {
        backgroundColor: "yellow",
        color: "blue",
        fontSize: "24px",
        padding: "10px"
    };

    const buttonStyle = {
        backgroundColor: "green",
        color: "white",
        fontSize: "24px",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer"
    };

    const textStyle = {
        color: buttonStyle.backgroundColor === "red" ? "green" : "red"
    };

    return (
        <>
            <h1 style={style} className="hello active">
                Hello, my first React component!
            </h1>
            <p style={textStyle}>
                This is a simple example of a React component.
            </p>
            <p className="test">
                This is a simple example of a React component.
            </p>
            <button style={buttonStyle} onClick={() => alert("Button Clicked")}>
                Click Me
            </button>
        </>
    );
}
