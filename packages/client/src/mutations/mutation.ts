import { mutate } from 'swr';

export type CustomMutation<Data = any, PostData = any> = (
  oldData: Data | undefined,
  newData?: PostData | PostData[]
) => any;

interface MutationReturn {
  mutationData: any;
  error: any;
}

interface ValidationReturn {
  revalidationData: any;
  error: any;
}

export const mutation = async <Data, PostData>(
  customMutation: CustomMutation<Data, PostData> | undefined,
  data: Data | undefined,
  newData: PostData | PostData[] | undefined,
  url: string | null,
  revalidate = false
): Promise<MutationReturn> => {
  try {
    const mutationData = customMutation
      ? await mutate(
          url,
          newData ? customMutation(data, newData) : customMutation(data),
          revalidate
        )
      : null;
    return { mutationData, error: null };
  } catch (error) {
    console.error(error);
    return { mutationData: null, error };
  }
};

export const revalidation = async (
  revalidate: boolean,
  url: string | null
): Promise<ValidationReturn> => {
  if (revalidate) {
    try {
      const revalidationData = await mutate(url);
      return { revalidationData, error: null };
    } catch (error) {
      console.error(error);
      return { revalidationData: null, error };
    }
  } else {
    return { revalidationData: null, error: null };
  }
};
