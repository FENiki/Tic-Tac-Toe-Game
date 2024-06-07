import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const [clearPlayerName, setClearPlayerName] = useState("");

  function handleEditClick() {
    setClearPlayerName("");
    setIsEditing((editing) => !editing);
    onChangeName(symbol, playerName);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
    setClearPlayerName(event.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let buttonCaption = 'edit';

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={clearPlayerName} onChange={handleChange} />
    );
    // buttonCaption = "save"
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edite"}</button>
    </li>
  );
}
