import React from 'react'
import logo2 from '../Assets/imgs/logo-2.png'

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-5">
        <marquee>
          <div className="row">
            <div className="col-sm-2 fslider fw-bold">Digital product design</div>
            <div className="col-sm-2 fslider">Remote work</div>
            <div className="col-sm-2 fslider fw-bold">UX design</div>
            <div className="col-sm-2 fslider">Distributed teams</div>
            <div className="col-sm-2 fslider fw-bold">Creativity</div>
            <div className="col-sm-2 fslider">Strategy</div>
            <div className="col-sm-2 fslider fw-bold">Suspense</div>
            <div className="col-sm-2 fslider">Growth</div>
          </div>
        </marquee>
    <div className="container text-center py-5">
        <img src={logo2} alt='...' className="w-25 mt-5 mb-4 w-sm-100 w-md-50" />
        <p className="w-50 mx-auto p-5 mb-5 p-sm-0 w-sm-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse
        platea dictumst. Fusce a nunc eget ligula suscipit finibus.</p>
        <ul className="d-flex align-items-center justify-content-center gap-3 list-unstyled my-4">
          <li className="text-decoration-underline">Twitter</li>
          <li className="text-decoration-underline">LinkedIn</li>
          <li className="text-decoration-underline">RSS</li>
        </ul>
        <p>&copy; 2012-2020 Nordic Rose Co.<br />All rights reserved.</p>
      </div>
      </footer>
  )
}
