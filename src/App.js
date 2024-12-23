import { useState } from "react";

function App() {
  const arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "*",
    ".",
    "C",
    "=",
  ];
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleClick(e) {
    const id = e.target.id;
    if (id === "C") {
      setValue("");
    } else if (id === "=") {
      handleSubmit();
    } else {
      setValue(value + id);
    }
  }
  function handleSubmit(e) {
    e?.preventDefault();
    try {
      const ans = eval(value);
      setValue(ans);
    } catch (err) {
      alert("Invalid Inputs: " + err);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-8">
        Calculator
      </h1>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          className="w-full border border-gray-300 rounded-lg shadow-sm p-4 text-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none mb-6"
          onChange={handleChange}
        />
      </form>
      <div
        className="grid grid-cols-4 gap-4 w-full max-w-sm"
        onClick={handleClick}
      >
        {arr.map((item, index) => (
          <button
            id={item}
            key={index}
            className={`p-4 text-xl font-semibold rounded-lg shadow-sm border border-gray-300 ${
              item === "="
                ? "col-span-4 bg-blue-500 text-white hover:bg-blue-600"
                : item === "C"
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white hover:bg-blue-100"
            } focus:ring-2 focus:ring-blue-500 transition-all`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
