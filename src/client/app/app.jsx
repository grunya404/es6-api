import React, {Component} from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/shared/navbar.view.jsx';
import Home from './components/home/home.view.jsx';
import About from './components/about/about.view.jsx';
import Login from './components/login/login.view.jsx';
import { Router, Route, browserHistory, hashHistory } from 'react-router';

class Main extends Component {
	render() {
		return (
			<div>
				<Navbar/>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default class App extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={Main}>
					<Route path='home' component={Home} />
					<Route path='about' component={About} />
				</Route>
			</Router>
		);
	}
};