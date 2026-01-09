// Premium Icon Options for Water/Mineral Brand
// Choose the one you like and I'll replace all 💧 instances with it

// OPTION 1: Premium Water Drop with Sparkle
const IconOption1 = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="dropGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0066CC" stopOpacity="1"/>
        <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.9"/>
      </linearGradient>
    </defs>
    <path d="M12 2C12 2 8 7 8 12C8 16.42 9.79 20 12 20C14.21 20 16 16.42 16 12C16 7 12 2 12 2Z" fill="url(#dropGrad1)" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="12" cy="10" rx="2" ry="1.5" fill="white" opacity="0.6"/>
    <circle cx="10" cy="6" r="1" fill="white" opacity="0.8"/>
    <circle cx="14" cy="7" r="0.8" fill="white" opacity="0.7"/>
  </svg>
);

// OPTION 2: Shield with Water Drop
const IconOption2 = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E63326" stopOpacity="1"/>
        <stop offset="100%" stopColor="#C42820" stopOpacity="0.9"/>
      </linearGradient>
      <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0066CC" stopOpacity="1"/>
        <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.9"/>
      </linearGradient>
    </defs>
    <path d="M12 2L4 5V11C4 15.5 7.2 19.2 12 20.5C16.8 19.2 20 15.5 20 11V5L12 2Z" fill="url(#shieldGrad)" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 8C12 8 10 10 10 12C10 13.66 10.9 15 12 15C13.1 15 14 13.66 14 12C14 10 12 8 12 8Z" fill="url(#waterGrad)"/>
    <circle cx="12" cy="12" r="1.5" fill="white" opacity="0.8"/>
  </svg>
);

// OPTION 3: Diamond/Crystal
const IconOption3 = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0066CC" stopOpacity="1"/>
        <stop offset="50%" stopColor="#00B4D8" stopOpacity="0.95"/>
        <stop offset="100%" stopColor="#0066CC" stopOpacity="0.9"/>
      </linearGradient>
    </defs>
    <path d="M12 2L15 8L12 14L9 8L12 2Z" fill="url(#diamondGrad)" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 8L6 12L9 16L12 12L9 8Z" fill="url(#diamondGrad)" stroke="currentColor" strokeWidth="1.5" opacity="0.9"/>
    <path d="M15 8L18 12L15 16L12 12L15 8Z" fill="url(#diamondGrad)" stroke="currentColor" strokeWidth="1.5" opacity="0.9"/>
    <path d="M9 16L12 20L15 16L12 12L9 16Z" fill="url(#diamondGrad)" stroke="currentColor" strokeWidth="1.5" opacity="0.85"/>
    <circle cx="12" cy="12" r="1.5" fill="white" opacity="0.7"/>
  </svg>
);

// OPTION 4: Wave Pattern
const IconOption4 = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0066CC" stopOpacity="1"/>
        <stop offset="50%" stopColor="#00B4D8" stopOpacity="0.95"/>
        <stop offset="100%" stopColor="#0066CC" stopOpacity="0.9"/>
      </linearGradient>
    </defs>
    <path d="M2 12C2 12 4 8 8 8C12 8 14 12 14 12C14 12 16 8 20 8C22 8 22 10 22 12C22 14 20 16 18 16C14 16 12 12 12 12C12 12 10 16 6 16C4 16 2 14 2 12Z" fill="url(#waveGrad)" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 16C2 16 4 12 8 12C12 12 14 16 14 16C14 16 16 12 20 12C22 12 22 14 22 16C22 18 20 20 18 20C14 20 12 16 12 16C12 16 10 20 6 20C4 20 2 18 2 16Z" fill="url(#waveGrad)" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
    <circle cx="8" cy="12" r="1" fill="white" opacity="0.7"/>
    <circle cx="16" cy="12" r="1" fill="white" opacity="0.7"/>
  </svg>
);

