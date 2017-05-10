import React from 'react';
import ReactDOM from 'react-dom';

// JSX 的基本语法规则：
// 遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；
// 遇到代码块（以 { 开头），就用 JavaScript 规则解析。
const users = [
    {name:'Cloud', age: 28},
	{name:'Cid', age: 32},
	{name:'Aeris', age: 22},
];
// ReactDOM.render把VirtualDOM应用到DOM
ReactDOM.render(
    <div>
    {
      users.map((user, i) =>
          <div key={i}>{i}: Hello, {user.name} / {user.age} !</div>
      )
    }
    </div>,
    document.getElementById('app1')
);


const arr = [
    <h3>Hello world!</h3>,
    <h3>React is awesome</h3>,
];
ReactDOM.render(
    <div>{arr}</div>,
    document.getElementById('app2')
);

// 使用组件，function Xyz(props)方法就用于生成一个组件类，function必须大写开头
function Welcome(props) {
	return <h3>Hello, {props.name}</h3>;
}
const elementWelcome = <Welcome name="Sara" />;
ReactDOM.render(
	elementWelcome,
    document.getElementById('app3')
);

// 组合多个组件
function App() {
	return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
	);
}

ReactDOM.render(
    <App />,
	document.getElementById('app4')
);

// JSX 最原始的方式创建element
const element = React.createElement(
	'h3',
	{className: 'red-color'},
	'Hello, world!'
);

// 等价于以下代码
// const element = (
//     <h1 className="greeting">
//         Hello, world!
//     </h1>
// );

ReactDOM.render(
    <div>{element}</div>,
    document.getElementById('app5')
);

// JSX 动态变更
function tick() {
	const element = (
        <div>
            <h3>Hello, world!</h3>
            <h3 className="green-color">It is {new Date().toLocaleTimeString()}</h3>
        </div>
	);
	ReactDOM.render(
		element,
		document.getElementById('app6')
	);
}

tick();
setInterval(tick, 1000);

// JSX 组件的嵌套
function formatDate(date) {
	return date.toLocaleDateString();
}

function Avatar(props) {
	return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name} />
	);
}

function UserInfo(props) {
	return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
				{props.user.name}
            </div>
        </div>
	);
}

function Comment(props) {
	return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
				{props.text}
            </div>
            <div className="Comment-date">
				{formatDate(props.date)}
            </div>
        </div>
	);
}

const comment = {
	date: new Date(),
	text: 'I hope you enjoy learning React!',
	author: {
		name: 'Hello Kitty',
		avatarUrl: 'http://placekitten.com/g/64/64'
	}
};

ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author} />,
	document.getElementById('app7')
);

// JSX 状态state, ES6 class方式
class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(),1000);
		console.log(this);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	tick() {
		this.setState({
			date: new Date()
		});
	}
	render() {
		return (
			<div>
				<h3>Hello, world!</h3>
				<h3 className="blue-color">It is {this.state.date.toLocaleTimeString()}</h3>
			</div>
		);
	}
}

ReactDOM.render(
	<Clock />,
	document.getElementById('app8')
);

// JSX 事件处理
function ActionLink() {
	function handleClick(e) {
		e.preventDefault();
		alert('The link was clicked.');
	}

	return (
		<a href="#" onClick={handleClick}>
			Click me
		</a>
	);
}

ReactDOM.render(
	<ActionLink />,
	document.getElementById('app9')
);

// JSX 事件处理, ES6 class方式
class LoggingButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};

		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	};

	handleClick() {
		this.setState({
			isToggleOn: !this.state.isToggleOn
		});
		alert('isToggleOn:' + this.state.isToggleOn);
	};

	render() {
		return (
			<div>
				<button onClick={(e) => this.handleClick(e)}>
					Click me 1
				</button>
				<button onClick={this.handleClick}>
					Click me 2
				</button>
			</div>
		);
	}
}

ReactDOM.render(
	<LoggingButton/>,
	document.getElementById('app10')
);


// JSX 有条件的render
class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = {isLoggedIn: false};
	}

	handleLoginClick() {
		this.setState({isLoggedIn: true});
	}

	handleLogoutClick() {
		this.setState({isLoggedIn: false});
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;

		let button = null;
		if (isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick} />;
		} else {
			button = <LoginButton onClick={this.handleLoginClick} />;
		}

		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}
			</div>
		);
	}
}

function UserGreeting(props) {
	return <h3 className="blue-color">Welcome back!</h3>;
}

function GuestGreeting(props) {
	return <h3 className="red-color">Please sign up.</h3>;
}

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <UserGreeting />;
	}
	return <GuestGreeting />;
}

function LoginButton(props) {
	return (
		<button onClick={props.onClick}>
			Login
		</button>
	);
}

function LogoutButton(props) {
	return (
		<button onClick={props.onClick}>
			Logout
		</button>
	);
}

ReactDOM.render(
	<LoginControl />,
	document.getElementById('app11')
);



// JSX 有条件的render，同一行提供判断条件
function Mailbox(props) {
	const unreadMessages = props.unreadMessages;
	return (
		<div>
			<h3>Hello!</h3>
			{unreadMessages.length > 0 &&
			<div>
				You have {unreadMessages.length} unread messages.
			</div>
			}
		</div>
	);
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
	<Mailbox unreadMessages={messages} />,
	document.getElementById('app12')
);
