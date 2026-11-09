
import "./App.css";
import List from "./List.jsx";

// This is the main component for my React app.
function App() {
  // My name and a randomly generated lucky number.
  const name = "Sebastian";
  const luckyNumber = Math.floor(Math.random() * 100);

  // Check the current hour to decide which greeting to show.
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  // Set the color and size of the greeting.
  const headingStyle = {
    color: "dodgerblue",
    fontSize: "48px",
  };

  // Show the greeting, lucky number, and my List component.
  return (
    <div>
      <h1 style={headingStyle}>{greeting}, {name}!</h1>
      <p>Your lucky number is {luckyNumber}</p>
      <List />
    </div>
  );
}

export default App;
