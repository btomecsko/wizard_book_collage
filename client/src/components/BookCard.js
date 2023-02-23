import { Link } from "react-router-dom";
import {createContext} from "react";

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

  const BookContext = createContext();

const BookCard = ({bookNum, name, description}) => {
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
            <BookContext.Provider value={bookNum}>
            <LinkText as={Link} to="/photos">Open</LinkText>
            </BookContext.Provider>
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