// EBdesign Design System (adapted from Kennel Manager)
// Theme: Sunflower Yellow + Professional

export const designSystem = {
  colors: {
    // Primary: Sunflower Yellow
    primary: {
      50: '#FFFEF0',
      100: '#FFFBDB',
      200: '#FFF5B3',
      300: '#FFED8b',
      400: '#FFE563',
      500: '#FFD93D',  // Main sunflower yellow
      600: '#E6B800',
      700: '#B38F00',
      800: '#805C00',
      900: '#4D3700',
    },
    
    // Neutral: Professional grays
    neutral: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E8E8E8',
      300: '#D0D0D0',
      400: '#A0A0A0',
      500: '#707070',
      600: '#404040',
      700: '#303030',
      800: '#202020',
      900: '#000000',
    },
    
    // Accent: Trust/Growth
    accent: {
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#3B82F6',
    },
    
    // Semantic
    bg: {
      primary: '#FFFFFF',
      secondary: '#FAFAFA',
      tertiary: '#F5F5F5',
    },
    
    text: {
      primary: '#202020',
      secondary: '#404040',
      tertiary: '#707070',
      light: '#FFFFFF',
    },
  },
  
  typography: {
    fontFamily: {
      sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      serif: '"Merriweather", serif',
    },
    
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
    },
    
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  
  borderRadius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
  
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
};
