import React from "react";
import 'tailwindcss/tailwind.css';

import Counter from "./component/Counter";
import Props from "./component/Props";
import ColourChange from "./component/ColourChange";
import PasswordGenratour from "./component/PasswordGenratour";
import ToDo from "./component/ToDo";

function App() {
  const Obj = {
    name: 'John',
    age: 30,
    city: 'New York'

  }
  return (
    <div className="APP">
    {/* <Counter /> */}
    {/* <Props Data ={Obj} /> */}
    {/* <ColourChange /> */}
    {/* < PasswordGenratour /> */}
    <ToDo />
    </div>
  );
}

export default App;
