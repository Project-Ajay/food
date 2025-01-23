import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style, { styled } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useMediaQuery } from "react-responsive"; // Import react-responsive

import "@splidejs/splide/css";
// basically like a view

function Veggie() {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    {
    }
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=10`
      );
      const data = await api.json();
      console.log(data);
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return (
    <div>
      {/** getting each recipies object and prrfomung a function */}
      <Wrapper>
        <h3> Veggie Picks</h3>
        {/* determines the number of image in the slider */}
        <Splide
          options={{
            // perPage: 3,
            // gap: "2rem",
            perPage: isMobile ? 1 : isTablet ? 2 : 3, // Adjust number of items based on screen size
            gap: isMobile ? "1rem" : "2rem", 
          }}
        >
          {veggie.map((recipes) => {
            return (
              //allows for the sliding effect
              <SplideSlide key={recipes.id}>
                {/* display the information */}
                <Link to ={"/recipe/" + recipes.id}>
                <Card>
                  <p>{recipes.title}</p>
                  <img src={recipes.image}></img>
                  <Gradient />
                </Card>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  // used to round image
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default Veggie;
