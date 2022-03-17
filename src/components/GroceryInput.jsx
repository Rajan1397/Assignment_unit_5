import { useState } from "react";

const GroceryInput = ({ handleAdd }) => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Add items to Grocery"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={() => {
          handleAdd(title);
          setTitle("");
        }}
      >
        ADD to Grocery
      </button>
    </div>
  );
};

export { GroceryInput };
