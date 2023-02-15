import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = (e) => {
    e.preventDefault();
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label, icons },
    } = this;

    let className =
      "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group";

    if (activeTab === label) {
      className =
        "inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group";
    }

    return (
      <li className="mr-2">
        <button className={className} onClick={onClick}>
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-2 text-lg group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {icons}
          </svg>
          {label}
        </button>
      </li>
    );
  }
}

export default Tab;
