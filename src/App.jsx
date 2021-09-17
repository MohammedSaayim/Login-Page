import "./styles.css";
import PwdForms from "./PwdForms";

export default function App() {
  return (
    <div className="App">
      <div className="content">
        <h1 className="app-header">Sign Me Up!</h1>
        <div className="app-body">
          <PwdForms />
        </div>
      </div>
    </div>
  );
}
