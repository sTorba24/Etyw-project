import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
  <div className="container-fluid text-center text-md-left">
    <div className="row">
      <div className="col-md-6 mt-md-0 mt-3">
        <h5 className="text-uppercase">Footer Content</h5>
        <p>Bla-bla-bla</p>
      </div>

      <hr className="clearfix w-100 d-md-none pb-0"/>

      <div className="col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase">Links</h5>
        <ul className="list-unstyled">
          <li><a href="https://www.instagram.com/dieda_sher_shop/">Instagram</a></li>
          <li><a href="https://www.youtube.com/watch?v=ivDjWYcKDZI">MERN Project link</a></li>
          <li><a href="#!">Link 3</a></li>
          <li><a href="#!">Link 4</a></li>
        </ul>
      </div>

      <div className="col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase">Links</h5>
        <ul className="list-unstyled">
          <li><a href="/contact">Contact us</a></li>
          <li><a href="#!">Link 2</a></li>
          <li><a href="#!">Link 3</a></li>
          <li><a href="#!">Link 4</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="footer-copyright text-center py-3">© 2022 Copyright:
    <a href="https://etyw.com/"> Etyw.com</a>
  </div>

</footer>

export default Footer
