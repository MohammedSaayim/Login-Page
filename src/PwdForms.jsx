import React, { useState } from "react";
import SubmitBtn from "./SubmitBtn";

export default function PwdForms() {
  const [pwd, setPwd] = useState("");
  const [rePwd, setRePwd] = useState("");
  const [inputType1, setInputType1] = useState("password");
  const [inputType2, setInputType2] = useState("password");

  const validPwd = new RegExp("[0-9]");
  let pwdMatchCol, pwdNumCol;

  function PwdMatch() {
    let pwdStatus, pwdNumCheck;
    if (pwd === "" && rePwd === "") {
      pwdStatus = "";
      return null;
    } else {
      pwdStatus = "❌Passwords don't match";
      pwdMatchCol = "red";
    }

    if (!validPwd.test(pwd)) {
      pwdNumCheck = "❌Password must include atleast one number";
      pwdNumCol = "red";
    }
    if (validPwd.test(pwd) && pwd === rePwd) {
      pwdNumCheck = "Password is valid ✔";
      pwdNumCol = "green";
    }
    return (
      <div>
        <div
          style={{
            display: rePwd === "" || pwd === rePwd ? "none" : "block",
            color: pwdMatchCol
          }}
        >
          {pwdStatus}
        </div>

        <div
          style={{
            display: pwd === "" ? "none" : "block",
            color: pwdNumCol
          }}
        >
          {pwdNumCheck}
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
    } else {
      borderCol = "#000";
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

  return (
    <div>
      <div className="pass-wrapper">
        <div>
          <label>
            Enter username:
            <input type="text"></input>
          </label>
        </div>

        <div>
          <label>
            Enter password:
            <div className="pwd1-div">
            <input onChange={onPwdChange} type={inputType1}></input>
            <i
              onClick={toggleVisibility1}
              className="fas fa-eye eye1"
              style={{ display: inputType1 === "text" ? "initial" : "none" }}
            ></i>
            <i
              className="fas fa-eye-slash eye1"
              onClick={toggleVisibility1}
              style={{
                display: inputType1 === "password" ? "initial" : "none"
              }}
            ></i>
            </div>
          </label>
        </div>

        <div>
          <label>
            Re-enter password:
            <div className="pwd2-div">
              <input onChange={onRePwdChange} type={inputType2}></input>
              <i
                onClick={toggleVisibility2}
                style={{
                  display: inputType2 === "password" ? "none" : "initial"
                }}
                className="fas fa-eye eye2"
              ></i>
              <i
                onClick={toggleVisibility2}
                style={{ display: inputType2 === "text" ? "none" : "initial" }}
                className="fas fa-eye-slash eye2"
              ></i>
            </div>
            </label>
        </div>
      </div>

      <PwdMatch />

      <SubmitBtn btnColor={SubmitBtnColor()} borderCol={btnBorderCol()} />
    </div>
  );
}
