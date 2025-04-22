import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, onRemove, onDischarge }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="army-list">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => onRemove(bot.id)}
            showX={true}
            onDischarge={onDischarge}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
