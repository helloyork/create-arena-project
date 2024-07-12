
const sources = [
    {
        type: "file",
        path: "./dao3.config.json",
        src: "src/assets/dao3.config.json"
    },
    {
        type: "file",
        path: "./server/App.ts",
        src: "src/assets/index.ts"
    },
    {
        type: "file",
        path: "./client/clientApp.ts",
        src: "src/assets/clientIndex.ts"
    },
    {
        type: "file",
        path: "./server/GameAPI.d.ts",
        src: "src/assets/GameAPI.d.ts"
    },
    {
        type: "file",
        path: "./client/ClientAPI.d.ts",
        src: "src/assets/ClientAPI.d.ts"
    },
    {
        type: "file",
        path: "./.gitignore",
        src: "src/assets/.gitignore_"
    },
    {
        type: "file",
        path: "./package.json",
        src: "src/assets/_package.json"
    }
];

module.exports = {
    sources,
};
