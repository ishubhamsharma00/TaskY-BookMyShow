import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
//config
import TempPosters from "../config/TempPosters.config";



const HomePage=()=>{
    return(
        <>
            <div className="flex flex-col gap-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-gray-800 my-3">
                        The best of Entertainment
                    </h1>
                    <EntertainmentCardSlider/>
                </div>
                <div className="bg-bms-800 py-12">
                    <div className="container mx-auto px-4 flex flex-col gap-3">
                        <div className="hidden md:flex">
                            <div>
                                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                                alt="premier_image"
                                className="w-full h-full"/>
                            </div>
                        </div>
                        <PosterSlider 
                            images={TempPosters} 
                            title="Premiers" 
                            subtitle="Brand new releaases every Friday" 
                            isDark
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 my-8">
                <PosterSlider 
                    images={TempPosters} 
                    title="Online Streaming Events" 
                    isDark= {false}
                />
            </div>

            <div className="container mx-auto px-4 my-8">
                <PosterSlider 
                    images={TempPosters} 
                    title="OutDoor Events" 
                    isDark= {false}
                />
            </div>
        </>
    );
};

export default HomePage;