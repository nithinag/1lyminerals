import React from 'react';

// Trophy/Leader Icon (🏆)
export const TrophyIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="trophyGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700"/>
        <stop offset="100%" stopColor="#FFA500"/>
      </linearGradient>
      <linearGradient id="trophyRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E63326"/>
        <stop offset="100%" stopColor="#FF5722"/>
      </linearGradient>
    </defs>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6V9z" fill="url(#trophyGoldGrad)"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18V9z" fill="url(#trophyGoldGrad)"/>
    <path d="M4 22h16v-2H4v2z" fill="url(#trophyRedGrad)"/>
    <path d="M10 14.66V17c0 .55-.45 1-1 1H5v2h14v-2h-4c-.55 0-1-.45-1-1v-2.34" stroke="url(#trophyGoldGrad)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 2a5 5 0 0 1 5 5v3.5a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" fill="url(#trophyGoldGrad)"/>
    <polygon points="12 5 13 7 15 7.3 13.5 8.7 14 10.7 12 9.7 10 10.7 10.5 8.7 9 7.3 11 7" fill="#FFF" opacity="0.9"/>
  </svg>
);

// Checkmark Icon (✓)
export const CheckIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="checkGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#28A745"/>
        <stop offset="100%" stopColor="#20C997"/>
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#checkGreenGrad)"/>
    <path d="M8.5 12.5l2 2 5-5" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Factory/Plant Icon (🏭)
export const PlantIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="factoryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4B5563"/>
        <stop offset="100%" stopColor="#1F2937"/>
      </linearGradient>
      <linearGradient id="factoryWindowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF"/>
        <stop offset="100%" stopColor="#E5E7EB"/>
      </linearGradient>
    </defs>
    <rect x="2" y="20" width="20" height="2" rx="1" fill="#9CA3AF"/>
    <path d="M4 20h16v-8l-4 2.5V10l-4 2.5V8H4v12z" fill="url(#factoryGrad)"/>
    <rect x="6" y="4" width="2.5" height="4" rx="0.5" fill="#374151"/>
    <rect x="10" y="5" width="2" height="3" rx="0.5" fill="#374151"/>
    <circle cx="7.25" cy="2" r="1" fill="#D1D5DB" opacity="0.6"/>
    <circle cx="8" cy="1" r="1.5" fill="#E5E7EB" opacity="0.4"/>
    <circle cx="11" cy="3" r="0.8" fill="#D1D5DB" opacity="0.6"/>
    <rect x="6" y="15" width="1.5" height="3" rx="0.3" fill="url(#factoryWindowGrad)"/>
    <rect x="9.5" y="15" width="1.5" height="3" rx="0.3" fill="url(#factoryWindowGrad)"/>
    <rect x="13" y="15" width="1.5" height="3" rx="0.3" fill="url(#factoryWindowGrad)"/>
    <rect x="16.5" y="15" width="1.5" height="3" rx="0.3" fill="url(#factoryWindowGrad)"/>
  </svg>
);

// Family/Users Icon (👨‍👩‍👧‍👦)
export const FamilyIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="familyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E63326"/>
        <stop offset="100%" stopColor="#FFA500"/>
      </linearGradient>
    </defs>
    <circle cx="7.5" cy="6.5" r="2" fill="url(#familyGrad)"/>
    <path d="M7.5 9.5c-2.2 0-4 1.8-4 4v5.5h2v-4h1v4h2v-5.5h1v-4" fill="url(#familyGrad)"/>
    <circle cx="16.5" cy="6.5" r="2" fill="url(#familyGrad)"/>
    <path d="M16.5 9.5c-2 0-3.5 1.5-3.5 3.5v5.5h2v-4h1v4h2V13c0-2-1.5-3.5-3.5-3.5z" fill="url(#familyGrad)"/>
    <circle cx="12" cy="11.5" r="1.5" fill="url(#familyGrad)"/>
    <path d="M12 13.5c-1.2 0-2 .8-2 2v3.5h1v-2.5h2v2.5h1v-3.5c0-1.2-.8-2-2-2z" fill="url(#familyGrad)"/>
  </svg>
);

