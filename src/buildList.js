const { version } = require("../package.json");
const poa = require("./tokens/poa.json");

module.exports = function buildList() {
    const parsed = version.split(".");
    return {
        name: "POA Default List",
        timestamp: new Date().toISOString(),
        version: {
            major: +parsed[0],
            minor: +parsed[1],
            patch: +parsed[2],
        },
        tags: {},
        logoURI: "https://raw.githubusercontent.com/ProofOfApes/poa-token/main/50x50.png",
        keywords: ["poa", "default", "layer 1", "proof of apes"],
        tokens: [...poa]
            // sort them by symbol for easy readability
            .sort((t1, t2) => {
                if (t1.chainId === t2.chainId) {
                    return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
                }
                return t1.chainId < t2.chainId ? -1 : 1;
            }),
    };
};
