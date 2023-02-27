import React, { useEffect, useState } from "react";

import styled from "styled-components";
import BookCard from "../components/BookCard";

const BookContainer = () => {

    const [books, setBooks] = useState([])

    useEffect (() => {
        const loadBooks = async () => {
            const res = await fetch('/books')
            const data = await res.json()
            setBooks(data)
        }
        loadBooks()
    }, [])

    return (
        <Wrapper>
            <Logo>Library</Logo>
            <>
            <CardContainer>
                {books.map(book => {
                    return(
                    <BookCard
                    key = {book.id}
                    book={book}
                    />
                    )
                    })}
            </CardContainer>
            </>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker";
  font-size: 3rem;
  color: #740001;
  border-color: #d3a625;
  margin: 8px 0 16px;
  text-align: center;
`;


const CardContainer = styled.div`
  
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  overflow: auto;
`;

export default BookContainer;