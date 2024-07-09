const { promises: fs } = require("fs");


function readFile(filePath) {
    return fs.readFile(filePath, "utf-8");
}

function writeFile(filePath, data) {
    return fs.writeFile(filePath, data, "utf-8");
}

function createDir(dirPath) {
    return fs.mkdir(dirPath, { recursive: true });
}

function createFile(filePath) {
    return writeFile(filePath, "");
}

function copyFile(src, dest) {
    return fs.copyFile(src, dest);
}

module.exports = {
    readFile,
    writeFile,
    createDir,
    createFile,
    copyFile,
};
