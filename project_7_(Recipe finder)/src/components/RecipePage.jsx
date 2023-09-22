import React, { useEffect, useRef, useState } from "react";
import { API_KEY, API_ID } from "../../Utils";
import "../App.css";
import SearchBar from "./SearchBar";
import Loading from "./Loading";
import FoodIntro from "./FoodIntro";

const RecipePage = () => {
  const inputRef = useRef(null);
  const [RecipeList, useRecipeList] = useState([]);
  const [LoadingBar, useLoading] = useState(false);

  const searchBtn = () => {
    searchRecepie(inputRef.current.value);
    inputRef.current.value = "";
  };

  useEffect(() => {
    searchRecepie("chicken");
  }, []);
  
  const searchRecepie = async (query) => {
    useLoading(true);
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    // console.log(data.hits);
    useLoading(false);
    useRecipeList(data.hits);
  };
  return (
    <>
      {LoadingBar == true ? (
        <Loading />
      ) : (
        <div className="App">
          <header className="App-header">
            <SearchBar
              inputRef={inputRef}
              searchBtn={searchBtn}
              value={"Search"}
            />
            <div className="Wrapper">
                <FoodIntro RecipeList={RecipeList} />
            </div>
          </header>
        </div>
      )}
    </>
  );
};

export default RecipePage;
