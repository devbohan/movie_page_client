import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import SideNav from './components/SideNav';
import MovieList from './components/MovieList';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <Header />
      <ApolloProvider client={client}>
        <Container>
          <Row>
            <Col xs ={12} sm={5}>
              <SideNav></SideNav>
            </Col>
            <Col xs ={12} sm={7}>
              <MovieList></MovieList>
            </Col>
          </Row>
        </Container>
      </ApolloProvider>
    </div>
  );
}

export default App;
