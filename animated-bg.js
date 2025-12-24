/**
 * 4K Website Background (no quality loss)
 * Uses the uploaded marina image at full 4K quality
 * with optimal CSS for crisp rendering
 */

(() => {
  // Path to the 4K background image
  const IMAGE_4K = "assets/bg/marine-4k.jpg";

  // Ensure the page can host a fixed background
  document.documentElement.style.height = "100%";
  document.body.style.minHeight = "100vh";
  document.body.style.overflowX = "hidden";

  // Create background wrapper
  const wrap = document.createElement("div");
  wrap.id = "bg-4k-wrap";

  const bg = document.createElement("div");
  bg.id = "bg-4k-image";

  const overlay = document.createElement("div");
  overlay.id = "bg-4k-overlay";

  wrap.appendChild(bg);
  wrap.appendChild(overlay);
  document.body.prepend(wrap);

  // Preload the 4K image for faster rendering
  const preloadLink = document.createElement("link");
  preloadLink.rel = "preload";
  preloadLink.as = "image";
  preloadLink.href = IMAGE_4K;
  document.head.appendChild(preloadLink);

  // Inject optimized CSS for 4K quality
  const style = document.createElement("style");
  style.textContent = `
    #bg-4k-wrap {
      position: fixed;
      inset: 0;
      z-index: -1;
      overflow: hidden;
      pointer-events: none;
      background: #061018;
    }

    #bg-4k-image {
      position: absolute;
      inset: 0;
      background-image: url("${IMAGE_4K}");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      /* Disable any quality-reducing filters */
      image-rendering: auto;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    /* Gradient overlay for text readability while preserving image quality */
    #bg-4k-overlay {
      position: absolute;
      inset: 0;
      background: 
        /* Top gradient for header */
        linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 12%),
        /* Bottom gradient for content */
        linear-gradient(to top, rgba(6,16,24,0.75) 0%, rgba(6,16,24,0.35) 25%, transparent 55%),
        /* Left side for text contrast */
        linear-gradient(to right, rgba(6,16,24,0.4) 0%, transparent 45%);
    }

    /* Scroll parallax on desktop for fixed feel */
    @supports (background-attachment: fixed) {
      @media (min-width: 769px) {
        #bg-4k-image {
          background-attachment: fixed;
        }
      }
    }

    /* Mobile: disable fixed attachment for performance */
    @media (max-width: 768px) {
      #bg-4k-image {
        background-attachment: scroll;
        background-position: center top;
      }
    }
  `;
  document.head.appendChild(style);
})();
