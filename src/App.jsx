import "./styles.css";
import PwdForms from "./PwdForms";

export default function App() {
  return (
    <div className="App">
      <div className="content">
        <header className="App-header">
          <h1 className="app-header">Sign Me Up!</h1>
        </header>
        <div className="app-body">
            <PwdForms />
        </div>
      </div>
    </div>
  );
}
