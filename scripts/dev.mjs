import { rm } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import process from 'node:process';

await rm('.next', { recursive: true, force: true });

const child = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'dev', '-p', '3000'], {
  stdio: 'inherit',
  shell: false,
});

const forwardSignal = (signal) => child.kill(signal);
process.on('SIGINT', () => forwardSignal('SIGINT'));
process.on('SIGTERM', () => forwardSignal('SIGTERM'));

child.on('exit', (code, signal) => {
  process.exitCode = signal ? 1 : code ?? 1;
});