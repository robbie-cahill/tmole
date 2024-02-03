"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const args = process.argv.slice(2);
const command = 'npx';
const commandArgs = ['tunnelmole', ...args];
const child = (0, child_process_1.spawn)(command, commandArgs);
child.stdout.on('data', (data) => {
    console.log(`${data}`);
});
child.stderr.on('data', (data) => {
    console.error(`${data}`);
});
//# sourceMappingURL=tmole.js.map