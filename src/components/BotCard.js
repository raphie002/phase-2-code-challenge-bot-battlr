import React from 'react';

function BotCard({ bot, clickHandler, onDischarge, inArmy = false }) {
    if (!bot) return null;
    const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;
    
    const handleBotClick = () => {
        clickHandler(id);
    };
    
    const handleDischarge = (e) => {
        e.stopPropagation(); 
        onDischarge(id);
    };
    
    return (
    <div 
    className={`bot-card ${inArmy ? 'army-bot' : 'collection-bot'}`} 
      onClick={handleBotClick}
    >
      <img src={avatar_url} alt={name} />
      <div className="bot-details">
        <h3>{name} <span className={`bot-class ${bot_class}`}>{bot_class}</span></h3>
        <p>{catchphrase}</p>
        <div className="bot-stats">
          <span>❤️ {health}</span>
          <span>⚔️ {damage}</span>
          <span>🛡️ {armor}</span>
        </div>
      </div>
      
      <button 
        className="discharge-btn" 
        onClick={handleDischarge}
      >
        x
      </button>
    </div>
    );
}

export default BotCard;
