import * as assert from "assert";
import mm, { MockApplication } from "egg-mock";

describe("test/app/controller/home.test.ts", async () => {
    // const conn = await createConnection();
    // const UserRepository = conn.getRepository(User);
    let app: MockApplication = null as any;
    let userObj: any = null;
    before(async () => {
        app = mm.app();
        const ctx = app.mockContext();
        const user = {
            username: "test",
            password: "test",
            last_ip: "127.0.0.1",
        };
        const u = await ctx.repo.User.save(user);
        userObj = u;
        return app.ready();
    });
    after(async () => {
        const ctx = app.mockContext();
        await ctx.repo.User.delete(userObj.id);
        return app.close();
    });
    it("should GET /", async () => {
        const result = await app
            .httpRequest()
            .get("/")
            .expect(200);
        assert(result.text === "hi, egg www");
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
