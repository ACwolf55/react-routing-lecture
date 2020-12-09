import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import AlbumList from './components/AlbumList'
import NotFound from './components/NotFound'
import SingleAlbum from './components/SingleAlbum'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/albums" component={AlbumList} />
    <Route exact path="/albums/:album_id" component={SingleAlbum} />
    <Route component={NotFound} />
  </Switch>
)
