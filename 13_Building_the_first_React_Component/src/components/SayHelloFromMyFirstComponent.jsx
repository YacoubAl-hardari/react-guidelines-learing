export default  function SayHelloFromMyFirstComponent() {
    return (
        <div>
            <h1>Hello, my first React component!</h1>
            <p>This is a simple example of a React component.</p>
            
            {/* // In React, you can render multiple elements inside a single JSX element.
            // In this case, the <h1> and <p> elements are rendered in separate divs.
            // This is not strictly necessary, but it can sometimes make the code easier to read and understand.
            // However, it's generally recommended to keep your components as simple as possible.

            // You can also return an array of elements instead of a single element.
            // This will render all the elements in the array in the order they appear.
            // For example, you could return an array of <h1> and <p> elements.

            // React.Fragment is a special type of element that doesn't render anything to the DOM.
            // It's used to group elements without adding extra divs.
            // In this case, we're using React.Fragment to group the <h1> and <> elements. */}

            

                
        </div>
    );

    /*
    // This version of the component will render the same thing, but without using a fragment.
    // It's generally considered better practice to use fragments when you need to return multiple elements without adding extra divs.
    return (
        <>
            <h1>Hello, my first React component!</h1>
            <p>This is a simple example of a React component.</p>
        </>

    );
    */
}

// export default SayHelloFromMyFirstComponent;
