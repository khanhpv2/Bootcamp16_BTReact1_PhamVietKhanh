

// header
import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='d-flex p-3 justify-content-between'>
          <div className="header-left text-black">
              <a href="" className='text-color-black font-size-12 btn-back'>
                <i class="bi bi-arrow-left mr-2"></i>
                 <span>Overview Page</span>   
              </a>
          </div>
          <div className="header-center">
           <a href="" className='text-color-black font-size-18 mr-2 icon-tivi'><i class="bi bi-tv"></i></a>
           <a href="" className='text-color-black font-size-18 mr-2'><i class="bi bi-tablet fs-3"></i></a>
           <a href="" className='text-color-black font-size-18 mr-2'><i class="bi bi-phone fs-3"></i></a>
          </div>
          <div className="header-right">
              <a href="" className='text-color-black mr-2 font-size-12 '>
                <i class="bi bi-github"></i>
              </a>
              <button className='btn btn-danger text-color-black font-size-12 ml-2'>
                <i class="fa fa-download"></i>
                  <span className='pl-1'>Free Download</span>
              </button>
              <a href="" className='text-color-black ml-2'>
                <i class="bi bi-x-lg"></i>
              </a>

          </div>
      </div>   
    )
  }
}
