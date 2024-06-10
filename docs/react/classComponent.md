# 类组件
::: tip
类组件的说明基于react16.8之前的版本
:::
## 如何使用状态(即vue中的数据)

```js
import { Component } from 'react'

class MyComponent extends Component {
  constructor(props) {
    super(props);  // 调用父类的constructor(props)，当使用constructor时，必须调用super(props)
    this.state = { 
      data: 'Hello World'
    };
    this.state = {
      data: 'Hello World'
    };
  }
  render() {
    return <div>{this.state.data}</div>;
  }
}

```
也可以写成
```js
class MyComponent extends Component {
  state = {
    data: 'Hello World'
  }
  render() {
    return <div>{this.state.data}</div>;
  }
}

```
## 改变状态setState
::: tip
1. setState更新是异步的,不能直接在其后面拿到更新后的状态
2. setState接受两个参数
    1. 第一个参数可以是一个对象，也可以是一个函数
        * 如果是对象，那么更新是合并的
        * 如果是函数，该函数的第一个参数即为之前的状态，并将返回的值作为新状态。
    2. 第二个参数是一个回调函数，在更新完成之后执行,此时可以拿到最新的状态；
3. react内部会将多个状态更新合并为一次更新，提升渲染性能。
4. react内部会通过`Object.is()`来比较状态是否发生变化，如果发生变化，则更新视图，否则不更新。因此在传入对象时，最好构造一个新的对象。
:::

```js
class MyComponent extends Component {
  state = {
    data: 'Hello World'
  }
  handleClick = () => {
    this.setState({
      data: 'Hello React'
    },()=>{
      // 传入第二参数，获取最新状态
      console.log(this.state.data) // 输出Hello React
    })
    console.log(this.state.data) // 输出Hello World
  }
  render() {
    return (
      <div>
        <div>{this.state.data}</div>
        <button onClick={this.handleClick}>Change</button>
      </div>
    )
  }
}
```
点击按钮之后，状态会更新为`Hello React`，同时视图也将改变。

```js{3,4}
  ....
  handleClick = () => {
    this.state.data = 'Hello React'
    this.setState(this.state) // 直接传入this.state，此时状态没有变化，不会更新视图
  }
  ....
  ```
```js
class MyComponent extends Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState((pre)=>{
      // 传入一个函数 pre 为之前的状态，返回一个新状态
      return {
        count: pre.count + 1
      }
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.handleClick}>Change</button>
      </div>
    )
  }
}
```
```js
class MyComponent extends Component {
    state={
        count:0,
        txt:'hello World'
    }
    handleClick=()=>{
        this.setState({count:this.state.count+1});
        this.setState({txt:'hello React'});
    }
    render() {
        console.log('render')
        return (
            <div>
                <div>{this.state.count}</div>
                <div>{this.state.txt}</div>
                <button onClick={this.handleClick}>change</button>
            </div>
            )
    }
}

// 点击按钮后，只会输出一次render
```
## 事件处理

在React中，组件的事件，本质上就是一个属性

按照之前React对组件的约定，由于事件本质上是一个属性，因此也需要使用小驼峰命名法

**如果没有特殊处理，在事件处理函数中，this指向undefined**

1. 使用bind函数，绑定this
2. 使用箭头函数

## react实现vue中的插槽
> 通过props实现vue中插槽

### 默认插槽
在react中，有一个特殊的属性，`children`,该属性是组件的子节点，在react中，所有组件的子节点，都会被放在该属性中

::: code-group

```js [MyComponent.js]
import React from 'react';

export class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        children: {this.props.children}
      </div>
    )
  }
}
```
```js [App.js]
import React from 'react';
import MyComponent from './MyComponent';

export default class App extends React.Component {
  render() {
    return (
      <MyComponent>我是默认内容</MyComponent>
    )
  }
}
```
:::

界面中将展示`children: 我是默认内容`

### 作用域插槽
如何在react中实现vue中的作用域插槽，通过给组件传入一个函数
::: code-group

