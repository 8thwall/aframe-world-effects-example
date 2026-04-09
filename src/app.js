import {XR8Promise} from '@8thwall/engine-binary'
import XRExtras from '@8thwall/xrextras'
import * as XRExtras2 from '@8thwall/xrextras'

// Copyright (c) 2022 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

import './index.css'

// Register custom A-Frame components in app.js before the scene in body.html has loaded.
import {tapPlaceComponent} from './tap-place'
AFRAME.registerComponent('tap-place', tapPlaceComponent)

console.log('XRExtras2', XRExtras2)

XR8Promise.then(e => console.log('XR8Promise resolved', e))

console.log(XRExtras.DebugWebViews, window.XRExtras.DebugWebViews)
XRExtras.DebugWebViews.enableLogToScreen()
