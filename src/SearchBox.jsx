import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";


export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d8174ac7d26b2b61acf4c23be4894e34";

    let getWeatherInfo = async () => {
      try{
        let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      }
      console.log(result);
      return result;
      }catch(err) {
       throw err;

      }
    }


   


    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
       try{
         evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo= await getWeatherInfo();
        updateInfo(newInfo);

       }catch(err){
         setError(true);
       }
       

    }


    return(
    <div>
        <h3>Search for the Weather</h3>
        <form onSubmit={handleSubmit}>
            <TextField id="city"
             label="city Name" 
             variant="outlined" 
             required 
             value={city} 
             onChange={handleChange}
             
            />
            <br></br><br></br>
            <Button variant="contained" type="submit"style={{marginBottom: "25px"}}>
                Search
            </Button>
            {error && <p style={{color:"red"}}>No such place exist in our API</p>}
        </form>
    </div>)
}