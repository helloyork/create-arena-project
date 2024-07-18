#!/usr/bin/env node

const path = require("path");
const {install} = require("./install");


(async function main() {
    const { skeleton } = require("./skeleton");
    console.log(process.argv);
    let basepath;
    if ((process.argv[0]?.endsWith("node.exe")) && process.argv[1].endsWith("index.js")) {
        basepath = process.argv[2] || process.cwd();
    } else if (process.argv[0] === "npx" && process.argv[1] === "create-arena-project") {
        basepath = process.argv[2];
    } else {
        console.error("Usage: npx create-arena-project <basepath>");
        process.exit(1);
    }

    await skeleton(
        path.isAbsolute(basepath) ? basepath : path.resolve(process.cwd(), basepath)
    );
    install(basepath);

    console.log("Project created successfully! " + basepath);
})();

