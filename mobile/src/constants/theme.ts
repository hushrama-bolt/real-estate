export const colors = {
  primary: '#0B5FFF',
  primaryLight: '#E8F1FF',

  accent: {
    teal: '#4DD4C0',
    amber: '#FFB84D',
    coral: '#FF6B9D',
  },

  text: {
    primary: '#1A1A1A',
    muted: '#6B7280',
    light: '#FFFFFF',
  },

  status: {
    success: '#4ADE80',
    warning: '#FFB84D',
    error: '#FF6B9D',
    neutral: '#D1D5DB',
  },

  surface: {
    white: '#FFFFFF',
    light: '#F8F9FA',
  },

  bg: {
    light: '#E8F1FF',
    overlay: 'rgba(0, 0, 0, 0.3)',
  },
};

export const typography = {
  h1: {
    fontWeight: '700' as const,
    fontSize: 32,
    lineHeight: 38,
    letterSpacing: -0.5,
  },
  h2: {
    fontWeight: '700' as const,
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: -0.3,
  },
  h3: {
    fontWeight: '600' as const,
    fontSize: 20,
    lineHeight: 28,
  },
  body: {
    fontWeight: '400' as const,
    fontSize: 16,
    lineHeight: 24,
  },
  bodyMedium: {
    fontWeight: '500' as const,
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontWeight: '400' as const,
    fontSize: 14,
    lineHeight: 20,
  },
  small: {
    fontWeight: '400' as const,
    fontSize: 12,
    lineHeight: 16,
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const shadows = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHover: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 6,
  },
  button: {
    shadowColor: '#0B5FFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 4,
  },
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
};

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
};
