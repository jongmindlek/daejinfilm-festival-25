import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname="/"){
  const workerUrl=new URL("../dist/server/index.js",import.meta.url);
  workerUrl.searchParams.set("test",`${process.pid}-${Date.now()}-${pathname}`);
  const{default:worker}=await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`,{headers:{accept:"text/html"}}),{ASSETS:{fetch:async()=>new Response("Not found",{status:404})}},{waitUntil(){},passThroughOnException(){}});
}

test("renders the finished festival home page",async()=>{
  const response=await render();
  assert.equal(response.status,200);
  const html=await response.text();
  assert.match(html,/NOT THE END/);
  assert.match(html,/상영 시간표/);
  assert.match(html,/예매 확인증/);
  assert.doesNotMatch(html,/codex-preview|Building your site/);
});

test("renders reservation and ticket routes",async()=>{
  const reservation=await(await render("/reservation")).text();
  const tickets=await(await render("/tickets")).text();
  assert.match(reservation,/관람권 담기/);
  assert.match(reservation,/321/);
  assert.match(reservation,/비어 있습니다/);
  assert.match(tickets,/예매 확인증이 비어 있습니다/);
});
