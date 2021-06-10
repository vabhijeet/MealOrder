

import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DummyMeals=[
    {
      id: 'm1',
      name: 'Sushi',
<<<<<<< HEAD
      description: 'Finest fish and veggies anime lover should try this',
=======
      description: 'Finest fish and veggies',
>>>>>>> 5633117d7760823d1ab87535bee56d5cab102343
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Noodles',
      description: 'A soucy noodles!!!',
      
      price: 16.5,
    },
    {
      id: 'm3',
<<<<<<< HEAD
      name: 'Pizza',
      description: 'Italian, all ones favourite',
=======
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
>>>>>>> 5633117d7760823d1ab87535bee56d5cab102343
      price: 12.99,
    },
    {
      id: 'm4',
<<<<<<< HEAD
      name: 'Samosa',
      description: 'delecious Indian snack',
=======
      name: 'Green Bowl',
      description: 'Healthy...and green...',
>>>>>>> 5633117d7760823d1ab87535bee56d5cab102343
      price: 18.99,
    },
  ];

const AvailableMeals=()=>{
    const mealsList = DummyMeals.map((meal) => <MealItem
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

