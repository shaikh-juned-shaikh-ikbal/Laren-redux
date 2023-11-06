import React from "react";
import 'tailwindcss/tailwind.css';

import Counter from "./component/Counter";
import Props from "./component/Props";
import ColourChange from "./component/ColourChange";
import PasswordGenratour from "./component/PasswordGenratour";


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
    
    </div>
  );
}

export default App;
