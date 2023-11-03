import React from 'react'

const Props = (props) => {
    const {Data} = props;
  return (
    <div>
      <h3>Name:-{Data.name}</h3>
      <h3>age:-{Data.age}</h3>
      <h3>city:-{Data.city}</h3>
    </div>
  )
}

export default Props

 