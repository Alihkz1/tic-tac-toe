import { useState } from "react";

export default function Player({ name, symbol, isActive, onNameChange }) {
  const [playerNameValue, setPlayerNameValue] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  function edit_onClick() {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) onNameChange(symbol, playerNameValue);
  }

  let playerName = <span className="player-name">{playerNameValue}</span>;
  if (isEditing)
    playerName = (
      <input
        type="text"
        value={playerNameValue}
        onChange={(event) => setPlayerNameValue(event.target.value)}
      ></input>
    );

  return (
    <li className={isActive ? "active" : null}>
      {playerName}
      <span className="player-symbol">{symbol}</span>
      <button onClick={edit_onClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
