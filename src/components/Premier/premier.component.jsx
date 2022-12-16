import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/poster.component";

export const Premier=()=>{

    const settings={
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [{
            breakpoint: 1024,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 2,
                infinity: true,
            },
        },
        {
            breakpoint: 768,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
            },
        },
        {
            breakpoint: 480,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        ]
    };

    const PremierImages=[
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00076943-smkpwvadsk-portrait.jpg",
            alt: "maverick",
            title:"Top Gun: Maverick",
            subtitle:"english",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00076943-smkpwvadsk-portrait.jpg",
            alt: "maverick",
            title:"Top Gun: Maverick",
            subtitle:"english",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00076943-smkpwvadsk-portrait.jpg",
            alt: "maverick",
            title:"Top Gun: Maverick",
            subtitle:"english",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00076943-smkpwvadsk-portrait.jpg",
            alt: "maverick",
            title:"Top Gun: Maverick",
            subtitle:"english",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00076943-smkpwvadsk-portrait.jpg",
            alt: "maverick",
            title:"Top Gun: Maverick",
            subtitle:"english",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00076943-smkpwvadsk-portrait.jpg",
            alt: "maverick",
            title:"Top Gun: Maverick",
            subtitle:"english",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00076943-smkpwvadsk-portrait.jpg",
            alt: "maverick",
            title:"Top Gun: Maverick",
            subtitle:"english",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00076943-smkpwvadsk-portrait.jpg",
            alt: "maverick",
            title:"Top Gun: Maverick",
            subtitle:"english",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00076943-smkpwvadsk-portrait.jpg",
            alt: "maverick",
            title:"Top Gun: Maverick",
            subtitle:"english",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00076943-smkpwvadsk-portrait.jpg",
            alt: "maverick",
            title:"Top Gun: Maverick",
            subtitle:"english",
        },
    ];

    return(
        <>
            <Slider {...settings}>
                {PremierImages.map((image)=>(
                    <Poster {...image}/>
                ))}
            </Slider>
        </>
    );
};

export default Premier;