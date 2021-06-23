

import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DummyMeals=[
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies anime lover should try this',
      price: 3.7,
    },
    {
      id: 'm2',
      name: 'Noodles',
      description: 'A soucy noodles!!!',
      
      price: 2.5,
    },
    {
      id: 'm3',
      name: 'Pizza',
      description: 'Italian, all ones favourite',
      price: 4.2,
    },
    {
      id: 'm4',
      name: 'Samosa',
      description: 'delecious Indian snack',
      price: 0.8,
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

