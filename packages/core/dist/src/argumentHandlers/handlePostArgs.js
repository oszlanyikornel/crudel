var handlePostArgs = function (url, overrideUrl, newData, overrideAxiosConfig) {
    var postUrl = overrideUrl || url || "";
    var config = overrideAxiosConfig || {};
    return {
        postUrl: postUrl,
        postData: newData,
        newConfig: config,
    };
};
export default handlePostArgs;
