import { AxiosRequestConfig } from 'axios';

interface PostArgs<Data> {
  postUrl: string;
  postData: Data;
  newConfig: AxiosRequestConfig;
}

const handlePostArgs = <Data>(
  url: string | null,
  overrideUrl: string | undefined,
  newData: Data,
  overrideAxiosConfig: AxiosRequestConfig | undefined
): PostArgs<Data> => {
  const postUrl = overrideUrl || url || '';
  const config = overrideAxiosConfig || {};

  return {
    postUrl,
    postData: newData,
    newConfig: config,
  };
};

export default handlePostArgs;
