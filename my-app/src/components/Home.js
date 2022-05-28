import React from 'react'
import "../styles/home.css";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='home'>
      <div className='imgSection'>
        <img
        src='https://www.shivconstruction.co.ke/wp-content/uploads/2017/02/machinery.jpg'
        alt='img here'
        />
      </div>
      <section className='moreInfo'>
        
        <div className='moreInfoImg'>
        <h3>Kelhel Construction Company</h3>
          <img
          src='https://images.unsplash.com/photo-1612945533817-805cc7c32720?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774'
          alt="more info"
          />
          <div className='moreInfoWords'>
          <p>
          When it comes down to it, 90% of the prospective developers in a room will have the requisite certifications and will be competent in all of the requested technologies. Where they fail next to the other 10% of their peers is in the soft skill department. The 10% who actually have the necessary 
          soft skills will be those who move on to a second interview.</p>
          <Link to="/about" className='links'> <Button variant="outlined" sx={{mt:2,ml:30,width:150}}>MORE</Button></Link>
         

          </div>

        </div>
        

      </section>
      <section className='ourProducts'>
        <h3>OUR PRODUCTS</h3>
        <section className='product'>
        <Card sx={{ maxWidth: 345,marginTop:5,padding:0,marginLeft:5,height:250 }} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
     
      <Card sx={{ maxWidth: 345,marginTop:5,padding:0,marginLeft:5,height:250 }} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
    <Card sx={{ maxWidth: 345,marginTop:5,padding:0,marginLeft:5,height:250 }} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
      <Card sx={{ maxWidth: 345,marginTop:5,padding:0,marginLeft:5,height:250 }} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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

        </section>
        <div className='ourServices'>
        <h3>OUR SERVICES</h3>
          <section className='service'>
          <Card sx={{ maxWidth: 345,marginTop:5,padding:0,marginLeft:5,height:250 }} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
     
      <Card sx={{ maxWidth: 345,marginTop:5,padding:0,marginLeft:5,height:250 }} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
    <Card sx={{ maxWidth: 345,marginTop:5,padding:0,marginLeft:5,height:250 }} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
      <Card sx={{ maxWidth: 345,marginTop:5,padding:0,marginLeft:5,height:250 }} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
    </div>
  )
}

export default Home