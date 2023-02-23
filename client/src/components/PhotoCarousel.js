//import { useContext } from "react";
import React, { useEffect, useState } from "react";
import SlideWrapper from "../styles/SlideWrapper";
import styled from "styled-components";
//import NavButton from "../styles/NavButton";

const PhotoCarousel = () => {

    //const bookNum = useContext(BookContext)
    const [photos, setPhotos] = useState([])

    useEffect (() => {
        const loadPhotos = async () => {
            const res = await fetch('/photos')
            const data = await res.json()
            setPhotos(data)
        }
        loadPhotos()
    }, [])

    return(
        <SlideWrapper>
            {photos.map(photo => (
                <ImageBox>
                    <img alt={photo.name} src={photo.image}/>
                </ImageBox>
            ))}
        </SlideWrapper>
    )
}

const ImageBox = styled.div`
  position: relative;
  background-color: #343434;
  width: 100%;
  height: 85%;

  img {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
  }
`;

export default PhotoCarousel;