
import "./App.css";

function App() {
  const name = "Sebastian";
  const luckyNumber = Math.floor(Math.random() * 100);

  const headingStyle = {
    color: "dodgerblue",
    fontSize: "48px",
  };

  return (
    <div>
      <h1 style={headingStyle}>Hello, {name}!</h1>
      <p>Your lucky number is {luckyNumber}</p>

      <ul className="my-list">
        <li>Wrestling</li>
        <li>Fishing</li>
        <li>Programming</li>
      </ul>
    </div>
  );
}

export default App;
