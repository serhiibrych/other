export interface Repository {
    name: string;
    description: string;
    url: string;
    stars: number;
    language: string;
    updated_at: string;
    html_url: string;
    owner: { login: string };
}