import axios, { AxiosRequestConfig } from "axios";

interface RequestHandlerReturn {
	data: null | any;
	error: null | Error;
}

const handlePut = async <Data>(
	url: string,
	data: Data,
	config: AxiosRequestConfig
): Promise<RequestHandlerReturn> => {
	try {
		const res = await axios.put(url, data, config);
		return {
			data: res.data,
			error: null,
		};
	} catch (error) {
		console.error(error);
		return {
			data: null,
			error,
		};
	}
};

export default handlePut;
