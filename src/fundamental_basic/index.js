// ======= State & Props =======

// import React, { useState } from 'react'
// import TodoList from './component/page/TodoList'
// import CreateList from './component/page/CreateList'

// export default function Index() {
//     const [getList, SetList] = useState([
//         {}
//     ])

//     const eventCreateTodo = (data) => {
//         SetList(getList.concat(data))
//         console.log(getList);
//     }


//   return (
//     <div>
//         <h3>
//             CRUD LIST DATA
//             <TodoList data={ getList } />
//             <CreateList createList={ eventCreateTodo } />
//         </h3>
//     </div>
//   )
// }


// ====== Lifecycle =======

// import React, { Component } from 'react'
// import Lifecycle from './lifecycle/lifecycle'

// export default class Index extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         showComponent: false,
//       }
//     }
//    componentDidMount() {
//     this.setState({
//         showComponent: true,
//     })
//    }

//   render() {
//     return (
//       <div>
//         {
//             this.state.showComponent?
//             <Lifecycle /> : null
//         }
//       </div>
//     )
//   }
// }



// ====== List And Key =======

// import React from 'react'
// import ListTodo from "./list_and_key/listTodo"

// export default function Index() {
//     const todos = [
//     {id: 1, name: ' udin'},
//     {id: 2, name: ' yanto'},
//     {id: 3, name: ' asep'},
//     ]

//   return (
//     <div>
//       <h1>List And Key</h1>
//       <ListTodo ListTodo = { todos } />
//     </div>
//   )
// }


// ====== UseEffect =======

import React, { Component } from 'react'
import UseEffect from './useEffect/UseEffectExample'
import UseEffectFanc from './useEffect/EffectFunc'

export default class Index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isHide: false
    }
  }
  render() {
    const { isHide } = this.state
    return (
      <div>
        <button onClick={() => this.setState({isHide : !isHide})}>
          {isHide ? "Tampilkan" : "Sembunyikan"}
        </button>
        {!isHide && <UseEffect />}
        {/* {!isHide && <UseEffectFanc />} */}

      </div>
    )
  }
}


