import 'egg';
import 'egg-router-plus';
import '@forsigner/egg-typeorm';
import 'egg-session';

declare module 'egg' {
    interface Application {
        passport: any;
    }
    interface Context {
        user: any;
        isAuthenticated(): boolean;
        login(user: any, opt?: any): Promise<void>;
        logout(): void;
    }
}
