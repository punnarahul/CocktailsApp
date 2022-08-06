import React from "react";
import Loading from "../Components/Loading";
import FormField from "../Components/FormField";
import { useCustomContext } from "../Context";
import { Link } from "react-router-dom";

const Home = () => {
  
  // console.log(data, isLoading);
  return <>
    <div className="caon bg-cyan-200 h-screen ">
    <FormField></FormField>
    <Componenter></Componenter>
    </div>
  </>
};


const Componenter=()=>{
  const { isLoading, data } = useCustomContext();
  if (isLoading) {
    return <Loading></Loading>;
  } else {
    return (
      <>
        <div className="conatin bg-cyan-200">
        </div>
        {
          data.length===0?<h1 className="text-center text-3xl font-bold text-black">No matches found</h1>:<div className="xyz bg-cyan-200">
          <div className="container flex flex-wrap justify-between">
            {data.map((item) => {
              const { id, image, title } = item;
              return (
                <Link to={`cocktail/${id}`} 
                  key={id}
                  className="element "
                >
                  <div className="c flex flex-col ml-4 mr-2 my-4 px-4 py-4 h-50 w-50 text-xl font-mono  text-center text-cyan-600 bg-white rounded-md">
                  <h1 className=" mb-2">{title}</h1>
                  <img src={image} alt="" className="h-32 w-52 rounded-sm" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        }
      </>
    );
  }
}

export default Home;
