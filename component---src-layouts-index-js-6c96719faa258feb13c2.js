webpackJsonp([0x67ef26645b2a,60335399758886],{118:function(e,t){e.exports={layoutContext:{}}},268:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(1),o=n(r),u=a(283),c=n(u),s=a(118),f=n(s);t.default=function(e){return o.default.createElement(c.default,l({},e,f.default))},e.exports=t.default},271:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),o=a(22),u=(n(o),a(14)),c=n(u),s=function(){return r.default.createElement("footer",{className:"pv4 pv5-ns"},r.default.createElement(c.default,{className:"flex flex-column"},r.default.createElement("div",{className:"flex-column mv2 mv0-ns"},r.default.createElement("div",{className:"flex flex-column flex-row-ns justify-between"},r.default.createElement("p",{className:"f7 mv0 mv2-ns"},"© ",(new Date).getFullYear()," timshi.ai")),r.default.createElement("p",{className:"f7 mv0 mv2-ns"},r.default.createElement("a",{className:"link black-80 dim",href:"https://github.com/rongierlach/yfr-dot-com",target:"_blank"},"Site")," built with ",r.default.createElement("a",{className:"link black-80 dim",href:"https://www.gatsbyjs.org/",target:"_blank"},"Gatsby"),", ",r.default.createElement("a",{className:"link black-80 dim",href:"http://tachyons.io/",target:"_blank"},"Tachyons"),", ",r.default.createElement("a",{className:"link black-80 dim",href:"https://reactjs.org/",target:"_blank"},"React")," and ",r.default.createElement("a",{className:"link black-80 dim",href:"https://www.contentful.com/",rel:"nofollow",style:{top:"2px",position:"relative"},target:"_blank"},r.default.createElement("img",{src:"https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg",style:{height:"20px",width:"auto",filter:"grayscale(100%)"},alt:"Powered by Contentful"})),"."))))};t.default=s,e.exports=t.default},272:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=a(1),u=n(o),c=function(e){var t=e.open,a=l(e,["open"]);return u.default.createElement("button",r({className:"\n      mr3\n      outline-0\n      hamburger hamburger--squeeze\n      "+(t?"is-active":"")+"\n    ",type:"button"},a),u.default.createElement("span",{className:"haumburger-box"},u.default.createElement("span",{className:"hamburger-inner"})))};t.default=c,e.exports=t.default},273:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=a(1),c=n(u),s=a(22),f=(n(s),a(165)),i=n(f),d=a(274),m=n(d),p=a(272),v=n(p),h=a(14),b=n(h),y=a(715),N=(n(y),function(e){function t(){var a,n,o;l(this,t);for(var u=arguments.length,c=Array(u),s=0;s<u;s++)c[s]=arguments[s];return a=n=r(this,e.call.apply(e,[this].concat(c))),n.state={open:!1},n.closeNav=function(){n.setState({open:!1})},n.toggleNav=function(e){e.preventDefault(),n.setState({open:!n.state.open})},o=a,r(n,o)}return o(t,e),t.prototype.render=function(){var e=this.state.open;return c.default.createElement("header",{className:"flex-column w-100 overflow-y-hidden"},c.default.createElement(b.default,{className:"flex flex-row wrap justify-start items-center pv3 bg-inherit relative z-2"},c.default.createElement("div",{className:"flex-auto w-third dn-ns"}),c.default.createElement("div",{className:"flex-auto w-third tc tl-ns"}),c.default.createElement("div",{className:"flex-auto w-third dn-ns relative tr pr3"},c.default.createElement(v.default,{open:e,onClick:this.toggleNav})),c.default.createElement(i.default,{className:"dn flex-ns flex-row"})),e&&c.default.createElement("div",{onClick:this.closeNav,className:"db w-100 h-100 top-0 left-0 absolute"}),c.default.createElement(m.default,{open:e,onNavigate:this.closeNav}))},t}(u.Component));t.default=N,e.exports=t.default},274:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=a(1),u=n(o),c=a(253),s=a(165),f=n(s),i=function(e){var t=e.open,a=l(e,["open"]);return u.default.createElement(c.Motion,{style:{offsetY:(0,c.spring)(t?0:-100)}},function(e){var t=e.offsetY;return u.default.createElement(f.default,r({style:{transform:"translateY("+t+"%)"},className:"flex dn-ns flex-column w-100 absolute z-1 bg-inherit shadow-3"},a))})};t.default=i,e.exports=t.default},390:function(e,t){},165:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=a(1),u=n(o),c=a(22),s=n(c),f=a(390),i=n(f),d=function(e){var t=(e.className,l(e,["className"]));return u.default.createElement("h3",null,u.default.createElement(s.default,r({},t,{className:i.default.nav}),t.children))},m=function(e){var t=e.onNavigate,a=l(e,["onNavigate"]);return u.default.createElement("nav",a,u.default.createElement(d,{activeStyle:{},key:"index",to:"/",exact:!0,onClick:t},"Recents"),u.default.createElement(d,{activeStyle:{},key:"project",to:"/project",onClick:t},"Projects"),u.default.createElement(d,{activeStyle:{},key:"photos",to:"/photos",onClick:t},"Photos"),u.default.createElement(d,{activeStyle:{},key:"about",to:"/about",onClick:t},"About"))};t.default=m,e.exports=t.default},275:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(273),r=n(l);t.default=r.default,e.exports=t.default},715:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIuNjEgNTEyLjYxIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZkYjcxNDt9LmNscy0ye2ZpbGw6IzBiMGQxNTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnphcC12MjwvdGl0bGU+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSIyNTYuMyIgY3k9IjI1Ni4zIiByPSIyNTYuMyIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI3Ni45MiwyMzQuN2g4MC41MUwxNzQuOTQsNDE3LjE5bDYwLjEzLTE0MC4zOEgxNTUuMThMMzM2LjU3LDk1LjQyWiIvPjwvc3ZnPg=="},283:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l);a(560);var o=a(275),u=n(o),c=a(271),s=n(c),f=function(e){var t=e.children;return r.default.createElement("div",{className:"flex flex-column flex-auto min-vh-100 sans-serif"},r.default.createElement(u.default,null),r.default.createElement("main",{className:"flex-auto"},t()),r.default.createElement(s.default,null))};t.default=f,e.exports=t.default},560:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-6c96719faa258feb13c2.js.map