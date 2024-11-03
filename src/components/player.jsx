import { useState } from "react";

export default function Player({ name, symbol }) {
  const [playerNameValue, setPlayerNameValue] = useState(name);
  function handlePlayerNameChange(event) {
    setPlayerNameValue(event.target.value);
  }

  const [isEditing, setIsEditing] = useState(false);
  function edit_onClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  let playerName = <span className="player-name">{playerNameValue}</span>;
  if (isEditing)
    playerName = (
      <input
        type="text"
        value={playerNameValue}
        onChange={handlePlayerNameChange}
      ></input>
    );

  return (
    <li>
      {playerName}
      <span className="player-symbol">{symbol}</span>
      <button onClick={edit_onClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
