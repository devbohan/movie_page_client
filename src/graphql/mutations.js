import { gql } from '@apollo/client';

export const add_movie = gql`
    mutation($name: String!, $genre: String!, $directorId: ID!) {
        addMovie(name: $name, genre: $genre, directorId: $directorId) {
            name
            genre
        }
    }
`

export const add_director = gql`
    mutation($name: String!, $age: Int!) {
        addDirector(name: $name, age: $age) {
            name
            age
        }
    }
`

export const delete_movie = gql`
    mutation($id: ID!) {
        deleteMovie(id: $id) {
            id
        }
    }
`
