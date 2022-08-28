import React, { Component, useEffect, useState } from "react";

function EffectFunc() {
  const [name, setName] = useState("");
  const [isUpdate, SetUpdate] = useState(false);

  // component did mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => {
        setName(json.name);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        name: name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        SetUpdate(true);
      });
  };

  // component did update
  useEffect(() => {
    if (isUpdate) {
      alert("Nama Sukses Di Update");
      SetUpdate(false);
    }
  }, [isUpdate]);

  // component will unmount
  useEffect(() => {
    return () => {
      console.log("component di hapus");
    };
  }, []);
  
  return (
    <div>
      <h3>Nama: {name}</h3>
      <hr />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Masukkan Data Nama"
          name="nama"
          onChange={(e) => {
            setName({ name: e.target.value });
          }}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EffectFunc;
