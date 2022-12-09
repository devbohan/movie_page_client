import { gql } from '@apollo/client';

export const movie_list = gql`
    {
        movies {
            id
            name
            genre
            director {
                name
            }
        }
    }
`
export const director_list = gql`
    {
        directors {
            id
            name
            age
        }
    }
`