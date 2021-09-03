import { useState, useEffect } from 'react';

import { alert } from '../utils/alert';
import { requestWithoutToken } from '../utils/fetch';

export const useFetch = (url="", auth) => {

	const [data, setData] = useState({ data: null, loading: true });
	const [isMounted, setIsMounted] = useState( true );

	useEffect(() => {
		
		async function callAPI() {

			const { ok, messages } = await requestWithoutToken(url, auth);

			if (!ok) return alert('error', messages);
			
			setData({ data: messages, loading: false });
		}
		
		isMounted && callAPI();

		return () => setIsMounted(false);

	}, [url, isMounted]);

	return data;
}