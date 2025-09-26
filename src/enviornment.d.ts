// for autocomplete purposes
declare global {
    namespace NodeJS {
        interface ProcessEnvironment {
            DEBUG: string;
            PORT: string;
            CF_KEY: string;
            CHECK_DOMAINS: string;
            TIMEOUT: string;
            HIDDEN_DOMAINS: string;
        }
    }
}

export {};
