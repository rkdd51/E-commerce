
import React, { useState } from "react";

const App = () => {
  //Single source of truth is "name"
  const [name, setName] = useState();

  const [lastName, setLastName] = useState();

  const [fullName, setFullName] = useState();

  const [email, setEmail] = useState();

  // const [passward,setpassward] = useState();

  const inputEvent = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };

  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(name);
    // setpassward(lastName);
  };

  const inputEventTwo = (event) => {
    setLastName(event.target.value);
  };

  const inputEventThree = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>Welcome {fullName}</h1>
            {/* 
        uncomment if you want to show passward */}
            {/* <h1>Hello {fullName} {passward}</h1> */}
            <input
              type="text"
              placeholder=" Enter your name"
              onChange={inputEvent}
              value={name}
            />

            <input
              type="password"
              placeholder="Enter your passward"
              onChange={inputEventTwo}
              value={lastName}
            />

            <input
              type="email"
              placeholder="Enter your email"
              onChange={inputEventThree}
              value={email}
            />
            <button type="submit"> Submit </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
