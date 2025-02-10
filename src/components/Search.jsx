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
  display: flex;
  justify-content: center;
  
  @media (max-width: 768px) {
    margin: 1rem 2rem;
  }

  div {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  }

  input {
    border: none;
    background: rgba(167, 167, 167, 0.61);
    font-size: 1.5rem;
    color: black;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    max-width: 400px; /* Maximum width for large screens */
  }

  svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
    color: white;
  }

  @media (max-width: 768px) {
    input {
      font-size: 1.2rem;
      padding: 0.8rem 2rem;
    }
    svg {
      left: 10px;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    margin: 1rem 1rem;
    input {
      font-size: 1rem;
      padding: 0.6rem 1.5rem;
    }
  }
`;

export default Search;
