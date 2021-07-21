import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function SearchBar(props) {
  return (
    <Form>
      <FormControl
        type="text"
        value={props.value}
        onChange={props.input}
        placeholder="Search"
        className="mr-sm-2"
      />
      <Button
        variant="outline-success"
        className="mr-sm-2"
        onClick={props.submit}
      >
        Search
      </Button>
    </Form>
  );
}

export default SearchBar;
