import {useState} from "react";

import {
    PhotoWrapper,
    CardTextWrapper,
    CardImage,
    CardTextTitle,
    CardLinkWrapper,
    CardLink,
    CardTextBody
} from "../styles/Card";
import styled from "styled-components";
import Button from "../styles/Button";

const PhotoList = ({ setBook, book, id, name, image }) => {
    const [visible, setVisible] = useState(false);
    const [newName, setNewName] = useState("")
    const [newImage, setNewImage] = useState("")

    const handleDeletePhoto = () => {
        fetch(`/photos/${id}`, {
            method: "DELETE"
        })
            .then(res => {
                if (res.ok) {
                    console.log(res)
                } else {
                    res.json().then(console.log)
                }
            })
    }

    // const handlePhotoUpdate = (updatedPhoto) => {
    //     const updatedPhotos = book.photos.map(photo => 
    //         photo.id === updatedPhoto.id ? updatedPhoto : photo
    //     );
    //     setBook(updatedPhotos)
    // }
     
  const updateName = () => {
    let name = { newName }
    let image = { newImage }
    console.log("name", newName)
    console.log("image", newImage)
    fetch(`photos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        image,
      })
    })
        .then(res => res.json())
       // .then(updatedPhoto => handlePhotoUpdate(updatedPhoto))
  }

    console.log(id)

    return (
        <Separator>
            <PhotoWrapper>
                <CardImage background={image} />
                <CardTextWrapper>
                    <CardTextTitle>{name}</CardTextTitle>
                </CardTextWrapper>
                <CardLinkWrapper>
                    <CardLink>
                        <Button onClick={() => setVisible(!visible)}>{visible ? 'Cancel' : 'Update'}</Button>
                    </CardLink>
                    <CardLink>
                        <Button onClick={handleDeletePhoto}>Delete</Button>
                    </CardLink>
                    {visible &&
                        <CardTextBody>
                            <input type="text" placeholder="New Name" value={newName} onChange={(e) => setNewName(e.target.value)} /> <br />
                            <input type="text" placeholder="New Image URL" value={newImage} onChange={(e) => setNewImage(e.target.value)} /> <br />
                            <Button onClick={updateName}>
                                Confirm
                            </Button>
                        </CardTextBody>
                    }
                </CardLinkWrapper>
            </PhotoWrapper>
        </Separator>
    )
}

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export default PhotoList;