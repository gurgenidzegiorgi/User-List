import { styled } from "styled-components";

import Card from "../UI/Card";

const UserListDiv = styled.div`
	width: 100%;
	border-radius: 0.2rem;
	border: 1px lightgrey solid;
	padding: 0.5rem 0.5rem;
	margin-bottom: 1rem;
	& p {
		font-size: 1.5rem;
	}
	&:last-child {
		margin-bottom: 0;
	}
`;

export default function UserList(props) {
	return (
		<Card>
			{props.list.map((user) => {
				return (
					<UserListDiv key={user.userName}>
						<p>
							{user.userName} ({user.age} years old)
						</p>
					</UserListDiv>
				);
			})}
		</Card>
	);
}
