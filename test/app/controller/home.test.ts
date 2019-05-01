import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/home.test.ts', () => {
    it('should GET /', async () => {
        const result = await app
            .httpRequest()
            .get('/')
            .expect(200);
        assert(result.text === 'hi, egg www');
    });
    it('should GET admin /', async () => {
        const result = await app
            .httpRequest()
            .get('/admin')
            .expect(200);
        assert(result.text === 'hi, egg admin');
    });
    it('should GET api /', async () => {
        const result = await app
            .httpRequest()
            .get('/api')
            .expect(200);
        assert(result.text === 'hi, egg api');
    });
});
