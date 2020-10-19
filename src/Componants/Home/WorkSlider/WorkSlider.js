import React from 'react';
import './WorkSlider.css';
import workImageOne from '../../../images/carousel-1.png';
import workImageTwo from '../../../images/carousel-2.png';
import workImageFour from '../../../images/carousel-4.png';
import workImageFive from '../../../images/carousel-5.png';

const WorkSlider = () => {
    return (
        <div className = "work-slider-main p-5" id = "portfolio">
            <h2 className = "p-5 text-white">Here are some of our works</h2>
            {/* <!--Carousel Wrapper--> */}
                <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
                {/* <!--Indicators--> */}
                <ol className="carousel-indicators">
                    <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
                    <li data-target="#multi-item-example" data-slide-to="1"></li>
                </ol>
                {/* <!--/.Indicators--> */}

                {/* <!--Slides--> */}
                <div className="carousel-inner align-items-center" role="listbox">

                    {/* <!--First slide--> */}
                    <div className="carousel-item active">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-2">
                                <img className="card-img-top" src={workImageOne} alt="image one"/>
                            </div>
                        </div>

                        <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                                <img className="card-img-top" src={workImageFour} alt="image two"/>
                            </div>
                        </div>

                        <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                                <img className="card-img-top" src= {workImageTwo} alt="image three"/>
                            </div>
                        </div>
                    </div>

                    </div>
                    {/* <!--/.First slide--> */}

                    {/* <!--Second slide--> */}
                    <div className="carousel-item">

                    <div className="row">
                        <div className="col-md-4">
                        <div className="card mb-2">
                            <img className="card-img-top" src= {workImageFour} alt="image four"/>
                        </div>
                        </div>

                        <div className="col-md-4 clearfix d-none d-md-block">
                        <div className="card mb-2">
                            <img className="card-img-top" src={workImageFive} alt="image five"/>
                        </div>
                        </div>

                        <div className="col-md-4 clearfix d-none d-md-block">
                        <div className="card mb-2">
                            <img className="card-img-top" src={workImageOne} alt="image six"/>
                        </div>
                        </div>
                    </div>

                    </div>
                    {/* <!--/.Second slide--> */}

                </div>
                {/* <!--/.Slides--> */}

                </div>
                {/* <!--/.Carousel Wrapper--> */}
            </div>
    );
};

export default WorkSlider;