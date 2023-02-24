import {
    PhotoWrapper,
    CardTextWrapper,
    CardImage,
    CardTextTitle,
    CardLinkWrapper,
    CardLink,
    LinkText
} from "../styles/Card";
import styled from "styled-components";
import Button from "../styles/Button";

const PhotoList = ({ id, name, image }) => {

    const handleDeletePhoto = () => {
        fetch(`/photos/${id}`, {
            method: "DELETE"
        })
        .then(res => {
            if (res.ok){
            console.log(res)
            }else {
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
                        <LinkText>Update</LinkText>
                    </CardLink>
                    <CardLink>
                        <Button onClick={handleDeletePhoto}>Delete</Button>
                    </CardLink>
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