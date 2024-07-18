const child_process = require('child_process');

const requirements = ["webpack", "webpack-cli", "acorn", "terser-webpack-plugin", "typescript"];
const globalRequirements = ["typescript"];

function install(cwd) {
    const pkg = child_process.spawnSync("npm", ["init", "-y"], {
        stdio: "inherit",
        shell: true,
        cwd: cwd || process.cwd()
    });
    if (pkg.error) {
        console.error(pkg.error);
        process.exit(1);
    }

    if (pkg.status !== 0) {
        console.error("Failed to create package.json");
        process.exit(1);
    }

    const proc = child_process.spawnSync("npm", ["install", ...requirements], {
        stdio: "inherit",
        shell: true,
        cwd: cwd || process.cwd()
    });
    if (proc.error) {
        console.error(proc.error);
        process.exit(1);
    }

    if (proc.status !== 0) {
        console.error("Failed to install dependencies");
        process.exit(1);
    }

    const globalProc = child_process.spawnSync("npm", ["install", "-g", ...globalRequirements], {
        stdio: "inherit",
        shell: true,
        cwd: cwd || process.cwd()
    });
    if (globalProc.error) {
        console.error(globalProc.error);
        process.exit(1);
    }

    if (globalProc.status !== 0) {
        console.error("Failed to install global dependencies");
        process.exit(1);
    }

    console.log("Dependencies installed successfully");
}

module.exports = {
    install,
    requirements,
    globalRequirements
};
