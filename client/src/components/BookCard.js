//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
    CardWrapper,
    CardTextWrapper,
    CardTextTitle,
    CardTextBody,
    CardBodyWrapper,
    CardOpenWrapper,
    CardOpen
  } from "../styles/Card";
  import Button from "../styles/Button";
  import styled from "styled-components";


const BookCard = ({book , enterBookID}) => {
  const {id, name, description} = book;

  const navigate = useNavigate();

  const handleOpenBook = () => {
    enterBookID(id)
    navigate('/photos');
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
            <Button onClick={handleOpenBook}>Open</Button>
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