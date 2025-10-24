import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((r) => r.json())
      .then(data => {
        console.log("Fetched Data:", data);
        setBots(data);
      })
      .catch((error) => console.error("Fetch Error:", error));
  }, []);

  const enlistBot = (botToEnlist) => {
    const isAlreadyEnlisted = army.some((bot) => bot.id === botToEnlist.id);
    if (!isAlreadyEnlisted) {
      setArmy([...army, botToEnlist]);
    }
  };

  const releaseBot = (botId) => {
    setArmy(army.filter((bot) => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: "DELETE",
    })
      .then(() => {
        setBots(bots.filter((bot) => bot.id !== botId));
        
        setArmy(army.filter((bot) => bot.id !== botId));
      })
      .catch((error) => console.error("Error discharging bot:", error));
  };

  return (
    <div className="App">
      <h1>🤖 Bot Battlr 🤖</h1>
      
      <YourBotArmy 
        army={army} 
        onRelease={releaseBot} 
        onDischarge={dischargeBot} 
      />
      
      <BotCollection 
        bots={bots} 
        onEnlist={enlistBot} 
        onDischarge={dischargeBot} 
      />
    </div>
  );
}

export default App;
