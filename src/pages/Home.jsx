import Veggie from "../components/Veggie";
import Popular from "../components/Popular";

import React from 'react'
import Category from "../components/Category";
//taking all the view and merging
function Home() {
  return (
    <div>
      <Popular></Popular>
      <Veggie></Veggie>
    </div>
  )
}

export default Home
