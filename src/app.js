// Copyright (c) 2022 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. It is bundled into bundle.js, which
// index.html loads before the <a-scene>.

import './index.css'

// Register custom A-Frame components in app.js, before the scene in index.html is loaded.
import {tapPlaceComponent} from './tap-place'
AFRAME.registerComponent('tap-place', tapPlaceComponent)
