function applyHudAdjustments(){
    const selectors = ['#canvas','#canvas2','#game_hud','#game_menu_overlay','#lobbyBG','#fracSurPWDiv'];
    selectors.forEach(sel => {
        const el = document.querySelector(sel);
        if(el) el.style.setProperty('height','100vh','important');
    });

    const move = el => {
        if(el) {
            el.style.transform = 'translateY(85px)';
            el.style.transition = 'transform 0.3s ease';
        }
    };
    move(document.getElementById('chat-window'));
    move(document.querySelector('#game_hud_inner #lower_left_container'));

    const weapons = document.querySelector('#game_hud_inner #weaponsDiv');
    if(weapons){
        weapons.style.setProperty('transform','translateY(100px)','important');
        weapons.style.setProperty('transition','transform 0.3s ease','important');
    }

    const adv = document.getElementById('ad_728');
    if(adv) adv.remove();

    const crosshair = document.getElementById('canvas_crosshair');
    if (crosshair) {
        crosshair.style.position = 'absolute';
        crosshair.style.top = '50%';
        crosshair.style.left = '50%';
    }
}

const fixObs = new MutationObserver(applyHudAdjustments);
window.addEventListener('load', () => {
    applyHudAdjustments();
    fixObs.observe(document.body, { childList: true, subtree: true });
});
  
(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const el = document.createElement('div');
    el.innerHTML = `
      <style>
        #evui {
          position: fixed;
          top: 10px;
          left: 200px;
          z-index: 9999;
          display: flex;
          gap: 4px;
          background: rgba(0,0,0,0.6);
          padding: 6px;
          border-radius: 6px;
        }
        #evui input, #evui button {
          font-size: 12px;
          padding: 4px 6px;
          border: none;
          border-radius: 4px;
        }
        #evui input {
          width: 160px;
        }
        #evui button {
          cursor: pointer;
          color: white;
        }
        #evui .go { background: #28a745; }
        #evui .refresh { background: #007bff; }
      </style>
      <div id="evui">
        <input id="roomInput" placeholder="ev.io room link">
        <button class="go">🚪</button>
        <button class="refresh">🔄</button>
      </div>
    `;
    document.body.appendChild(el);

    document.querySelector('#evui .refresh').onclick = () => location.reload();
    document.querySelector('#evui .go').onclick = () => {
      const url = document.querySelector('#roomInput').value.trim();
      if (url.startsWith('http')) location.href = url;
      else alert("Invalid link.");
    };
  });
})();

window.addEventListener("keydown", e => {
  if (e.key === "F11") {
    e.preventDefault();
    const el = document.documentElement;
    if (!document.fullscreenElement) {
      el.requestFullscreen().catch(console.error);
    } else {
      document.exitFullscreen();
    }
  }
});

(() => {
  const originalWebSocket = window.WebSocket;
  const sockets = new Set();

  // Override WebSocket to keep track of new connections
  window.WebSocket = function(url, protocols) {
    const ws = protocols ? new originalWebSocket(url, protocols)
                          : new originalWebSocket(url);

    sockets.add(ws);

    ws.addEventListener('close', () => {
      sockets.delete(ws);
    });

    return ws;
  };
  window.WebSocket.prototype = originalWebSocket.prototype;

  // Start ping loop once page is ready
  window.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
      for (const ws of Array.from(sockets)) {
        if (ws.readyState === WebSocket.OPEN) {
          try {
            ws.send('ping');
          } catch (e) {
            console.warn('WebSocket ping failed:', e);
          }
        }
      }
    }, 20000); // ping every 20 seconds
  });
})();
