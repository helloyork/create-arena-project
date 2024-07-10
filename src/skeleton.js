const { sources } = require("./assets/sources");
const { copyFile, createDir, isFileExists } = require("./util");

const path = require("path");


async function skeleton(basepath) {
    for (const source of sources) {
        try {
            const { type, path: p, src } = source;
            if (type === "file") {
                const parentDir = path.parse(p).dir;
                const srcPath = path.resolve(__dirname, "..", src);
                const destPath = path.resolve(basepath, p);

                if (path.relative(basepath, parentDir) !== "") {
                    await createDir(path.resolve(basepath, parentDir));
                }

                if(!isFileExists(destPath)) {
                    await copyFile(srcPath, destPath);
                    console.log(`Created ${p}`);
                } else {
                    console.log(`Skipped ${p}`);
                }
            }
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = {
    skeleton,
};
