import React from "react";
import BotCard from "./BotCollection.jsx";

function BotCard({ bot, onClick, showX, onDischarge }) {
  const { name, bot_class, health, damage, armor, catchphrase, avatar_url } = bot;

  return (
    <div className={`bot-card ${bot_class.toLowerCase()}`} onClick={() => onClick(bot)}>
      <img src={avatar_url} alt={name} className="bot-avatar" />
      <h3>{name}</h3>
      <p className="catchphrase">"{catchphrase}"</p>
      <div className="bot-stats">
        <span>⚔ {damage}</span>
        <span>🛡 {armor}</span>
        <span>❤️ {health}</span>
      </div>
      <div className="bot-class">{bot_class}</div>
      {showX && (
        <button className="discharge-button" onClick={(e) => {
          e.stopPropagation();
          onDischarge(bot.id);
        }}>
          ✖
        </button>
      )}
    </div>
  );
}

export default BotCard;
