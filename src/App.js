import "./App.css";
import page from "./HCR.zip";
import image from "./vehicle.png";

function App() {
  return (
    <div className="app">
      <div className="app-component">
        <h1>Sample Game</h1>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="app-desc">
          <p>About the Game Description.. </p>
        </div>
        <div className="app-guide">
          <p>To witness the full visual impact, click the download button</p>
        </div>
        <div className="app-agreement">
          <p>
            By continuing, you agree to our Conditions of Use and Privacy
            Notice.
          </p>
        </div>
        <a href={page} download="Index">
          Download
        </a>
      </div>
    </div>
  );
}

export default App;
