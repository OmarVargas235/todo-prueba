import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { TODO_LIST_QUERY } from '../utils/helper';

const TOGGLE_TODO_MUTATION = gql`
	mutation TodoAppToggle($id: ID!, $completed: Boolean!) {
		todosAppUpdate(filter: { id: $id }, data: {
			completed: $completed
		}) {
			id
			name
			description
			completed
			date
		}
	}
`;

export const withToggleTodo = graphql(TOGGLE_TODO_MUTATION, {
	props: ({ mutate }) => ({
		toggleTodo: ({ id, completed }) => {
			mutate({
				variables: { id, completed },
				refetchQueries: [{ query: TODO_LIST_QUERY }]
			});
		}
	})  
});