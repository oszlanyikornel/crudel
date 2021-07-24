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
import useSWR from "swr";
import handleSwrArgs from "../argumentHandlers/handleSwrArgs";
import { useCallback } from "react";
import handleCreate from "../CRUDHandlers/handleCreate";
import handleUpdate from "../CRUDHandlers/handleUpdate";
import handleRemove from "../CRUDHandlers/handleRemove";
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
export function useCrudel(url, id, swrOptions) {
    var _this = this;
    var _a = handleSwrArgs(url, id, swrOptions), fetchUrl = _a.fetchUrl, fetcher = _a.fetcher, options = _a.options;
    var _b = useSWR(fetchUrl, fetcher, options), data = _b.data, error = _b.error;
    var create = useCallback(function (newData, overrideUrl, overrideAxiosConfig, customMutation, revalidate) {
        if (revalidate === void 0) { revalidate = true; }
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, handleCreate(fetchUrl, url, data, newData, overrideUrl, overrideAxiosConfig, customMutation, revalidate)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }, []);
    var update = useCallback(function (id, newData, overrideUrl, overrideAxiosConfig, customMutation, revalidate) {
        if (revalidate === void 0) { revalidate = true; }
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, handleUpdate(id, fetchUrl, url, data, newData, overrideUrl, overrideAxiosConfig, customMutation, revalidate)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }, []);
    var remove = useCallback(function (id, overrideUrl, overrideAxiosConfig, customMutation, revalidate) {
        if (revalidate === void 0) { revalidate = true; }
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, handleRemove(id, fetchUrl, url, data, overrideUrl, overrideAxiosConfig, customMutation, revalidate)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }, []);
    return {
        data: data,
        error: error,
        loading: !error && !data,
        create: create,
        update: update,
        remove: remove,
    };
}
