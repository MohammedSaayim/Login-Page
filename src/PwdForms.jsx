import React, { useState } from "react";
import SubmitBtn from "./SubmitBtn";

export default function PwdForms() {
  const [pwd, setPwd] = useState("");
  const [rePwd, setRePwd] = useState("");
  const [inputType1, setInputType1] = useState("password");
  const [inputType2, setInputType2] = useState("password");

  const validPwd = new RegExp("[0-9]");
  let matchColor, alphaColor;

  function PwdMatch() {
    let pwdStatus, pwdNumCheck;
    if (pwd === "" && rePwd === "") {
      pwdStatus = "";
      return null;
    } else {
      pwdStatus = "❌Passwords don't match";
      matchColor = "red";
    }

    if (!validPwd.test(pwd)) {
      pwdNumCheck = "❌Password must include atleast one number";
      alphaColor = "red";
    }
    if (validPwd.test(pwd) && pwd === rePwd) {
      pwdNumCheck = "Password is valid ✔";
      alphaColor = "green";
    }
    return (
      <div>
        <div
          style={{
            display: rePwd === "" || pwd === rePwd ? "none" : "block",
            color: matchColor
          }}
        >
          {pwdStatus}
        </div>

        <div
          style={{
            display: pwd === "" ? "none" : "block",
            color: alphaColor
          }}
        >
          {pwdNumCheck}
        </div>

        <div className="pass-wrapper">
          <input placeholder="Password" name="password" type="password" />
          {/* <i>{eye}</i> */}
          <i className="fas fa-eye"></i>
        </div>
      </div>
    );
  }

  function SubmitBtnColor() {
    let btnCol;
    if (validPwd.test(pwd) && pwd === rePwd) {
      btnCol = "black";
    } else {
      btnCol = "gray";
    }
    return btnCol;
  }

  function btnBorderCol() {
    let borderCol;
    if (!(validPwd.test(pwd) && pwd === rePwd)) {
      borderCol = "#fff";
    }
    return borderCol;
  }

  function onPwdChange(event) {
    setPwd(event.target.value);
  }

  function onRePwdChange(event) {
    setRePwd(event.target.value);
  }

  function toggleVisibility1() {
    if (inputType1 === "password") {
      setInputType1("text");
    } else {
      setInputType1("password");
    }
  }

  function toggleVisibility2() {
    if (inputType2 === "password") {
      setInputType2("text");
    } else {
      setInputType2("password");
    }
  }

  function ShowPwd1() {
    return (
      <span>
        <button onClick={toggleVisibility1}>Show password</button>
      </span>
    );
  }

  function ShowPwd2() {
    return (
      <span>
        <button onClick={toggleVisibility2}>Show password</button>
      </span>
    );
  }

  return (
    <div>
      <div>
        <label>
          Enter password:
          <input onChange={onPwdChange} type={inputType1}></input>
        </label>
        <ShowPwd1 />
      </div>

      <div>
        <label>
          Re-enter password:
          <input onChange={onRePwdChange} type={inputType2}></input>
        </label>
        <ShowPwd2 />
      </div>

      <PwdMatch />

      <SubmitBtn btnColor={SubmitBtnColor()} borderCol={btnBorderCol()} />
    </div>
  );
}
