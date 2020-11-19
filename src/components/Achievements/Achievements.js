import React from 'react';
import happy from '../../images/Illustration/happy@2x.png';
import marketing from '../../images/Illustration/marketing@2x.png';
import surface from '../../images/Illustration/surface1@2x.png';
import transporting from '../../images/Illustration/transportation@2x.png';
import './Achievements.css'
const Achievements = () => {
    return (
        <section className="achievement  mb-5 pb-5" id="ourTeam">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-5 col-sm-12">
                        <div className="acchieve-text mb-5 pb-3">
                            <h2 className='font-weight-bold'>Our Achievements</h2>
                            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos culpa, quibusdam hic reprehenderit facere voluptatibus vitae iusto vero at, assumenda </p>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12 pl-5">
                        <div className="row">
                            <div className="col-md-5  mr-3 mb-3 d-flex items-1 justify-content-center align-items-center">
                                <div className="title-img">
                                    <img className='img-fluid' src={happy} alt=""/>
                                </div>
                                <div className="text-white">
                                    <h1>700+</h1>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                            <div className="col-md-5 items-2 mb-3 d-flex justify-content-center align-items-center">
                            <div className="title-img">
                                    <img className='img-fluid' src={marketing} alt=""/>
                                </div>
                                <div className="details">
                                    <h1>140+</h1>
                                    <p>Project Completed</p>
                                </div>
                            </div>
                            <div className="col-md-5 mr-3 mb-3 items-2  d-flex justify-content-center align-items-center">
                            <div className="title-img">
                                    <img className='img-fluid' src={surface} alt=""/>
                                </div>
                                <div className="details">
                                    <h1>25+</h1>
                                    <p>Crazy Minds</p>
                                </div>
                            </div>
                            <div className="col-md-5 d-flex items-4 justify-content-center align-items-center">
                            <div className="title-img">
                                    <img className='img-fluid' src={transporting} alt=""/>
                                </div>
                                <div className="details">
                                    <h1>75+</h1>
                                    <p>Running Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;