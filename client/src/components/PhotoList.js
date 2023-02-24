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

const PhotoList = ({ id, name, image }) => {
    const [visible, setVisible] = useState(false);
    const [newName, setNewName] = useState("")

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
                            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} /> <br />
                            <Button>
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