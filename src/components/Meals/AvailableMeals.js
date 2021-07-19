
import { useEffect, useState } from 'react';
import React from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';



// const DummyMeals=[
//     {
//       id: 'm1',
//       name: 'Sushi',
//       description: 'Finest fish and veggies anime lover should try this',
//       price: 3.7,
//     },
//     {
//       id: 'm2',
//       name: 'Noodles',
//       description: 'A soucy noodles!!!',
      
//       price: 2.5,
//     },
//     {
//       id: 'm3',
//       name: 'Pizza',
//       description: 'Italian, all ones favourite',
//       price: 4.2,
//     },
//     {
//       id: 'm4',
//       name: 'Samosa',
//       description: 'delecious Indian snack',
//       price: 0.8,
//     },
//   ];

const AvailableMeals=()=>{
  const [meals,SetMeals]=useState([]);
  const [isLoding,setIsLoding]=useState(true);
  const [httpError, setHttpError]=useState(null);
    useEffect(()=>{
      const fetchMeals = async ()=>{
        const response=await fetch('https://foody-order-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
        const responseData=await response.json();
        const DummyMeals=[];
        for(const key in responseData){
          DummyMeals.push({
            id:key,
            name:responseData[key].name,
            discription:responseData[key].discription,
            price:responseData[key].price
          })
        }
        SetMeals(DummyMeals);
        setIsLoding(false);
      };
      fetchMeals().catch(
        error=>{
          setIsLoding(false);
          setHttpError(error.message);
        }
      );
    },[]);

    if(isLoding) return <div>Loding...</div>

    if(httpError) return (<section className={classes.err}>
      <h2>{httpError}</h2>
    </section>)
    const mealsList = meals.map((meal) => <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        discription={meal.description}
        price={meal.price}
    />);
    


    return (
         <section className={classes.meals}>
             
              <Card>
              <ul>
              {mealsList}
              </ul>
              </Card>
             
         </section>
    );
};
export default AvailableMeals;

