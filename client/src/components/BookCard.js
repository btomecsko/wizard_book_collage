
import {
  CardWrapper,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
  CardBodyWrapper,
  CardOpenWrapper,
  CardOpen,
  LinkText
} from "../styles/Card";
//import Button from "../styles/Button";
import styled from "styled-components";

//import PhotoList from "./PhotoList";


const BookCard = ({ setShowPhoto, enterBook, book }) => {
  const { id, name, description } = book

  const handleOpenBook = () => {
    setShowPhoto(false);
    enterBook(id)
  }

  return (
    <Separator>
      <CardWrapper>
        <CardTextWrapper>
          <CardTextTitle>{name}</CardTextTitle>
        </CardTextWrapper>
        <CardBodyWrapper>
          <CardTextBody>
            {description}
          </CardTextBody>
        </CardBodyWrapper>
        <CardOpenWrapper>
          <CardOpen>
            <LinkText onClick={handleOpenBook} >Open</LinkText>
          </CardOpen>
        </CardOpenWrapper>
      </CardWrapper>
    </Separator>
  );
}

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export default BookCard;