import React from "react";
import { useQuery, useMutation } from '@apollo/client'
import {Button, Card, CardBody, Table} from 'reactstrap'
import {movie_list} from '../graphql/queries'
import {delete_movie} from '../graphql/mutations'
function MovieList() {
  const {loading, error, data} = useQuery(movie_list)
  const [deletemovie] = useMutation(delete_movie, {
    refetchQueries: [{query: movie_list}],
    awaitRefetchQueries: true
  })
  const onRemoveMovie = (id) => {
    deletemovie({variables: {id}})
  }
  if(loading) {
    return <p>Loading...</p>
  } else if (error) {
    return <p>Error!</p>
  } else {
    return (
      <Card style={{ overflowX: 'scroll', maxHeight: '500px' }}>
        <CardBody>
          <Table hover>
            <thead> 
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th colSpan={"2"}>Director</th>
              </tr>
            </thead>
            <tbody>
              {
                data.movies.map(({id, name, genre, director}) => (
                  <tr key={id} >
                    <td>{name}</td>
                    <td>{genre}</td>
                    <td>{director?.name}</td>
                    <td><Button color="primary" onClick={() => onRemoveMovie(id)}>remove</Button></td>
                </tr>
                ))
              }
            </tbody>
          </Table>
        </CardBody>
      </Card>
    )
  }
}

export default MovieList;
