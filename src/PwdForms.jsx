import React, { useState } from "react";
import SubmitBtn from "./SubmitBtn";

export default function PwdForms() {
  const [pwd, setPwd] = useState("");
  const [rePwd, setRePwd] = useState("");

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

  return (
    <div>
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

      <SubmitBtn btnColor={SubmitBtnColor()} borderCol={btnBorderCol()} />
    </div>
  );
}
