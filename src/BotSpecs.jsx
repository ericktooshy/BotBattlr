import React from "react";

function BotSpecs({ bot, onBack, onEnlist }) {
  const { name, bot_class, health, damage, armor, catchphrase, avatar_url } = bot;

  return (
    <div className="bot-specs">
      <img src={avatar_url} alt={name} className="bot-specs-avatar" />
      <h2>{name}</h2>
      <p className="catchphrase">"{catchphrase}"</p>

      <div className="bot-specs-details">
        <p><strong>Class:</strong> {bot_class}</p>
        <p><strong>Health:</strong> {health}</p>
        <p><strong>Damage:</strong> {damage}</p>
        <p><strong>Armor:</strong> {armor}</p>
      </div>

      <div className="bot-specs-actions">
        <button className="back-button" onClick={onBack}>← Back</button>
        <button className="enlist-button" onClick={() => onEnlist(bot)}>Enlist</button>
      </div>
    </div>
  );
}

export default BotSpecs;
