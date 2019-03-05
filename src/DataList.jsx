import React from "react"
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};

const ConnectedList = ({articles}) => (
  <div>
    {articles.map(el => (
      <div>
        <h1 key={el.id}>
Name:
          {el.name}
        </h1>
        <h3>
          {" "}
Age:
          {el.age}
        </h3>
      </div>
    ))}
  </div>
);

const List = connect(mapStateToProps) (ConnectedList);
export default List;
