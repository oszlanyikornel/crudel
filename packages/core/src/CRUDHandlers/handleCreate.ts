import { AxiosRequestConfig } from "axios";
import handlePostArgs from "../argumentHandlers/handlePostArgs";
import create from "../customHandlers/create";
import {
	CustomMutation,
	handleMutation,
	handleRevalidation,
} from "../mutationHandlers/handleMutation";

export interface CreateReturn {
	data: any;
	error: any;
	mutationData: any;
	mutationError: any;
	revalidationData: any;
	revalidationError: any;
}

const handleCreate = async <Data, PostData>(
	fetchUrl: string | null,
	url: string | null,
	data: Data | undefined,
	newData: PostData | PostData[],
	overrideUrl?: string,
	overrideAxiosConfig?: AxiosRequestConfig,
	customMutation?: CustomMutation<Data, PostData>,
	revalidate: boolean = true
): Promise<CreateReturn> => {
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

	const { data: ResData, error: PostError } = await create<PostData>(
		postUrl,
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

export default handleCreate;
