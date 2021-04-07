
const fs = require("fs");
// console.log(fs)

// ( \\ 'project' ) is the default if no folder name is passed
const folderName = process.argv[2] || "project";

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
    fs.writeFileSync(`${folderName}/style.css`, '')
} catch (e) {
    console.log('uh oh, there is an issue');
}

// node template.js 'file name'

// outside of node-shortcut folder : node node-shortcut/template.js 'file name'