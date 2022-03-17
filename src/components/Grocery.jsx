import { useState } from "react";
import { GroceryInput } from "../components/GroceryInput";
import { GroceryList } from "../components/GroceryList";
import { v4 as uuid } from "uuid";

const Grocery = () => {
  const [data, setData] = useState([]);

  const handleAdd = (title) => {
    // whatever we pass as argument while calling handleAdd
    const payload = { title, id: uuid() };
    setData([...data, payload]);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      <h1>Grocery</h1>
      <GroceryInput handleAdd={handleAdd} />
      {data.map((item) => (
        <GroceryList {...item} key={item.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export { Grocery };
