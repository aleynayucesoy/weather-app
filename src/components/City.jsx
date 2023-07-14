import React from 'react'

const City = ({city}) => {
    console.log(city);
  return (
    <div>
        <h1>{city.main.temp}</h1>
        <h2>{city.name}</h2>
        <p>{city.weather[0].main}</p>
    </div>
  )
}

export default City