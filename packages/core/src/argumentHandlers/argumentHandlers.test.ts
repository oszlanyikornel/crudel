import axios from "axios";
import handlePostArgs from "./handlePostArgs";
import handleSwrArgs, { standardFetcher } from "./handleSwrArgs";
import MockAdapter from "axios-mock-adapter";

describe("testing the standard fetcher", () => {
	it("should return the fetched data", async () => {
		const axiosMock = new MockAdapter(axios);
		const url = "https://testget/test";
		const data = { data: 3 };
		axiosMock.onGet(url).reply(200, data);

		const res = await standardFetcher(url);
		expect(res as any).toEqual(data);
	});
});

describe("testing the post arguments handler", () => {
	it("should return the overriden url, the newData, and overriden axios config", async () => {
		const url = "frv";
		const overrideUrl = "gtr";
		const newData = { test: true };
		const overrideAxiosConfig = { headers: { name: "kornel" } };
		const args = handlePostArgs(url, overrideUrl, newData, overrideAxiosConfig);

		expect(args.postUrl).toEqual(overrideUrl);
		expect(args.postData).toEqual(newData);
		expect(args.newConfig).toEqual(overrideAxiosConfig);
	});
	it("should return the overriden url, the newData, and empty config", async () => {
		const url = "frv";
		const overrideUrl = "gtr";
		const newData = { test: true };
		const overrideAxiosConfig = undefined;
		const args = handlePostArgs(url, overrideUrl, newData, overrideAxiosConfig);

		expect(args.postUrl).toEqual(overrideUrl);
		expect(args.postData).toEqual(newData);
		expect(args.newConfig).toEqual({});
	});
	it("should return the url, the newData, and overriden axios config", async () => {
		const url = "frv";
		const overrideUrl = undefined;
		const newData = { test: true };
		const overrideAxiosConfig = { headers: { name: "kornel" } };
		const args = handlePostArgs(url, overrideUrl, newData, overrideAxiosConfig);

		expect(args.postUrl).toEqual(url);
		expect(args.postData).toEqual(newData);
		expect(args.newConfig).toEqual(overrideAxiosConfig);
	});
	it("should return the url, the newData, and empty config", async () => {
		const url = "frv";
		const overrideUrl = undefined;
		const newData = { test: true };
		const overrideAxiosConfig = undefined;
		const args = handlePostArgs(url, overrideUrl, newData, overrideAxiosConfig);

		expect(args.postUrl).toEqual(url);
		expect(args.postData).toEqual(newData);
		expect(args.newConfig).toEqual({});
	});
	it("should return the url as empty string, the newData, and overriden axios config", async () => {
		const url = null;
		const overrideUrl = undefined;
		const newData = { test: true };
		const overrideAxiosConfig = { headers: { name: "kornel" } };
		const args = handlePostArgs(url, overrideUrl, newData, overrideAxiosConfig);

		expect(args.postUrl).toEqual("");
		expect(args.postData).toEqual(newData);
		expect(args.newConfig).toEqual(overrideAxiosConfig);
	});
	it("should return the url as empty string, the newData, and empty config", async () => {
		const url = null;
		const overrideUrl = undefined;
		const newData = { test: true };
		const overrideAxiosConfig = undefined;
		const args = handlePostArgs(url, overrideUrl, newData, overrideAxiosConfig);

		expect(args.postUrl).toEqual("");
		expect(args.postData).toEqual(newData);
		expect(args.newConfig).toEqual({});
	});
});

describe("testing the swr arguments handler", () => {
	it("should return the overriden url, the newData, and overriden axios config", async () => {
		const url = "frv";
		const id = "3";
		const swrOptions = {
			fetcher: () => ,
		};
		const args = handleSwrArgs(url, id, swrOptions);

		expect(args.postUrl).toEqual(overrideUrl);
		expect(args.postData).toEqual(newData);
		expect(args.newConfig).toEqual(overrideAxiosConfig);
	});
});
