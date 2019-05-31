import * as assert from "assert";
import { Context } from "egg";
import { app } from "@zeromake/egg-mock/bootstrap";
import { MockTest } from "@zeromake/egg-mock";
import { SuperTest } from "supertest";

describe("Test api sessions", async () => {
  let userObj: any = null;
  let ctx: Context = null as any;
  let agent: SuperTest<MockTest> = null as any;
  before(async () => {
    ctx = app.mockContext();
    agent = app.httpAgent({
      csrf: true,
    });

    const user = {
      username: "test",
      password: "test",
      last_ip: "127.0.0.1",
    };
    userObj = await ctx.repo.User.save(user);
  });

  after(async () => {
    const ctx = app.mockContext();
    await ctx.repo.User.delete(userObj.id);
  });

  it("should GET api /", async () => {
    const result = await agent
      .get("/api")
      .expect(401);
    assert(result.body.message === ctx.gettext("unAuth"));
  });
  it("should POST api /sessions", async () => {
    const result = await agent
      .post("/api/sessions")
      .send({
        username: "test",
        password: "test",
      })
      .set("Content-Type", "application/json")
      .expect(200);
    const user = result.body;
    ["username", "last_ip", "id"].forEach(i => {
      assert.equal(user[i], userObj[i]);
    });
  });
});
