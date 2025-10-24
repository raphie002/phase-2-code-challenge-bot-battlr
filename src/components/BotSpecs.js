import React from 'react';

function BotSpecs({ bot, onEnlist, onGoBack, onDischarge }) {
  if (!bot) return null;

  const { name, health, damage, armor, bot_class, catchphrase, avatar_url, created_at } = bot;

  const handleEnlist = () => {
    onEnlist(bot);
    onGoBack();
  };

  const handleDischarge = () => {
    onDischarge(bot.id);
    onGoBack();
  };

  return (
    <div className="bot-specs-container">
      <div className="specs-card">
        <div className="specs-image-area">
          <img src={avatar_url} alt={name} />
          <p className="specs-catchphrase">"{catchphrase}"</p>
        </div>

        <div className="specs-details-area">
          <h2>{name}</h2>
          <p><strong>Class:</strong> <span className={`bot-class ${bot_class}`}>{bot_class}</span></p>
          <p><strong>Created:</strong> {new Date(created_at).toLocaleDateString()}</p>

          <h3>Stats:</h3>
          <div className="specs-stats-grid">
            <div className="stat-item">
              <span>❤️ Health</span>
              <span className="stat-value">{health}</span>
            </div>
            <div className="stat-item">
              <span>⚔️ Damage</span>
              <span className="stat-value">{damage}</span>
            </div>
            <div className="stat-item">
              <span>🛡️ Armor</span>
              <span className="stat-value">{armor}</span>
            </div>
          </div>
          
          <div className="specs-action-buttons">
            <button 
              className="specs-btn enlist-btn" 
              onClick={handleEnlist}
            >
              Enlist Bot 🫡
            </button>
            <button 
              className="specs-btn back-btn" 
              onClick={onGoBack}
            >
              Go Back to List 🔙
            </button>
            <button 
              className="specs-btn discharge-btn" 
              onClick={handleDischarge}
            >
              Discharge Forever 💀
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
