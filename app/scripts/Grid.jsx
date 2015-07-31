import React from "react/addons";

var Grid = React.createClass({
  render: function() {
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
});

export default Grid;
