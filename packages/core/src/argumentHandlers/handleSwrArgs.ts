import axios from "axios";
import { Configuration, Fetcher } from "swr/dist/types";

export const standardFetcher = async <Data>(url: string): Promise<Data> => {
	const res = await axios.get(url);
	return res.data;
};

interface SwrArgs<Data, Error> {
	fetchUrl: string | null;
	fetcher: Fetcher<Data>;
	options: Partial<Configuration<Data, Error, Fetcher<Data>>>;
}

const handleSwrArgs = <Data, Error>(
	url: string | null,
	id: string | number | undefined,
	swrOptions: Partial<Configuration<Data, Error, Fetcher<Data>>> | undefined
): SwrArgs<Data, Error> => {
	const { fetcher, ...options } = swrOptions || {};
	const fetchUrl = url ? (id ? `${url}/${id}` : url) : null;

	return {
		fetchUrl,
		fetcher: fetcher || standardFetcher,
		options: options || {},
	};
};

export default handleSwrArgs;
