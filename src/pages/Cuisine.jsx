import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import motion from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
// useParms allows the for getting the query from the url

function Cuisine() {
        const [cuisine, setCuisine] = useState([]);
        let params = useParams();

        const getCuisine = async (name) =>{
        //get the recipes of the type passes by "name: eg american, thai etc"
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=12`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };
    useEffect(() =>{
      // get the type and uses it as the args for the getCuisineFunction
      getCuisine(params.type)
      // console.log(params);
    },[params.type]);

  return (
    <Grid>
      {cuisine.map((item)=>{
        return(
          <Link to ={"/recipe/" + item.id}>
          <Card key={item.id}>
            <img src= {item.image}></img>
            <h4>{item.title}</h4>
          </Card>
          </Link>
        )
      })}
    </Grid>)

}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem,2fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration:none;

  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine
