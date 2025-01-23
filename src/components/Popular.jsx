// basically like a view
import { useState, useEffect } from "react";
import style, { styled } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    {
      /*running the get popular function */
    }
    getPopular();
  }, []);

  const getPopular = async () => {
    // checks local storage to see if popular reciepies are already stored
    const check = localStorage.getItem("popular");
    if (check) {
      //string to array
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
      );
      const data = await api.json();
      console.log(data);
      //if the localstorage is empty is gets the json and sets it into the popular state variable
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      //saves the date un the popular STATE line 6
      setPopular(data.recipes);
    }
  };

  return (
    <div>
      {/** getting each recipies object and prrfomung a function */}
      <Wrapper>
        <h3> Popular Picks</h3>
        {/* determines the number of image in the slider */}
        <Splide
          options={{
            perPage: 2,
            gap: "2rem",
          }}
        >
          {popular.map((recipes) => {
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

export default Popular;