// Globe/Earth Icon (🌏)
export const GlobeIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="indiaMapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E63326"/>
        <stop offset="100%" stopColor="#FF6B6B"/>
      </linearGradient>
    </defs>
    <path 
      d="M12.2 2 L13.5 3.2 L13 5.2 L14.2 6 L14.5 7.2 L16.8 7.5 L18.2 8.8 L20.2 8.8 L20.2 10.5 L18.5 11 L16.8 10.8 L16 11.8 L16.5 13 L15 14 L13.8 17 L12.8 21.5 L12 21.5 L11.5 17.5 L10 14 L9.5 13 L7.8 12.5 L6.2 12.2 L5.5 12.8 L4.8 11.2 L6 10 L5.5 8.5 L7.5 8 L9.2 6.5 L8.8 4.8 L11 4 Z" 
      fill="url(#indiaMapGrad)"
      stroke="rgba(230, 51, 38, 0.4)"
      strokeWidth="0.75"
      strokeLinejoin="round"
    />
  </svg>
);

// Water Drop Icon (💧)
export const WaterDropIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="dropBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0077C6"/>
        <stop offset="100%" stopColor="#00B4D8"/>
      </linearGradient>
      <linearGradient id="leafGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#28A745"/>
        <stop offset="100%" stopColor="#20C997"/>
      </linearGradient>
    </defs>
    <path d="M11 3C11 3 5 10 5 14.5C5 18 7.7 20.5 11 20.5C14.3 20.5 17 18 17 14.5C17 10 11 3 11 3z" fill="url(#dropBlueGrad)"/>
    <ellipse cx="9" cy="13.5" rx="1.5" ry="2.5" fill="#FFF" opacity="0.45" transform="rotate(-15 9 13.5)"/>
    <path d="M13 12c1.5-1.5 3.5-1.8 4.5-1.2c1 .6.8 2.2-.2 3.8c-1 1.6-2.5 2.2-3.8 2.2c-.8 0-1-.5-.5-4.8z" fill="url(#leafGreenGrad)" stroke="#28A745" strokeWidth="0.5"/>
  </svg>
);

// Flame/Fire Icon (🔥)
export const FlameIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="flameRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E63326"/>
        <stop offset="100%" stopColor="#FF5722"/>
      </linearGradient>
      <linearGradient id="flameYellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFB900"/>
        <stop offset="100%" stopColor="#FFA500"/>
      </linearGradient>
    </defs>
    <path d="M17.66 11.1c-.2-1.8-1.5-3.5-3.2-4.5-1.7-1-3.5-1.1-4.8-1.8C8.3 4.1 8 2.8 8 2c0 .8-.3 2.1-1.1 3-1 1.2-2.3 2.7-2.7 4.5-.5 2.1.2 4.4 1.7 6 2.6 2.8 7.3 2.8 9.9.2 1.6-1.6 2.1-3.6 1.8-4.6z" fill="url(#flameRedGrad)"/>
    <path d="M14 13.5c-.1-1-.8-2-1.8-2.6-.9-.6-1.9-.6-2.6-1-.8-.4-1-1.2-1-1.7 0 .5-.2 1.2-.6 1.7-.5.7-1.2 1.6-1.4 2.6-.3 1.2.1 2.5.9 3.4 1.5 1.6 4.1 1.6 5.6.1.9-.9 1.1-2.1.9-2.5z" fill="url(#flameYellowGrad)"/>
  </svg>
);

// Gift/Box Icon (🎁)
export const GiftIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="giftBoxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF8A65"/>
        <stop offset="100%" stopColor="#FF5722"/>
      </linearGradient>
      <linearGradient id="giftRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E63326"/>
        <stop offset="100%" stopColor="#C42820"/>
      </linearGradient>
    </defs>
    <rect x="4" y="10" width="16" height="11" rx="1.5" fill="url(#giftBoxGrad)"/>
    <rect x="3" y="7" width="18" height="3" rx="1" fill="url(#giftBoxGrad)" opacity="0.9"/>
    <rect x="11" y="7" width="2" height="14" fill="url(#giftRibbonGrad)"/>
    <path d="M12 7c-1.5-2.5-4.5-2.5-4.5-.5S11 7 12 7zm0 0c1.5-2.5 4.5-2.5 4.5-.5S13 7 12 7z" fill="url(#giftRibbonGrad)"/>
  </svg>
);

// Star Icon (⭐)
export const StarIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="starGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFEB60"/>
        <stop offset="100%" stopColor="#FFA500"/>
      </linearGradient>
    </defs>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#starGoldGrad)"/>
    <polygon points="12 4.14 14.16 8.52 19 9.22 15.5 12.63 16.33 17.45 12 15.17 7.67 17.45 8.5 12.63 5 9.22 9.84 8.52" fill="#FFF" opacity="0.3"/>
  </svg>
);

