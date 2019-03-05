import React from "react"
import { connect } from "react-redux";
import Style from "./todo.less"

const mapStateToProps = state => {
	return {
		articles: state.articles
	};
};


const ConnectedList = ({articles}) => (
  <div>
    {articles.map(el => (
      <div  className={Style.list}>
        <h3 key={el.id}>
          {el.title}
        </h3>
      <div>
        <h4>
          {" "}
          {el.age}
        </h4>
      </div>
	))}
  </div>
);

const List = connect(mapStateToProps) (ConnectedList);
export default List;
