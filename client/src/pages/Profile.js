import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

/* //import { getMe, deleteBook } from '../utils/API';
import Auth from '../utils/auth';

import { REMOVE_BOOK } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/react-hooks'; */

const Profile = () => {
  /* 
  const [userData, setUserData] = useState();

  const [removeBook, { removeBookError }] = useMutation(REMOVE_BOOK);

  const userProfile = Auth.getProfile();

  let { loading, data } = useQuery(QUERY_ME, {
    variables: { username: userProfile.data.username },
  });

  useEffect(() => {
      if (data) {
        setUserData(data.me);
      }
  }, [data]);


  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    //loading = true;
    try {
      data = await removeBook({
        variables: {...{bookId: bookId} }
      })

      //setUserData(data.me);
      // upon success, remove book's id from localStorage
      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  if (data && !userData)
  {
    return <h2>CONFIGURING...</h2>;
  } */
  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing Profile!</h1>
        </Container>
      </Jumbotron>
    </>
  );
};
/* 
    
      <Container>
        <h2>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <CardColumns>
          {userData.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
}; */

export default Profile;
