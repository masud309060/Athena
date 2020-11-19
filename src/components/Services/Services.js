import React from 'react';
import './Services.css';
import img1 from '../../images/Illustration/Group 65@2x.png'
import img2 from '../../images/Illustration/Group 66@2x.png'
import img3 from '../../images/Illustration/Group 69@2x.png'
import img4 from '../../images/Illustration/Group 72@2x.png'

const Services = () => {
  const services = [
    {
      service_id: 1,
      title: 'Experience Design',
      img: img1,
      description: 'The point of using lorem ipsum is the it has a gomr or less normal.'
    },
    {
      service_id: 2,
      title: 'Interface Design',
      img: img2,
      description: 'The point of using lorem ipsum is the it has a gomr or less normal.'
    },
    {
      service_id: 3,
      title: 'photo Typing',
      img: img3,
      description: 'The point of using lorem ipsum is the it has a gomr or less normal.'
    },
    {
      service_id: 4,
      title: 'Illustration',
      img: img4,
      description: 'The point of using lorem ipsum is the it has a gomr or less normal.'
    },
  ]
  return (
    <div className="container mb-5" id="services">
      <div className="services-heading">
        <h2 className="my-3">What we do</h2>
        <p>Our main focus is to make the User Experience very simple and easy. Simplicity is our Strength.</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {
          services.map(item => 
            <div className="services-card m-1" key={item.service_id}>
              <div>
                <img src={item.img} alt=""/>
                <h5 className="my-3">{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
            )
        }
      </div>
    </div>
  );
};

export default Services;