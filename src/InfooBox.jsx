import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';

export default function InfoBox( {info}){
    const INIT_URL = "https://images.unsplash.com/photo-1750779940698-f24b28d76fd9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL="https://media.istockphoto.com/id/1205289672/photo/majestic-bright-sunrise-over-ocean.jpg?s=1024x1024&w=is&k=20&c=Iu120uS9o3MkPOOVK7dmZAZqugnaFEgO8Tgzcm41Y8k="
    let COLD_URL="https://plus.unsplash.com/premium_photo-1670963964733-c4b2ea8a79be?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let RAINY_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8="
    


    return(
        <div>
            
             <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={info.humidity>80 ? RAINY_URL:info.temp>15 ? HOT_URL: COLD_URL}
              title="green iguana"
            />
         <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {info.city}{info.humidity>80 ?<CloudySnowingIcon/>:info.temp>15 ? <SunnyIcon/>: AcUnitIcon}
           </Typography>
           <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature = {info.temp}&deg;c</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather can be Described as <i>{info.weather}</i> and Feels like {info.feelslike}&deg;C</p>
          
          </Typography>
          </CardContent>
         </Card>
        </div>
    )
}