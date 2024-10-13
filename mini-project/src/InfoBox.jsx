import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css" ;

export default function InfoBox({info}){
    const INIT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMDWzskq6wvbg4H_3a78om75ncJBDWeRX1Q&s"
    
    const HOT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20x86bmR7ZV4bfVjx060bE70Z3G0mmhxIlg&s" ;
    const COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPm0vmQfAdqFhCJOsmDrVHQJ0SKwU-uv0nUQ&s" ;
    const RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfPl9ZTNo_8xhus4x9VuJriO-DD1z2Nw9NHg&s" ;
    
    return(
        <div className="InfoBox">
            <div className="CardContainer">
            <Card sx={{ maxWidth: 345 }}> 
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL 
          }
          title="green iguana"
        />
        <CardContent> 
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{" "}{info.humidity > 80 ? <ThunderstormIcon/>: info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/> }
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temprature = {info.temp}&deg;C</p>
            <p>humidity = {info.humidity}</p>
            <p>the weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
            <p>tempMin = {info.tempMin}&deg;C</p>
            <p>tempMax = {info.tempMax}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
      </div>
        </div>
    )
}