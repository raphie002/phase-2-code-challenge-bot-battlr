import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, onRelease, onDischarge }) {
  const handleBotClick = (botId) => {
    onRelease(botId);
  };

  const armyCards = army.map((bot) => (
    <BotCard 
      key={bot.id} 
      bot={bot} 
      clickHandler={handleBotClick} 
      onDischarge={onDischarge}
      inArmy={true}
    />
  ));

  return (
    <div className="your-bot-army">
      <h2>Your Bot Army ({army.length} Bots Enlisted)</h2>
      <div className="army-list">
        {armyCards.length > 0 ? (
          armyCards
        ) : (
          <p className="empty-army">Click a bot below to enlist it!</p>
        )}
      </div>
    </div>
  );
}

export default YourBotArmy;
