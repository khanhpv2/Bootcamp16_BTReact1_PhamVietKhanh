import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            // <div className='container d-flex justify-content-between'>
            //     <div className="nav-left  p-3">
            //         <p style={{fontSize:'20px'}} className='text-white'>Start Bootstrap</p>
            //     </div>
            //     <div className="nav-right d-flex align-items-center ">
            //         <a href="" className='pl-2 text-white'>Home</a>
            //         <a href="" className='pl-2 text-white'>About</a>
            //         <a href="" className='pl-2 text-white'>Contact</a>
            //     </div>
            // </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light container text-white ">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}
