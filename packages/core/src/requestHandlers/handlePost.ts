import axios, { AxiosRequestConfig } from "axios";

interface RequestHandlerReturn {
	data: null | any;
	error: null | Error;
}

const handlePost = async <Data>(
	url: string,
	data: Data | Data[],
	config: AxiosRequestConfig
): Promise<RequestHandlerReturn> => {
	try {
		const res = await axios.post(url, data, config);
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

export default handlePost;
