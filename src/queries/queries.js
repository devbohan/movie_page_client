import { useQuery, gql } from '@apollo/client';

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