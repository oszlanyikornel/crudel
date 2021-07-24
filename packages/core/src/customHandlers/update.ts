import { AxiosRequestConfig } from "axios";
import handlePost from "../requestHandlers/handlePost";
import handlePut from "../requestHandlers/handlePut";

interface CreateRes {
	data: any;
	error: any;
}

const update = async <PostData = any>(
	url: string,
	newData: PostData,
	config?: AxiosRequestConfig
): Promise<CreateRes> => {
	const { data, error } = await handlePut<PostData>(url, newData, config || {});

	return {
		data,
		error,
	};
};

export default update;
