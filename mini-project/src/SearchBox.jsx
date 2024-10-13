import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("") ;
    let [error, setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather" ;
    let API_KEY = "f16da179d5301d1bd8a518a08c8c98b4" ;

    let getWheatherInfo = async() => {
        try{

        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json() ;
        console.log(jsonResponse) ;
        let result = {
            city: city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        }
        console.log(result) ;
        return result ;
        }catch(err){
            throw err ;
        }
    }

    
    let handleChange = (event) => {
        setCity(event.target.value) ;
    }

    let handleSubmit = async(event) => {
        try{
            event.preventDefault() ;
            console.log(city) ;
            setCity("") ;
            let newInfo = await getWheatherInfo() ;
            updateInfo(newInfo) ;
        }catch(err){
            setError(true) ;
        }
    }

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField 
                id="city" 
                label="City name" 
                variant="outlined" 
                required
                value={city}
                onChange={handleChange}/>
                
                <br></br><br />

                <Button 
                    variant="contained" 
                    type='submit'>
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No such place exists !</p>}
            </form>
        </div>
    )
}