export type Filme ={
    Title: string
    Year: string
    Poster:string
    Type: string
    imdbID:string
}

export type Filmes ={
    Search: Filme[];
}