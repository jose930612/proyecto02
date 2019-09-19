import React, { Component } from 'react';
import Topbar from "./Topbar.js";
import Comments from "./Comments.js";

class ArticleView extends Component {
    state = {
        article:{},
        comments:[]
    }
    
    componentDidMount(){
        fetch('http://node-api:3000/articles/'+this.props.match.params.articleId)
        .then(res => res.json())
        .then((data) => {
            this.setState({ article: data })
        })
        .catch(console.log)

        fetch('http://node-api:3000/comments/'+this.props.match.params.articleId)
        .then(res => res.json())
        .then((data) => {
            this.setState({ comments: data })
        })
        .catch(console.log)
    }
    // onClick={this.showArticle.bind(this, this.props)}
    showArticle = (e, data) => {
        console.log(e.article._id);
    }
    
    render() {
        const containerClass = 'container__article';
        return (
            <div id={this.state.article._id} className={"container " + containerClass}>
                <Topbar />
                <div className="row">
                    <div className="row__wrapper article__wrapper">
                        <div className="articl_title">
                            <h1>{this.state.article.name}</h1>
                        </div>
                        <div className="article__body">
                            <p>{this.state.article.body}</p>
                        </div>
                        <Comments comments={this.state.comments} articleId={this.state.article._id}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArticleView;