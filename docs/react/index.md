# React 随笔
React简单介绍

react的功能由两个库构成
```js
import React from 'react'; // react核心库
import ReactDOM from 'react-dom'; // react的dom渲染库

// App.js
export funtion App() {
  return (
    <div>
      Hello, React!
    </div>
  );
}

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
这样就可以将App组件渲染到id为root的div标签中

react 将组件分为两类
- 函数式组件，在react 16.8版本之前，被称为无状态（状态即vue中的data）组件，通常作为UI组件。
- 类组件

### 函数式组件
```js
function App() {
  return (
    <div>
      Hello, React!
    </div>
  );
}
```
函数式组件的返回值就是组件的渲染结果

### 类组件
```js
class App extends React.Component {
  render() {
    return (
      <div>
        Hello, React!
      </div>
    );
  }
}
```
类组件的render方法就是组件的渲染结果
