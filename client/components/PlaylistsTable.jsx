import React, { Component, PropTypes } from 'react'
import sematable, { Table } from 'sematable'
import PlayListsTableActions from './PlaylistsTableActions'

const columns = [
  { key: 'id', header: 'ID', sortable: false, searchable: false, primaryKey: true, hidden: true },
  { header: 'Playlists', sortable: true, searchable: false, sortable: true, Component: PlayListsTableActions },
  { key: 'name', header: 'Playlist', searchable: true, hidden: true },
  { key: 'owner', header: 'Owner', sortable: true, searchable: true },
  { key: 'total', header: '# of Tracks', sortable: true, searchable: false },
]

const propTypes = {
  headers: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  primaryKey: PropTypes.string.isRequired,
}

class PlaylistsTable extends Component {
  render() {
    return (
      <Table
        {...this.props}
        className='table-inverse table-hover table-sm'
        columns={columns}
      />
    )
  }
}

PlaylistsTable.propTypes = propTypes
export default sematable('AllPlaylists', PlaylistsTable, columns, {defaultPageSize: 20})