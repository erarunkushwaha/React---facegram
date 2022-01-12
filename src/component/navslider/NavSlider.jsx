import CircleAvatar from '../avatar/CircleAvatar';
import './navslider.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


const NavSlider = () => {
    return (

     

         <div className='navslider-cotnainer'>
            
               <Swiper
          breakpoints={{
          
            320: {
           
              slidesPerView: 5,
              marginLeft:5
          

            },
          
            768: {
          
              slidesPerView: 7,
           
             
            },
            1024: {
            
                slidesPerView: 8,
              },
          }}
       
      
          spaceBetween={1}
    
        // slidesPerView={8}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide> <CircleAvatar url={"https://image.shutterstock.com/image-photo/profile-serious-young-man-on-260nw-131728943.jpg"} name="ammy"/></SwiperSlide>
        <SwiperSlide> <CircleAvatar url={"https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"} name="geeksfor" /></SwiperSlide>
        <SwiperSlide> <CircleAvatar url={"https://i.pinimg.com/originals/4d/bd/02/4dbd0246dfe6443c513491e17f79af0e.jpg"} name="kolargold" /></SwiperSlide>
        <SwiperSlide>  <CircleAvatar url={"https://www.imagesplatform.com/mohsin_site/uploads/2021_04_28/handsome-boys-profile-pic.jpg"} name="hancyrock" /></SwiperSlide>
        <SwiperSlide> <CircleAvatar url={"https://image.shutterstock.com/image-photo/profile-serious-young-man-on-260nw-131728943.jpg"} name="ammy"/></SwiperSlide>
        <SwiperSlide> <CircleAvatar url={"https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"} name="geeksfor" /></SwiperSlide>
        <SwiperSlide> <CircleAvatar url={"https://i.pinimg.com/originals/4d/bd/02/4dbd0246dfe6443c513491e17f79af0e.jpg"} name="kolargold" /></SwiperSlide>
        <SwiperSlide>  <CircleAvatar url={"https://www.imagesplatform.com/mohsin_site/uploads/2021_04_28/handsome-boys-profile-pic.jpg"} name="hancyrock" /></SwiperSlide>
        <SwiperSlide> <CircleAvatar url={"https://image.shutterstock.com/image-photo/profile-serious-young-man-on-260nw-131728943.jpg"} name="ammy"/></SwiperSlide>
        <SwiperSlide> <CircleAvatar url={"https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"} name="geeksfor" /></SwiperSlide>
        <SwiperSlide> <CircleAvatar url={"https://i.pinimg.com/originals/4d/bd/02/4dbd0246dfe6443c513491e17f79af0e.jpg"} name="kolargold" /></SwiperSlide>
        <SwiperSlide>  <CircleAvatar url={"https://www.imagesplatform.com/mohsin_site/uploads/2021_04_28/handsome-boys-profile-pic.jpg"} name="hancyrock" /></SwiperSlide>
        
       
        
      </Swiper>
      </div>
    )
}

export default NavSlider
