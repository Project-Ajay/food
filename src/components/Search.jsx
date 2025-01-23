import styled from "styled-components";
import { React, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Form } from "react-router-dom";
// allows for navigaton
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault(); //prevents the browser from refreshing
    navigate('/searched/' + input);
  };

  return (
    // submit hanlder
    <FormStyle onSubmit={submitHandler}> 
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}
const FormStyle = styled.form`
  margin: 1rem 10rem;
  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: rgba(167, 167, 167, 0.61);
    font-size: 1.5rem;
    color: black;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
