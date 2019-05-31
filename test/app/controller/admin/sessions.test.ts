import * as assert from "assert";
import { Context } from "egg";
import { app } from "@zeromake/egg-mock/bootstrap";
import { MockTest } from "@zeromake/egg-mock";
import { SuperTest } from "supertest";
// import { MockMethod } from "egg-mock";

describe("Test admin sessions", async () => {
  let managrObj: any = null;
  // await app ready
  let agent: SuperTest<MockTest> = null as any;
  let ctx: Context = null as any;
  before(async () => {
    agent = app.httpAgent({
      csrf: true,
    });
    ctx = app.mockContext();

    const user = {
      username: "test",
      password: "test",
      last_ip: "127.0.0.1",
    };
    managrObj = await ctx.repo.Manager.save(user);
  });

  after(async () => {
    const ctx = app.mockContext();
    await ctx.repo.Manager.delete(managrObj.id);
  });
  const notAuthHome = async () => {
    const result = await agent.get("/api/admin/").expect(401);
    assert(result.body.message === ctx.gettext("unAuth"));
  };
  const authHome = async () => {
    await agent.get("/api/admin/").expect(200);
  };

  it("should before login admin /", notAuthHome);
  it("should login admin session", async () => {
    let result = await agent
      .post("/api/admin/sessions")
      .send({
        username: "test",
        password: "test",
      })
      .set("Content-Type", "application/json")
      .expect(200);
    let user = result.body;
    ["username", "last_ip", "id"].forEach(i => {
      assert.equal(user[i], managrObj[i]);
    });

    result = await agent.get("/api/admin/sessions").expect(200);
    user = result.body;
    ["username", "last_ip", "id"].forEach(i => {
      assert.equal(user[i], managrObj[i]);
    });
  });

  it("should after login admin /", authHome);

  it("should admin logout session", async () => {
    const result = await agent.delete("/api/admin/sessions").expect(200);
    assert(result.body.message === ctx.gettext("success"));
  });

  it("should after logout admin /", notAuthHome);
});
