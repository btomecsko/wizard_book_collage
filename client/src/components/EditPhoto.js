import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import styled from "styled-components";
import Button from "../styles/Button";
import Input from "../styles/Input";
import FormField from "../styles/FormField";
import Label from "../styles/Label";
import Textarea from "../styles/TextArea";

const EditBook = () => {
    const location = useLocation()
    const photoID = location.state
    const [formData, setFormData] = useState({
        name: "",
        image: "",
    });

    const { name, image } = formData;

    useEffect (() => {
        fetch(`/photo/${photoID}`)
        .then(res => res.json())
        .then(photo => setFormData(photo))
    }, [photoID])



    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };


    const updatePhoto = (e) => {
      e.preventDefault();
      fetch(`/photos/${photoID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
        .then(res => res.json())
        //.then(() => editPhoto(id))
         //navigate(-1);
    };

    return (
        <Wrapper>
            <WrapperChild>
                <h2>Edit Photo</h2>
                <form onSubmit={updatePhoto}>
                    <FormField>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="description">Image URL</Label>
                        <Textarea
                            id="image"
                            name="image"
                            type="text"
                            value={image}
                            onChange={handleChange}
                        />
                    </FormField>
                    <FormField>
                        <Button color="primary" type="submit">
                            Update
                        </Button>
                    </FormField>
                </form>
            </WrapperChild>
        </Wrapper>
    );

}

const Wrapper = styled.section`
  max-width: 600px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;


export default EditBook;