import { Fragment, useState } from "react";
//import { useNavigate } from "react-router-dom";

import {
    PhotoWrapper,
    CardTextWrapper,
    CardImage,
    CardTextTitle,
    CardLinkWrapper,
    CardLink,
    CardTextBody
} from "../styles/Card";
import Error from "../styles/Error";
import styled from "styled-components";
import Button from "../styles/Button";

const PhotoList = ({ editPhoto, onDeletePhoto, photo }) => {
    const { id, name, image } = photo
    const [visible, setVisible] = useState(false);
    const [newImage, setNewImage] = useState(image);
    const [errors, setErrors] = useState([]);

    const handleDeletePhoto = () => {
        fetch(`/photos/${id}`, {
            method: "DELETE"
        })
            .then((res) => {
                if (res.ok) {
                    onDeletePhoto(id)
                } else {
                    res.json().then((err) => setErrors(err.errors));
                }
            })
    };

    const updateName = (e) => {
        e.preventDefault();
        fetch(`/photos/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                image: newImage,
            })
        })
            .then(res => res.json())
            .then((data) => editPhoto(data))
    };

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
                        <>
                            <CardTextBody>
                                <input type="text" placeholder="New Image URL" name="image" value={newImage} onChange={(e) => setNewImage(e.target.value)} /> <br />
                                <Button onClick={updateName}>
                                    Confirm
                                </Button>
                            </CardTextBody>
                            <CardTextTitle>
                                {errors?.map((err) => (
                                    <Error key={err}>{err}</Error>
                                ))}
                            </CardTextTitle>
                        </>
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