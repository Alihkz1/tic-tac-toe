import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function edit_onClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) playerName = <input type="text" value={name}></input>;

  return (
    <li>
      {playerName}
      <span className="player-symbol">{symbol}</span>
      <button onClick={edit_onClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
