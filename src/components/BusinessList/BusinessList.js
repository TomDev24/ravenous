import React from "react";
import ReactDOM from "react-dom";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends React.Component {
  render(){
  return (
    <div className="BusinessList">
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
</div>)
}
}

export default BusinessList;
