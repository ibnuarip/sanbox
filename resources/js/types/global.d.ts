import type { Page } from '@inertiajs/core';
import type { Auth } from '@/types/auth';

declare module '@inertiajs/core' {
    export interface PageProps {
        name: string;
        auth: Auth;
        sidebarOpen?: boolean;
        [key: string]: unknown;
    }
}

declare module '@inertiajs/react' {
    export interface SharedProps {
        name: string;
        auth: Auth;
        sidebarOpen: boolean;
    }

    export function usePage<TPageProps extends Record<string, unknown> = Record<string, unknown>>(): Page<TPageProps & SharedProps>;
}
