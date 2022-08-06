import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from '../Components/Loading'


const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleItem = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const itemfetcher = async () => {
      const response = await fetch(`${url}${id}`);
      const data1 = await response.json();
      // const {idDrink:id1,strAlcoholic:isalcoholic,strDrinkThumb:image,strGlass:title,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strInstructions}=data1.drinks
      const {
        idDrink: idval,
        strAlcoholic: isalcoholic,
        strDrinkThumb: image,
        strGlass: ishot,
        strGlass:title,
        strIngredient1,
        strIngredient2,
        strIngredient3,
      } = data1.drinks[0];
      setData({
        idval,
        isalcoholic,
        image,
        ishot,
        title,
        strIngredient1,
        strIngredient2,
        strIngredient3,
      });
      // console.log(data)
    };
    console.log(data);
    itemfetcher();
  }, []);

if(!data)
{
  return <Loading></Loading>
}
else{
  return <>
    <div className="container flex flex-col align-middle justify-center text-center text-xl font-serif text-cyan-700 space-y-3">
    <h1>{data.title}</h1>
      <img src={data.image} alt=""  className="h-44 w-36 mx-auto"/>
      <h2><span className="bg-green-200 text-black">is Alcoholic : </span> {"  "}{data.isalcoholic} </h2>
      <h2>Type : {data.ishot}</h2>
      {data.strIngredient1?<h1>Ingredients1 : {data.strIngredient1}</h1>:""}
      {data.strIngredient2?<h1>Ingredients2 : {data.strIngredient2}</h1>:""}
      {data.strIngredient3?<h1>Ingredients3 : {data.strIngredient3}</h1>:""}
    </div>
  </>
}


  // itemfetcher()
};

export default SingleItem;
