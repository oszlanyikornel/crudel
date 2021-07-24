var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import axios from "axios";
import handlePostArgs from "./handlePostArgs";
import { standardFetcher } from "./handleSwrArgs";
import MockAdapter from "axios-mock-adapter";
describe("testing the standard fetcher", function () {
    it("should return the fetched data", function () { return __awaiter(void 0, void 0, void 0, function () {
        var axiosMock, url, data, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    axiosMock = new MockAdapter(axios);
                    url = "https://testget/test";
                    data = { data: 3 };
                    axiosMock.onGet(url).reply(200, data);
                    return [4 /*yield*/, standardFetcher(url)];
                case 1:
                    res = _a.sent();
                    expect(res).toEqual(data);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("testing the post arguments handler", function () {
    it("should return the overriden url, the newData, and overriden axios config", function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, overrideUrl, newData, overrideAxiosConfig, args;
        return __generator(this, function (_a) {
            url = "frv";
            overrideUrl = "gtr";
            newData = { test: true };
            overrideAxiosConfig = { headers: { name: "kornel" } };
            args = handlePostArgs(url, overrideUrl, newData, overrideAxiosConfig);
            expect(args.postUrl).toEqual(overrideUrl);
            expect(args.postData).toEqual(newData);
            expect(args.newConfig).toEqual(overrideAxiosConfig);
            return [2 /*return*/];
        });
    }); });
    it("should return the overriden url, the newData, and empty config", function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, overrideUrl, newData, overrideAxiosConfig, args;
        return __generator(this, function (_a) {
            url = "frv";
            overrideUrl = "gtr";
            newData = { test: true };
            overrideAxiosConfig = undefined;
            args = handlePostArgs(url, overrideUrl, newData, overrideAxiosConfig);
            expect(args.postUrl).toEqual(overrideUrl);
            expect(args.postData).toEqual(newData);
            expect(args.newConfig).toEqual({});
            return [2 /*return*/];
        });
    }); });
    it("should return the url, the newData, and overriden axios config", function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, overrideUrl, newData, overrideAxiosConfig, args;
        return __generator(this, function (_a) {
            url = "frv";
            overrideUrl = undefined;
            newData = { test: true };
            overrideAxiosConfig = { headers: { name: "kornel" } };
            args = handlePostArgs(url, overrideUrl, newData, overrideAxiosConfig);
            expect(args.postUrl).toEqual(url);
            expect(args.postData).toEqual(newData);
            expect(args.newConfig).toEqual(overrideAxiosConfig);
            return [2 /*return*/];
        });
    }); });
    it("should return the url, the newData, and empty config", function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, overrideUrl, newData, overrideAxiosConfig, args;
        return __generator(this, function (_a) {
            url = "frv";
            overrideUrl = undefined;
            newData = { test: true };
            overrideAxiosConfig = undefined;
            args = handlePostArgs(url, overrideUrl, newData, overrideAxiosConfig);
            expect(args.postUrl).toEqual(url);
            expect(args.postData).toEqual(newData);
            expect(args.newConfig).toEqual({});
            return [2 /*return*/];
        });
    }); });
    it("should return the url as empty string, the newData, and overriden axios config", function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, overrideUrl, newData, overrideAxiosConfig, args;
        return __generator(this, function (_a) {
            url = null;
            overrideUrl = undefined;
            newData = { test: true };
            overrideAxiosConfig = { headers: { name: "kornel" } };
            args = handlePostArgs(url, overrideUrl, newData, overrideAxiosConfig);
            expect(args.postUrl).toEqual("");
            expect(args.postData).toEqual(newData);
            expect(args.newConfig).toEqual(overrideAxiosConfig);
            return [2 /*return*/];
        });
    }); });
    it("should return the url as empty string, the newData, and empty config", function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, overrideUrl, newData, overrideAxiosConfig, args;
        return __generator(this, function (_a) {
            url = null;
            overrideUrl = undefined;
            newData = { test: true };
            overrideAxiosConfig = undefined;
            args = handlePostArgs(url, overrideUrl, newData, overrideAxiosConfig);
            expect(args.postUrl).toEqual("");
            expect(args.postData).toEqual(newData);
            expect(args.newConfig).toEqual({});
            return [2 /*return*/];
        });
    }); });
});
/*
describe("testing the swr arguments handler", () => {
    it("should return the overriden url, the newData, and overriden axios config", async () => {
        const url = "frv";
        const id = "3";
        const swrOptions = {
            fetcher: () => ,
        };
        const args = handleSwrArgs<any, Error>(url, id, swrOptions);

        expect(args.fetchUrl).toEqual(overrideUrl);
        expect(args.postData).toEqual(newData);
        expect(args.newConfig).toEqual(overrideAxiosConfig);
    });
});
*/
