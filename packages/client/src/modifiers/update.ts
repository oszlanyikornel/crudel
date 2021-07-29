import axios, { AxiosRequestConfig } from 'axios';

interface CreateRes {
  data: any;
  error: any;
}

const update = async <PostData = any>(
  url: string,
  newData: PostData,
  config?: AxiosRequestConfig
): Promise<CreateRes> => {
  try {
    const res = await axios.put(url, newData, config || {});
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

export default update;
