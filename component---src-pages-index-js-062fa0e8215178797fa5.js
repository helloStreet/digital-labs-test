(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+5in":function(e,t,a){},"0fRC":function(e,t,a){e.exports=a.p+"static/12-c1d8fff24bf77ddd402af85c1510f70c.jpg"},"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),l=i(a("VbXa")),s=i(a("8OQS")),d=i(a("pVnL")),c=i(a("q1tI")),o=i(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},g=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,i=f(t||a||[]);return i&&i.src},f=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(g);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),I=function(e){var t=u(e),a=m(t);return p[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,S=b&&window.IntersectionObserver,E=new WeakMap;function N(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},i&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),a&&c.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function C(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function v(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var w=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},M=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",o=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?v(e,!0):"")+v(e)})).join("")+"<img "+c+l+s+a+i+t+n+r+d+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},D=c.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=c.default.createElement(A,(0,d.default)({ref:t,src:a},n,{ariaHidden:l}));return i.length>1?c.default.createElement("picture",null,r(i),s):s})),A=c.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,l=e.onLoad,o=e.onError,u=e.loading,g=e.draggable,m=e.ariaHidden,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:a,srcSet:i,src:r},f,{onLoad:l,onError:o,ref:t,loading:u,draggable:g,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));A.propTypes={style:o.default.object,onError:o.default.func,onLoad:o.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&I(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&S&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||b&&(h||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:I(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=w(e,(function(){var e=I(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,l=e.imgStyle,s=void 0===l?{}:l,o=e.placeholderStyle,g=void 0===o?{}:o,m=e.placeholderClassName,p=e.fluid,I=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,S=e.Tag,E=e.itemProp,y=e.loading,v=e.draggable,w=p||I;if(!w)return null;var x=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,d.default)({opacity:x?1:0,transition:j?"opacity "+b+"ms":"none"},s),T="boolean"==typeof h?"lightgray":h,k={transitionDelay:b+"ms"},Z=(0,d.default)({opacity:this.state.imgLoaded?0:1},j&&k,s,g),z={title:t,alt:this.state.isVisible?"":a,style:Z,className:m,itemProp:E},P=this.state.isHydrated?f(w):w[0];if(p)return c.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},c.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),T&&c.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&k)}),P.base64&&c.default.createElement(D,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:z,imageVariants:w,generateSources:L}),P.tracedSVG&&c.default.createElement(D,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:z,imageVariants:w,generateSources:C}),this.state.isVisible&&c.default.createElement("picture",null,N(w),c.default.createElement(A,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:y,draggable:v})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:M((0,d.default)({alt:a,title:t,loading:y},P,{imageVariants:w}))}}));if(I){var W=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete W.display,c.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},T&&c.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},j&&k)}),P.base64&&c.default.createElement(D,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:z,imageVariants:w,generateSources:L}),P.tracedSVG&&c.default.createElement(D,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:z,imageVariants:w,generateSources:C}),this.state.isVisible&&c.default.createElement("picture",null,N(w),c.default.createElement(A,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:y,draggable:v})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:M((0,d.default)({alt:a,title:t,loading:y},P,{imageVariants:w}))}}))}return null},t}(c.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string}),R=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string,maxWidth:o.default.number,maxHeight:o.default.number});function T(e){return function(t,a,i){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");o.default.checkPropTypes(((r={})[a]=e,r),t,"prop",i)}}x.propTypes={resolutions:j,sizes:R,fixed:T(o.default.oneOfType([j,o.default.arrayOf(j)])),fluid:T(o.default.oneOfType([R,o.default.arrayOf(R)])),fadeIn:o.default.bool,durationFadeIn:o.default.number,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,crossOrigin:o.default.oneOfType([o.default.string,o.default.bool]),style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,itemProp:o.default.string,loading:o.default.oneOf(["auto","lazy","eager"]),draggable:o.default.bool};var k=x;t.default=k},BmlB:function(e,t,a){},KBT1:function(e,t,a){e.exports=a.p+"static/01-f1e30a0add14d94f8b3766fbe0b6db31.jpg"},Nudj:function(e,t,a){e.exports=a.p+"static/dinnerplateflipped-df6acddf5fbed0f9a77d6ac759cdd08d.png"},PyaL:function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),r=a.n(i),n=a("Wbzz"),l=a("Bl7J"),s=(a("9eSz"),a("vrFN"));a("urdI"),a("UkZo");var d=function(){var e=Object(i.useState)(!1),t=e[0],a=e[1];return r.a.createElement("div",{className:"SiteNavDiv"},r.a.createElement("label",{className:"NavMenuItem"},"Recipe Box"),r.a.createElement("div",null,r.a.createElement("label",{className:"NavMenuItem",onClick:function(){a(!t)}},"Products"),t&&r.a.createElement("div",{className:"dropDownMenu"},r.a.createElement("label",null,"Fruit"),r.a.createElement("label",null,"Vegetables"),r.a.createElement("label",null,"Eggs"),r.a.createElement("label",null,"Milk"),r.a.createElement("label",null,"Meat"),r.a.createElement("label",null,"Fresh Drinks"))),r.a.createElement("label",{className:"NavMenuItem"},"About Us"),r.a.createElement("label",{className:"NavMenuItem"},"Visit Us"))};a("VMct");var c=function(){return r.a.createElement("div",null,r.a.createElement("l",{className:"LogInLabel"},"Log In"),r.a.createElement("button",null,"Create Account"))},o=a("TYdL"),u=a.n(o);var g=function(){return r.a.createElement("div",{className:"NavBarDiv"},r.a.createElement("img",{src:u.a,className:"NavBarImg"}),r.a.createElement(d,null),r.a.createElement(c,null))},m=(a("ZCeP"),a("Nudj")),f=a.n(m);var p=function(){return r.a.createElement("div",{className:"FirstSectionContainer"},r.a.createElement("div",{className:"TextDiv"},r.a.createElement("l",{className:"FirstTitle"},"You deserve better"),r.a.createElement("l",{className:"SecondTitle"},"Consider this a ",r.a.createElement("br",null),"taste intervention"),r.a.createElement("button",{className:"LearnButton"}," LEARN MORE")),r.a.createElement("div",{className:"PlateDiv"},r.a.createElement("img",{src:f.a,className:"VegPlateImage"})))},I=(a("BmlB"),a("KBT1")),h=a.n(I);var b=function(){return r.a.createElement("div",{className:"SecondSectionContainer"},r.a.createElement("div",{className:"VegDiv"},r.a.createElement("img",{src:h.a,className:"VegImage"})),r.a.createElement("div",{className:"TextDiv2"},r.a.createElement("l",{className:"FirstTitle2"},"We make it easy for you to cook delicious dinners"),r.a.createElement("l",{className:"SecondTitle2"},"Simply choose you recipes from a weekly menu and we'll deliver freshly picked vegetables, pre-portioned ingredients and step by step recipies direct to your door ready for you to cook"),r.a.createElement(n.Link,{to:"/page-2/"},r.a.createElement("button",{type:"button",className:"ShopNowButton"},"Shop Now"))))};a("+5in");var S=function(e){return r.a.createElement("div",{className:"RecipeCard"},r.a.createElement("img",{src:e.picture,className:"RecipeCardImage"}),r.a.createElement("div",{className:"DescDiv"},r.a.createElement("label",{className:"Description"},e.description),r.a.createElement("label",{className:"Price"},e.price)))},E=a("XLfU"),N=a.n(E),y=a("f3Hz"),C=a.n(y),L=a("0fRC"),v=a.n(L);a("PyaL");var w=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("l",null,"Latest Recipes")),r.a.createElement("div",{className:"RecipeRow"},r.a.createElement(S,{picture:N.a,description:"Portobello Baked Eggs with avocado & bread",price:"£8"}),r.a.createElement(S,{picture:C.a,description:"Summery salmon, beetroot & spicy mix",price:"£15"}),r.a.createElement(S,{picture:v.a,description:"Backed Avocado Egg with herbs",price:"£8"})))};t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(s.a,{title:"Home"}),r.a.createElement(g,null),r.a.createElement(p,null),r.a.createElement(b,null),r.a.createElement(w,null),r.a.createElement("p",null,"Now go build something great."),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}}),r.a.createElement(n.Link,{to:"/page-2/"},"Go to page 2")," ",r.a.createElement("br",null))}},TYdL:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwLjk3IiB2aWV3Qm94PSIwIDAgMTAwIDMwLjk3Ij4NCiAgPGRlZnM+DQogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIwLjEwMSIgeTE9IjAuMjQzIiB4Mj0iMC44NzEiIHkyPSIwLjg0NiIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZWRhZDBkIi8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZjZiNmIiLz4NCiAgICA8L2xpbmVhckdyYWRpZW50Pg0KICA8L2RlZnM+DQogIDxnIGlkPSJHcm91cF8xMDkiIGRhdGEtbmFtZT0iR3JvdXAgMTA5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjggLTI2NTQpIj4NCiAgICA8dGV4dCBpZD0iT3JnYW5pY19GYXJtIiBkYXRhLW5hbWU9Ik9yZ2FuaWMgRmFybSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjQgMjY4Mi41KSIgZmlsbD0iIzFkMWQxZCIgZm9udC1zaXplPSI3IiBmb250LWZhbWlseT0iS3JvbmFPbmUtUmVndWxhciwgS3JvbmEgT25lIj48dHNwYW4geD0iMCIgeT0iMCI+T3JnYW5pYyBGYXJtPC90c3Bhbj48L3RleHQ+DQogICAgPGcgaWQ9Ikdyb3VwXzEwNyIgZGF0YS1uYW1lPSJHcm91cCAxMDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4IDI2NTQpIj4NCiAgICAgIDxnIGlkPSJHcm91cF84OSIgZGF0YS1uYW1lPSJHcm91cCA4OSI+DQogICAgICAgIDxwYXRoIGlkPSJQYXRoXzUzIiBkYXRhLW5hbWU9IlBhdGggNTMiIGQ9Ik0xNS40ODUsMEExNS40ODUsMTUuNDg1LDAsMSwxLDAsMTUuNDg1LDE1LjQ4NSwxNS40ODUsMCwwLDEsMTUuNDg1LDBaIiBmaWxsPSIjNGVjNmE2Ii8+DQogICAgICAgIDxnIGlkPSJHcm91cF8xNCIgZGF0YS1uYW1lPSJHcm91cCAxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS44ODggMy4wODIpIj4NCiAgICAgICAgICA8cGF0aCBpZD0iUGF0aF82IiBkYXRhLW5hbWU9IlBhdGggNiIgZD0iTTM5ODYuOTY1LDEyMDEuMjgzYy00Ljg1OCwwLTkuNTQxLDkuMTY4LTkuNjQ2LDE1LjUxN3M1Ljg3MiwxMC4wMTksOS42NDYsOS45MjUsOS41MDUtMi4xNDMsMTAuMTU4LTkuNmExNy45NTMsMTcuOTUzLDAsMCwwLTUuNjM4LTEzLjk3OUE3LjA1Nyw3LjA1NywwLDAsMCwzOTg2Ljk2NSwxMjAxLjI4M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zOTc3LjMxNyAtMTIwMS4yODMpIiBmaWxsPSIjZmZmIi8+DQogICAgICAgICAgPGcgaWQ9Ikdyb3VwXzExIiBkYXRhLW5hbWU9Ikdyb3VwIDExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjQ1MiAxMi4xODUpIj4NCiAgICAgICAgICAgIDxlbGxpcHNlIGlkPSJFbGxpcHNlXzE0IiBkYXRhLW5hbWU9IkVsbGlwc2UgMTQiIGN4PSI1IiBjeT0iNC41IiByeD0iNSIgcnk9IjQuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMzQxIDAuMjMzKSIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+DQogICAgICAgICAgICA8cGF0aCBpZD0iUGF0aF83IiBkYXRhLW5hbWU9IlBhdGggNyIgZD0iTTEuMjIzLDBBMS40LDEuNCwwLDAsMSwyLjQ0NiwxLjUyOSwxLjQsMS40LDAsMCwxLDEuMjIzLDMuMDU3LDEuNCwxLjQsMCwwLDEsMCwxLjUyOSwxLjQsMS40LDAsMCwxLDEuMjIzLDBaIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjg5MSwgLTAuNDU0LCAwLjQ1NCwgMC44OTEsIDQuOTA5LCAyLjYyKSIgZmlsbD0iI2Y1ZjRmNCIvPg0KICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgICAgICA8ZyBpZD0iR3JvdXBfODciIGRhdGEtbmFtZT0iR3JvdXAgODciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1Ljc2OCAxLjMwOSkiPg0KICAgICAgICAgIDx0ZXh0IGlkPSJaRWNjbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4yMzIgMTQuMTkxKSIgZmlsbD0iIzFkMWQxZCIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9Iktyb25hT25lLVJlZ3VsYXIsIEtyb25hIE9uZSI+PHRzcGFuIHg9IjAiIHk9IjAiPlpFQ0NPPC90c3Bhbj48L3RleHQ+DQogICAgICAgIDwvZz4NCiAgICAgIDwvZz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg0K"},UkZo:function(e,t,a){},VMct:function(e,t,a){},XLfU:function(e,t,a){e.exports=a.p+"static/10-2b96d4696adc28a3160cc50d5aeb40cd.jpg"},ZCeP:function(e,t,a){},f3Hz:function(e,t,a){e.exports=a.p+"static/11-a71f0a2c8db0dc33ef9576c24470174d.jpg"},urdI:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-062fa0e8215178797fa5.js.map