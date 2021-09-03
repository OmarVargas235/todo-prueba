import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { TODO_LIST_QUERY } from '../utils/helper';

const UPDATE_TODO_MUTATION = gql`
	mutation TodosAppUpdate($id: ID!, $data: TodosAppUpdateInput!) {
		todosAppUpdate(filter: { id: $id }, data: $data) {
			id
			name
			description
			completed
			date
		}
	}
`;

export const withUpdateTodo = graphql(UPDATE_TODO_MUTATION, {
	props: ({ mutate }) => ({
			updateTodo: ( id, { name, description, completed } ) => {
			mutate({
				variables: {
					id,
					data: { name, description, completed, date: new Date() }
			},
				refetchQueries: [{ query: TODO_LIST_QUERY }]
			});
		}
	})  
});