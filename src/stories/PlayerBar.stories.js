
import React from 'react';
import { action } from '@storybook/addon-actions';

import PlayerBar from './PlayerBar';
import { trackData, actionsData } from './PlayerControls.stories';
import americanPie from './American-Pie-Cover.png';

export default {
  component: PlayerBar,
  title: 'Player Bar',
  excludeStories: /.*Data$/,
};

export const defaultTrackData = {
  ...trackData,
  trackName: 'American Pie',
  albumCover: americanPie, // TODO: put in album cover
  artist: 'Don McClean',
  volume: 60,
  favorite: false,
};

export const allActionsData = {
  ...actionsData,
  onVolumeChange: action('onVolumeChange'),
  onVolumeMuteToggle: action('onVolumeMuteToggle'),
  onToggleTrackFavorite: action('onToggleTrackFavorite'),
};

export const Default = () => <PlayerBar track={{ ...defaultTrackData }} {...allActionsData} />;

export const Overflow = () => <PlayerBar track={{ ...defaultTrackData, trackName: 'In The Morning Of The Magician', artist: 'The Flaming Lipssssssssssssssssssssss' }} {...allActionsData} />;

export const AltIconStates = () => <PlayerBar track={{ ...defaultTrackData, favorite: true, volume: 0, shuffle: true, repeat: 'context' }} {...allActionsData} />;

export const noTrackInfo = () => <PlayerBar track={{ ...defaultTrackData, trackName: null, artist: null, albumCover: null }} {...allActionsData} />;
