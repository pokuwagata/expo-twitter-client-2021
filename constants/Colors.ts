export const colors = {
  gray: {
    50: '#F7FAFC',
    100: '#EDF2F7',
    200: '#E2E8F0',
    300: '#CBD5E0',
    400: '#A0AEC0',
    500: '#718096',
    600: '#4A5568',
    700: '#2D3748',
    800: '#1A202C',
    900: '#171923',
  },
  twitter: {
    50: '#E5F4FD',
    100: '#C8E9FB',
    200: '#A8DCFA',
    300: '#83CDF7',
    400: '#57BBF5',
    500: '#1DA1F2',
    600: '#1A94DA',
    700: '#1681BF',
    800: '#136B9E',
    900: '#0D4D71',
  },
  black: '#000',
  white: '#fff',
  // twitter: '#1F8DEF',
};

export default {
  light: {
    text: colors.black,
    background: colors.white,
    tint: colors.twitter[500],
    tabIconDefault: colors.gray[600],
    tabIconSelected: colors.twitter[500],
    headerIcon: colors.twitter[500],
    headerBottom: colors.gray[200],
    tweet: {
      border: colors.gray[200],
      buttonIcon: colors.gray[500],
    },
    floatButton: {
      color: colors.white,
      bgColor: colors.twitter[500],
    },
    drawer: {
      grayText: colors.gray[500],
      icon: colors.gray[500],
    },
  },
  dark: {
    text: colors.white,
    background: colors.black,
    tint: colors.twitter[500],
    tabIconDefault: colors.gray[600],
    tabIconSelected: colors.twitter[500],
    headerIcon: colors.twitter[500],
    headerBottom: colors.gray[600],
    tweet: {
      border: colors.gray[800],
      buttonIcon: colors.gray[500],
    },
    floatButton: {
      color: colors.white,
      bgColor: colors.twitter[500],
    },
    drawer: {
      grayText: colors.gray[400],
      icon: colors.gray[400],
    },
  },
};
