// ===== Lifecycle 1 ===== 

// import React, { Component } from 'react'
// import Sublifestate from "./sublifecycle"
// export default class lifecycle extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        makanan: 'bakso',
//        data: {},
//        halaman: false
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => {
//     this.setState({
//       data: json
//     })
//   })
//   }

//   changeFood(value) {
//     this.setState({
//       makanan: value
//     })
//   }
  
//   render() {
//     return (
//       <div>
//         <h2>Belajar lifecycle</h2>
//         <h2>{this.state.makanan}</h2>
//         <p>{ this.state.data.title }</p>

//         {this.state.halaman && <Sublifestate changeFood={(value) => this.changeFood(value)} />}
//         <button onClick={() => this.setState({halaman: !this.state.halaman})}>Tekan</button>
//       </div>
//     )
//   }
// }

// ===== Lifecycle 2 ===== 

// import React, { Component } from 'react'

// export default class lifecycle extends Component {
//   constructor(props) {
//     console.log('constructor');
//     super(props)
  
//     this.state = {
//        count: 1,
//     }
//   }

//   static getDerivedStateFromProps(props, state){
//     console.log('getDerivedStateFromProps');
//     return null
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     setTimeout(() => {
//       this.setState({
//         count: 2
//       })
//     }, 3000)
//   }

  

//   shouldComponentUpdate(nextProps, nextState) {
//     console.group('shouldComponentUpdate');
//     console.log("nextState", nextState);
//     console.log("thisState", this.state);

//     if (nextState.count >= 10) {
//       return false;
//     } 
//     console.groupEnd()

//     return true;
    
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState){
//     console.log('getSnapshotBeforeUpdate');
//     return null
    
//   }

//   changeEvent = () => {
//     this.setState({
//       count : this.state.count + 1
//     })
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('componentDidUpdate');
//   }

//   render() {
//     console.log('render');
//     return (
//       <div>
//         <button onClick={this.changeEvent}>Count: { this.state.count }</button>
//       </div>
//     )
//   }
// }


