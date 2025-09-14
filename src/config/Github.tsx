/*
 * GitHub Contribution Configuration
 *
 * This file contains the configuration for the GitHub contribution graph.
 * Update the username to match your GitHub profile.
 */

export const githubConfig = {
  username: 'ramxcodes',
  apiUrl: 'https://github-contributions-api.deno.dev',

  // Display settings
  title: 'GitHub Activity',
  subtitle: 'coding journey over the past year',

  // Chart settings
  blockSize: 11,
  blockMargin: 3,
  fontSize: 12,
  maxLevel: 4,

  // Month labels
  months: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],

  // Weekday labels (empty for weekends, M for Monday, etc.)
  weekdays: ['', 'M', '', 'W', '', 'F', ''],

  // Total count label template
  totalCountLabel: '{{count}} contributions in the last year',

  // Theme configuration for dark and light modes
  theme: {
    dark: [
      'rgb(22, 27, 34)', // Very dark for no contributions
      'rgb(14, 68, 41)', // Dark green
      'rgb(0, 109, 50)', // Medium green
      'rgb(38, 166, 65)', // Bright green
      'rgb(57, 211, 83)', // Very bright green
    ],
    light: [
      'rgb(235, 237, 240)', // Light gray
      'rgb(155, 233, 168)', // Light green
      'rgb(64, 196, 99)', // Medium green
      'rgb(48, 161, 78)', // Dark green
      'rgb(33, 110, 57)', // Very dark green
    ],
  },

  // Error state configuration
  errorState: {
    title: 'Unable to load GitHub contributions',
    description: 'Check out my profile directly for the latest activity',
    buttonText: 'View on GitHub',
  },

  // Loading state configuration
  loadingState: {
    title: 'Loading contributions...',
    description: 'Fetching your GitHub activity data',
  },
};
