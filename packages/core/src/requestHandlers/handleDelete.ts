import axios, { AxiosRequestConfig } from "axios";

interface RequestHandlerReturn {
	data: null | any;
	error: null | Error;
}

const handleDelete = async (
	url: string,
	config: AxiosRequestConfig
): Promise<RequestHandlerReturn> => {
	try {
		const res = await axios.delete(url, config);
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

export default handleDelete;
