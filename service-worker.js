/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d8ebad8874fc72f44c69d6359673214e"
  },
  {
    "url": "about.html",
    "revision": "57f3d6b1055668a7dcfa14aba7000c98"
  },
  {
    "url": "assets/css/0.styles.9bcbb34f.css",
    "revision": "5b75ab49cb3eab9dd89dd14ed1e13adf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d6d97159.js",
    "revision": "1153d8ca73d80c297ad815af94b9083f"
  },
  {
    "url": "assets/js/11.a7247759.js",
    "revision": "564af5cf0d6c2cfbf757a35df59da2cc"
  },
  {
    "url": "assets/js/12.8da905a3.js",
    "revision": "72ddd29ffa8aad697708d0ea28d61153"
  },
  {
    "url": "assets/js/13.6e6ff23c.js",
    "revision": "0419e8bdfbf2a172c7ff0a0bed9880e7"
  },
  {
    "url": "assets/js/14.6ce3a875.js",
    "revision": "a02fd2dfc9f645d330fc593311cbf7cc"
  },
  {
    "url": "assets/js/15.cd1cbce8.js",
    "revision": "97cf7009de3d20b057ec049ad40897da"
  },
  {
    "url": "assets/js/16.a06b6fab.js",
    "revision": "044ea3598c2b1062db1f2f10aaed98c4"
  },
  {
    "url": "assets/js/17.2d2db7a3.js",
    "revision": "f4071750a9db45c84d2d38c169625ed1"
  },
  {
    "url": "assets/js/18.98cec7b5.js",
    "revision": "47233566c6e3f2a20b71d3a7730ff0a2"
  },
  {
    "url": "assets/js/19.6f4721cb.js",
    "revision": "b6a3ade531194298228c5bf49aa1ead2"
  },
  {
    "url": "assets/js/2.fb956e2c.js",
    "revision": "9691cde35362ec84d60bce406d1cdd89"
  },
  {
    "url": "assets/js/20.fa05bbb9.js",
    "revision": "de58ab038536ca40e7cdef713de25672"
  },
  {
    "url": "assets/js/21.3f175b0b.js",
    "revision": "720f2f62891465d6000a3b683b7126ba"
  },
  {
    "url": "assets/js/22.8e694c23.js",
    "revision": "7af7b0c4f3748eeefcd9717106fc3c3e"
  },
  {
    "url": "assets/js/23.380ea46e.js",
    "revision": "e03901db4703cb65f3927517ce4fdb76"
  },
  {
    "url": "assets/js/24.5a5ee64f.js",
    "revision": "9bf16ebac1aa4ff73f0847adabf3eac4"
  },
  {
    "url": "assets/js/25.9606b576.js",
    "revision": "d4fb8a9d8ef7754616d9e6286478b1e0"
  },
  {
    "url": "assets/js/26.3ecf270e.js",
    "revision": "2e5d2d88acd4651146651e641f6dede0"
  },
  {
    "url": "assets/js/27.17f96ac6.js",
    "revision": "91abea161f206e24cf6661388e0b08aa"
  },
  {
    "url": "assets/js/28.6ecd613a.js",
    "revision": "8e5303568ef40a845095bc02627511d6"
  },
  {
    "url": "assets/js/29.d7804e7a.js",
    "revision": "775f23be3d021c3f7a2a99cf3d40de8f"
  },
  {
    "url": "assets/js/3.8b02a74c.js",
    "revision": "262211ae4cb3f594dc456c8f1dff7894"
  },
  {
    "url": "assets/js/4.790ee0f8.js",
    "revision": "54fd06c708769d0d63697550df6f5eb4"
  },
  {
    "url": "assets/js/5.f86d1b9f.js",
    "revision": "f82bab4189b37020db7773ff3ccaa271"
  },
  {
    "url": "assets/js/6.c76e6c01.js",
    "revision": "a0265341d70f77f2504fc378963ce4cc"
  },
  {
    "url": "assets/js/7.516b2807.js",
    "revision": "962129a198a1fd99cd061c92d16cf645"
  },
  {
    "url": "assets/js/8.fb4c7b58.js",
    "revision": "f3ca9ce956f6064940d8877e7de06e1c"
  },
  {
    "url": "assets/js/9.ab178b01.js",
    "revision": "ae28c11053b03e6f225bb84dc163950c"
  },
  {
    "url": "assets/js/app.40c9c6c3.js",
    "revision": "38b6d95aa1e1d06ac1d0951246cbdb14"
  },
  {
    "url": "demo.html",
    "revision": "48944409975fdd485902145ff73e8bff"
  },
  {
    "url": "en/about.html",
    "revision": "b07d4fccff7b19cc3e4fdadb24c61cdc"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "2d59d0b7f8a6a10cf84860eb8f972617"
  },
  {
    "url": "en/guide/config.html",
    "revision": "205640f0e9a92d2a1c0c28b2c2510558"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "9f130f0946bfffb8548c6d5f9b3a8bda"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "dbeb2ccd1fb9811c8cf06042420e8e57"
  },
  {
    "url": "en/guide/index.html",
    "revision": "35e05e2cad327f0da6a7d0d3b2ef883f"
  },
  {
    "url": "en/guide/page.html",
    "revision": "44590e6d0e6a6f528b7189f27e932f2d"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "31d447229919e4e2c0967f69c9466319"
  },
  {
    "url": "en/index.html",
    "revision": "b5871509e41857ff71a85eb4e96d5e54"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "cfbed2ffc34bb4dcf93bd8d46e4ed891"
  },
  {
    "url": "guide/config.html",
    "revision": "6ae51d5b16567d1c270252bc719a8293"
  },
  {
    "url": "guide/faq.html",
    "revision": "b0c1e4b4382eb9e9956f20e87d022876"
  },
  {
    "url": "guide/icon.html",
    "revision": "9560bc79fc95a6bad726e7aeec3bb591"
  },
  {
    "url": "guide/index.html",
    "revision": "3b11e934306627de758579f0f5304c87"
  },
  {
    "url": "guide/migrate.html",
    "revision": "c010b00af4cd77abced3a087f4952290"
  },
  {
    "url": "guide/page.html",
    "revision": "4d723b5f3d79a303e7e37a6b4056a35d"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "87135159ce2d7ec8105ffbc66cdb44ab"
  },
  {
    "url": "index.html",
    "revision": "5908277c321dcf3a88f7125154466e28"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
