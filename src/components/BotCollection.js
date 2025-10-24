import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, onEnlist, onDischarge }) {
  const handleBotClick = (botId) => {
    const botToEnlist = bots.find(bot => bot.id === botId);
    if (botToEnlist) {
      onEnlist(botToEnlist);
    }
  };

  const botCards = bots.map((bot) => (
    <BotCard 
      key={bot.id} 
      bot={bot} 
      clickHandler={handleBotClick} 
      onDischarge={onDischarge}
      inArmy={false}
    />
  ));

  return (
    <div className="bot-collection-container">
      <h2>Bot Collection</h2>
      <div className="bot-list">
        {botCards}
      </div>
    </div>
  );
}

export default BotCollection;
