# A-Frame: World Effects

This example allows the user to grow cacti 🌵  by tapping or clicking the ground. Showcases raycasting,
spawning new objects, and importing a 3D model.

![](./src/assets/preview.gif)

## Usage

1. On this repository, click **Code** > **Download ZIP**. If you clone the repository instead, make sure you have Git LFS installed and run `git lfs pull`
2. Unzip the folder to the location you'd like to work in
3. `npm install`
4. `npm run serve`
5. To connect to a mobile device, follow [these instructions](https://8th.io/test-on-mobile)
6. Recommended: Track your files using [git](https://git-scm.com/about) to avoid losing progress

## Questions?

Please raise any questions on [Github Discussions](https://github.com/orgs/8thwall/discussions) or join the [Discord](https://8th.io/discord) to connect with the community.

---

### Optimizing for Metaversal Deployment

With R18, the all-new 8th Wall Engine features Metaversal Deployment, enabling you to create WebAR experiences once and deploy them to smartphones, tablets, computers and both AR and VR headsets. This project has a few platform-specific customizations:

In **body.html**, we add the ```"allowedDevices: any"``` parameter to our ```xrweb``` component in ```<a-scene>``` 
which ensures the project opens on all platforms, including desktop. Environment parameters 
have been customized to generate an open desert space.

---

### About World Tracking

Built entirely using standards-compliant JavaScript and WebGL, 8th Wall’s Simultaneous Localization 
and Mapping (SLAM) engine is hyper-optimized for real-time AR on mobile browsers. Features include
Six Degrees of Freedom (6-DoF), Lighting estimation, instant surface detection and responsive scale.

The Y position of the camera at start effectively determines the scale of virtual content on a surface 
(e.g. smaller y, bigger content). This can be reset at any time by calling 
[```recenter()```](https://www.8thwall.com/docs/web/#recenter).

The camera should NOT be at a height (Y) of zero. It must be set to a non-zero value.

---

#### Attribution

Toon Cactus by [PolyChromic](https://skfb.ly/6Xvws)
