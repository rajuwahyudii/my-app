export interface CategoriesInterface {
    error: boolean,
    categories: string[],
    categoriesAliases: categoriesAliasesInterface[]
    timestamp: number,
}

export interface categoriesAliasesInterface {
    alias: string,
    resolves: string,
}

export interface jokesInterface {
    "error": boolean,
    "amount": number,
    "jokes": jokeInterface[],
}

export interface jokeInterface {
    category: string,
    type: string,
    joke: string,
    flags: flagsInterface,
    id: string,
    safe: boolean,
    lang: string,
}

export interface flagsInterface {
    nsfw: boolean,
    religious: boolean,
    political: boolean,
    racist: boolean,
    sexist: boolean,
    explicit: boolean,

}