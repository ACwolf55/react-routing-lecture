import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

class SingleAlbum extends Component {
  constructor() {
    super()
    this.state = {
      album: {},
    }
  }

  componentDidMount() {
    this.getAlbum()
  }

  componentDidUpdate(prevProps) {
    const { album_id } = this.props.match.params
    if (prevProps.match.params.album_id !== album_id) {
      this.getAlbum()
    }
  }

  getAlbum = () => {
    const { album_id } = this.props.match.params
    axios
      .get(`/api/albums/${album_id}`)
      .then((res) => {
        this.setState({
          album: res.data,
        })
      })
      .catch((err) => {
        this.props.history.push('/404')
      })
  }

  handleBuyAlbum = () => {
    alert('YOU BOUGHT IT')
    this.props.history.push('/albums')
  }

  render() {
    return (
      <div className="single-album">
        <h2>
          {this.state.album.artist} - {this.state.album.title}
        </h2>
        <img
          src={this.state.album.image}
          alt={this.state.album.title}
          className="large-album-art"
        />
        <button onClick={() => this.handleBuyAlbum()} className="buy-button">
          Buy Now!
        </button>
      </div>
    )
  }
}
export default SingleAlbum
