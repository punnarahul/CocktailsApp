import React, { useReducer } from "react";
import data from "./data";
const Component = () => {
  const manipulator = (state, action) => {
      if(action.type==="Add")
      {
          return state.map((item)=>{
            if(item.id===action.id){
                return {id:item.id,name:item.name,price:item.price,quantity:item.quantity+1,image:item.image}
            }
            return item;
          })
      }
      else if(action.type==="Remove")
      {
        const value=state.find((item)=>{
            return item.id===action.id
        })
        console.log(value)
        if(value.quantity===1)
        {
            return state.filter((item)=>{
                if(item.id!==action.id){
                    return item;
                }
              })
        }
        else{
            return state.map((item)=>{
                if(item.id===action.id){
                    return {id:item.id,name:item.name,price:item.price,quantity:item.quantity-1,image:item.image}
                }
                return item;
              })
        }
      }
      return new Error()
  };
  const [cart, dispatch] = useReducer(manipulator, data);
  return (
    <div className="main bg-slate-300 min-h-screen">
    {console.log(cart)}
      <div className="title text-center  text-cyan-500 font-mono text-4xl">
        Cart
      </div>
      <div className=" items flex flex-col justify-center align-middle my-2 py-2 px-2">
        {cart.map((item) => {
          return (
            <div key={item.id} className="item mx-auto bg-white h-20 w-80 my-2 font-serif flex justify-between">
              <div className="x">
                <h1 className=" text-left pl-8 pt-4 text-cyan-800 font-bold">
                  {item.name} :
                </h1>
              </div>
              <div className="y flex flex-col pr-8 ">
                <button onClick={()=>dispatch({type:'Add',id:item.id})}>r</button>
                <h1 className=" text-cyan-800 font-bold">{item.quantity}</h1>
                <button onClick={()=>dispatch({type:'Remove',id:item.id})}>l</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Component;
