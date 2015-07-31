import React from "react/addons";

var Carousel = React.createClass({
  render: function() {
    return (
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img src="/images/background-1.jpg" alt="Slide #1"/>
          <div className="carousel-caption">
            Slide #1
          </div>
        </div>
        <div className="item">
          <img src="/images/background-2.jpg" alt="Slide #2"/>
          <div className="carousel-caption">
            Slide #2
          </div>
        </div>
        <div className="item">
          <img src="/images/background-3.jpg" alt="Slide #3"/>
          <div className="carousel-caption">
            Slide #3
          </div>
        </div>
      </div>
      <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    )
  }
});

export default Carousel;
