// ==== UseEffect 1 =====

// import React, { Component, useState } from 'react'
// import { useEffect } from "react";

// export default function useEffectExample() {
//   const [name, setName] = useState('Belajar React UseEffect')
//   useEffect(
//     () => {
//     document.title = name
//     console.log('useEffect updated!');
//     }
//   )
//   const handleChangeName = (e) => {
//     setName(e.target.value)
//     console.log(name);
//   }
//   return(
//     <div>
//       <input value={name} onChange={ handleChangeName } />
//       <h3>{name}</h3>
//     </div>
//   )
// }

//  ===== UseEffect & Lifecycle 2 =====

import React, { Component, useState } from "react";

export default class UseEffectExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      isUpdate: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => {
       console.log(json);
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        name: this.state.name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
          this.setState({
            isUpdate: true
          });
      });
  };

  componentDidUpdate() {
    const { isUpdate } = this.state
    if (isUpdate) {
      alert ('Data ' + this.state.name + " di tambahkan" )
      this.setState({
        isUpdate : false
      })
    }
  }

  componentWillUnmount() {
    console.log('Component Telah Di Hapus');
  }
  

  render() {
   
    return (
      <div>
        <h2>UseEffect & Lifecycle Component</h2>
        <hr />
        <h3>Name: <br /> {this.state.name}</h3>
        <hr />

        <h4>Data Update</h4>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Masukkan Data Nama"
            name="nama"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />{" "}
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
 