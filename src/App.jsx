import "./styles.css";
import { useState } from "react";
export default function App() {
  const [pwd, setPwd] = useState("");
  const [rePwd, setRePwd] = useState("");

  function onPwdChange(event) {
    setPwd(event.target.value);
  }

  function onRePwdChange(event) {
    setRePwd(event.target.value);
  }

  function PwdMatch() {
    let pwdStatus;
    let color;
    if (pwd === "" && rePwd === "") {
      pwdStatus = "";
      return null;
    } else if (pwd === rePwd) {
      pwdStatus = "Passwords Match";
      color = "green";
    } else {
      pwdStatus = "Passwords don't match";
      color = "red";
    }
    return (
      <div
        style={{
          visibility: rePwd === "" ? "hidden" : "visible",
          color: color
        }}
        className="pwd-status"
      >
        {pwdStatus}
      </div>
    );
  }

  return (
    <div className="App">
      <h1 className="app-header">Password Match</h1>
      <div className="app-body">
        <div>
          <label>
            Enter password:
            <input onChange={onPwdChange} type="password"></input>
          </label>
        </div>
        <div>
          <label>
            Re-enter password:
            <input onChange={onRePwdChange} type="password"></input>
          </label>
        </div>
        <PwdMatch />
      </div>
    </div>
  );
}
