import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

import styled from "styled-components";
import Button from "../styles/Button";
import PhotoList from "./PhotoList";

const PhotoContainer = () => {
    const [book, setBook] = useState({photos: []})
    const location = useLocation()
    const books = location.state

    useEffect (() => {
      fetch(`/books/${books}`)
      .then(res => res.json())
      .then(book => setBook(book));
    }, [books])


    const onDeletePhoto = (id) => {
      console.log(id)
      setBook(prevPhoto => {
        const filteredPhotos = prevPhoto.photos.filter(photo => photo.id !== id)
        return filteredPhotos
      })
    }

    const editPhoto = (updatedPhoto) => {
      setBook(prevPhoto => {
        const newPhotoArray = prevPhoto.photos.map(photo => {
          if(photo.id === updatedPhoto.id){
            return updatedPhoto
          }else{
            return photo
          }
        })
        return newPhotoArray
      })
    }

    return(
        <Wrapper>
        <Logo>{book.name}</Logo>
        <Button as={Link} to="/addphoto" state={books}>Add New Photo</Button>
        <CardContainer>
            {book.photos.map((photo, index) => {
                return(
                <PhotoList
                photo ={photo}
                onDeletePhoto = {onDeletePhoto}
                editPhoto={editPhoto}
                key={index}
                id={photo.id}
                name={photo.name}
                image={photo.image}
                />
            )
                })}
        </CardContainer>
        </Wrapper>
    )
}

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

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
`;


export default PhotoContainer;