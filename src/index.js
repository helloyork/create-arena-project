#!/usr/bin/env node

const path = require("path");


(async function main() {
    const { skeleton } = require("./skeleton");
    const basepath = process.argv[2] || process.cwd();

    if (!basepath) {
        console.error("Usage: npx create-arena-project <basepath>");
        process.exit(1);
    }

    await skeleton(
        path.isAbsolute(basepath) ? basepath : path.resolve(process.cwd(), basepath)
    );

    console.log("Project created successfully! " + basepath);
})();

