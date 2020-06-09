
import React from 'react';
import { action } from '@storybook/addon-actions';

import PlayerControls from './PlayerControls';

export default {
  component: PlayerControls,
  title: 'Player Controls',
  excludeStories: /.*Data$/,
};

export const trackData = {
  // isPlaying: false,
  progress: 120000,
  duration: 180000,
  shuffle: false,
  repeat: 'off',
};

export const actionsData = {
  onTogglePlay: action('onTogglePlay'),
  onPrevious: action('onPrevious'),
  onNext: action('onNext'),
  onShuffle: action('onShuffle'),
  onRepeat: action('onRepeat'),
};

export const Default = () => <PlayerControls track={{ ...trackData }} { ...actionsData } />;

// export const Playing = () => <PlayerControls track={{ ...trackData, isPlaying: true }} { ...actionsData } />;
