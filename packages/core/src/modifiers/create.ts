import axios, { AxiosRequestConfig } from 'axios';

interface CreateRes {
  data: any;
  error: any;
}

const create = async <PostData = any>(
  url: string,
  newData: PostData | PostData[],
  config?: AxiosRequestConfig
): Promise<CreateRes> => {
  try {
    const res = await axios.post(url, newData, config || {});
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

export default create;
