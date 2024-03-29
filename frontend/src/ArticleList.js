import React, { PureComponent } from "react";
import ArticleCard from "./ArticleCard.js";
import ArticleForm from "./ArticleForm.js";

class ArticleList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
    this.articles = [];
    this.updateState = this.updateState.bind(this);
  }
  updateState(e) {
    fetch("/api/articles")
      .then(res => res.json())
      .then(data => {
        this.setState({ articles: data });
      })
      .catch(console.log);
  }
  componentDidMount() {
    fetch("/api/articles")
      .then(res => res.json())
      .then(data => {
        this.setState({ articles: data });
      })
      .catch(console.log);
  }
  render() {
    return (
      <div className="mega__wrapper">
        <ArticleForm action={this.updateState.bind(this)} />
        <div className="row__wrapper home__articles">
          {this.state.articles.map(article => (
            <ArticleCard article={article} />
          ))}
        </div>
      </div>
    );
  }
}

export default ArticleList;
