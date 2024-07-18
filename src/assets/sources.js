
/*
myArenaProject
├── dao3.config.json
├── package.json
├── .gitignore
├── /server/
│   ├── App.ts
|   ├── tsconfig.json
|   ├── /src/
│   └── /types/
│       └── GameAPI.d.ts
└── /client/
    ├── clientApp.ts
    ├── tsconfig.json
    ├── /src/
    └── /types/
        └── ClientAPI.d.ts
*/

const sources = [
    {
        type: "file",
        path: "./dao3.config.json",
        src: "src/assets/dao3.config.json"
    },
    {
        type: "dir",
        path: "./server/src",
    },
    {
        type: "dir",
        path: "./client/src",
    },
    {
        type: "file",
        path: "./server/src/App.ts",
        src: "src/assets/index.ts"
    },
    {
        type: "file",
        path: "./client/src/clientApp.ts",
        src: "src/assets/clientIndex.ts"
    },
    {
        type: "file",
        path: "./server/types/GameAPI.d.ts",
        src: "src/assets/GameAPI.d.ts"
    },
    {
        type: "file",
        path: "./client/types/ClientAPI.d.ts",
        src: "src/assets/ClientAPI.d.ts"
    },
    {
        type: "file",
        path: "./.gitignore",
        src: "src/assets/.gitignore"
    },
    {
        type: "file",
        path: "./client/tsconfig.json",
        src: "src/assets/tsconfig-client.json"
    },
    {
        type: "file",
        path: "./server/tsconfig.json",
        src: "src/assets/tsconfig-server.json"
    }
];

module.exports = {
    sources,
};
