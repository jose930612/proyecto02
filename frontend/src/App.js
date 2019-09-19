import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ArticleList from './ArticleList.js';
import ArticleView from './ArticleView.js';
import Login from './Login.js';

function App(){
	return(
	<Router>
		<Route exact path="/" component={Home} />
		<Route exact path="/login" component={Login} />
		<Route path={"/article/:articleId"} component={ArticleView} />
	</Router>
	)
}

function Home() {
	const containerClass = 'container__home';
	return (
		<div className={"container " + containerClass}>
			<div className="row">
				<ArticleList />
			</div>
		</div>
	);
}

export default App;