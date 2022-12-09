import React from "react";
import { Button, Card, CardBody, CardHeader, Form, FormGroup } from "reactstrap";
import { useQuery, useMutation } from '@apollo/client'
import {movie_list, director_list} from '../graphql/queries'
import {add_movie, add_director} from '../graphql/mutations'
import { useForm } from 'react-hook-form';


function SideNav() {
  const {loading, error, data} = useQuery(director_list)
  
  const {
    register: regDirector,
    handleSubmit: handleDirector,
    formState: { errors: directorAddError },
  } = useForm()
  const {
    register: regMovie,
    handleSubmit: handleMovie,
    formState: { errors: movieAddError },
  } = useForm()

  const [addDirector] = useMutation(add_director,
    {
      refetchQueries: [{query: director_list}],
      awaitRefetchQueries: true,
    }
  )
  const [addMovie] = useMutation(add_movie,
    {
      refetchQueries: [{query: movie_list}],
      awaitRefetchQueries: true,
    }
  )

  const onAddDirector = (data) => {
    addDirector({variables: {name: data.directorName, age: Number(data.directorAge)}})
  }
  const onAddMovie = (data) => {
    addMovie({variables: {name: data.movieName, genre: data.movieGenre, directorId: data.directorId}})
  }
  
  if(loading) {
    return <p>Loading...</p>
  } else if (error) {
    return <p>Error!</p>
  } else {
    return (
      <div>
        <Card>
          <CardHeader>
            Director
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleDirector(onAddDirector)}>
              <FormGroup>
                <input className="form-control" type="text" name="directorName" placeholder="name" {...regDirector('directorName')}/>
              </FormGroup>
              <FormGroup>
                <input className="form-control" type="text" name="directorAge" placeholder="age" {...regDirector('directorAge')}/>
              </FormGroup>
              <Button color="primary" type="submit">add</Button>
            </Form>
          </CardBody>
        </Card>
        <Card className="mt-4">
          <CardHeader>
            Movie 
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleMovie(onAddMovie)}>
              <FormGroup>
                <input className="form-control" type="text" name="movieName" placeholder="name" {...regMovie('movieName')}/>
              </FormGroup>
              <FormGroup>
                <input className="form-control" type="text" name="movieGenre" placeholder="genre" {...regMovie('movieGenre')}/>
              </FormGroup>
              <FormGroup>
                <select className="form-control" type="select" name="directorId" {...regMovie('directorId')}>
                  {
                    data.directors.map(({id, name}) => (
                      <option key={id} value={id}>{name}</option>
                  ))
                  }
                </select>
              </FormGroup>
              <Button color="primary" type="submit">add</Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default SideNav;
