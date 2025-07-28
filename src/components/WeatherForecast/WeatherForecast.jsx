const WeatherForecasts = (props) => {
  // const {day,img,imgAlt,conditions,time}=props

  // return (
  //   <ul>
  //     {props.weatherForecasts.map((forecast) => (
  //       <li>
  //         <h3>{forecast.day}</h3>
  //         <img src={forecast.img} alt={forecast.imgAlt} />
  //         <span>conditions: {forecast.conditions}</span>
  //         <span>Time: {forecast.time}</span>
  //       </li>
  //     ))}
  //   </ul>
  // );
  
   return (
    <>
      {props.weatherForecasts.map((weather ) => (
        <div className="weather" >
          <h2>{weather.day}</h2>
          <img src={weather.img} alt={weather.imgAlt} />
          <p><span>conditions: </span>{weather.conditions}</p>
          <p><span>time: </span>{weather.time}</p>
        </div>
      ))}
    </>
  );

    
  
  
 
};
export default WeatherForecasts;
