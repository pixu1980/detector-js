// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test/e2e',
  testMatch: '**/*.e2e.js',
  timeout: 30000,
  retries: 0,
  workers: 1,
  use: {
    baseURL: 'http://localhost:3222',
    headless: true,
  },
  webServer: {
    command: 'node scripts/serve.mjs',
    port: 3222,
    reuseExistingServer: true,
    env: { PORT: '3222' },
    timeout: 30000,
  },
});