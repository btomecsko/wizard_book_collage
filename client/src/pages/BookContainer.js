import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PhotoList from "../components/PhotoList";

import Button from "../styles/Button"
import styled from "styled-components";
import BookCard from "../components/BookCard";

const BookContainer = ({books, enterBook, bookID}) => {
  
  const [showPhoto, setShowPhoto] = useState(true);
  const [bookPhoto, setBookPhoto] = useState({photos: []})

  useEffect (() => {
    fetch(`/books/${bookID}`)
    .then(res => res.json())
    .then(photo => setBookPhoto(photo));
  }, [bookID])

  const onDeletePhoto = (id) => {
    setBookPhoto(oldBookPhoto => {
      const filteredPhotos = oldBookPhoto.photos.filter(photo => photo.id !== id)
      oldBookPhoto.photos = filteredPhotos;
      return {...oldBookPhoto}
    })
  }

  const editPhoto = (updatedPhoto) => {
    setBookPhoto(oldBookPhoto => {
      const updatedBookPhoto = oldBookPhoto.photos.map(photo => {
        if(photo.id === updatedPhoto.id){
          return updatedPhoto
        }else{
          return photo
        }
      })
      oldBookPhoto.photos = updatedBookPhoto;
      return {...oldBookPhoto}
    })
  }
 

  return (
    <Wrapper>
      <>
      {showPhoto ? (
        <>
        <Logo>Library</Logo>
        <CardContainer>
          {books.map(book => {
            return (
              <BookCard
                key={book.id}
                book={book}
                setShowPhoto = {setShowPhoto}
                enterBook = {enterBook}
              />
            )
          })}
        </CardContainer>
        </>
         ) : (
          <>
            <Logo>{bookPhoto.name}</Logo>
              <Button as={Link} to="/addphoto" state={bookID}>Add New Photo</Button>
              <Button color="secondary" onClick={() => setShowPhoto(true)}>
              Close
              </Button>
          <CardContainer>
          {bookPhoto.photos?.map((photo) => {
              return(
              <PhotoList
              key={photo.id}
              photo ={photo}
              onDeletePhoto = {onDeletePhoto}
              editPhoto={editPhoto}
              />
          )
              })}
              </CardContainer>
              </>
        )}
      </>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker";
  font-size: 3rem;
  color: #740001;
  border-color: #d3a625;
  margin: 8px 0 16px;
  text-align: center;
`;


const CardContainer = styled.div`
  
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  overflow: auto;
`;

export default BookContainer;