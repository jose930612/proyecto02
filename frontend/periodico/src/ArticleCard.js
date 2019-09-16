import React, { Component } from 'react';

class ArticleCard extends Component {
    
    render() {
        return (
            <div className="article__item" data-article-id={this.props.article._id}>
                <div className="article__wrapper">
                    <div className="article__status"></div>
                    <div className="content__wrapper">
                            <p className="article__component article__name"><a href={'/article/'+this.props.article._id } className="article__link" >{this.props.article.name}</a></p>
                            <p className="article__component article__date">{(new Date(this.props.article.Created_date)).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            <p className="article__component article__body"><a href={'/article/'+this.props.article._id } className="article__link" >{this.props.article.body}</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArticleCard;