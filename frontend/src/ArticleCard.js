import React from "react";

const ArticleCard = ({ article }) => (
  <div className="article__item" data-article-id={article._id}>
    <div className="article__wrapper">
      <div className="article__status" />
      <div className="content__wrapper">
        <p className="article__component article__name">
          <a href={"/article/" + article._id} className="article__link">
            {article.name}
          </a>
        </p>
        <p className="article__component article__date">
          {new Date(article.Created_date).toLocaleDateString("es-CO", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>
        <p className="article__component article__body">
          <a href={"/article/" + article._id} className="article__link">
            {article.body}
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default React.memo(ArticleCard);
