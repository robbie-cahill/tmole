import { spawn } from 'child_process';

const args = process.argv.slice(2);
const command = 'npx';
const commandArgs = ['tunnelmole', ...args];

const child = spawn(command, commandArgs);

child.stdout.on('data', (data) => {
  console.log(`${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`${data}`);
});
