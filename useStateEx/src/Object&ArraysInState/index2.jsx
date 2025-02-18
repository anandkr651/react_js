import { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }
  // OR

  // function updateColor(){
  //   setCar({...car, color: "blue"});
  // }

  return (
    <div className="box my-6">
        <h1 className="text-green-300 ">both the update method is different.</h1>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
        className="my-4"
      >Blue</button>
    </div>
  )
}
export default Car