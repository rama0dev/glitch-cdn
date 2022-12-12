<h1 align="center">Welcome to glitch-cdn 😘</h1>
<p>
  <img alt="Version" src="https://img.shields.io/npm/v/glitch-cdn" />
  <img alt="Stars" src="https://img.shields.io/github/stars/rama0dev" />
</p>

> With this module you can publish files automatically on the Glitch.com CDN
> ⚠️Content that you upload to the server will not show up in the "Assets" tab

## Install

```sh
npm i glitch-cdn
```

## Usage

```js
var glitchcdn = require("glitch-cdn");

//Structure upload2glitch.upload(authorization, projectId, file, url) 
glitchcdn.upload("1c0612ac-e403-4a0b-95e9-3a75d1f650f9","e3de541d-95d7-4ed6-a3ee-89abefa4211b",`./frog.png`,`img/cutepictures/frog.png`, (returndata)=>{
    console.log(returndata) 
})
```

## How get authorization and projectId:
<p>
  <p><a title="Open video guide" href="https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/600a54c1-31ee-49cb-ba36-6b6ccc9cb1b0/github/glitch-cdn/content/video/howgetauth_and_projectid_glitch.mp4"><video controls="controls" width="664" height="332">
<source src="https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/600a54c1-31ee-49cb-ba36-6b6ccc9cb1b0/github/glitch-cdn/content/video/howgetauth_and_projectid_glitch.gif" /></video></a></p>
</p>


## Author

👤 **Rama**

* Website: https://ramaprojects.ru/
* Github: [@rama0dev](https://github.com/rama0dev)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/rama0dev/glitch-cdn/issues). 

## Show your support

Give a ⭐️ if this project helped you!
