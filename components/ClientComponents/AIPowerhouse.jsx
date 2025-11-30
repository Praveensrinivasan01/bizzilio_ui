"use client"
import { useRef, useEffect } from 'react';
import { gsap } from "gsap";

export default function AIPowerhouse() {
  const bentoGridRef = useRef(null);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const items = document.querySelectorAll('.yourAIPowerhouseitem');
    if (!items.length) return;
    
    // Updated to purple color for better glow effect
    const GLOW_COLOR = "111, 76, 255"; // Purple color
    const PARTICLE_COUNT = 15;
    const particlesMap = new Map();
    
    // Create a particle element
    const createParticle = (x, y, parent) => {
      const particle = document.createElement('div');
      particle.className = 'magic-particle';
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: rgba(${GLOW_COLOR}, 1);
        box-shadow: 0 0 6px rgba(${GLOW_COLOR}, 0.6);
        pointer-events: none;
        z-index: 100;
        left: ${x}px;
        top: ${y}px;
      `;
      parent.appendChild(particle);
      return particle;
    };
    
    // Clean up function for particles
    const clearParticles = (item) => {
      if (particlesMap.has(item)) {
        const particles = particlesMap.get(item);
        particles.forEach(p => p.parentNode?.removeChild(p));
        particlesMap.set(item, []);
      }
    };
    
    // Apply effects to each item
    items.forEach(item => {
      // Initialize particle storage
      particlesMap.set(item, []);
      
      // Set initial styling with dark theme and subtle border
      gsap.set(item, {
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#0c0117',
        border: '1px solid rgba(111, 76, 255, 0.3)',
        borderRadius: '12px'
      });
      
      // Add mouse move handler to create radial glow effect
      function handleMouseMove(e) {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate position as percentage
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        
        // Update CSS variables for radial gradient position
        item.style.setProperty('--x', `${xPercent}%`);
        item.style.setProperty('--y', `${yPercent}%`);
        
        // Make the glow more intense near the cursor
        const distance = Math.sqrt(
          Math.pow((xPercent - 50) / 50, 2) + 
          Math.pow((yPercent - 50) / 50, 2)
        );
        
        // Calculate intensity based on distance from center (inverse)
        const intensity = Math.max(0, 1 - distance);
        
        // Update the opacity of the gradient
        item.style.setProperty('--opacity', intensity.toFixed(2));
      }
      
      function handleMouseEnter() {
        const rect = item.getBoundingClientRect();
        
        // Show the radial glow
        item.classList.add('hover-active');
        
        // Add particles
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          setTimeout(() => {
            if (!item.isConnected) return;
            const x = Math.random() * rect.width;
            const y = Math.random() * rect.height;
            const particle = createParticle(x, y, item);
            
            gsap.fromTo(particle, 
              { scale: 0, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.3 }
            );
            
            gsap.to(particle, {
              x: (Math.random() - 0.5) * 100,
              y: (Math.random() - 0.5) * 100,
              rotation: Math.random() * 360,
              duration: 2 + Math.random() * 2,
              ease: "none",
              repeat: -1,
              yoyo: true
            });
            
            gsap.to(particle, {
              opacity: 0.3,
              duration: 1.5,
              ease: "power2.inOut",
              repeat: -1,
              yoyo: true
            });
            
            particlesMap.get(item).push(particle);
          }, i * 100);
        }
      }
      
      function handleMouseLeave() {
        // Hide the radial glow
        item.classList.remove('hover-active');
        clearParticles(item);
      }
      
      function handleClick(e) {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const maxDistance = Math.max(
          Math.hypot(x, y),
          Math.hypot(x - rect.width, y),
          Math.hypot(x, y - rect.height),
          Math.hypot(x - rect.width, y - rect.height)
        );
        
        const ripple = document.createElement('div');
        ripple.className = 'magic-ripple';
        ripple.style.cssText = `
          position: absolute;
          width: ${maxDistance * 2}px;
          height: ${maxDistance * 2}px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(${GLOW_COLOR}, 0.4) 0%, rgba(${GLOW_COLOR}, 0.2) 30%, transparent 70%);
          left: ${x - maxDistance}px;
          top: ${y - maxDistance}px;
          pointer-events: none;
          z-index: 1000;
        `;
        
        item.appendChild(ripple);
        
        gsap.fromTo(
          ripple,
          { scale: 0, opacity: 1 },
          { 
            scale: 1,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => ripple.remove()
          }
        );
      }
      
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);
      item.addEventListener('mousemove', handleMouseMove);
    });
    
    // Clean up all event listeners and particles
    return () => {
      items.forEach(item => {
        clearParticles(item);
        
        // Remove all event listeners
        const newItem = item.cloneNode(true);
        item.parentNode.replaceChild(newItem, item);
      });
    };
  }, []);

  return (
    <section className="yourAIPowerhouse_sec" style={{ background: '#090011' }}>
      <div className="container-fluid">
        <div className="yourAIPowerhouse_header">
          <h2 className="textalign_center">
            Your AI Powerhouse - Sell, Serve & Scale
          </h2>
          <p>
            From real-time chat commerce to frictionless operations, Bizzilo’s
            AI suite <br className="brHideOnMobile" /> supercharge every step
            of your customer journey
          </p>
        </div>
        <div className="yourAIPowerhouseGrid">
          <div className="yourAIPowerhouseitem">
            <button style={{cursor:"default"}}>Chat & Voice Commerce</button>
            <h3>Talk. Tap.Transact</h3>

            <div className="yourAIPowerhouseHover">
              <img
                src="/assets/images/hovergradiant.png"
                alt="Hovergradiant"
              />
            </div>
          </div>
          <div className="yourAIPowerhouseitem">
            <button style={{cursor:"default"}}>Dynamic Pricing Engine</button>
            <h3>Maximize Margins in Real Time</h3>
            <p>
              AI analyzes demand, competitor prices & inventory to suggest
              optimal prices-always stay competitive.
            </p>
          </div>
          <div className="yourAIPowerhouseitem">
            <button style={{cursor:"default"}}>Hyper-Personalized</button>
            <h3>Your Best Seller Is Just One Click Away</h3>
            <p>
              Location-, behavior- and season-based product picks that turn
              browsers into buyers.
            </p>
          </div>
          <div className="yourAIPowerhouseitem">
            <button style={{cursor:"default"}}>Hyper-Personalized</button>
            <h3>Demand Forecasting</h3>
          </div>
          <div className="yourAIPowerhouseitem">
            <button style={{cursor:"default"}}>Sentiment IQ</button>
            <h3>Happy Customers, Always</h3>
            <p>
              Multilingual, emotion-aware chat support that deflects ticket
              volume by{" "}
            </p>

            <h4>up to </h4>
            <h2>70%</h2>
          </div>
          <div className="yourAIPowerhouseitem">
            <button style={{cursor:"default"}}>Content Generator</button>
            <h3>Descriptions That Sell Themselves</h3>
          </div>
          <div className="yourAIPowerhouseitem">
            <button style={{cursor:"default"}}>Smart Fraud & Anomaly Alert</button>
            <h3>Sleep Easy, We’ve Got You Covered</h3>
            <p>
              Real-time fraud detection on payments, returns, and unusual
              order patterns.
            </p>
          </div>
          <div className="yourAIPowerhouseitem">
            <button style={{cursor:"default"}}>Conversational BI & Insights</button>
            <h3>Ask, Don’t Search Which SKUs are trending this week?</h3>
            <p>Get visual answers in charts or human-friendly bullets</p>
          </div>
          <div className="yourAIPowerhouseitem">
            <button style={{cursor:"default"}}>AI Video & GIF Maker</button>
            <h3>Bring Your Products to Life</h3>
            <p>
              Auto-generate short demo videos or product GIFs for social & ads-no
              video team needed.
            </p>
          </div>
          <div className="yourAIPowerhouseitem">
            <button style={{cursor:"default"}}>Voice-Activated Dashboard</button>
            <h3>Data at the Speed of Sound</h3>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .yourAIPowerhouseitem {
          background-color: #0c0117;
          border: 1px solid rgba(111, 76, 255, 0.3);
          border-radius: 12px;
          transition: all 0.3s ease;
          overflow: hidden;
          position: relative;
          
          /* Default position for the gradient */
          --x: 50%;
          --y: 50%;
          --opacity: 0;
        }
        
        .yourAIPowerhouseitem::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at var(--x) var(--y),
            rgba(111, 76, 255, 0.4) 0%,
            rgba(111, 76, 255, 0.2) 20%,
            rgba(111, 76, 255, 0.1) 30%,
            rgba(111, 76, 255, 0) 60%
          );
          opacity: var(--opacity);
          transition: opacity 0.1s;
          pointer-events: none;
          z-index: 1;
        }
        
        .yourAIPowerhouseitem.hover-active::before {
          opacity: 1;
        }
        
        .yourAIPowerhouseitem::after {
          content: "";
          position: absolute;
          inset: 0;
          border: 1px solid rgba(111, 76, 255, 0.3);
          border-radius: 12px;
          box-shadow: 
            0 0 15px rgba(111, 76, 255, 0.3),
            inset 0 0 15px rgba(111, 76, 255, 0.15);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          z-index: 1;
        }
        
        .yourAIPowerhouseitem.hover-active::after {
          opacity: 1;
        }
        
        .yourAIPowerhouseitem button,
        .yourAIPowerhouseitem h2,
        .yourAIPowerhouseitem h3,
        .yourAIPowerhouseitem h4,
        .yourAIPowerhouseitem p {
          color: #fff;
          position: relative;
          z-index: 5;
        }
        
        .yourAIPowerhouseitem button {
          background-color: rgba(111, 76, 255, 0.2);
          border: 1px solid rgba(111, 76, 255, 0.5);
          color: rgba(255, 255, 255, 0.9);
          padding: 8px 16px;
          border-radius: 6px;

        }
        
        .magic-particle {
          background: rgba(111, 76, 255, 0.8);
          box-shadow: 0 0 10px rgba(111, 76, 255, 0.6);
          z-index: 2;
        }
        
        .yourAIPowerhouse_sec {
          background-color: #090011;
          color: #fff;
          padding: 60px 0;
        }
      `}</style>
    </section>
  );
}
