import React from "react";
import { useQuery, gql } from '@apollo/client'
import {Card, CardBody, Table} from 'reactstrap'
import {movie_list} from '../queries/queries'
function MovieList() {
  const {loading, error, data} = useQuery(movie_list)
  console.log(data);
  if(loading) {
    return <p>Loading...</p>
  } else if (error) {
    return <p>Error!</p>
  } else {
    return (
      <Card>
        <CardBody>
          <Table hover>
            <thead> 
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Director</th>
              </tr>
            </thead>
            <tbody>
              {
                data.movies.map(({id, name, genre, director}) => (
                  <tr key={id} >
                  <th>{name}</th>
                  <th>{genre}</th>
                  <th>{director?.name}</th>
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
