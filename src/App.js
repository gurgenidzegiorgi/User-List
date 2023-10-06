/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { styled, createGlobalStyle } from "styled-components";

import UserInput from "./Components/UserInput/UserInput";
import UserList from "./Components/UserList/UserList";

const GlobalStyles = createGlobalStyle`
  * {
	  box-sizing: border-box;
    margin: 0;
    padding: 0;

  }

  html {
    font-family: sans-serif;
    font-size: 62.5%;
  }

  .container{
    width: 100%;
    height: 100dvh;
    display: flex;
    gap: 3rem;
    flex-direction: column;
    align-items: center;
    background-color: #000d1a;
    padding-top: 5rem;
  }

`;

const list = [
	{
		userName: "Giorgi Gurgenidze",
		age: 21,
	},
	{
		userName: "Zura Gurgenidze",
		age: 60,
	},
	{
		userName: "Shorena Kvitsiani",
		age: 50,
	},
];

function App() {
	const [userList, setUserList] = useState(list);

	const handleUserInput = (userInput) => {
		setUserList((prev) => {
			return [userInput, ...prev];
		});
		console.log(userList);
	};

	return (
		<div className="container">
			<GlobalStyles />
			<UserInput handleUserInput={handleUserInput} />
			<UserList list={userList} />
		</div>
	);
}

export default App;
