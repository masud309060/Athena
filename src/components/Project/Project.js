import React from 'react';
import './Project.css'
import projectimg from '../../images/Illustration/20 [Converted]@2x.png'
const Project = () => {
    return (
      <section className="project mt-5 mb-5">
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <div className="item">
                        <img className='img-fluid p-img' src={projectimg}  alt=""/>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="item p-text">
                         <h1 className="pb-2 font-weight-bold">Stay Running & Project</h1>
                          <p className="text-secondary pb-2">It is long stablished fact that a reader will be destracted by the readable content of a page when looking at its layout.The point of using lorem ipsum is that it has a more-or-less normal distrubution of letter.</p>
                          <button className="btn btn-primary pt-2 button">Contact Us</button>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
};

export default Project;