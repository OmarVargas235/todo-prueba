import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { TODO_LIST_QUERY } from '../utils/helper';

const DELETE_TODO_MUTATION = gql`
	mutation TodosAppDelete($id: ID!) {
		todosAppDelete(filter: { id: $id }) {
		  success
		}
	}
`;

export const withRemoveTodo = graphql(DELETE_TODO_MUTATION, {
	props: ({ mutate }) => ({
		removeTodo: ( id ) => {
			mutate({
				variables: { id },
				refetchQueries: [{ query: TODO_LIST_QUERY }]
			});
		}
	})  
});