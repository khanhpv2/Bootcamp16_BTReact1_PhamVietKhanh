import React, { Component } from 'react'

export default class Content extends Component {
  render(
      
  ) {
    return (
      <div className='container'>
          <div className="content-header container">
              <div className="introduce text-center  bg-info introduce-content">
                  <h1>A warm welcome</h1>
                  <p className='font-size-24'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom 
                      CSS when you can use utilities?</p>
                  <button className='btn btn-primary'> Call to action</button>   
              </div>
          </div>
          <div className="content-main px-lg-1 mt-5">
            <div className="row gx-lg-5">
                <div className="col-lg-6 mb-5">
                    <div className="card bg-light border-0 h-100 card-position-rl">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                           <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 card-position-ab">
                                <i class="bi bi-collection"></i>   
                            </div>
                            <div>
                                <h2 className='fs-4 fw-bold'>Fresh new layout</h2>
                                <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                           <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                <i class="bi bi-collection"></i>   
                            </div>
                            <div>
                                <h2 className='fs-4 fw-bold'>Fresh new layout</h2>
                                <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                            </div> 
                        </div>
                    </div>
                </div>
                
            </div>
            
          </div>
      </div>
    )
  }
}
