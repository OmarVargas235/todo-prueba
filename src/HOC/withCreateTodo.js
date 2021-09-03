import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { TODO_LIST_QUERY } from '../utils/helper';

const CREATE_TODO_MUTATION = gql`
	mutation TodosAppCreate($data: TodosAppCreateInput!) {
		todosAppCreate(data: $data) {
			id
			name
			description
			completed
			date
		}
	}
`;

export const withCreateTodo = graphql(CREATE_TODO_MUTATION, {
	props: ({ mutate }) => ({
		createTodo: ({ name, description }) => {
			mutate({
				variables: { data: { name, description, completed: false, date: new Date()}},
				refetchQueries: [{ query: TODO_LIST_QUERY }]
			});
		}
	})
});