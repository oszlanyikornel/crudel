import axios, { AxiosRequestConfig } from 'axios';

interface DeleteRes {
  data: any;
  error: any;
}

const remove = async (
  url: string,
  config?: AxiosRequestConfig
): Promise<DeleteRes> => {
  try {
    const res = await axios.delete(url, config || {});
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

export default remove;
