function doSometing(event) {
    console.log("Button was Clicked !");
    console.log(event);
}

function doNothing() {
    console.log("Bye Bye");
}

export default function Button() {
    return (
        <div>
            <button onClick={doSometing}>Click me</button>
            {/* <p onClick={doNothing}>This is working on Handling Click Event</p> */}
            <p onMouseOver={doNothing}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Omnis iure tempora ipsam quos error. 
                 Minima eaque corporis recusandae repellat iure, 
                 facilis aliquid sunt, atque velit quam magnam, 
                 itaque consectetur impedit!</p>
        </div>
    )
}