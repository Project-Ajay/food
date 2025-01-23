import { useState, useEffect, use } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from "react";

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instruction");

  let param = useParams();
  const getRecipeDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${param.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const recipeData = await data.json();
    setDetails(recipeData);
    console.log(recipeData);
  };
  useEffect(() => {
    getRecipeDetails();
  }, [param.nam]);
  return (
    <DetailWrapper>
      <div>
        <h2> {details.title}</h2>
        <Image src={details.image} />
      </div>
      <Info>
        <Button
          className={activeTab === "instruction" ? "active" : ""}
          onClick={() => setActiveTab("instruction")}
        > Instruction</Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}>
            Ingredients</Button>

        <div dangerouslySetInnerHTML={{ __html: details.instructions }}></div>

      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin: 3rem 0 2rem 0;
  display: flex;
  align-items: flex-start;
  .active {
    background: rgba(227, 41, 41, 0.8);
    color: #fff;
    border-radius: 5px;
    padding: 0.5rem 1rem;
  }
  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: #333;
  }
  li {
    font-size: 1.4rem;
    line-height: 2.5rem;
    color: #555;
  }
  ul {
    margin-top: 2rem;
    padding-left: 1.5rem;
  }
`;

const Image = styled.img`
  border-radius : 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: rgb(190, 248, 163);
  background: #fff;
  border: 2px solid rgba(190, 248, 163, 0.8);
  border-radius: 5px;
  margin-right: 2rem;
  font-weight: 600;
  font-size: 1rem;
  // cursor: pointer;
  // transition: all 0.3s ease;

  // &:hover {
  //   background: rgb(190, 248, 163);
  //   color: #fff;
  //   border-color: rgb(190, 248, 163);
  // }
`;

const Info = styled.div`
  margin-left: 4rem;
  font-size: 1.2rem;
  color: #444;
  line-height: 1.8rem;
`;

export default Recipe;
