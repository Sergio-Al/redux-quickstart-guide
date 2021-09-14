import { createStore } from "redux";

console.log("welcome to redux programming");
const tubeLight = (state = "OFF", action) => {
  // tubelight reducer
  switch (action.type) {
    case "TURN_ON":
      return "ON";
    case "TURN_OFF":
      return "OFF";
    default:
      return state;
  }
};

// Creating the store
const store = createStore(tubeLight);
console.log(`Initially tubeLight is: ${store.getState()}`);

// Modify the store
store.dispatch({ type: "TURN_ON" });
console.log(`Now tubeLight is: ${store.getState()}`);

// creating a button
const button = document.createElement("button");
button.setAttribute("id", "lightButton");
var text = document.createTextNode("ToggleLight");
button.appendChild(text);
document.body.appendChild(button);

// creatin an event listener
document.getElementById("lightButton").addEventListener("click", () => {
  if (store.getState() === "ON") {
    store.dispatch({ type: "TURN_OFF" });
  } else {
    store.dispatch({ type: "TURN_ON" });
  }
});

// render in browser
const render = () => {
  document.body.innerText = store.getState();
  document.body.appendChild(button);
};

// display when the state changes (for this we need subscribe wich execute function when an dispatch is called or when the store changes)
store.subscribe(render);
render();
