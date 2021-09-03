import { graphql } from "react-apollo";
import { TODO_LIST_QUERY } from '../utils/helper';

export const withTodos = graphql(TODO_LIST_QUERY, {
	props: ({ data: { todosAppsList }}) => {

		let todos = [];

		if (todosAppsList) todos = todosAppsList.items;
		
		return {
			todos
		};
	},
});