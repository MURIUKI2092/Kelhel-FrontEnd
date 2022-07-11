import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import "../styles/sand.css"
const mySands =[
  {
    name:"Dust",
    image:"https://previews.123rf.com/images/gefufna/gefufna1506/gefufna150600608/41489292-piles-of-building-construction-sand-sand-for-construction-.jpg",
    description:"(0-6mm)"
  },
  {
    name:"Dust",
    image:"https://previews.123rf.com/images/sutichak/sutichak1406/sutichak140600533/29371643-piles-sand-and-gravel-for-construction.jpg",
    description:"(6-10mm),"
  },
  {
    name:"Dust",
    image:"https://5.imimg.com/data5/IF/NH/UJ/SELLER-2981654/river-sand-for-construction-500x500.jpeg",
    description:"(10-14mm)"
  },
  {
    name:"Dust",
    image:"https://5.imimg.com/data5/IF/NH/UJ/SELLER-2981654/river-sand-for-construction-500x500.jpeg",
    description:"(10-22mm) mix"
  },
  {
    name:"Dust",
    image:"https://5.imimg.com/data5/IF/NH/UJ/SELLER-2981654/river-sand-for-construction-500x500.jpeg",
    description:"(14-22mm)"
  },
  {
    name:"Road Chippings",
    image:"https://previews.123rf.com/images/sutichak/sutichak1406/sutichak140600533/29371643-piles-sand-and-gravel-for-construction.jpg",
    description:"(6-10mm),"
  },
  {
    name:"Double Crush",
    image:"https://5.imimg.com/data5/IF/NH/UJ/SELLER-2981654/river-sand-for-construction-500x500.jpeg",
    description:"(10-14mm)"
  },
  {
    name:"Double Crush",
    image:"https://5.imimg.com/data5/IF/NH/UJ/SELLER-2981654/river-sand-for-construction-500x500.jpeg",
    description:"(14-20mm)"
  },
  {
    name:"Crusher Run",
    image:"https://5.imimg.com/data5/IF/NH/UJ/SELLER-2981654/river-sand-for-construction-500x500.jpeg",
    description:"(0-45mm)"
  },
]
const myArr = mySands.map((sand)=>{
  return(
    <>
  
     <Card sx={{ minWidth:400,marginTop:5,padding:0,marginLeft:5,marginRight:0,height:400,display:"flex" ,flexDirection:"row",marginBottom:5}} className="sands">
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={sand.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {sand.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {sand.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
   
  )
  
  
})
const Aggregates = () => {
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

export default Aggregates