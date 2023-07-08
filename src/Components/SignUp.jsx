import React, { useState } from "react";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [Gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);

  const nameHandle = (event) => {
    setFullName(event.target.value);
  };
  const mailHandle = (event) => {
    setGmail(event.target.value);
  };

  const passwordHandle = (event) => {
    setPassword(event.target.value);
  };

  const submitHandle = (event) => {
    event.preventDefault();
    setFlag(true);
  };

  return (
    <div>
      {flag ? <h2> Welcome ${fullName}to TRAVL Family </h2> : ""}
      <form onSubmit={submitHandle} action="">
        <div>
          <input type="text" placeholder="FullName" onChange={nameHandle} />
        </div>
        <div>
          <input type="text" placeholder="G-mail " onChange={mailHandle} />
        </div>
        <div>
          <input type="text" placeholder="password" onChange={passwordHandle} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
