import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar";
import FilterBar from "./FilterBar";
import "./index.css";

function App() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [filters, setFilters] = useState([]);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    if (botArmy.some((b) => b.bot_class === bot.bot_class)) return;
    setBotArmy([...botArmy, bot]);
  };

  const removeBot = (botId) => {
    setBotArmy(botArmy.filter((b) => b.id !== botId));
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: "DELETE",
    });
    setBotArmy(botArmy.filter((b) => b.id !== botId));
    setBots(bots.filter((b) => b.id !== botId));
  };

  const handleSort = (criterion) => setSortBy(criterion);
  const handleFilterChange = (newFilters) => setFilters(newFilters);

  const filteredAndSortedBots = bots
    .filter((bot) => filters.length === 0 || filters.includes(bot.bot_class))
    .sort((a, b) => {
      if (!sortBy) return 0;
      return b[sortBy] - a[sortBy];
    });

  return (
    <div className="App">
      <h1 className="title">🤖 BOT BATTLR</h1>
      <YourBotArmy
        bots={botArmy}
        onRemove={removeBot}
        onDischarge={dischargeBot}
      />
      <SortBar onSort={handleSort} />
      <FilterBar onFilterChange={handleFilterChange} />
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          onBack={() => setSelectedBot(null)}
          onEnlist={enlistBot}
        />
      ) : (
        <BotCollection bots={filteredAndSortedBots} onSelect={setSelectedBot} />
      )}
    </div>
  );
}

export default App;
