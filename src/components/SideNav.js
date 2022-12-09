import React from "react";
import { Button, Card, CardBody, CardHeader, Form, FormGroup } from "reactstrap";
import { useQuery } from '@apollo/client'
import {director_list} from '../queries/queries'
function SideNav() {
  const {loading, error, data} = useQuery(director_list)
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
            <FormGroup>
              <input className="form-control" type="text" name="directorName" placeholder="name"/>
            </FormGroup>
            <FormGroup>
              <input className="form-control" type="text" name="directorAge" placeholder="age"/>
            </FormGroup>
            <Button color="primary" type="submit">add</Button>
          </CardBody>
        </Card>
        <Card className="mt-4">
          <CardHeader>
            Movie 
          </CardHeader>
          <CardBody>
            <FormGroup>
              <input className="form-control" type="text" name="movieName" placeholder="name"/>
            </FormGroup>
            <FormGroup>
              <input className="form-control" type="text" name="movieGenre" placeholder="genre"/>
            </FormGroup>
            <FormGroup>
              <select className="form-control" type="select" name="directorId">
                {
                  data.directors.map(({id, name, age}) => (
                    <option>{name}</option>
                ))
                }
              </select>
            </FormGroup>
            <Button color="primary" type="submit">add</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default SideNav;
