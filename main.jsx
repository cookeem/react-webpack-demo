import React from 'react';
import ReactDOM from 'react-dom';

// JSX 的基本语法规则：
// 遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；
// 遇到代码块（以 { 开头），就用 JavaScript 规则解析。
let users = [
    {name:'Cloud', age: 28},
	{name:'Cid', age: 32},
	{name:'Aeris', age: 22},
];

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


let arr = [
    <h3>Hello world!</h3>,
    <h3>React is awesome</h3>,
];
ReactDOM.render(
    <div>{arr}</div>,
    document.getElementById('app2')
);

// 使用组件，function Xyz(props)方法就用于生成一个组件类，function必须大写开头
function HelloMessage(props) {
	return <h3 className="red-color">Hello, {props.name}</h3>;
}

ReactDOM.render(
    <HelloMessage name="John" />,
    document.getElementById('app3')
);

// 使用组件，处理子节点
function NotesList(props) {
	return <div>
		{
			React.Children.map(props.children, (child, i) => {
				return <li>{i} : {child}</li>;
			})
		}
    </div>;
}

ReactDOM.render(
    <NotesList>
        <span>hello</span>
        <span>world</span>
    </NotesList>,
	document.getElementById('app4')
);
