// the button click handler
var handler = function(ev) {
    // Unsubscribe from the button event.
    button.removeEventListener("click", handler);

    alert("Button was clicked. Unsubscribing from event.");
};

// add the button click handler
button.addEventListener("click", handler);