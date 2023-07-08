import React, { useState } from "react";

const initialData = [
  {
    id: 1,
    name: "abubakar siddiq ",
    contactNo: 9762365324,
    Gmail: "shaikhaks806@gmail.com",
  },
];

function Products() {
  const [data, setData] = useState(initialData);
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [gmail, setGmail] = useState("");
  const [edit, setEdit] = useState();

  const nameHandle = (event) => {
    setFullName(event.target.value);
  };
  const contactHandle = (event) => {
    setContact(event.target.value);
  };
  const gmailHandle = (event) => {
    setGmail(event.target.value);
  };

  const addData = () => {
    if (!edit) {
      const newData = {
        name: fullName,
        contactNo: contact,
        Gmail: gmail,
        id: Math.random(),
      };
      setData([...data, newData]);
    } else {
      updateHandle(edit);
    }

    setFullName("");
    setContact("");
    setGmail("");
  };
  const deleteHandle = (id) => {
    const filterdItem = data.filter((item) => item.id !== id);
    setData(filterdItem);
  };
  const editHandle = (item) => {
    setEdit(item);
    setFullName(item.name);
    setContact(item.contactNo);
    setGmail(item.Gmail);
  };

  const cencelHandle = () => {
    setFullName("");
    setContact("");
    setGmail("");
  };

  const updateHandle = (edit) => {
    const updateItem = data.map((el) => {
      if (el.id === edit.id) {
        return {
          ...el,
          name: fullName,
          contactNo: contact,
          Gmail: gmail,
        };
      } else {
        return el;
      }
    });
    setData(updateItem);
    setFullName("");
    setContact("");
    setGmail("");
    setEdit(null);
  };

  return (
    <>
      <input
        type="text"
        placeholder="FullName"
        value={fullName}
        onChange={nameHandle}
      />
      <input
        type="text"
        placeholder="Contact No"
        value={contact}
        onChange={contactHandle}
      />
      <input
        type="text"
        placeholder="G-Mail ID"
        value={gmail}
        onChange={gmailHandle}
      />
      {edit ? (
        <>
          {" "}
          <button onClick={addData}>Update</button>{" "}
          <button onClick={cencelHandle}>Cencel</button>{" "}
        </>
      ) : (
        <button onClick={addData}>Add</button>
      )}
      {data.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Contact No: {item.contactNo}</p>
          <p>G-Mail ID: {item.Gmail}</p>
          <button onClick={() => editHandle(item)}>Edit</button>
          <button onClick={() => deleteHandle(item.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default Products;
