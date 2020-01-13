import React, { Component } from 'react';
import './App.css';
import List from './components/List';

export default class App extends Component {

//   constructor(props) {
//       super(props);
//       this.state = { items: [], text: '' };
//       this.removeItem = this.removeItem.bind(this);
//     }
   
  
// 	 onChange = (event) => {
// 		this.setState({ term: event.target.value });
// 	} //allows me to enter text

//   	onSubmit = (event) => {
//     	event.preventDefault();
// 		this.setState({
// 			term: '',
// 			items: [...this.state.items, this.state.term]
// 		});
//     }

//     removeItem(index) {
//       const items = this.state.items.filter((item, itemsIndex) => {
//         return itemsIndex !== index
//       })
//       this.setState({ items })
//     }

// 	render() {
// 		return (
// 			<div>
// 				<form className="App" onSubmit={this.onSubmit}>
// 					<input value={this.state.term} onChange={this.onChange} />
// 					<button>Submit</button>
// 				</form>
//         <List 
//         items={this.state.items}
//         removeItem={this.removeItem}
//          />
// 			</div>
      
// 		);
// 	}
// }


constructor(props){
  super(props);
  this.state = {
      todos: [],
      todo: ''
  }
  this.changeTodo = this.changeTodo.bind(this);
  this.addTodo = this.addTodo.bind(this);
  this.removeTodo = this.removeTodo.bind(this);
}

changeTodo(event){
  this.setState({
      todo: event.target.value
  })
}

addTodo(){
  let { todo, todos } = this.state;
  this.setState({
      todo: '',
      todos: [...todos, todo]
  })
}

removeTodo(index){
  let { todos } = this.state;
  todos.splice(index, 1);
  this.setState({
      todos: todos
  })
}

render(){
  let { todo, todos } = this.state;
  return <div>
      <input value={todo} onChange={this.changeTodo}/>
      <button onClick={this.addTodo}>Add Todo</button>
      {
          todos.map((todo, index)=>{
              return <li onClick={this.removeTodo.bind(undefined, index)} key={index}>{todo}</li>
          })
      }
  </div>
}
}


// constructor(props) {
//   super(props);
//   this.state = { todos: [], text: '' };
//   this.removeTodo = this.removeTodo.bind(this);
// }

// addTodo(e) {
//   e.preventDefault();
//   this.setState({ 
//     todos: [ this.state.text, ...this.state.todos ],
//     text: ''
//   });
// }

// removeTodo(name, i){
//   let todos = this.state.todos.slice();
//   todos.splice(i, 1);
//   this.setState({
//       todos
//   });
// }

// updateValue(e) {
//   this.setState({ text: e.target.value})
// }

// render() {
//   return(
//       <div>
//           <form onSubmit = {(e) => this.addTodo(e)}>
//               <input
//                   placeholder="Add Todo"
//                   value={this.state.text}
//                   onChange={(e) => {this.updateValue(e)}}
//               />
//               <button type="submit">Add Todo</button>
//           </form>
//           <TodoList todos={this.state.todos} removeTodo={this.removeTodo}/>
//       </div>
//   );
// }
// }
