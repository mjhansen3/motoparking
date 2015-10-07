import React from "react";

const arrowPrev = require("./images/arrow-prev.svg");
const arrowNext = require("./images/arrow-next.svg");

const decorators = [
  {
    component: React.createClass({
      getButtonStyles(disabled) {
        return {
          border: 0,
          color: "white",
          padding: 10,
          outline: 0,
          opacity: disabled ? 0.3 : 1,
          cursor: "pointer",
          background: "url(" + arrowPrev + ") 50% 50% / 10px no-repeat rgba(0, 0, 0, 0.4)",
          borderRadius: "50%",
          width: 40,
          height: 40,
          margin: 10
        };
      },
      render() {
        return (
          <button
            style={this.getButtonStyles(this.props.currentSlide === 0)}
            onClick={this.props.previousSlide}></button>
        );
      }
    }),
    position: "CenterLeft"
  },
  {
    component: React.createClass({
      getButtonStyles(disabled) {
        return {
          border: 0,
          color: "white",
          padding: 10,
          outline: 0,
          opacity: disabled ? 0.3 : 1,
          cursor: "pointer",
          background: "url(" + arrowNext + ") 50% 50% / 10px no-repeat rgba(0, 0, 0, 0.4)",
          borderRadius: "50%",
          width: 40,
          height: 40,
          margin: 10
        };
      },
      render() {
        return (
          <button
            style={this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount)}
            onClick={this.props.nextSlide}></button>
        );
      }
    }),
    position: "CenterRight"
  },
  {
    component: React.createClass({
      getIndexes(count, inc) {
        var arr = [];
        for (var i = 0; i < count; i += inc) {
          arr.push(i);
        }
        return arr;
      },
      getListStyles() {
        return {
          position: "relative",
          margin: 0,
          padding: 0
        };
      },
      getListItemStyles() {
        return {
          listStyleType: "none",
          display: "inline-block"
        };
      },
      getButtonStyles(active) {
        return {
          border: 0,
          background: "transparent",
          color: "black",
          cursor: "pointer",
          padding: 10,
          outline: 0,
          fontSize: 24,
          opacity: active ? 1 : 0.5
        };
      },
      render() {
        var self = this;
        var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
        return (
          <ul style={self.getListStyles()}>
            {
              indexes.map(function(index) {
                return (
                  <li style={self.getListItemStyles()} key={index}>
                    <button
                      style={self.getButtonStyles(self.props.currentSlide === index)}
                      onClick={self.props.goToSlide.bind(null, index)}>
                    &bull;
                    </button>
                  </li>
                );
              })
              }
          </ul>
        );
      }
    }),
    position: "BottomCenter"
  }
];

export default decorators;
