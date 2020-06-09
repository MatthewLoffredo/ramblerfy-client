import React, { Component } from 'react'
import PlayerBar from './PlayerBar'
import { connect } from 'react-redux'

// Import selectors and actions here
import {
  onTogglePlay,
  onPrevious,
  onNext,
  onShuffle,
  onRepeat,
  onToggleTrackFavorite,
  onVolumeChange,
  onVolumeMuteToggle
} from '../redux/actions/PlayerActions'
import { getPlayerControlState } from '../redux/selectors/player';


// Container for player and player controller
class PlayerContainer extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <PlayerBar
           track={{ ...this.props.playerControlState }}
           {...this.props}
        />
      </div>
    )
  }
}

// Gets state from selectors and maps it to props
const mapStateToProps = (state) => {
  return {
    playerControlState: getPlayerControlState(state),
  }
}

export default connect(mapStateToProps, {
  // All these actions are passed to props as well
  onTogglePlay,
  onPrevious,
  onNext,
  onShuffle,
  onRepeat,
  onToggleTrackFavorite,
  onVolumeChange,
  onVolumeMuteToggle
})(PlayerContainer)