```js [MyComponent.js]
import React from 'react';

export class MyComponent extends React.Component {
  state = {
    txt:"我是MyComponent组件的默认内容"
  }
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        children: {this.props.children(state)}
      </div>
    )
  }
}
```
```js [App.js]
import React from 'react';
import MyComponent from './MyComponent';

export default class App extends React.Component {
  render() {
    return (
      <MyComponent>{(state)=>{
        console.log(state.txt)
        return '123'
        }}</MyComponent>
    )
  }
}
```
:::
界面展示children:123，控制台输出`我是MyComponent组件的默认内容`
### 具名插槽
类比children 属性，比如header与footer插槽，通过要求父组件传入header与footer属性，实现具名插槽, 这种方式在react中称为`render-props`如下：
```js
import React from 'react';

export class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <header>header:{this.props.header} </header>
        children: {this.props.children}
        <footer>footer:{this.props.footer}</footer>
      </div>
    )
  }
}
```
<h2 id='react-ref'> Ref 组件引用</h2>
与Vue中Ref用法基本一致，通过给组件添加ref属性，可以获取到组件实例，从而调用组件的方法，修改组件的state等
在react中**不在推荐使用**`字符串`的方式赋值给ref属性，并在将来准备弃用，推荐使用`对象`或者`回调函数`的形式进行赋值。
当使用函数创建时：
1. `componentDidMount`的时候会调用该函数，在`componentDidMount`事件中可以使用ref
2. 如果ref的值发生了变动（旧的函数被新的函数替代），分别调用旧的函数以及新的函数，时间点出现在`componentDidUpdate`之前
    * 旧的函数被调用时，传递null
    * 新的函数被调用时，传递对象
3. 如果ref所在的组件被卸载，会调用函数

::: error 注意
ref 不能赋值给函数组件，因为函数组件没有实例，所以不能调用实例上的方法。
:::
::: code-group
```js [App.js]
// ...
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef=React.createRef(); // 使用对象创建ref
  }
  getRef=(el)=>{
    this.funcRef=el; // 使用回调函数创建ref
  }
  render() {
    return (
      <div>
        <MyComponent ref={this.myRef}></MyComponent>
        {/* <MyComponent ref='myComponent'></MyComponent> 字符串方式创建ref，不推荐使用，将来准备弃用 */}
        <MyComponent ref='myComponent'></MyComponent> // [!code error]
        <MyComponent ref={this.getRef}></MyComponent>
        <button onClick={()=>{
          this.myRef.current.sayHello();
        }}>点击</button>
         <button onClick={()=>{
          this.refs.myComponent.sayHello();
        }}>点击</button>
        <button onClick={()=>{
          this.funRef.sayHello();
        }}>点击</button>
      </div>
    )
  }
}
```
```js [MyComponent.js]
// ...
export default class MyComponent extends React.Component {
  sayHello=()=>{
    console.log("hello");
  }

  render() {
    return ( <div>子组件</div>)
  }
}
```
:::
## 组件通信

### 父子组件通信
1. 父组件通过props 给子组件传递数据，父组件通过函数props获取子组件的数据
    * ::: code-group
      ```js [parent.js]
      // ...
      export Class Parent extends React.Component {
        state={
          text:"父组件的数据"
        }
        getChild=(data)=>{
          console.log(data)
        }
        render(){
          return (
            <div>
              <Child text={this.state.txt} getChild={this.getChild}>
              <button @onClick={this.getChild}>获取子组件的数据</button>
            </div>
            
          )
        }
      }
      ```
      ```js [Child.js]
      // ...
      export Class Parent extends React.Component {
        state={
          text:"子组件的数据"
        }
        getChild=()=>{
          this.props.getChild(this.state.text)
        }
        render(){
          return (
            <div>
              {this.props.text}
            </div>
            
          )
        }
      }
      ```
      :::
2. 父组件通过Ref获取子组件的数据,[参考ref](#react-ref)
