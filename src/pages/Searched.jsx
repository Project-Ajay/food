import React from 'react'
import { useState,useEffect } from 'react';
import style, { styled } from "styled-components";
import { useParams } from 'react-router-dom';


function Searched() {
  const [searchRecipes, setSearchedRecipes] = useState([]);
  let parm = useParams();


  const getSearched = async (name) =>{
    //get the recipes of the type passes by "name: eg american, thai etc"
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(()=>{
    getSearched(parm.search);
  },[parm.search]);

  return (
      <Grid>
        {searchRecipes.map((item)=>{
          return(
            <Card key={item.id}>
              <img src= {item.image}></img>
              <h4>{item.title}</h4>
            </Card>
          )
        })}
      </Grid>)
  
  }
  
  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem,2fr));
    grid-gap: 1rem;
  `;
  
  const Card = styled.div`
    img{
      width: 100%;
      border-radius: 2.5rem;
    }
    a{
      text-decoration:none;
  
    }
    h4{
      text-align: center;
      padding: 1rem;
    }
  `;
export default Searched
