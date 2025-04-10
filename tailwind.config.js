module.exports = {
    theme: {
      extend: {
        animation: {
          'border-light': 'light-glow 3s infinite linear',
        },
        keyframes: {
          'light-glow': {
            '0%': {
              'box-shadow': '0 0 10px 2px rgba(255, 255, 255, 0.5)',
            },
            '50%': {
              'box-shadow': '0 0 20px 4px rgba(255, 255, 255, 0.9)',
            },
            '100%': {
              'box-shadow': '0 0 10px 2px rgba(255, 255, 255, 0.5)',
            },
          },
        },
      },
    },
    plugins: [],
  };
  