import { AxiosRequestConfig } from "axios";
import handlePostArgs from "../argumentHandlers/handlePostArgs";
import create from "../customHandlers/create";
import remove from "../customHandlers/remove";
import update from "../customHandlers/update";
import {
	CustomMutation,
	handleMutation,
	handleRevalidation,
} from "../mutationHandlers/handleMutation";

export interface RemoveReturn {
	data: any;
	error: any;
	mutationData: any;
	mutationError: any;
	revalidationData: any;
	revalidationError: any;
}

const handleRemove = async <Data>(
	id: string,
	fetchUrl: string | null,
	url: string | null,
	data: Data | undefined,
	overrideUrl?: string,
	overrideAxiosConfig?: AxiosRequestConfig,
	customMutation?: CustomMutation<Data, any>,
	revalidate = true
): Promise<RemoveReturn> => {
	const { postUrl, postData, newConfig } = handlePostArgs(
		url,
		overrideUrl,
		{},
		overrideAxiosConfig
	);

	const { mutationData, error: mutationError } = await handleMutation<
		Data,
		any
	>(customMutation, data, undefined, fetchUrl);

	const { data: ResData, error: PostError } = await remove(
		postUrl + `/${id}`,
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

export default handleRemove;
