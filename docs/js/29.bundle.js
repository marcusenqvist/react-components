(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1036:function(e,t,n){var a=n(1037);"string"==typeof a&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};n(58)(a,i);a.locals&&(e.exports=a.locals)},1037:function(e,t,n){(e.exports=n(53)(!1)).push([e.i,".pagination-wrapper>.custom-pagination>.pagination>.page-item>.page-link{position:relative;text-align:center;padding-top:0;padding-bottom:0;min-width:38px;height:40px;display:inline-flex;align-items:center}.pagination-wrapper>.custom-pagination>.pagination>.page-item>.page-link>.nav-num{margin:0 auto}.pagination-wrapper>.custom-pagination>.pagination>.page-item>.page-link>.nav-action{margin:0 auto;display:inline-flex}.pagination-wrapper>.custom-pagination>.pagination>.page-item>.page-link>.nav-action>svg{width:16px;height:16px;fill:#007AC7}.pagination-wrapper>.custom-pagination>.pagination.dotnav .page-item{width:20px;height:25px}.pagination-wrapper>.custom-pagination>.pagination.dotnav .page-item .page-dot-link{position:relative;display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:5px;cursor:pointer;background-color:#a2ddfe;-webkit-transition:all 200ms;-moz-transition:all 200ms;-o-transition:all 200ms;transition:all 200ms;margin:0 auto;will-change:transform}.pagination-wrapper>.custom-pagination>.pagination.dotnav .page-item .page-dot-link.active{background-color:#007AC7;cursor:default;-webkit-transform:scale(1.3);-moz-transform:scale(1.3);-o-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}.pagination-wrapper>.custom-pagination>.pagination.dotnav .page-item .page-dot-link:hover:not(.active){background-color:#41B0EE}\n",""])},1038:function(e,t){e.exports='<hr>\n<p>title: Pagination\ncomponentid: component-pagination\nvariantid: default\nguid: &#39;pagination-guid-default-component-react&#39;</p>\n<hr>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: Pagination Component\nComponent: &quot;Pagination&quot;\nSelector: &quot;&lt;Pagination/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Pagination&quot;\nType: UI Component</code></pre>\n<h2 id="element-information">Element information</h2>\n<p>This React component is based on SEB Bootstrap style. Supports customization and configurations. The component name is <code>Pagination</code> and the selector is <code>&lt;Pagination/&gt;</code>.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;Pagination\n    value={this.state.paginationValue}\n    onChange={(value: number) =&gt; { this.setState({ paginationValue: value }) }}\n    size={20}\n    offset={5}\n/&gt;</code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>className?</td>\n<td><code>string</code></td>\n<td>Custom class can be passed here</td>\n</tr>\n<tr>\n<td>firstText?</td>\n<td><code>string</code></td>\n<td>First text value (default: <code>&#39;First&#39;</code>)</td>\n</tr>\n<tr>\n<td>lastText?</td>\n<td><code>string</code></td>\n<td>Last text value (default: <code>&#39;Last&#39;</code>)</td>\n</tr>\n<tr>\n<td>nextText?</td>\n<td><code>string</code></td>\n<td>Next text value (default: <code>&#39;Next&#39;</code>)</td>\n</tr>\n<tr>\n<td>offset?</td>\n<td><code>number</code></td>\n<td>Maximum number of buttons to show (default: <code>10</code>)</td>\n</tr>\n<tr>\n<td>onChange?</td>\n<td><code>(value: number) =&gt; void</code></td>\n<td>Change event passes the number of page to be displayed</td>\n</tr>\n<tr>\n<td>previousText?</td>\n<td><code>string</code></td>\n<td>Previous text value (default: <code>&#39;Previous&#39;</code>)</td>\n</tr>\n<tr>\n<td>size</td>\n<td><code>number</code></td>\n<td>maximum number of pages</td>\n</tr>\n<tr>\n<td>useDotNav?</td>\n<td><code>boolean</code></td>\n<td>Use dot-navigation<sup>1</sup></td>\n</tr>\n<tr>\n<td>useFirstAndLast?</td>\n<td><code>boolean</code></td>\n<td>Use first and last navigation buttons (default: <code>false</code>)</td>\n</tr>\n<tr>\n<td>useTextNav?</td>\n<td><code>boolean</code></td>\n<td>Use text-base navigation buttons (default: <code>false</code>)</td>\n</tr>\n<tr>\n<td>value</td>\n<td><code>number</code></td>\n<td>Current page</td>\n</tr>\n</tbody></table>\n<h2 id="footnote">Footnote</h2>\n<ol>\n<li>Dot navigation does not support <code>offset</code>, it is not meant to have big size navigation. For that, use the normal numbered navigation.</li>\n</ol>\n'},189:function(e,t,n){"use strict";n.r(t);var a=n(0),i=(n(1036),a.createElement("svg",{name:"angle-double-left",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},a.createElement("path",{d:"M153.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L192.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L153 264.5c-4.6-4.7-4.6-12.3.1-17zm-128 17l117.8 116c4.7 4.7 12.3 4.7 17 0l7.1-7.1c4.7-4.7 4.7-12.3 0-17L64.7 256l102.2-100.4c4.7-4.7 4.7-12.3 0-17l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L25 247.5c-4.6 4.7-4.6 12.3.1 17z"}))),o=a.createElement("svg",{name:"angle-left",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 192 512"},a.createElement("path",{d:"M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z"})),s=a.createElement("svg",{name:"angle-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 192 512"},a.createElement("path",{d:"M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"})),l=a.createElement("svg",{name:"angle-double-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},a.createElement("path",{d:"M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17zm128-17l-117.8-116c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17L255.3 256 153.1 356.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l117.8-116c4.6-4.7 4.6-12.3-.1-17z"})),r=a.memo((function(e){var t=e.offset?e.offset:10;function n(e,t,n){var a=[],i={min:0,max:0};if(e<=Math.ceil(n/2))for(var o=1;o<=n;o++)a.push(o);else if(e>=t+1-Math.ceil(n/2)){i.min=t+1-n,i.max=t;for(o=i.min;o<=i.max;o++)a.push(o)}else{i.min=e+1-Math.ceil(n/2),i.max=i.min+n-1;for(o=i.min;o<=i.max;o++)a.push(o)}return a}return a.createElement("div",{className:"pagination-wrapper"+(e.className?" "+e.className:""),id:e.id},a.createElement("nav",{className:"custom-pagination"},!e.useDotNav&&a.createElement("ul",{className:"pagination"},1!==e.value&&e.useFirstAndLast&&a.createElement("li",{className:"page-item",onClick:function(){return e.onChange(1)}},a.createElement("button",{className:"page-link",title:e.firstText},a.createElement("span",{className:"nav-action"},e.useTextNav?e.firstText?e.firstText:"First":i),a.createElement("span",{className:"sr-only"},e.firstText||"First"))),1!==e.value&&a.createElement("li",{className:"page-item",onClick:function(){return e.onChange(e.value-1)}},a.createElement("button",{className:"page-link",title:e.previousText},a.createElement("span",{className:"nav-action"},e.useTextNav?e.previousText?e.previousText:"Previous":o),a.createElement("span",{className:"sr-only"},e.previousText||"Previous"))),n(e.value,e.size,t).map((function(t){return a.createElement("li",{className:"page-item"+(e.value===t?" active":""),key:t,onClick:function(){return e.onChange(t)},value:t},a.createElement("button",{className:"page-link"+(e.value===t?" active":"")},a.createElement("span",{className:"nav-num"},t),a.createElement("span",{className:"sr-only"},t)))})),e.value!==e.size&&a.createElement("li",{className:"page-item",onClick:function(){return e.onChange(e.value+1)}},a.createElement("button",{className:"page-link",title:e.nextText},a.createElement("span",{className:"nav-action"},e.useTextNav?e.nextText?e.nextText:"Next":s),a.createElement("span",{className:"sr-only"},e.nextText||"Next"))),e.value!==e.size&&e.useFirstAndLast&&a.createElement("li",{className:"page-item",onClick:function(){return e.onChange(e.size)}},a.createElement("button",{className:"page-link",title:"{props.lastText}"},a.createElement("span",{className:"nav-action"},e.useTextNav?e.lastText?e.lastText:"Last":l),a.createElement("span",{className:"sr-only"},e.lastText||"Last")))),e.useDotNav&&a.createElement("ul",{className:"pagination dotnav"},n(e.value,e.size,e.size).map((function(t){return a.createElement("li",{className:"page-item"+(e.value===t?" active":""),key:t,onClick:function(){return e.onChange(t)},value:t},a.createElement("span",{className:"page-dot-link"+(e.value===t?" active":"")}))})))))})),c=n(444).default,d=n(1038);t.default=function(){var e=a.useState(1),t=e[0],n=e[1],i=a.useState(1),o=i[0],s=i[1],l=a.useState(1),m=l[0],p=l[1];return a.createElement("div",{className:"route-template container"},a.createElement("div",{className:"info-holder"},a.createElement("div",{className:"info"},a.createElement("div",{className:"md-file"},a.createElement(c,{innerHTML:!0},d))),a.createElement("div",{className:"info"},a.createElement("h2",null,"Output"),a.createElement("p",null,"Here are sample outputs"),a.createElement("div",{className:"result"},a.createElement(r,{value:t,onChange:n,size:20,offset:5})),a.createElement("p",null,"With ",a.createElement("b",null,"first")," and ",a.createElement("b",null,"last")," enabled"),a.createElement("div",{className:"result"},a.createElement(r,{value:o,onChange:s,size:20,offset:5,useFirstAndLast:!0})),a.createElement("p",null,"Here are sample outputs of DotNav: ",m),a.createElement("div",{className:"result"},a.createElement(r,{value:m,onChange:p,size:8,useDotNav:!0})))))}}}]);