import useSWR, { mutate } from "swr";
import axios, { AxiosRequestConfig } from "axios";
import { Configuration, Fetcher } from "swr/dist/types";
import handleSwrArgs from "../argumentHandlers/handleSwrArgs";
import handlePostArgs from "../argumentHandlers/handlePostArgs";
import handlePost from "../requestHandlers/handlePost";
import {
	CustomMutation,
	handleMutation,
	handleRevalidation,
} from "../mutationHandlers/handleMutation";
import create from "../customHandlers/create";
import { useCallback } from "react";
import handleCreate, { CreateReturn } from "../CRUDHandlers/handleCreate";
import handleUpdate, { UpdateReturn } from "../CRUDHandlers/handleUpdate";
import handleRemove, { RemoveReturn } from "../CRUDHandlers/handleRemove";

interface CrudelConfig<Data, Error> {
	globalRequestConfig?: AxiosRequestConfig;
	swrOptions?: Partial<Configuration<Data, Error, Fetcher<Data>>>;
	fetcherProps?: any[];
}

// TODO useCreate hook return a function to call
// TODO ceate createOne, ... function outside the hook and import it and call it wich returns a function wich you can call
// TODO useCallback and memoize on these functions
// comment

// TODO create heper functions like usePost/useGet (these include custom endpoint, custom data and config, custom fetcher, custom transformer, custom mutater...) for extending the library with custom functions
// TODO create argument typescript definition like swr to flexible parameter adding
// TODO handle global swr config
// TODO create addOne x, addMany, updateOne, updateMany, deleteOne, deleteMany
// TODO create handlePost x, handlePut, handleDelete
// TODO add option to disable swr and only get back CUD operations

export function useCrudel<Data = any, PostData = any, Error = any>(
	url: string | null,
	id?: string | number | undefined,
	swrOptions?: Partial<Configuration<Data, Error, Fetcher<Data>>>
) {
	const { fetchUrl, fetcher, options } = handleSwrArgs<Data, Error>(
		url,
		id,
		swrOptions
	);
	const { data, error } = useSWR(fetchUrl, fetcher, options);

	const create = useCallback(
		async (
			newData: PostData | PostData[],
			overrideUrl?: string,
			overrideAxiosConfig?: AxiosRequestConfig,
			customMutation?: CustomMutation<Data, PostData>,
			revalidate: boolean = true
		): Promise<CreateReturn> => {
			return await handleCreate<Data, PostData>(
				fetchUrl,
				url,
				data,
				newData,
				overrideUrl,
				overrideAxiosConfig,
				customMutation,
				revalidate
			);
		},
		[]
	);

	const update = useCallback(
		async (
			id: string,
			newData: PostData,
			overrideUrl?: string,
			overrideAxiosConfig?: AxiosRequestConfig,
			customMutation?: CustomMutation<Data, PostData>,
			revalidate: boolean = true
		): Promise<UpdateReturn> => {
			return await handleUpdate<Data, PostData>(
				id,
				fetchUrl,
				url,
				data,
				newData,
				overrideUrl,
				overrideAxiosConfig,
				customMutation,
				revalidate
			);
		},
		[]
	);

	const remove = useCallback(
		async (
			id: string,
			overrideUrl?: string,
			overrideAxiosConfig?: AxiosRequestConfig,
			customMutation?: CustomMutation<Data, PostData>,
			revalidate: boolean = true
		): Promise<RemoveReturn> => {
			return await handleRemove<Data>(
				id,
				fetchUrl,
				url,
				data,
				overrideUrl,
				overrideAxiosConfig,
				customMutation,
				revalidate
			);
		},
		[]
	);

	return {
		data,
		error,
		loading: !error && !data,
		create,
		update,
		remove,
	};
}
