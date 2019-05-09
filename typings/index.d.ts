import 'egg';
import 'egg-router-plus';
import 'egg-session';

declare module 'egg' {
    interface Application {
        passport: {
            use(provider: string, strategy: any): void;
            doVerify(req: any, user: any, done: any): void;
            verify(fn: (ctx: Context, user?: any) => Promise<void> ): void;
            authorized(provider: string): (ctx: Context, next: () => Promise<void>) => Promise<void>
        };
    }
    interface Context {
        user: any;
        isAuthenticated(): boolean;
        login(user: any, opt?: any): Promise<void>;
        logout(provider?: string): void;
    }
}
