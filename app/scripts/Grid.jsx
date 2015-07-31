import React from "react/addons";

export default
class Grid extends React.Component {
  render() {
    return (<div className="container advertising-container">
      <div className="row">
        <div className="col-sm-4">
          <a href="#" className="advertising-item">
            <img src="/images/header.jpg" alt="Ad #1" className="img-responsive"/>
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="advertising-item">
            <img src="/images/header.jpg" alt="Ad #1" className="img-responsive"/>
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="advertising-item">
            <img src="/images/header.jpg" alt="Ad #1" className="img-responsive"/>
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="advertising-item">
            <img src="/images/header.jpg" alt="Ad #1" className="img-responsive"/>
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="advertising-item">
            <img src="/images/header.jpg" alt="Ad #1" className="img-responsive"/>
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="advertising-item">
            <img src="/images/header.jpg" alt="Ad #1" className="img-responsive"/>
          </a>
        </div>
      </div>
    </div>)
  }
}
