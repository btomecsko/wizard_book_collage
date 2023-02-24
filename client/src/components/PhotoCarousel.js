import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

import styled from "styled-components";
import Button from "../styles/Button";
import PhotoList from "./PhotoList";

const PhotoCarousel = () => {
    const [book, setBook] = useState({photos: []})
    const location = useLocation()
    const books = location.state

    useEffect (() => {
        const loadPhotos = async () => {
            const res = await fetch(`/books/${books}`)
            const data = await res.json()
            setBook(data)
        }
        loadPhotos()
    }, [books])

    return(
        <Wrapper>
        <Logo>{book.name}</Logo>
        <Button as={Link} to="/addphoto" state={books}>Add New Photo</Button>
        <CardContainer>
            {book.photos.map((photo, index) => (
                <PhotoList
                key={index}
                id={photo.id}
                name={photo.name}
                image={photo.image}
                />
            ))
        }
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

// const ImageBox = styled.div`
//   position: relative;
//   background-color: #343434;
//   width: 100%;
//   height: 85%;
//   img {
//     position: absolute;
//     margin: auto;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     max-width: 100%;
//     max-height: 100%;
//   }
// `;

// const SlideWrapper = styled.div`
//   position: relative;
//   width: 100vw;
//   height: 100vh;
// `;

export default PhotoCarousel;