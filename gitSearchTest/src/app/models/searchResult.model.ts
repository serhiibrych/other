import { Repository } from "./repository.model";

export interface SearchResult {
    name: string;
    searchResults: Repository[];
}