import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
const SearchForm = (props) => {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ errorMsg, setErrorMsg ] = useState("");
    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);
    };
    const handleSearch = (event) => {
        event.preventDefault();
        if (searchTerm.trim() !== '') {
          setErrorMsg('');
          props.handleSearch(searchTerm);
        } else {
          setErrorMsg('Please enter a search term.');
        }
      };
    return(
        <div>
            <Form onSubmit={ handleSearch }>
                {errorMsg && <p className="error">{errorMsg}</p>}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter Search term</Form.Label>
                    <Form.Control
                        type="search"
                        name="searchTerm"
                        value={searchTerm}
                        placeholder="Find your favorite album, artist or playlist !"
                        onChange={handleInputChange}
                        autoComplete="off"
                        />

                </Form.Group>
                <Button variant="info" type="submit">
                    Find
                </Button>
            </Form>
        </div>
    );
};
export default SearchForm