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
          onClick={() => setActiveTab("instruction")}>Instruction</Button>
        <Button
          className={activeTab === "ingredient" ? "active" : ""}
          onClick={() => setActiveTab("ingredient")}>Ingredients</Button>


        {activeTab === "instruction" && (
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}/>
        </div>)}
        {activeTab === "ingredient" && (
          <ul>
            {details.extendedIngredients.map((ingredient) =>( 
              <li key={ingredient.id}> {ingredient.original}</li>
            ))}
          </ul>
        )}
        ;
      </Info>
    </DetailWrapper>
  );
}
const DetailWrapper = styled.div`
  margin: 3rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }

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
  border-radius: 2rem;
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    max-width: 400px; /* Set a max width for larger screens */
    margin-bottom: 0;
  }
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

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    margin-right: 1rem;
  }
`;

const Info = styled.div`
  margin-left: 4rem;
  font-size: 1.2rem;
  color: #444;
  line-height: 1.8rem;
  text-align: center;

  @media (min-width: 768px) {
    margin-left: 4rem;
    text-align: left;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default Recipe;
