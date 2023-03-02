// import React, { useEffect, useState } from "react";
// import { useLocation } from 'react-router-dom';
// import { Link } from "react-router-dom";

// import styled from "styled-components";
// import Button from "../styles/Button";
// import PhotoList from "./PhotoList";

// const PhotoContainer = () => {
//     const [book, setBook] = useState([])
//     const location = useLocation()
//     let bookID = location.state
    
//     useEffect (() => {
//       fetch(`/books/${bookID}`)
//       .then(res => res.json())
//       .then(book => setBook(book));
//     }, [bookID])


    // const onDeletePhoto = (id) => {
    //   console.log(id)
    //   setBook(bookPhoto => {
    //     const filteredPhotos = bookPhoto.photos.filter(photo => photo.id !== id)
    //     //book.photos = filteredPhotos;
    //     return filteredPhotos
    //   })
    // }

    // const editPhoto = (updatedPhoto) => {
    //   setBook(book => {
    //     const newPhotoArray = book.photos.map(photo => {
    //       if(photo.id === updatedPhoto.id){
    //         return updatedPhoto
    //       }else{
    //         return photo
    //       }
    //     })
    //     book.photos = newPhotoArray;
    //     console.log(newPhotoArray)
    //     return book
    //   })
    // }

//     return(
//         <Wrapper>
//         <Logo>{book.name}</Logo>
//         <Button as={Link} to="/addphoto" state={bookID}>Add New Photo</Button>
//         <CardContainer>
//             {book.photos?.map((photo) => {
//                 return(
//                 <PhotoList
//                 key={photo.id}
//                 photo ={photo}
//                 onDeletePhoto = {onDeletePhoto}
//                 editPhoto={editPhoto}
//                 />
//             )
//                 })}
//         </CardContainer>
//         </Wrapper>
//     )
// }

// const Logo = styled.h1`
//   font-family: "Permanent Marker";
//   font-size: 3rem;
//   color: #740001;
//   border-color: #d3a625;
//   margin: 8px 0 16px;
//   text-align: center;
// `;

// const CardContainer = styled.div`
  
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: transparent;
//   overflow: auto;
// `;

// const Wrapper = styled.section`
//   max-width: 1000px;
//   margin: 40px auto;
// `;


// export default PhotoContainer;