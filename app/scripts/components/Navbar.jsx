import React from "react/addons";
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

export default
class Navbar extends React.Component {
  constructor(props) {
    super();
    this.state = {isHide: AppStore.isHide()};
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({'isHide': AppStore.isHide()});
  }

  handleClick(e) {
    e.preventDefault();
    AppActions.toggleItem();
  }

  render() {
    console.log(this.state);
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
          <a className="navbar-brand" href="/" onClick={this.handleClick}>
            {this.props.hasBrandImage ?
              <img className="navbar-brand-image" src="apple-touch-icon.png" alt={this.props.children}/> : null}
            <div class="navbar-brand-text">
              {this.props.children && !this.state.isHide ? this.props.children : null }
            </div>
          </a>
        </div>
      </div>
    </nav>)
  }
}
