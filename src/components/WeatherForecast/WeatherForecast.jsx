const WeatherForecasts=(props)=>{
// const {day,img,imgAlt,conditions,time}=props

  return(
    <ul>
      {props.weatherForecasts.map((forecast,index)=>
      <li key={index}>
      <h3>{forecast.day}</h3>
      <img src={forecast.img} alt={forecast.imgAlt} />
      <p>conditions: {forecast.conditions}</p>
      <p>Time: {forecast.time}</p>
    </li>
      )}
    </ul>
    
  )
}
export default WeatherForecasts