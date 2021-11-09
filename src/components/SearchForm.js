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
        <div className="row justify-content-center mt-5" >
            <div className="col-md-6 text-center">
            <Form onSubmit={ handleSearch }>
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
                <Button variant="spotify" type="submit">
                    Find
                </Button>
                {errorMsg && <p className="error">{errorMsg}</p>}
            </Form>
            </div>
        </div>
    );
};
export default SearchForm