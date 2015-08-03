import React from "react/addons";

export default
class Navbar extends React.Component {
  render() {
    return (<nav className="navbar navbar-fixed-top navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">
            {this.props.hasBrandImage ? <img className="navbar-brand-image" src="apple-touch-icon.png" alt={this.props.children} /> : null}
            {this.props.children ? this.props.children : "Company title"}</a>
        </div>
      </div>
    </nav>)
  }
}
