import React, { Component } from 'react';

class ArticleForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            articleName: '',
            articleBody: '',
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const target = e.target;
        const inputName = target.name;
        const inputValue = target.value;
        this.setState({
            [inputName]: inputValue
        });
    }
    handleSubmit(e) {
        
        e.preventDefault();
        
        var params = {
            name: this.state.articleName,
            body: this.state.articleBody
        };
        
        fetch('http://node-api:3000/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
        .then((data) => {
            this.setState({articleName: '', articleBody: ''});
            document.getElementById("articleForm").reset();
            this.props.action(data);
        })
        .catch(console.log)
        
    }
    render() {
        return (
            <div className="row__wrapper article_form__wrapper">
                <p className="form__title">Crea tu articlulo</p>
                <form id="articleForm" onSubmit={this.handleSubmit}>
                    <label className="input__label">
                        Nombre
                        <input name="articleName" type="text" value={this.state.articleName} onChange={this.handleChange} />
                    </label>
                    <label className="input__label">Cuerpo</label>
                    <textarea name="articleBody" rows="5" value={this.state.articleBody} onChange={this.handleChange}></textarea>
                    <input className="btn btn-submit" type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export default ArticleForm