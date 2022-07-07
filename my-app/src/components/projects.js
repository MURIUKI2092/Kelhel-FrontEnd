import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import "../styles/projects.css"


import image1 from '../images/projects/img1.jpg'
import image2 from '../images/projects/img2.jpg'
import image3 from '../images/projects/img3.jpg'
import image4 from '../images/projects/img4.jpg'
import image5 from '../images/projects/img5.jpg'
import image6 from '../images/projects/img6.jpg'
import image7 from '../images/projects/img7.jpg'
import image8 from '../images/projects/img8.jpg'
import image9 from '../images/projects/img9.jpg'
import image10 from '../images/projects/img10.jpg'
import image11 from '../images/projects/img11.jpg'
import image12 from '../images/projects/img12.jpg'
import Slider from '../sliders/homeSlider';
const myProjects =[
    {
        name:"Project1",
        Desc:"lorem ipsum 40",
        pic:`${image1}`
    },
    {
        name:"Project1",
        Desc:"lorem ipsum 40",
        pic:`${image2}`
    },
    {
        name:"Project1",
        Desc:"lorem ipsum 40",
        pic:`${image3}`
    },
    {
        name:"Project1",
        Desc:"lorem ipsum 40",
        pic:`${image4}`
    },
    {
        name:"Project1",
        Desc:"lorem ipsum 40",
        pic:`${image5}`
    },
    {
        name:"Project1",
        Desc:"lorem ipsum 40",
        pic:`${image6}`
    },
    {
        name:"Project1",
        Desc:"lorem ipsum 40",
        pic:`${image7}`
    },
    {
        name:"Project1",
        Desc:"lorem ipsum 40",
        pic:`${image8}`
    },
    {
        name:"Project1",
        Desc:"lorem ipsum 40",
        pic:`${image9}`
    },
    {
        name:"Project1",
        Desc:"lorem ipsum 40",
        pic:`${image10}`
    },
    {
        name:"Project1",
        Desc:"lorem ipsum 40",
        pic:`${image11}`
    },
    {
        name:"Project1",
        Desc:"lorem ipsum 40",
        pic:`${image12}`
    },
    {
        name:"Project1",
        Desc:"lorem ipsum 40",
        pic:`${image10}`
    },
    {
        name:"Project1",
        Desc:"lorem ipsum 40",
        pic:`${image11}`
    },
    {
        name:"Project1",
        Desc:"lorem ipsum 40",
        pic:`${image12}`
    },
]

const myProjo =  myProjects.map((projo)=>{
    return(
       
          <Card sx={{ width: 200,marginTop:5,padding:0,marginLeft:3,marginRight:0,height:300 }} className="cards">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={projo.pic}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {projo.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {projo.Desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>


    
  )
    
})

const Projects = () => {
  return (
    <section className='projects'>
        <section className='aboutImg'>
      <Slider/>
      </section >
      <h2 className='myTitle'>Our Featured Projects</h2>
      <div className='projectsDiv'>
            {myProjo}
      </div>
    </section>
  )
}

export default Projects