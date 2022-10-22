import "./post-list-item.scss";
import { Component } from "react";

export default class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false,
    };
    this.onImportant = this.onImportant.bind(this);
  }

  onImportant() {
    this.setState(({ important }) => ({
      important: !important,
    }));
  }

  onLike = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };

  render() {
    const { label } = this.props;
    const { important, like } = this.state;
    let clases = "app-list-item d-flex justify-content-between";
    if (important) {
      clases += " important";
    }
    if (like) {
      clases += " like";
    }

    return (
      <li className={clases}>
        <span onClick={this.onLike} className="app-list-item-label">
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={this.onImportant}
            type="button"
            className="btn-star btn-sm"
          >
            <i className="fa fa-star"></i>
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </li>
    );
  }
}
