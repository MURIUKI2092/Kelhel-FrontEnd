import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import "../styles/sand.css"
const myStones =[
  {
    name:"Machine Cut",
    image:"https://previews.123rf.com/images/gefufna/gefufna1506/gefufna150600608/41489292-piles-of-building-construction-sand-sand-for-construction-.jpg",
    description:"Grey, Yellow/Brown"
  },
  {
    name:"Machine Cut Waste (fts)",
    image:"https://previews.123rf.com/images/sutichak/sutichak1406/sutichak140600533/29371643-piles-sand-and-gravel-for-construction.jpg",
    description:""
  },
  {
    name:"Quarry (fts)",
    image:"https://5.imimg.com/data5/IF/NH/UJ/SELLER-2981654/river-sand-for-construction-500x500.jpeg",
    description:"Soft and Hard stones"
  },
  {
    name:"HardCore (per truck)",
    image:"https://5.imimg.com/data5/IF/NH/UJ/SELLER-2981654/river-sand-for-construction-500x500.jpeg",
    description:"Lorem Ipsum"
  },
  
]
const myArr = myStones.map((stone)=>{
  return(
    <>
  
     <Card sx={{ minWidth:400,marginTop:5,padding:0,marginLeft:5,marginRight:0,height:400,display:"flex" ,flexDirection:"row",marginBottom:5}} className="sands">
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={stone.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {stone.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {stone.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
   
  )
  
  
})
const Stones = () => {
  return (
    <section className='sandSection'>
    <div className='sandHeader'>
    <img
        src=' https://metagroupafrica.com/wp-content/uploads/2020/11/shutterstock_141530473-1536x1024.jpg'
        alt='img here'
        />
    </div>
    <div className="sand">
        
    
        {myArr}
      </div>
    </section>
   
  )
}

export default Stones