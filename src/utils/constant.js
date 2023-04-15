import greekSalad from '../assets/Salad.jpg';
import bruschetta from '../assets/Bruchetta.svg';
import LemonDessert from '../assets/LemonDessert.jpg';

export const initialState = {
    timeSlot: "",
    setTimeSlot: () => { },
    details: {},
    setDetails: () => { },
    availableSlot: [],
    resetForm: ()=> {}
}

export const specialsData = [
    {
      img: greekSalad,
      title: 'Greek Salad',
      price: "12.99",
      description:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      img: bruschetta,
      title: 'Bruschetta',
      price: "5.99",
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    },
    {
      img: LemonDessert,
      title: 'Lemon Dessert',
      price: "5.00",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];
  
export const  events = ["Birthday", "Anniversary"]
