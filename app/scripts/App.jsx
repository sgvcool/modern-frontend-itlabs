import React from "react/addons";
import Navbar from "./Navbar.jsx";
import Carousel from "./Carousel.jsx";
import Grid from "./Grid.jsx";

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar />,
        <Carousel />,
        <Grid />
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
);

export default App;
