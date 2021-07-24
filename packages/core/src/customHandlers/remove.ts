import { AxiosRequestConfig } from "axios";
import handleDelete from "../requestHandlers/handleDelete";
import handlePost from "../requestHandlers/handlePost";
import handlePut from "../requestHandlers/handlePut";

interface DeleteRes {
	data: any;
	error: any;
}

const remove = async (
	url: string,
	config?: AxiosRequestConfig
): Promise<DeleteRes> => {
	const { data, error } = await handleDelete(url, config || {});

	return {
		data,
		error,
	};
};

export default remove;
