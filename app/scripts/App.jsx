import React from "react/addons";
import Navbar from "./Navbar.jsx";
import Carousel from "./Carousel.jsx";
import Grid from "./Grid.jsx";


export default
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />,
        <Carousel />,
        <Grid />
      </div>
    )
  }
}

React.render(
  <App />,
  document.getElementById('app')
);
