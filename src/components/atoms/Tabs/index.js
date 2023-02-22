import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              {children.map((child) => {
                const { label } = child.props;
                const { icons } = child.props;

                return (
                  <Tab
                    activeTab={activeTab}
                    key={label}
                    label={label}
                    icons={icons}
                    onClick={onClickTabItem}
                  />
                );
              })}
            </ul>
          </div>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className=" px-5 lg:px-14 py-6 lg:py-10 flex-auto border-b-2 border-gray-800/50">
              {children.map((child) => {
                if (child.props.label !== activeTab) return undefined;
                return child.props.children;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;
