import React, { Component } from 'react'

export default class Content extends Component {
  render(

  ) {
    return (
      <div className='container'>
          <div className="content-header">
              <div className="introduce text-center  bg-light introduce-content">
                  <h1 className='display-5 fw-bold'>A warm welcome !</h1>
                  <p className='font-size-24 mb-2'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom 
                      CSS when you can use utilities?</p>
                  <button className='btn btn-primary btn-lg'> Call to action</button>   
              </div>
          </div>
          <div className="content-main px-lg-1 mt-5">
            <div className="row gx-lg-5">
                <div className="col-lg-6 mb-5">
                    <div className="card bg-light border-0 card-position-rl pb-2">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                           <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 card-position-ab">
                                <i class="bi bi-collection"></i>   
                            </div>
                            <div>
                                <h2 className='fs-4 fw-bold'>Fresh new layout</h2>
                                <p className='mb-0 content-p'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-5">
                    <div className="card bg-light border-0 card-position-rl pb-2">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                           <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 card-position-ab">
                                <i class="bi bi-cloud-download"></i>   
                            </div>
                            <div>
                                <h2 className='fs-4 fw-bold'>Free to download</h2>
                                <p className='mb-0 content-p'>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-5">
                    <div className="card bg-light border-0 card-position-rl pb-2">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                           <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 card-position-ab">
                                <i class="bi bi-card-heading"></i>   
                            </div>
                            <div>
                                <h2 className='fs-4 fw-bold'>Jumbotron hero header</h2>
                                <p className='mb-0 content-p'>The heroic part of this template is the jumbotron hero header!</p>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-5">
                    <div className="card bg-light border-0 card-position-rl pb-2">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                           <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 card-position-ab">
                                <i class="bi bi-bootstrap"></i>   
                            </div>
                            <div>
                                <h2 className='fs-4 fw-bold'>Feature boxes</h2>
                                <p className='mb-0 content-p'>We've created some custom feature boxes using Bootstrap icons!</p>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-5">
                    <div className="card bg-light border-0 card-position-rl pb-2">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                           <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 card-position-ab">
                                <i class="bi bi-code"></i>   
                            </div>
                            <div>
                                <h2 className='fs-4 fw-bold'>Simple clean code</h2>
                                <p className='mb-0 content-p'>We keep our dependencies up to date and squash bugs as they come!</p>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-5">
                    <div className="card bg-light border-0 card-position-rl pb-2">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                           <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 card-position-ab">
                                <i class="bi bi-patch-check"></i>   
                            </div>
                            <div>
                                <h2 className='fs-4 fw-bold'>A name you trust</h2>
                                <p className='mb-0 content-p'>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
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
