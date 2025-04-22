import React from "react";

const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

function FilterBar({ onFilterChange }) {
  const toggleClass = (cls) => {
    setSelected((prev) =>
      prev.includes(cls) ? prev.filter((c) => c !== cls) : [...prev, cls]
    );
  };

  const [selected, setSelected] = React.useState([]);

  React.useEffect(() => {
    onFilterChange(selected);
  }, [selected]);

  return (
    <div className="filter-bar">
      <label>Filter by class:</label>
      {classes.map((cls) => (
        <button
          key={cls}
          onClick={() => toggleClass(cls)}
          className={selected.includes(cls) ? "active" : ""}
        >
          {cls}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
