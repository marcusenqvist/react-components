(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1135:function(e,t,n){"use strict";n.r(t);var a=n(36),o=n(0),l=(n(799),function(e){return o.createElement("div",{className:"text-label"+(e.className?" "+e.className:"")},e.label&&o.createElement("label",{className:"custom-label",htmlFor:e.name},e.label),o.createElement("div",{className:"custom-label-value"},e.value))}),r=n(398),c=n(399).default,s=n(801),i=function(e){function t(t){var n=e.call(this,t)||this;return n.state={textBoxValue:""},n}return a.b(t,e),t.prototype.render=function(){var e=Object(r.a)(this.props.location.search,"mode");return o.createElement("div",{className:"route-template "+("dl"===e||"DL"===e?"brief":"")},o.createElement("div",{className:"info-holder"},o.createElement("div",{className:"info"},o.createElement("div",{className:"md-file"},o.createElement(c,{innerHTML:!0},s))),o.createElement("div",{className:"info"},o.createElement("h2",null,"Output"),o.createElement("p",null,"Here is the basic bootstrap one:"),o.createElement("div",{className:"result wide"},o.createElement("div",{className:"row no-gutters"},o.createElement(l,{className:"col-2",name:"textname",value:"400,000 kr",label:"Current savings"}))))))},t}(o.Component);t.default=i},398:function(e,t,n){"use strict";function a(e,t){var n=RegExp("[?&]"+t+"=([^&]*)").exec(e);return n&&decodeURIComponent(n[1].replace(/\+/g," "))}n.d(t,"a",function(){return a})},799:function(e,t,n){var a=n(800);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(58)(a,o);a.locals&&(e.exports=a.locals)},800:function(e,t,n){(e.exports=n(54)(!1)).push([e.i,".text-label label.custom-label:not(.form-check-label):not(.custom-checkbox):not(.custom-radio):not(.custom-control-label) {\n  display: block;\n  margin-bottom: 4px;\n  line-height: 1;\n  font-size: 12px;\n  font-weight: normal; }\n\n.text-label .custom-label-value {\n  font-weight: 500; }\n",""])},801:function(e,t){e.exports='<hr>\n<p>title: Text Label\ncomponentid: component-textlabel\nvariantid: default</p>\n<h2 id="guid-textlabel-guid-default-component-react">guid: &#39;textlabel-guid-default-component-react&#39;</h2>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: Text Label Component\nComponent: &quot;TextLabel&quot;\nSelector: &quot;&lt;TextLabel/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/TextLabel&quot;\nType: Form Component</code></pre>\n<h2 id="element-information">Element information</h2>\n<p>This React component is based on SEB Bootstrap style. Supports customization and configurations. The component name is <code>TextLabel</code> and the selector is <code>&lt;TextLabel/&gt;</code>.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;TextLabel\n    name=&quot;textname&quot;\n    value=&quot;Some text value&quot;\n    label=&quot;Some text label&quot;\n/&gt;</code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Descrition</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>value</td>\n<td><code>string</code></td>\n<td>The current value</td>\n</tr>\n<tr>\n<td>name?</td>\n<td><code>string</code></td>\n<td>element name</td>\n</tr>\n<tr>\n<td>label?</td>\n<td><code>string</code></td>\n<td>Element label</td>\n</tr>\n<tr>\n<td>className?</td>\n<td><code>string</code></td>\n<td>Custom class can be passed here</td>\n</tr>\n</tbody></table>\n'}}]);