// OPTION 5: Leaf with Water Droplets
const IconOption5 = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#28A745" stopOpacity="1"/>
        <stop offset="100%" stopColor="#20C997" stopOpacity="0.9"/>
      </linearGradient>
      <linearGradient id="dropGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0066CC" stopOpacity="1"/>
        <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.9"/>
      </linearGradient>
    </defs>
    <path d="M12 2C8 4 4 8 4 12C4 16 8 20 12 20C16 20 20 16 20 12C20 8 16 4 12 2Z" fill="url(#leafGrad)" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 6C8 6 6 8 6 10C6 11 7 12 8 12C9 12 10 11 10 10C10 8 8 6 8 6Z" fill="url(#dropGrad2)"/>
    <path d="M16 6C16 6 18 8 18 10C18 11 17 12 16 12C15 12 14 11 14 10C14 8 16 6 16 6Z" fill="url(#dropGrad2)"/>
    <circle cx="8" cy="9" r="0.8" fill="white" opacity="0.8"/>
    <circle cx="16" cy="9" r="0.8" fill="white" opacity="0.8"/>
  </svg>
);

// OPTION 6: Checkmark in Circle (Premium Badge)
const IconOption6 = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0066CC" stopOpacity="1"/>
        <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.9"/>
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#circleGrad)" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="12" cy="12" r="8" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
  </svg>
);

// OPTION 7: Star with Water Drop
const IconOption7 = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" stopOpacity="1"/>
        <stop offset="100%" stopColor="#FFA500" stopOpacity="0.9"/>
      </linearGradient>
      <linearGradient id="dropGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0066CC" stopOpacity="1"/>
        <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.9"/>
      </linearGradient>
    </defs>
    <path d="M12 2L14.5 8.5L21 10L14.5 11.5L12 18L9.5 11.5L3 10L9.5 8.5L12 2Z" fill="url(#starGrad)" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 10C12 10 11 11.5 11 13C11 13.83 11.67 14.5 12.5 14.5C13.33 14.5 14 13.83 14 13C14 11.5 12 10 12 10Z" fill="url(#dropGrad3)"/>
    <circle cx="12.5" cy="13" r="0.8" fill="white" opacity="0.8"/>
  </svg>
);

// OPTION 8: Minimalist Water Drop
const IconOption8 = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="minimalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0066CC" stopOpacity="1"/>
        <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.9"/>
      </linearGradient>
    </defs>
    <path d="M12 3C12 3 6 9 6 14C6 17.31 8.69 20 12 20C15.31 20 18 17.31 18 14C18 9 12 3 12 3Z" fill="url(#minimalGrad)" stroke="currentColor" strokeWidth="2"/>
    <ellipse cx="12" cy="12" rx="3" ry="2" fill="white" opacity="0.5"/>
  </svg>
);

// OPTION 9: Hexagon with Water Symbol
const IconOption9 = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0066CC" stopOpacity="1"/>
        <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.9"/>
      </linearGradient>
    </defs>
    <path d="M12 2L16 5L16 10L12 13L8 10L8 5L12 2Z" fill="url(#hexGrad)" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 7C12 7 10 9 10 11C10 12.1 10.9 13 12 13C13.1 13 14 12.1 14 11C14 9 12 7 12 7Z" fill="white" opacity="0.8"/>
    <circle cx="12" cy="11" r="1" fill="currentColor" opacity="0.6"/>
  </svg>
);

// OPTION 10: Premium Badge/Seal
const IconOption10 = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E63326" stopOpacity="1"/>
        <stop offset="100%" stopColor="#C42820" stopOpacity="0.9"/>
      </linearGradient>
      <linearGradient id="innerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0066CC" stopOpacity="1"/>
        <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.9"/>
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#badgeGrad)" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="7" fill="url(#innerGrad)"/>
    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export {
  IconOption1,  // Premium Water Drop with Sparkle
  IconOption2,  // Shield with Water Drop
  IconOption3,  // Diamond/Crystal
  IconOption4,  // Wave Pattern
  IconOption5,  // Leaf with Water Droplets
  IconOption6,  // Checkmark in Circle
  IconOption7,  // Star with Water Drop
  IconOption8,  // Minimalist Water Drop
  IconOption9,  // Hexagon with Water Symbol
  IconOption10  // Premium Badge/Seal
};
