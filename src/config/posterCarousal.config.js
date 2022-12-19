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

export default settings;
