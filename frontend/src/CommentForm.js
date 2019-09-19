import React, { Component } from 'react';
import Login from './Login.js';
import Logout from './Logout.js';

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            userComment: '',
            loggedIn: false
        };
        
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleLogin(e){
        console.log(e);
        this.setState({loggedIn: e})
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

        var usrName = '';

        if(localStorage.getItem('userName'))
            usrName = localStorage.getItem('userName');
        
        var params = {
            User: usrName,
            body: this.state.userComment,
            article: this.props.articleID
        };
        
        fetch('http://node-api:3000/comments/'+this.props.articleID+'', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
        .then((data) => {
            this.setState({userName: localStorage.getItem('userName'), userComment: ''});
            document.getElementById("commentForm").reset();
            this.props.action(data);
        })
        .catch(console.log)
        
    }
    render() {
        if (localStorage.getItem('token')){
            const imageUrl = localStorage.getItem('userImage');
            const userName = localStorage.getItem('userName');
            return (
                <div className="row__wrapper form__wrapper">
                    <p className="form__title">Deja tu comentario</p>
                    <div className="user__info">
                        <div className="background__img user__img" style={{backgroundImage:"url("+imageUrl+")"}}></div>
                        <p className="user__name">{userName}</p>
                    </div>
                    <form id="commentForm" onSubmit={this.handleSubmit}>
                        <textarea name="userComment" rows="5" value={this.state.userComment} onChange={this.handleChange}></textarea>
                        <input name="articleId" type="hidden" value={ this.props.articleID } />
                        <input className="btn btn-submit" type="submit" value="submit" />
                    </form>
                    <div className="not__me">
                        <p>¿No eres tu?</p>
                        <Logout action={this.handleLogin.bind(this)} />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row__wrapper form__wrapper">
                    <p className="form__title">Para comentar debes logearte</p>
                    <Login action={this.handleLogin.bind(this)} />
                </div>
            )
        }
    }
}

export default CommentForm