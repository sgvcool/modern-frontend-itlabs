import React from "react/addons";

var App = React.createClass({
  render: function() {
    return (<nav className="navbar navbar-fixed-top navbar-default">
      <div className="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">LOGO</a>
        </div>
      </div><!-- /.container-fluid -->
    </nav>

    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol className="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img src="/images/background-1.jpg" alt="Slide #1">
          <div className="carousel-caption">
            Slide #1
          </div>
        </div>
        <div className="item">
          <img src="/images/background-2.jpg" alt="Slide #2">
          <div className="carousel-caption">
            Slide #2
          </div>
        </div>
        <div className="item">
          <img src="/images/background-3.jpg" alt="Slide #3">
          <div className="carousel-caption">
            Slide #3
          </div>
        </div>

      </div>

      <!-- Controls -->
      <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

    <div className="container advertising-container">
      <div className="row">
        <div className="col-sm-4">
          <a href="#" className="advertising-item">
            <img src="/images/header.jpg" alt="Ad #1" className="img-responsive">
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="advertising-item">
            <img src="/images/header.jpg" alt="Ad #1" className="img-responsive">
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="advertising-item">
            <img src="/images/header.jpg" alt="Ad #1" className="img-responsive">
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="advertising-item">
            <img src="/images/header.jpg" alt="Ad #1" className="img-responsive">
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="advertising-item">
            <img src="/images/header.jpg" alt="Ad #1" className="img-responsive">
          </a>
        </div>
        <div className="col-sm-4">
          <a href="#" className="advertising-item">
            <img src="/images/header.jpg" alt="Ad #1" className="img-responsive">
          </a>
        </div>
      </div>
    </div>

    <footer>
      <div className="container">
        <p>&copy; 2015</p>
      </div>
    </footer>)
  }
});

React.render(
  <App />,
  document.getElementById('app')
);
