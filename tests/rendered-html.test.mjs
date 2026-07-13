import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Al-Farhain Klinik Obesiti landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Klinik Obesiti oleh Dr\. Syaza &amp; Dr\. Athirah \| Al-Farhain/);
  assert.match(html, /Urus berat badan dengan pelan yang memahami anda/);
  assert.match(html, /Dr\. Nur Athirah Binti Hashim/);
  assert.match(html, /https:\/\/wa\.me\/60109017606/);
  assert.match(html, /tel:\+6097888606/);
  assert.match(html, /https:\/\/alfarhainmedicalcentre\.com\/temu-janji\//);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|placeholder/i);
});
