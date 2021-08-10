import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    return (
      <div className="List">
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    );
  }
}

export default List;
