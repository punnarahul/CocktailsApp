import React, { useContext, useEffect, useState } from "react";

const initialfetch =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
const searchfetch = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppProvider = React.createContext();

const Context = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const setter = (x) => {
    setSearchTerm(x);
  };

  useEffect(() => {
    const fetcher = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${searchfetch}${searchTerm}`);
        const tempdata = await response.json();
        const temparr = [];
        tempdata.drinks.map((item) => {
          const {
            idDrink: id,
            strAlcoholic: isalcoholic,
            strDrinkThumb: image,
            strGlass: title,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strInstructions,
          } = item;
          temparr.push({
            id,
            isalcoholic,
            image,
            title,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strInstructions,
          });
        });
        setData(temparr);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setData([])
      }
    };
    fetcher();
  }, [searchTerm]);

  useEffect(() => {
    const fetcher = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(initialfetch);
        const tempdata = await response.json();
        const temparr = [];
        tempdata.drinks.map((item) => {
          const {
            idDrink: id,
            strAlcoholic: isalcoholic,
            strDrinkThumb: image,
            strGlass: title,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strInstructions,
          } = item;
          temparr.push({
            id,
            isalcoholic,
            image,
            title,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strInstructions,
          });
        });
        setData(temparr);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetcher();
  }, []);

  return (
    <AppProvider.Provider value={{ isLoading, data, searchTerm, setter }}>
      {children}
    </AppProvider.Provider>
  );
};

export const useCustomContext = () => {
  const { isLoading, data,setter } = useContext(AppProvider);
  return { isLoading, data ,setter};
};

export default Context;
