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
import styled from "styled-components";

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
            <LinkText onClick={handleOpenBook}>Aberto</LinkText>
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