// Sparkles Icon (✨)
export const SparklesIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="sparklesGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFE066"/>
        <stop offset="100%" stopColor="#FF8A00"/>
      </linearGradient>
    </defs>
    <path d="M10 2L12 7.5L17.5 9.5L12 11.5L10 17L8 11.5L2.5 9.5L8 7.5L10 2Z" fill="url(#sparklesGoldGrad)"/>
    <path d="M19 13.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" fill="url(#sparklesGoldGrad)" opacity="0.8"/>
  </svg>
);

// Lightning/Energy Icon (⚡)
export const LightningIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="lightningGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF066"/>
        <stop offset="100%" stopColor="#FF8A00"/>
      </linearGradient>
    </defs>
    <polygon points="14 2 4 14 11 14 9 22 20 10 13 10 14 2" fill="url(#lightningGrad)"/>
  </svg>
);

// Recycle/Eco Icon (♻️)
export const RecycleIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="recycleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#28A745"/>
        <stop offset="100%" stopColor="#20C997"/>
      </linearGradient>
    </defs>
    <path d="M12 2v4h4" stroke="url(#recycleGrad)" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M12 22v-4H8" stroke="url(#recycleGrad)" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M2 12h4v-4" stroke="url(#recycleGrad)" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M21 12c0 4.97-4.03 9-9 9M3 12c0-4.97 4.03-9 9-9" stroke="url(#recycleGrad)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" fill="none"/>
    <circle cx="12" cy="12" r="3" fill="url(#recycleGrad)" opacity="0.9"/>
  </svg>
);

// Microscope/Research Icon (🔬)
export const MicroscopeIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="scienceBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0066CC"/>
        <stop offset="100%" stopColor="#00B4D8"/>
      </linearGradient>
      <linearGradient id="scienceGreyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A0AEC0"/>
        <stop offset="100%" stopColor="#718096"/>
      </linearGradient>
    </defs>
    <path d="M6 18h8v2H6v-2z" fill="url(#scienceGreyGrad)"/>
    <path d="M3 21h18v1H3v-1z" fill="url(#scienceGreyGrad)"/>
    <path d="M10 18a4 4 0 0 1-4-4h2a2 2 0 0 0 2 2" stroke="url(#scienceBlueGrad)" strokeWidth="2" strokeLinecap="round"/>
    <rect x="12" y="5" width="4" height="10" rx="1" transform="rotate(25 12 5)" fill="url(#scienceBlueGrad)"/>
    <circle cx="9" cy="7" r="1.5" fill="url(#scienceBlueGrad)"/>
    <line x1="8" y1="12" x2="15" y2="12" stroke="url(#scienceGreyGrad)" strokeWidth="1.5"/>
  </svg>
);

// Lightbulb/UV Icon (💡)
export const BulbIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="bulbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFEE55"/>
        <stop offset="100%" stopColor="#FFA500"/>
      </linearGradient>
    </defs>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .5 2.5 1.5 3.5.7.8 1.3 1.5 1.5 2.5" fill="url(#bulbGrad)" opacity="0.3"/>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .5 2.5 1.5 3.5.7.8 1.3 1.5 1.5 2.5" stroke="url(#bulbGrad)" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M9 18h6M10 21h4" stroke="url(#bulbGrad)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="12" y1="2" x2="12" y2="4" stroke="url(#bulbGrad)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="19.07" y1="4.93" x2="17.66" y2="6.34" stroke="url(#bulbGrad)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="22" y1="12" x2="20" y2="12" stroke="url(#bulbGrad)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" stroke="url(#bulbGrad)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="2" y1="12" x2="4" y2="12" stroke="url(#bulbGrad)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Wind/Ozone Icon (💨)
export const WindIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="windBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0088FF"/>
        <stop offset="100%" stopColor="#00E5FF"/>
      </linearGradient>
    </defs>
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2" stroke="url(#windBlueGrad)" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M12.59 19.41A2 2 0 1 0 14 16H2" stroke="url(#windBlueGrad)" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M15.83 8.17a3 3 0 1 0-2.66-4.83H2" stroke="url(#windBlueGrad)" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M20 12h-8" stroke="url(#windBlueGrad)" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);
