import"./modulepreload-polyfill-B5Qt9EMX.js";const Ke="/assets/home2-DStsUK7w.jpg";function pe(){const t=document.getElementById("content");t.innerHTML=`
        <div class="home">
            <div class="hero-container">
                <img src="${Ke}" alt="Restaurant Image" class="background-image">
                <div class="text-overlay">
                    <h1>Welcome to Our Restaurant</h1>
                    <p>Experience the best dining experience with us.</p>
                </div>
            </div>
        </div>
    `}function Qe(){const t=document.getElementById("content"),e={appetizers:[{name:"Bruschetta",description:"Toasted bread topped with tomatoes, fresh basil, and mozzarella",price:"$9"},{name:"Calamari",description:"Crispy fried calamari served with marinara sauce",price:"$12"},{name:"Mushrooms",description:"Baked mushroom caps filled with herb stuffing",price:"$10"}],soupsAndSalads:[{name:"Italian Wedding Soup",description:"Traditional soup with mini meatballs and spinach",price:"$7"},{name:"Caesar Salad",description:"Crisp romaine, croutons, and parmesan",price:"$9"}],mainCourses:[{name:"Filet Mignon",description:"8oz center cut tenderloin with red wine reduction",price:"$34"},{name:"Spaghetti Carbonara",description:"Classic pasta with pancetta and parmesan",price:"$18"},{name:"Grilled Salmon",description:"Fresh salmon with lemon butter sauce",price:"$26"}],desserts:[{name:"Tiramisu",description:"Classic Italian dessert with coffee-soaked ladyfingers",price:"$8"},{name:"Chocolate Lava Cake",description:"Warm cake with a molten center and vanilla gelato",price:"$9"}]},n=a=>a.map(r=>`
            <div class="menu-item">
                <div class="item-details">
                    <h3>${r.name}</h3>
                    <p>${r.description}</p>
                </div>
                <div class="item-price">${r.price}</div>
            </div>
        `).join("");t.innerHTML=`
        <div class="menu-book">
            <div class="menu-page left-page">
                <div class="page-content">
                    <h1 class="menu-title">Our Menu</h1>
                    
                    <div class="menu-section">
                        <h2>Appetizers</h2>
                        ${n(e.appetizers)}
                    </div>
                    
                    <div class="menu-section">
                        <h2>Soups & Salads</h2>
                        ${n(e.soupsAndSalads)}
                    </div>
                </div>
            </div>
            
            <div class="menu-page right-page">
                <div class="page-content">
                    <div class="menu-section">
                        <h2>Main Courses</h2>
                        ${n(e.mainCourses)}
                    </div>
                    
                    <div class="menu-section">
                        <h2>Desserts</h2>
                        ${n(e.desserts)}
                    </div>
                </div>
            </div>
        </div>
    `}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Je(t,e,n){return(e=tn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ut(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ut(Object(n),!0).forEach(function(a){Je(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ut(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Ze(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function tn(t){var e=Ze(t,"string");return typeof e=="symbol"?e:e+""}const Ht=()=>{};let Mt={},ge={},he=null,be={mark:Ht,measure:Ht};try{typeof window<"u"&&(Mt=window),typeof document<"u"&&(ge=document),typeof MutationObserver<"u"&&(he=MutationObserver),typeof performance<"u"&&(be=performance)}catch{}const{userAgent:Wt=""}=Mt.navigator||{},M=Mt,g=ge,$t=he,K=be;M.document;const C=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",ve=~Wt.indexOf("MSIE")||~Wt.indexOf("Trident/");var en=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,nn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ye={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},an={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},xe=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],h="classic",nt="duotone",rn="sharp",sn="sharp-duotone",Ae=[h,nt,rn,sn],on={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},cn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ln=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),fn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},un=["fak","fa-kit","fakd","fa-kit-duotone"],Vt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},dn=["kit"],mn={kit:{"fa-kit":"fak"}},pn=["fak","fakd"],gn={kit:{fak:"fa-kit"}},Bt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},hn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],bn=["fak","fa-kit","fakd","fa-kit-duotone"],vn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},yn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},xn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},pt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},An=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],gt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...hn,...An],wn=["solid","regular","light","thin","duotone","brands"],we=[1,2,3,4,5,6,7,8,9,10],kn=we.concat([11,12,13,14,15,16,17,18,19,20]),Sn=[...Object.keys(xn),...wn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Q.GROUP,Q.SWAP_OPACITY,Q.PRIMARY,Q.SECONDARY].concat(we.map(t=>"".concat(t,"x"))).concat(kn.map(t=>"w-".concat(t))),En={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const E="___FONT_AWESOME___",ht=16,ke="fa",Se="svg-inline--fa",L="data-fa-i2svg",bt="data-fa-pseudo-element",Pn="data-fa-pseudo-element-pending",Nt="data-prefix",Tt="data-icon",Gt="fontawesome-i2svg",Cn="async",On=["HTML","HEAD","STYLE","SCRIPT"],Ee=(()=>{try{return!0}catch{return!1}})();function X(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[h]}})}const Pe=o({},ye);Pe[h]=o(o(o(o({},{"fa-duotone":"duotone"}),ye[h]),Vt.kit),Vt["kit-duotone"]);const In=X(Pe),vt=o({},fn);vt[h]=o(o(o(o({},{duotone:"fad"}),vt[h]),Bt.kit),Bt["kit-duotone"]);const Xt=X(vt),yt=o({},pt);yt[h]=o(o({},yt[h]),gn.kit);const Ft=X(yt),xt=o({},yn);xt[h]=o(o({},xt[h]),mn.kit);X(xt);const Mn=en,Ce="fa-layers-text",Nn=nn,Tn=o({},on);X(Tn);const Fn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lt=an,_n=[...dn,...Sn],$=M.FontAwesomeConfig||{};function Ln(t){var e=g.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function zn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=zn(Ln(n));r!=null&&($[a]=r)});const Oe={styleDefault:"solid",familyDefault:h,cssPrefix:ke,replacementClass:Se,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};$.familyPrefix&&($.cssPrefix=$.familyPrefix);const U=o(o({},Oe),$);U.autoReplaceSvg||(U.observeMutations=!1);const l={};Object.keys(Oe).forEach(t=>{Object.defineProperty(l,t,{enumerable:!0,set:function(e){U[t]=e,V.forEach(n=>n(l))},get:function(){return U[t]}})});Object.defineProperty(l,"familyPrefix",{enumerable:!0,set:function(t){U.cssPrefix=t,V.forEach(e=>e(l))},get:function(){return U.cssPrefix}});M.FontAwesomeConfig=l;const V=[];function Dn(t){return V.push(t),()=>{V.splice(V.indexOf(t),1)}}const I=ht,w={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Rn(t){if(!t||!C)return;const e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=g.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return g.head.insertBefore(e,a),t}const jn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function B(){let t=12,e="";for(;t-- >0;)e+=jn[Math.random()*62|0];return e}function H(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function _t(t){return t.classList?H(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ie(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yn(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ie(t[n]),'" '),"").trim()}function at(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Lt(t){return t.size!==w.size||t.x!==w.x||t.y!==w.y||t.rotate!==w.rotate||t.flipX||t.flipY}function Un(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(i," ").concat(s," ").concat(c)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:f}}function Hn(t){let{transform:e,width:n=ht,height:a=ht,startCentered:r=!1}=t,i="";return r&&ve?i+="translate(".concat(e.x/I-n/2,"em, ").concat(e.y/I-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/I,"em), calc(-50% + ").concat(e.y/I,"em)) "):i+="translate(".concat(e.x/I,"em, ").concat(e.y/I,"em) "),i+="scale(".concat(e.size/I*(e.flipX?-1:1),", ").concat(e.size/I*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Wn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Me(){const t=ke,e=Se,n=l.cssPrefix,a=l.replacementClass;let r=Wn;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(c,".".concat(a))}return r}let qt=!1;function ft(){l.autoAddCss&&!qt&&(Rn(Me()),qt=!0)}var $n={mixout(){return{dom:{css:Me,insertCss:ft}}},hooks(){return{beforeDOMElementCreation(){ft()},beforeI2svg(){ft()}}}};const P=M||{};P[E]||(P[E]={});P[E].styles||(P[E].styles={});P[E].hooks||(P[E].hooks={});P[E].shims||(P[E].shims=[]);var k=P[E];const Ne=[],Te=function(){g.removeEventListener("DOMContentLoaded",Te),tt=1,Ne.map(t=>t())};let tt=!1;C&&(tt=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),tt||g.addEventListener("DOMContentLoaded",Te));function Vn(t){C&&(tt?setTimeout(t,0):Ne.push(t))}function q(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Ie(t):"<".concat(e," ").concat(Yn(n),">").concat(a.map(q).join(""),"</").concat(e,">")}function Kt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ut=function(e,n,a,r){var i=Object.keys(e),s=i.length,c=n,u,f,d;for(a===void 0?(u=1,d=e[i[0]]):(u=0,d=a);u<s;u++)f=i[u],d=c(d,e[f],f,e);return d};function Bn(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function At(t){const e=Bn(t);return e.length===1?e[0].toString(16):null}function Gn(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Qt(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function wt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Qt(e);typeof k.hooks.addPack=="function"&&!a?k.hooks.addPack(t,Qt(e)):k.styles[t]=o(o({},k.styles[t]||{}),r),t==="fas"&&wt("fa",e)}const{styles:G,shims:Xn}=k,Fe=Object.keys(Ft),qn=Fe.reduce((t,e)=>(t[e]=Object.keys(Ft[e]),t),{});let zt=null,_e={},Le={},ze={},De={},Re={};function Kn(t){return~_n.indexOf(t)}function Qn(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Kn(r)?r:null}const je=()=>{const t=a=>ut(G,(r,i,s)=>(r[s]=ut(i,a,{}),r),{});_e=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(c=>typeof c=="number").forEach(c=>{a[c.toString(16)]=i}),a)),Le=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(c=>typeof c=="string").forEach(c=>{a[c]=i}),a)),Re=t((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(c=>{a[c]=i}),a});const e="far"in G||l.autoFetchSvg,n=ut(Xn,(a,r)=>{const i=r[0];let s=r[1];const c=r[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:c}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:c}),a},{names:{},unicodes:{}});ze=n.names,De=n.unicodes,zt=rt(l.styleDefault,{family:l.familyDefault})};Dn(t=>{zt=rt(t.styleDefault,{family:l.familyDefault})});je();function Dt(t,e){return(_e[t]||{})[e]}function Jn(t,e){return(Le[t]||{})[e]}function _(t,e){return(Re[t]||{})[e]}function Ye(t){return ze[t]||{prefix:null,iconName:null}}function Zn(t){const e=De[t],n=Dt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function N(){return zt}const Ue=()=>({prefix:null,iconName:null,rest:[]});function ta(t){let e=h;const n=Fe.reduce((a,r)=>(a[r]="".concat(l.cssPrefix,"-").concat(r),a),{});return Ae.forEach(a=>{(t.includes(n[a])||t.some(r=>qn[a].includes(r)))&&(e=a)}),e}function rt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=h}=e,a=In[n][t];if(n===nt&&!t)return"fad";const r=Xt[n][t]||Xt[n][a],i=t in k.styles?t:null;return r||i||null}function ea(t){let e=[],n=null;return t.forEach(a=>{const r=Qn(l.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Jt(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function it(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=gt.concat(bn),i=Jt(t.filter(p=>r.includes(p))),s=Jt(t.filter(p=>!gt.includes(p))),c=i.filter(p=>(a=p,!xe.includes(p))),[u=null]=c,f=ta(i),d=o(o({},ea(s)),{},{prefix:rt(u,{family:f})});return o(o(o({},d),ia({values:t,family:f,styles:G,config:l,canonical:d,givenPrefix:a})),na(n,a,d))}function na(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?Ye(r):{},s=_(a,r);return r=i.iconName||s||r,a=i.prefix||a,a==="far"&&!G.far&&G.fas&&!l.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const aa=Ae.filter(t=>t!==h||t!==nt),ra=Object.keys(pt).filter(t=>t!==h).map(t=>Object.keys(pt[t])).flat();function ia(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:s={}}=t,c=n===nt,u=e.includes("fa-duotone")||e.includes("fad"),f=s.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!c&&(u||f||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&aa.includes(n)&&(Object.keys(i).find(m=>ra.includes(m))||s.autoFetchSvg)){const m=ln.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=_(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=N()||"fas"),a}class sa{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=o(o({},this.definitions[i]||{}),r[i]),wt(i,r[i]);const s=Ft[h][i];s&&wt(s,r[i]),je()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:c}=a[r],u=c[2];e[i]||(e[i]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(e[i][f]=c)}),e[i][s]=c}),e}}let Zt=[],j={};const Y={},oa=Object.keys(Y);function ca(t,e){let{mixoutsTo:n}=e;return Zt=t,j={},Object.keys(Y).forEach(a=>{oa.indexOf(a)===-1&&delete Y[a]}),Zt.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{j[s]||(j[s]=[]),j[s].push(i[s])})}a.provides&&a.provides(Y)}),n}function kt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(j[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function z(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(j[t]||[]).forEach(i=>{i.apply(null,n)})}function T(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Y[t]?Y[t].apply(null,e):void 0}function St(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||N();if(e)return e=_(n,e)||e,Kt(He.definitions,n,e)||Kt(k.styles,n,e)}const He=new sa,la=()=>{l.autoReplaceSvg=!1,l.observeMutations=!1,z("noAuto")},fa={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return C?(z("beforeI2svg",t),T("pseudoElements2svg",t),T("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;l.autoReplaceSvg===!1&&(l.autoReplaceSvg=!0),l.observeMutations=!0,Vn(()=>{da({autoReplaceSvgRoot:e}),z("watch",t)})}},ua={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:_(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=rt(t[0]);return{prefix:n,iconName:_(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(l.cssPrefix,"-"))>-1||t.match(Mn))){const e=it(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||N(),iconName:_(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=N();return{prefix:e,iconName:_(e,t)||t}}}},y={noAuto:la,config:l,dom:fa,parse:ua,library:He,findIconDefinition:St,toHtml:q},da=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=g}=t;(Object.keys(k.styles).length>0||l.autoFetchSvg)&&C&&l.autoReplaceSvg&&y.dom.i2svg({node:e})};function st(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>q(n))}}),Object.defineProperty(t,"node",{get:function(){if(!C)return;const n=g.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ma(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:s}=t;if(Lt(s)&&n.found&&!a.found){const{width:c,height:u}=n,f={x:c/u/2,y:.5};r.style=at(o(o({},i),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function pa(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(l.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},r),{},{id:s}),children:a}]}]}function Rt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:s,title:c,maskId:u,titleId:f,extra:d,watchable:p=!1}=t,{width:m,height:b}=n.found?n:e,O=pn.includes(a),F=[l.replacementClass,r?"".concat(l.cssPrefix,"-").concat(r):""].filter(R=>d.classes.indexOf(R)===-1).filter(R=>R!==""||!!R).concat(d.classes).join(" ");let x={children:[],attributes:o(o({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:F,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(b)})};const S=O&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/b*16*.0625,"em")}:{};p&&(x.attributes[L]=""),c&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(f||B())},children:[c]}),delete x.attributes.title);const v=o(o({},x),{},{prefix:a,iconName:r,main:e,mask:n,maskId:u,transform:i,symbol:s,styles:o(o({},S),d.styles)}),{children:A,attributes:D}=n.found&&e.found?T("generateAbstractMask",v)||{children:[],attributes:{}}:T("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=A,v.attributes=D,s?pa(v):ma(v)}function te(t){const{content:e,width:n,height:a,transform:r,title:i,extra:s,watchable:c=!1}=t,u=o(o(o({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});c&&(u[L]="");const f=o({},s.styles);Lt(r)&&(f.transform=Hn({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const d=at(f);d.length>0&&(u.style=d);const p=[];return p.push({tag:"span",attributes:u,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function ga(t){const{content:e,title:n,extra:a}=t,r=o(o(o({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=at(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:dt}=k;function Et(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(l.cssPrefix,"-").concat(lt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(l.cssPrefix,"-").concat(lt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(l.cssPrefix,"-").concat(lt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const ha={found:!1,width:512,height:512};function ba(t,e){!Ee&&!l.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Pt(t,e){let n=e;return e==="fa"&&l.styleDefault!==null&&(e=N()),new Promise((a,r)=>{if(n==="fa"){const i=Ye(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&dt[e]&&dt[e][t]){const i=dt[e][t];return a(Et(i))}ba(t,e),a(o(o({},ha),{},{icon:l.showMissingIcons&&t?T("missingIconAbstract")||{}:{}}))})}const ee=()=>{},Ct=l.measurePerformance&&K&&K.mark&&K.measure?K:{mark:ee,measure:ee},W='FA "6.7.2"',va=t=>(Ct.mark("".concat(W," ").concat(t," begins")),()=>We(t)),We=t=>{Ct.mark("".concat(W," ").concat(t," ends")),Ct.measure("".concat(W," ").concat(t),"".concat(W," ").concat(t," begins"),"".concat(W," ").concat(t," ends"))};var jt={begin:va,end:We};const J=()=>{};function ne(t){return typeof(t.getAttribute?t.getAttribute(L):null)=="string"}function ya(t){const e=t.getAttribute?t.getAttribute(Nt):null,n=t.getAttribute?t.getAttribute(Tt):null;return e&&n}function xa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(l.replacementClass)}function Aa(){return l.autoReplaceSvg===!0?Z.replace:Z[l.autoReplaceSvg]||Z.replace}function wa(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function ka(t){return g.createElement(t)}function $e(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?wa:ka}=e;if(typeof t=="string")return g.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild($e(i,{ceFn:n}))}),a}function Sa(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Z={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore($e(n),e)}),e.getAttribute(L)===null&&l.keepOriginalSource){let n=g.createComment(Sa(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~_t(e).indexOf(l.replacementClass))return Z.replace(t);const a=new RegExp("".concat(l.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,c)=>(c===l.replacementClass||c.match(a)?s.toSvg.push(c):s.toNode.push(c),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>q(i)).join(`
`);e.setAttribute(L,""),e.innerHTML=r}};function ae(t){t()}function Ve(t,e){const n=typeof e=="function"?e:J;if(t.length===0)n();else{let a=ae;l.mutateApproach===Cn&&(a=M.requestAnimationFrame||ae),a(()=>{const r=Aa(),i=jt.begin("mutate");t.map(r),i(),n()})}}let Yt=!1;function Be(){Yt=!0}function Ot(){Yt=!1}let et=null;function re(t){if(!$t||!l.observeMutations)return;const{treeCallback:e=J,nodeCallback:n=J,pseudoElementsCallback:a=J,observeMutationsRoot:r=g}=t;et=new $t(i=>{if(Yt)return;const s=N();H(i).forEach(c=>{if(c.type==="childList"&&c.addedNodes.length>0&&!ne(c.addedNodes[0])&&(l.searchPseudoElements&&a(c.target),e(c.target)),c.type==="attributes"&&c.target.parentNode&&l.searchPseudoElements&&a(c.target.parentNode),c.type==="attributes"&&ne(c.target)&&~Fn.indexOf(c.attributeName))if(c.attributeName==="class"&&ya(c.target)){const{prefix:u,iconName:f}=it(_t(c.target));c.target.setAttribute(Nt,u||s),f&&c.target.setAttribute(Tt,f)}else xa(c.target)&&n(c.target)})}),C&&et.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ea(){et&&et.disconnect()}function Pa(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],c=i.slice(1);return s&&c.length>0&&(a[s]=c.join(":").trim()),a},{})),n}function Ca(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=it(_t(t));return r.prefix||(r.prefix=N()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Jn(r.prefix,t.innerText)||Dt(r.prefix,At(t.innerText))),!r.iconName&&l.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Oa(t){const e=H(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return l.autoA11y&&(n?e["aria-labelledby"]="".concat(l.replacementClass,"-title-").concat(a||B()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ia(){return{iconName:null,title:null,titleId:null,prefix:null,transform:w,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ie(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ca(t),i=Oa(t),s=kt("parseNodeAttributes",{},t);let c=e.styleParser?Pa(t):[];return o({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:w,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:c,attributes:i}},s)}const{styles:Ma}=k;function Ge(t){const e=l.autoReplaceSvg==="nest"?ie(t,{styleParser:!1}):ie(t);return~e.extra.classes.indexOf(Ce)?T("generateLayersText",t,e):T("generateSvgReplacementMutation",t,e)}function Na(){return[...un,...gt]}function se(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!C)return Promise.resolve();const n=g.documentElement.classList,a=d=>n.add("".concat(Gt,"-").concat(d)),r=d=>n.remove("".concat(Gt,"-").concat(d)),i=l.autoFetchSvg?Na():xe.concat(Object.keys(Ma));i.includes("fa")||i.push("fa");const s=[".".concat(Ce,":not([").concat(L,"])")].concat(i.map(d=>".".concat(d,":not([").concat(L,"])"))).join(", ");if(s.length===0)return Promise.resolve();let c=[];try{c=H(t.querySelectorAll(s))}catch{}if(c.length>0)a("pending"),r("complete");else return Promise.resolve();const u=jt.begin("onTree"),f=c.reduce((d,p)=>{try{const m=Ge(p);m&&d.push(m)}catch(m){Ee||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,p)=>{Promise.all(f).then(m=>{Ve(m,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),u(),d()})}).catch(m=>{u(),p(m)})})}function Ta(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ge(t).then(n=>{n&&Ve([n],e)})}function Fa(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:St(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:St(r||{})),t(a,o(o({},n),{},{mask:r}))}}const _a=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=w,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:c=null,classes:u=[],attributes:f={},styles:d={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:b}=t;return st(o({type:"icon"},t),()=>(z("beforeDOMElementCreation",{iconDefinition:t,params:e}),l.autoA11y&&(s?f["aria-labelledby"]="".concat(l.replacementClass,"-title-").concat(c||B()):(f["aria-hidden"]="true",f.focusable="false")),Rt({icons:{main:Et(b),mask:r?Et(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:o(o({},w),n),symbol:a,title:s,maskId:i,titleId:c,extra:{attributes:f,styles:d,classes:u}})))};var La={mixout(){return{icon:Fa(_a)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=se,t.nodeCallback=Ta,t}}},provides(t){t.i2svg=function(e){const{node:n=g,callback:a=()=>{}}=e;return se(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:s,transform:c,symbol:u,mask:f,maskId:d,extra:p}=n;return new Promise((m,b)=>{Promise.all([Pt(a,s),f.iconName?Pt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(O=>{let[F,x]=O;m([e,Rt({icons:{main:F,mask:x},prefix:s,iconName:a,transform:c,symbol:u,maskId:d,title:r,titleId:i,extra:p,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:s}=e;const c=at(s);c.length>0&&(a.style=c);let u;return Lt(i)&&(u=T("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},za={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return st({type:"layer"},()=>{z("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(l.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Da={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return st({type:"counter",content:t},()=>(z("beforeDOMElementCreation",{content:t,params:e}),ga({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(l.cssPrefix,"-layers-counter"),...a]}})))}}}},Ra={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=w,title:a=null,classes:r=[],attributes:i={},styles:s={}}=e;return st({type:"text",content:t},()=>(z("beforeDOMElementCreation",{content:t,params:e}),te({content:t,transform:o(o({},w),n),title:a,extra:{attributes:i,styles:s,classes:["".concat(l.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let s=null,c=null;if(ve){const u=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/u,c=f.height/u}return l.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,te({content:e.innerHTML,width:s,height:c,transform:r,title:a,extra:i,watchable:!0})])}}};const ja=new RegExp('"',"ug"),oe=[1105920,1112319],ce=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),cn),En),vn),It=Object.keys(ce).reduce((t,e)=>(t[e.toLowerCase()]=ce[e],t),{}),Ya=Object.keys(It).reduce((t,e)=>{const n=It[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ua(t){const e=t.replace(ja,""),n=Gn(e,0),a=n>=oe[0]&&n<=oe[1],r=e.length===2?e[0]===e[1]:!1;return{value:At(r?e[0]:e),isSecondary:a||r}}function Ha(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(It[n]||{})[r]||Ya[n]}function le(t,e){const n="".concat(Pn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=H(t.children).filter(m=>m.getAttribute(bt)===e)[0],c=M.getComputedStyle(t,e),u=c.getPropertyValue("font-family"),f=u.match(Nn),d=c.getPropertyValue("font-weight"),p=c.getPropertyValue("content");if(s&&!f)return t.removeChild(s),a();if(f&&p!=="none"&&p!==""){const m=c.getPropertyValue("content");let b=Ha(u,d);const{value:O,isSecondary:F}=Ua(m),x=f[0].startsWith("FontAwesome");let S=Dt(b,O),v=S;if(x){const A=Zn(O);A.iconName&&A.prefix&&(S=A.iconName,b=A.prefix)}if(S&&!F&&(!s||s.getAttribute(Nt)!==b||s.getAttribute(Tt)!==v)){t.setAttribute(n,v),s&&t.removeChild(s);const A=Ia(),{extra:D}=A;D.attributes[bt]=e,Pt(S,b).then(R=>{const Xe=Rt(o(o({},A),{},{icons:{main:R,mask:Ue()},prefix:b,iconName:v,extra:D,watchable:!0})),ct=g.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(ct,t.firstChild):t.appendChild(ct),ct.outerHTML=Xe.map(qe=>q(qe)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Wa(t){return Promise.all([le(t,"::before"),le(t,"::after")])}function $a(t){return t.parentNode!==document.head&&!~On.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(bt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function fe(t){if(C)return new Promise((e,n)=>{const a=H(t.querySelectorAll("*")).filter($a).map(Wa),r=jt.begin("searchPseudoElements");Be(),Promise.all(a).then(()=>{r(),Ot(),e()}).catch(()=>{r(),Ot(),n()})})}var Va={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=fe,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=g}=e;l.searchPseudoElements&&fe(n)}}};let ue=!1;var Ba={mixout(){return{dom:{unwatch(){Be(),ue=!0}}}},hooks(){return{bootstrap(){re(kt("mutationObserverCallbacks",{}))},noAuto(){Ea()},watch(t){const{observeMutationsRoot:e}=t;ue?Ot():re(kt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const de=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var Ga={mixout(){return{parse:{transform:t=>de(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=de(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},c="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(c," ").concat(u," ").concat(f)},p={transform:"translate(".concat(i/2*-1," -256)")},m={outer:s,inner:d,path:p};return{tag:"g",attributes:o({},m.outer),children:[{tag:"g",attributes:o({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:o(o({},n.icon.attributes),m.path)}]}]}}}};const mt={x:0,y:0,width:"100%",height:"100%"};function me(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Xa(t){return t.tag==="g"?t.children:[t]}var qa={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?it(n.split(" ").map(r=>r.trim())):Ue();return a.prefix||(a.prefix=N()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:s,transform:c}=e;const{width:u,icon:f}=r,{width:d,icon:p}=i,m=Un({transform:c,containerWidth:d,iconWidth:u}),b={tag:"rect",attributes:o(o({},mt),{},{fill:"white"})},O=f.children?{children:f.children.map(me)}:{},F={tag:"g",attributes:o({},m.inner),children:[me(o({tag:f.tag,attributes:o(o({},f.attributes),m.path)},O))]},x={tag:"g",attributes:o({},m.outer),children:[F]},S="mask-".concat(s||B()),v="clip-".concat(s||B()),A={tag:"mask",attributes:o(o({},mt),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,x]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:Xa(p)},A]};return n.push(D,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(S,")")},mt)}),{children:n,attributes:a}}}},Ka={provides(t){let e=!1;M.matchMedia&&(e=M.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:o(o({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=o(o({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:o(o({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:o(o({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:o(o({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:o(o({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:o(o({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Qa={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Ja=[$n,La,za,Da,Ra,Va,Ba,Ga,qa,Ka,Qa];ca(Ja,{mixoutsTo:y});y.noAuto;y.config;const Za=y.library,tr=y.dom;y.parse;y.findIconDefinition;y.toHtml;y.icon;y.layer;y.text;y.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const er={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},nr={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},ar={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},rr={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ir={prefix:"fas",iconName:"at",icon:[512,512,[61946],"40","M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"]},sr={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},or={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},cr={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]};Za.add(ar,er,rr,nr,ir,cr,sr,or);tr.watch();function lr(){const t=document.getElementById("content");t.innerHTML=`
        <div class="about-container">
            <div class="about-header">
                <h1>About Us</h1>
                <p class="tagline">Serving exceptional cuisine since 1995</p>
            </div>
            
            <div class="about-content">
                <div class="about-info">
                    <div class="about-description">
                        <h2>Our Story</h2>
                        <p>Founded in the heart of Paris, our restaurant has been serving authentic cuisine for over 25 years. 
                        Our commitment to quality ingredients and exceptional service has made us a beloved destination for locals and tourists alike.</p>
                        
                        <p>Our team of passionate chefs crafts each dish with care, blending traditional techniques with modern innovation.</p>
                    </div>
                    
                    <div class="hours-section">
                        <h2>Hours</h2>
                        <div class="hours-item">
                            <span class="day">Monday - Thursday</span>
                            <span class="time">11:00 AM - 10:00 PM</span>
                        </div>
                        <div class="hours-item">
                            <span class="day">Friday - Saturday</span>
                            <span class="time">11:00 AM - 11:00 PM</span>
                        </div>
                        <div class="hours-item">
                            <span class="day">Sunday</span>
                            <span class="time">12:00 PM - 9:00 PM</span>
                        </div>
                    </div>
                </div>
                
                <div class="contact-section">
                    <h2>Contact Information</h2>
                    <div class="contact-item">
                        <i class="fa-solid fa-phone"></i>
                        <span>+33 9 07 45 12 65</span>
                    </div>
                    <div class="contact-item">
                        <i class="fa-solid fa-at"></i>
                        <span>contact@restaurant.com</span>
                    </div>
                    <div class="contact-item">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>42 rue Moulbert, 75016 Paris</span>
                    </div>
                    
                    <div class="social-section">
                        <h3>Follow Us</h3>
                        <div class="social-icons">
                            <a href="https://www.facebook.com" target="_blank" class="social-icon">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" class="social-icon">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" class="social-icon">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" class="social-icon">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `}const ot=document.getElementById("content"),fr=document.getElementById("home-button"),ur=document.getElementById("menu-button"),dr=document.getElementById("about-button");function mr(){ot.innerHTML="",pe()}fr.addEventListener("click",()=>{ot.innerHTML="",pe()});ur.addEventListener("click",()=>{ot.innerHTML="",Qe()});dr.addEventListener("click",()=>{ot.innerHTML="",lr()});mr();
