const test = require('node:test');
const assert = require('node:assert');
const MimePostClient = require('../src');

test('calls fetch with proper url and headers', async () => {
  const calls = [];
  global.fetch = async (url, options) => {
    calls.push({ url, options });
    return { ok: true, json: async () => ({ success: true }) };
  };
  const client = new MimePostClient({ apiToken: 'test-token' });
  await client.getTemplate('welcome');
  assert.strictEqual(calls.length, 1);
  assert.strictEqual(calls[0].url, 'https://api.mimepost.com/v1/templates/welcome');
  assert.strictEqual(calls[0].options.headers['X-Auth-Token'], 'test-token');
});
