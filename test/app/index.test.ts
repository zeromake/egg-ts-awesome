import * as assert from "power-assert";
import { Context } from "egg";
import { app } from "@zeromake/egg-mock/bootstrap";

describe("Test www index", () => {
  let ctx: Context = null as any;
  before(async () => {
    ctx = app.mockContext();
  });

  it('GET /api/www', async () => {
    const resp = await app
    .httpRequest()
    .get('/api/www')
    .expect(200);

    assert.equal(resp.body.message, ctx.gettext("home", ctx.gettext("www")));
  });

  it('GET /', async () => {
    await app
    .httpRequest()
    .get('/')
    .expect(500);
  });
});
