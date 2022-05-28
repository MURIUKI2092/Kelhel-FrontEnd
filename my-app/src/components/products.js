import React from 'react'
import "../styles/product.css"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
const Products = () => {
  return (
    <div  className='myProducts'>
        <section className='productImg'>
          <img
          src='https://metagroupafrica.com/wp-content/uploads/2020/07/shutterstock_540355186-1536x1022.jpg'
          alt='img here'
          />
        </section>
        <div className='productsTitle'>
        <h2><i>Our Products</i></h2>
        </div>
        <section className='productsInfo'>
        
        <Card sx={{ maxWidth: 400,marginTop:5,padding:0,marginLeft:6,marginRight:3,height:500 }} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image="https://www.shivconstruction.co.ke/wp-content/uploads/2017/02/machinery.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 400,marginTop:5,padding:0,marginLeft:6,marginRight:3,height:500 }} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image="https://www.shivconstruction.co.ke/wp-content/uploads/2017/02/machinery.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 400,marginTop:5,padding:0,marginLeft:6,marginRight:0,height:500 }} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image="https://www.shivconstruction.co.ke/wp-content/uploads/2017/02/machinery.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </section>
        

    </div>
  )
}

export default Products