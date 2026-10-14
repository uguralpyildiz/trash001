/**
 * Nowify Media - Standalone Floating Widget
 * File: demoscript.js
 * Embed via: <script src="https://nowifymedia.com/demoscript.js" defer></script>
 */
(function () {
  'use strict';

  // Prevent multiple executions or duplicate widgets
  if (window.__NOWIFY_DEMO_WIDGET_INITIALIZED__) {
    return;
  }
  window.__NOWIFY_DEMO_WIDGET_INITIALIZED__ = true;

  var STYLE_ID = 'nowify-demo-widget-styles';
  var CONTAINER_ID = 'nowify-demo-widget-container';

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) {
      return;
    }

    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .nowify-demo-widget-container {
        all: initial;
        position: fixed;
        bottom: 24px;
        right: 24px;
        width: 62px;
        height: 62px;
        z-index: 2147483647;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        overflow: visible;
      }

      @supports (padding: max(0px)) {
        .nowify-demo-widget-container {
          bottom: max(24px, env(safe-area-inset-bottom, 24px));
          right: max(24px, env(safe-area-inset-right, 24px));
        }
      }

      @media (max-width: 640px) {
        .nowify-demo-widget-container {
          bottom: 16px;
          right: 16px;
        }
        @supports (padding: max(0px)) {
          .nowify-demo-widget-container {
            bottom: max(16px, env(safe-area-inset-bottom, 16px));
            right: max(16px, env(safe-area-inset-right, 16px));
          }
        }
      }

      .nowify-demo-widget-pulse {
        all: initial;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(168, 85, 247, 0.55), rgba(236, 72, 153, 0.55));
        pointer-events: none;
        z-index: 0;
        box-sizing: border-box;
        animation: nowify-demo-pulse-animation 3.2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
      }

      @keyframes nowify-demo-pulse-animation {
        0% {
          transform: scale(0.96);
          opacity: 0.7;
        }
        50% {
          transform: scale(1.36);
          opacity: 0.15;
        }
        100% {
          transform: scale(1.52);
          opacity: 0;
        }
      }

      .nowify-demo-widget-btn {
        all: initial;
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 62px;
        height: 62px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.32);
        background: linear-gradient(135deg, #7c3aed 0%, #a855f7 48%, #ec4899 100%);
        box-shadow:
          0 10px 25px -4px rgba(168, 85, 247, 0.45),
          0 4px 12px -2px rgba(236, 72, 153, 0.35),
          inset 0 1px 1px rgba(255, 255, 255, 0.7),
          inset 0 -2px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        pointer-events: auto;
        user-select: none;
        -webkit-user-select: none;
        -webkit-tap-highlight-color: transparent;
        outline: none;
        box-sizing: border-box;
        overflow: hidden;
        transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, filter 0.3s ease;
      }

      .nowify-demo-widget-btn::before {
        content: "";
        position: absolute;
        top: 1px;
        left: 6px;
        right: 6px;
        height: 48%;
        border-radius: 50px 50px 30px 30px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.08) 80%, transparent 100%);
        pointer-events: none;
        z-index: 1;
      }

      .nowify-demo-widget-btn::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 15%;
        width: 70%;
        height: 22%;
        border-radius: 50%;
        background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.22) 0%, transparent 80%);
        pointer-events: none;
        z-index: 1;
      }

      .nowify-demo-widget-btn:hover {
        transform: scale(1.06);
        box-shadow:
          0 14px 32px -2px rgba(168, 85, 247, 0.6),
          0 8px 18px -1px rgba(236, 72, 153, 0.45),
          0 0 25px 4px rgba(216, 70, 239, 0.35),
          inset 0 1px 2px rgba(255, 255, 255, 0.85),
          inset 0 -2px 4px rgba(0, 0, 0, 0.2);
        filter: brightness(1.05);
      }

      .nowify-demo-widget-btn:active {
        transform: scale(0.96);
        transition-duration: 0.1s;
      }

      .nowify-demo-widget-btn:focus-visible {
        outline: 2px solid #ec4899;
        outline-offset: 4px;
      }

      .nowify-demo-widget-icon {
        all: initial;
        position: relative;
        z-index: 2;
        width: 28px;
        height: 28px;
        display: block;
        pointer-events: none;
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
        transition: transform 0.3s ease;
      }

      .nowify-demo-widget-btn:hover .nowify-demo-widget-icon {
        transform: scale(1.04);
      }

      @media (prefers-reduced-motion: reduce) {
        .nowify-demo-widget-pulse {
          animation: none !important;
          display: none !important;
        }
        .nowify-demo-widget-btn {
          transition: none !important;
        }
        .nowify-demo-widget-btn:hover {
          transform: none !important;
        }
        .nowify-demo-widget-icon {
          transition: none !important;
        }
        .nowify-demo-widget-btn:hover .nowify-demo-widget-icon {
          transform: none !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function createWidget() {
    if (document.getElementById(CONTAINER_ID)) {
      return;
    }

    var container = document.createElement('div');
    container.id = CONTAINER_ID;
    container.className = 'nowify-demo-widget-container';

    var pulse = document.createElement('div');
    pulse.className = 'nowify-demo-widget-pulse';
    pulse.setAttribute('aria-hidden', 'true');

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'nowify-demo-widget-btn';
    button.setAttribute('aria-label', 'Open chat');

    button.innerHTML =
      '<svg class="nowify-demo-widget-icon" viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C6.753 3 2.5 6.94 2.5 11.8c0 1.954.673 3.766 1.828 5.215L3.042 20.4a.75.75 0 0 0 .934.935l3.523-1.282A9.743 9.743 0 0 0 12 20.6c5.247 0 9.5-3.94 9.5-8.8S17.247 3 12 3z" fill="#ffffff"/>' +
      '</svg>';

    container.appendChild(pulse);
    container.appendChild(button);

    document.body.appendChild(container);
  }

  function init() {
    injectStyles();
    createWidget();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();