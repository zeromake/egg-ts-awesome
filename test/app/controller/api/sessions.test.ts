import * as assert from "assert";
import { app } from "egg-mock/bootstrap";

describe("Test api sessions", async () => {
    let userObj: any = null;
    before(async () => {
        const ctx = app.mockContext();

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
        const result = await app
            .httpRequest()
            .get("/api")
            .expect(401);
        assert(result.text === "User not authenticated");
    });
    it("should POST api /sessions", async () => {
        const result = await app
            .httpRequest()
            .post('/api/sessions')
            .send({
                username: "test",
                password: "test",
            })
            .set('Content-Type', 'application/json')
            .expect(200);
        const user = result.body;
        [
            'username',
            'last_ip',
            'id',
        ].forEach(i => {
            assert.equal(user[i], userObj[i]);
        });
    });
});
