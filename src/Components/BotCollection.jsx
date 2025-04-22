import React from "react";
import BotCard from ".git/BotCard";
import BotCard from "./BotCollection.jsx";

function BotCollection({ bots, onSelect }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onClick={onSelect} />
      ))}
    </div>
  ); 
}

export default BotCollection;
