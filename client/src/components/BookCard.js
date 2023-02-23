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

const BookCard = ({name, description}) => {
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
            <LinkText href="#">Open</LinkText>
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