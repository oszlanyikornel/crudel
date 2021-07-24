import { AxiosRequestConfig } from "axios";
import handlePost from "../requestHandlers/handlePost";

interface CreateRes {
	data: any;
	error: any;
}

const create = async <PostData = any>(
	url: string,
	newData: PostData | PostData[],
	config?: AxiosRequestConfig
): Promise<CreateRes> => {
	const { data, error } = await handlePost<PostData>(
		url,
		newData,
		config || {}
	);

	return {
		data,
		error,
	};
};

export default create;
