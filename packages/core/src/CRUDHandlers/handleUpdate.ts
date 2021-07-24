import { AxiosRequestConfig } from "axios";
import handlePostArgs from "../argumentHandlers/handlePostArgs";
import create from "../customHandlers/create";
import update from "../customHandlers/update";
import {
	CustomMutation,
	handleMutation,
	handleRevalidation,
} from "../mutationHandlers/handleMutation";

export interface UpdateReturn {
	data: any;
	error: any;
	mutationData: any;
	mutationError: any;
	revalidationData: any;
	revalidationError: any;
}

const handleUpdate = async <Data, PostData>(
	id: string,
	fetchUrl: string | null,
	url: string | null,
	data: Data | undefined,
	newData: PostData,
	overrideUrl?: string,
	overrideAxiosConfig?: AxiosRequestConfig,
	customMutation?: CustomMutation<Data, PostData>,
	revalidate: boolean = true
): Promise<UpdateReturn> => {
	const { postUrl, postData, newConfig } = handlePostArgs(
		url,
		overrideUrl,
		newData,
		overrideAxiosConfig
	);

	const { mutationData, error: mutationError } = await handleMutation<
		Data,
		PostData
	>(customMutation, data, newData, fetchUrl);

	const { data: ResData, error: PostError } = await update<PostData>(
		postUrl + `/${id}`,
		postData,
		newConfig
	);

	const { revalidationData, error: revalidationError } =
		await handleRevalidation(revalidate, fetchUrl);

	return {
		data: ResData,
		error: PostError,
		mutationData,
		mutationError,
		revalidationData,
		revalidationError,
	};
};

export default handleUpdate;
