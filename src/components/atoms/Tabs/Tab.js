import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label, icons },
    } = this;

    let className =
      "text-sm font-bold px-5 py-3 shadow-lg rounded block leading-normal";

    if (activeTab === label) {
      className +=
        "text-blue-600 border-2 border-blue-400 border-y-blue-600  transition-colors duration-300";
    } else {
      className +=
        "text-black border hover:border-blue-400 transition-colors duration-300";
    }

    return (
      <li className="-mb-px mr-2 last:mr-0 flex-auto">
        <a className={className} href="#!" onClick={onClick}>
          <span className="text-3xl  absolute ">{icons}</span>
          <span className="ml-14 flex justify-center">{label}</span>
        </a>
      </li>
    );
  }
}

export default Tab;
