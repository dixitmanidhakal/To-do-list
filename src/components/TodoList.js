import React, { useState } from "react";

export default function TodoList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    if (input !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };

  const handleEdit = (index, newValue) => {
    const newItems = [...items];
    newItems[index] = newValue;
    setItems(newItems);
    setEditingIndex(null);
    setEditingValue("");
  };

  const handleDelete = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="container">
      <form onSubmit={addItem} className="input-box">
        <input
          className="input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button type="submit" className="btn-btn-plus">
          <i className="fas fa-plus"></i>
        </button>
      </form>

      <ul>
        {items.map((item, index) =>
          editingIndex === index ? (
            <div key={index} className="save">
              <input
                className="input-save"
                type="text"
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
              ></input>
              <button
                className="btn-btn-save"
                onClick={() => handleEdit(index, editingValue)}
              >
                <i className="fas fa-save"></i>Save
              </button>
            </div>
          ) : (
            <div key={index} className="edit-delete">
              <li> {item} </li>
              <button
                className="btn-btn-edit"
                onClick={() => {
                  setEditingIndex(index);
                  setEditingValue(item);
                }}
              >
                <i className="fas fa-edit"></i>
              </button>
              <button
                className="btn-btn-delete"
                onClick={() => handleDelete(index)}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          )
        )}
      </ul>
    </div>
  );
}
