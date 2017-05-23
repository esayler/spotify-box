import { connect } from 'react-redux'
import { appendPlaylists } from '../actions'
import Playlists from '../components/Playlists'

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists.data,
    user: state.user,
    playlistsMetaData: state.playlistsMetaData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    appendPlaylists: () => {
      dispatch(appendPlaylists())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlists)
