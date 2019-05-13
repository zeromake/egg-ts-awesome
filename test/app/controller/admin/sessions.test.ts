import * as assert from "assert";
import { app } from "egg-mock/bootstrap";

describe("Test admin sessions", async () => {
    let managrObj: any = null;
    before(async () => {
        const ctx = app.mockContext();

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

    it("should GET admin /", async () => {
        const result = await app
            .httpRequest()
            .get("/api/admin/")
            .expect(401);
        assert(result.text === "User not authenticated");
    });
    it("should POST admin /sessions", async () => {
        const result = await app
            .httpRequest()
            .post('/api/admin/sessions')
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
            assert.equal(user[i], managrObj[i]);
        });
    });
});
