import React from 'react'
import SideNav from '../elements/Navbar'
import ImageSlider from '../elements/imageSlider';
const Dashboard = () => {

    const images = [
        "https://thefamilydoctor.co.in/wp-content/uploads/2020/01/I2-e1578898118449.png",
        "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=360"
        // Add more image URLs here as needed
      ];
    
  return (


    <div>
        
        <ImageSlider images={images} />
    </div>
  )
}

export default Dashboard;