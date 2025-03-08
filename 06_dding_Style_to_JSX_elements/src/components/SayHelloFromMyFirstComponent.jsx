export default  function SayHelloFromMyFirstComponent() {
    const style = 
    {
        backgroundColor: "yellow",
        color: "blue",
        fontSize: "24px",
        padding: "10px"
    }
    const buttonStyle = 
    {
        backgroundColor: "green",
        color: "white",
        fontSize: "24px",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer"
    }
    return (
        <>
            <h1 style={style}>Hello, my first React component! in </h1>
            <p style={{color:"green"}}>This is a simple example of a React component. </p>
            <button style={buttonStyle} onClick={() => alert("Button Clicked")}>Click Me</button>
              
        </>
    );
}
