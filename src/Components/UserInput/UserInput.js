/* eslint-disable no-unused-vars */
import { useState } from "react";
import { styled } from "styled-components";

import Card from "../UI/Card";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	& div {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		width: 100%;
	}

	& input {
		border-radius: 0.2rem;
		border: 1px lightgrey solid;
		padding: 0.5rem 0;
	}

	& label {
		color: #000;
		font-size: 1.5rem;
		font-weight: bold;
	}

	& button {
		width: fit-content;
		font-size: 1.5rem;
		background-color: purple;
		border: none;
		padding: 0.5rem 1rem;
		color: #fff;
	}
`;

const Error = styled.div`
	/* Error overlay styles */
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(
		0,
		0,
		0,
		0.5
	); /* Semi-transparent background for blur effect */
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(5px); /* Apply blur effect to background */
`;

const ErrorContent = styled(Card)`
	/* Error content styles */
	padding: 0;
	display: flex;
	flex-direction: column;
	gap: 5rem;
	overflow: hidden;
	& h1 {
		font-size: 2rem;
		color: #fff;
		background-color: purple;
		padding: 2rem;
	}

	& p {
		color: #000;
		font-size: 2rem;
		margin-left: 2rem;
	}

	& button {
		align-self: end;
		font-size: 1.5rem;
		background-color: purple;
		border: none;
		padding: 1rem 2rem;
		color: #fff;
		margin: 0 2rem 2rem 0;
	}
`;

export default function UserInput(props) {
	const [user, setUser] = useState({});
	const [isError, setIsError] = useState(false);

	const handleOnChange = (e) => {
		setUser((prev) => {
			return { ...prev, [e.target.id]: e.target.value };
		});
		console.log(user);
	};

	let errorMessage = (
		<p>{user.age < 0 ? "Age must be positive number" : "Enter valid input"}</p>
	);

	const handleOnSubmit = (e) => {
		if (
			user.age < 0 ||
			user.age === undefined ||
			user.userName === ("" || undefined)
		) {
			e.preventDefault();
			setIsError(true);
			return;
		}
		e.preventDefault();
		props.handleUserInput(user);
		setUser({});
	};

	const handleError = () => {
		setIsError(false);
	};

	return (
		<Card>
			<Form onSubmit={handleOnSubmit}>
				<div>
					<label htmlFor="userName">Username</label>
					<input
						onChange={handleOnChange}
						type="text"
						id="userName"
						value={user.userName || ""}
					/>
				</div>
				<div>
					<label htmlFor="age">Age(Years)</label>
					<input
						onChange={handleOnChange}
						type="number"
						id="age"
						value={user.age || ""}
					/>
				</div>
				<button type="submit">Add User</button>
			</Form>
			{isError && (
				<Error>
					<ErrorContent>
						<h1>Invalid input</h1>
						{errorMessage}
						<button onClick={handleError}>Okay</button>
					</ErrorContent>
				</Error>
			)}
		</Card>
	);
}
