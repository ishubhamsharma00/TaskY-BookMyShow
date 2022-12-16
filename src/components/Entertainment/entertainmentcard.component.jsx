import React from "react";
import Slider from "react-slick";

const EntertainmentCard=(props)=>{
    return(
        <>
            <div className="w-full h-30 px-2">
                <img className="w-full h-full rounded-xl" src={props.src} alt="entertainment image"/>
            </div>
        </>
    );
};

const EntertainmentCardSlider=()=>{
    const EntertainmentImage=[
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/xmas-and-nye-web-collection-202212160422.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/stay-fit-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/upskill-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/interactive-games-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202211140440.png",
    ];

    const settings={
        infinity: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [{
            breakpoints: 1024,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 2,
                infinity: true,
            },
        },
        {
            breakpoints: 768,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
            },
        },
        {
            breakpoints: 480,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        ]
    };

    return(
        <>
            <Slider {...settings}>
                {EntertainmentImage.map((image)=>(
                    <EntertainmentCard src={image}/>
                ))}
            </Slider>
        </>
    );
};

export default EntertainmentCardSlider;