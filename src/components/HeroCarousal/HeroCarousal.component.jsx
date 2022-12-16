import React from "react";
import HeroSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal=()=>{

    const settings = {
        arrows: true,
        centerMode: true,
        centerPadding: "60 px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1.7,
        slidesToScroll: 1
      };

      const images=[
        "https://images.unsplash.com/photo-1556186221-acd8a5eb3079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "https://images.unsplash.com/photo-1641805963238-a8d4717575d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1670703972245-3253c777c413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1670100054273-7371cf0816e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1667574201639-1f19feaff971?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    ];

    return(
        <>
            <HeroSlider {...settings}>
            {images.map((image)=>(
                    <div className="w-20 h-80">
                        <img src={image} 
                        alt="testing" 
                        className="w-full h-full"
                        />
                    </div>
                ))}
            </HeroSlider>
        </>
    );
};

export default HeroCarousal;