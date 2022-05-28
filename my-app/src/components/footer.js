import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "../styles/footer.css"

export const Footer = () => {
  return (
    <   div className='footer'>
       
      
        <div className='copyWriteInfo'>
          <p>&copy;{new Date().getFullYear()} Kelhel Limited. All Rights Reserved. </p>

        </div>
        <div className='socialsInfo'>
        <FacebookIcon className='footerIcons'/>
        <InstagramIcon className='footerIcons'/>
        <PinterestIcon className='footerIcons'/>
        <TwitterIcon className='footerIcons'/>
        <WhatsAppIcon  className='footerIcons'/>

        </div>
      
    </div>
  )
}
