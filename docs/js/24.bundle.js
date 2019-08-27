(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1038:function(e,t,n){"use strict";n.r(t);var r=n(36),a=n(0),o=(n(990),a.createElement("svg",{name:"check",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},a.createElement("path",{d:"M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"}))),s=a.memo(function(e){var t,n,r,s,i,c;"horizontal"===(i=-1===["horizontal","vertical"].indexOf(e.orientation)?"horizontal":e.orientation)&&("top"===(c=-1===["top","bottom"].indexOf(e.labelPosition)?"bottom":e.labelPosition)&&(t=!0,n=!1,r=!1,s=!1),"bottom"===c&&(t=!1,n=!0,r=!1,s=!1)),"vertical"===i&&("left"===(c=-1===["left","right"].indexOf(e.labelPosition)?"right":e.labelPosition)&&(t=!1,n=!1,r=!1,s=!0),"right"===c&&(t=!1,n=!1,r=!0,s=!1));var p="custom-step-tracker";function l(t){return 100/(e.list.length-1)*t+"%"}return e.onClick&&(p+=" clickable"),p+=" "+i,p+=" label-"+c,e.className&&(p+=" "+e.className),a.createElement("div",{className:p},t&&a.createElement("div",{className:"text-wrapper"},e.list.map(function(t,n){return a.createElement("div",{className:"text"+(e.step===n?" active":""),style:{width:l(1)},key:n},a.createElement("div",{className:"name"},t))})),s&&a.createElement("div",{className:"text-wrapper"},e.list.map(function(t,n){return a.createElement("div",{className:"text"+(e.step===n?" active":""),key:n},a.createElement("div",{className:"name"},t))})),"horizontal"===i&&a.createElement("div",{className:"step-wrapper"},a.createElement("div",{className:"line"},a.createElement("div",{className:"progress",style:{width:l(e.step)}})),e.list.map(function(t,n){return a.createElement("div",{className:"step"+(e.step===n?" active":"")+(e.useNumbers?" numbered":""),style:{left:l(n)},onClick:function(){return e.onClick&&e.onClick(n)},key:n},a.createElement("div",{className:"step-border"}),o,a.createElement("div",{className:"number"},n+1))})),"vertical"===i&&a.createElement("div",{className:"step-wrapper"},a.createElement("div",{className:"line"},a.createElement("div",{className:"progress",style:{height:l(e.step)}})),e.list.map(function(t,n){return a.createElement("div",{className:"step"+(e.step===n?" active":"")+(e.useNumbers?" numbered":""),style:{top:l(n)},onClick:function(){return e.onClick&&e.onClick(n)},key:n},a.createElement("div",{className:"step-border"}),o,a.createElement("div",{className:"number"},n+1))})),n&&a.createElement("div",{className:"text-wrapper"},e.list.map(function(t,n){return a.createElement("div",{className:"text"+(e.step===n?" active":""),style:{width:l(1)},key:n},a.createElement("div",{className:"name"},t))})),r&&a.createElement("div",{className:"text-wrapper"},e.list.map(function(t,n){return a.createElement("div",{className:"text"+(e.step===n?" active":""),key:n},a.createElement("div",{className:"name"},t))})))}),i=n(398),c=n(399).default,p=n(992),l=function(e){function t(t){var n=e.call(this,t)||this;return n.state={stepTracker:1,stepList:["Getting Started","Personal Information","Account Information","Finish"]},n.clickAction=n.clickAction.bind(n),n}return r.b(t,e),t.prototype.clickAction=function(e){this.setState({stepTracker:e})},t.prototype.render=function(){var e=Object(i.a)(this.props.location.search,"mode");return a.createElement("div",{className:"route-template "+("dl"===e||"DL"===e?"brief":"")},a.createElement("div",{className:"info-holder"},a.createElement("div",{className:"info"},a.createElement("div",{className:"md-file"},a.createElement(c,{innerHTML:!0},p))),a.createElement("div",{className:"info"},a.createElement("h2",null,"Output"),a.createElement("p",null,"Here is an example of a horizontal step tracker:"),a.createElement("div",{className:"result wide"},a.createElement(s,{step:this.state.stepTracker,list:this.state.stepList,onClick:this.clickAction})),a.createElement("p",null,"Here is an example of a vertical step tracker:"),a.createElement("div",{className:"result"},a.createElement(s,{step:this.state.stepTracker,list:this.state.stepList,orientation:"vertical",onClick:this.clickAction})))))},t}(a.Component);t.default=l},398:function(e,t,n){"use strict";function r(e,t){var n=RegExp("[?&]"+t+"=([^&]*)").exec(e);return n&&decodeURIComponent(n[1].replace(/\+/g," "))}n.d(t,"a",function(){return r})},990:function(e,t,n){var r=n(991);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(58)(r,a);r.locals&&(e.exports=r.locals)},991:function(e,t,n){(e.exports=n(54)(!1)).push([e.i,".custom-step-tracker {\n  position: relative;\n  overflow: hidden;\n  margin: 0 auto; }\n  .custom-step-tracker.horizontal {\n    padding: 0 50px; }\n    .custom-step-tracker.horizontal .step-wrapper {\n      position: relative;\n      width: 100%;\n      height: 20px; }\n      .custom-step-tracker.horizontal .step-wrapper .step {\n        position: absolute;\n        display: inline-block;\n        width: 20px;\n        height: 20px;\n        background-color: #0092E1;\n        border-radius: 50%;\n        overflow: hidden;\n        transition: all 200ms;\n        transform: translateX(-50%); }\n        .custom-step-tracker.horizontal .step-wrapper .step.active {\n          background-color: #dedede; }\n          .custom-step-tracker.horizontal .step-wrapper .step.active .step-border {\n            border: 2px solid #0092E1; }\n          .custom-step-tracker.horizontal .step-wrapper .step.active svg {\n            transform: translate(-50%, -50%) scale(0); }\n          .custom-step-tracker.horizontal .step-wrapper .step.active .number {\n            color: #007AC7; }\n          .custom-step-tracker.horizontal .step-wrapper .step.active ~ .step {\n            background-color: #dedede; }\n            .custom-step-tracker.horizontal .step-wrapper .step.active ~ .step svg {\n              transform: translate(-50%, -50%) scale(0); }\n            .custom-step-tracker.horizontal .step-wrapper .step.active ~ .step .number {\n              color: #007AC7; }\n        .custom-step-tracker.horizontal .step-wrapper .step.numbered svg {\n          transform: translate(-50%, -50%) scale(0); }\n        .custom-step-tracker.horizontal .step-wrapper .step.numbered .number {\n          display: inline-block; }\n        .custom-step-tracker.horizontal .step-wrapper .step .step-border {\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          border-radius: 50%;\n          transition: all 100ms; }\n        .custom-step-tracker.horizontal .step-wrapper .step svg {\n          position: absolute;\n          width: 13px;\n          height: 13px;\n          left: 50%;\n          top: 50%;\n          fill: #fff;\n          transform: translate(-50%, -50%) scale(1);\n          transition: all 100ms 200ms; }\n        .custom-step-tracker.horizontal .step-wrapper .step .number {\n          user-select: none;\n          display: none;\n          position: absolute;\n          font-size: 11px;\n          font-weight: bold;\n          left: 7px;\n          top: 2px;\n          color: #fff; }\n    .custom-step-tracker.horizontal .line {\n      height: 4px;\n      width: 100%;\n      position: absolute;\n      top: 50%;\n      z-index: -1;\n      background-color: #dedede;\n      transform: translateY(-50%); }\n      .custom-step-tracker.horizontal .line .progress {\n        background: #41B0EE;\n        position: relative;\n        display: block;\n        height: 4px;\n        transition: 200ms; }\n    .custom-step-tracker.horizontal .text-wrapper {\n      position: relative;\n      width: 100%;\n      white-space: nowrap;\n      overflow-y: visible;\n      margin: 10px 0;\n      display: table; }\n      .custom-step-tracker.horizontal .text-wrapper .text {\n        position: relative;\n        display: inline-block;\n        text-align: center;\n        transform: translateX(-50%);\n        vertical-align: top; }\n        .custom-step-tracker.horizontal .text-wrapper .text .name {\n          position: relative;\n          line-height: 100%;\n          max-width: 100px;\n          white-space: normal;\n          margin: 0 auto;\n          font-size: 14px; }\n        .custom-step-tracker.horizontal .text-wrapper .text.active .name {\n          color: #007AC7; }\n  .custom-step-tracker.vertical {\n    padding: 8px 10px 8px 40px;\n    display: inline-block; }\n    .custom-step-tracker.vertical .step-wrapper {\n      position: absolute;\n      top: 15px;\n      bottom: 15px;\n      left: 5px;\n      width: 30px;\n      display: inline-block;\n      text-align: center; }\n      .custom-step-tracker.vertical .step-wrapper .step {\n        position: absolute;\n        width: 20px;\n        height: 20px;\n        background-color: #0092E1;\n        border-radius: 50%;\n        overflow: hidden;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        transition: all 200ms; }\n        .custom-step-tracker.vertical .step-wrapper .step.active {\n          background-color: #dedede; }\n          .custom-step-tracker.vertical .step-wrapper .step.active .step-border {\n            border: 2px solid #0092E1; }\n          .custom-step-tracker.vertical .step-wrapper .step.active svg {\n            transform: translate(-50%, -50%) scale(0); }\n          .custom-step-tracker.vertical .step-wrapper .step.active .number {\n            color: #007AC7; }\n          .custom-step-tracker.vertical .step-wrapper .step.active ~ .step {\n            background-color: #dedede; }\n            .custom-step-tracker.vertical .step-wrapper .step.active ~ .step svg {\n              transform: translate(-50%, -50%) scale(0); }\n            .custom-step-tracker.vertical .step-wrapper .step.active ~ .step .number {\n              color: #007AC7; }\n        .custom-step-tracker.vertical .step-wrapper .step.numbered svg {\n          transform: translate(-50%, -50%) scale(0); }\n        .custom-step-tracker.vertical .step-wrapper .step.numbered .number {\n          display: inline-block; }\n        .custom-step-tracker.vertical .step-wrapper .step .step-border {\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          border-radius: 50%;\n          transition: all 100ms; }\n        .custom-step-tracker.vertical .step-wrapper .step svg {\n          position: absolute;\n          width: 13px;\n          height: 13px;\n          left: 50%;\n          top: 50%;\n          fill: #fff;\n          transform: translate(-50%, -50%) scale(1);\n          transition: all 100ms 200ms; }\n        .custom-step-tracker.vertical .step-wrapper .step .number {\n          user-select: none;\n          display: none;\n          position: absolute;\n          font-size: 11px;\n          font-weight: bold;\n          left: 7px;\n          top: 2px;\n          color: #fff; }\n    .custom-step-tracker.vertical .line {\n      position: absolute;\n      height: 100%;\n      width: 4px;\n      left: 50%;\n      z-index: -1;\n      background-color: #dedede;\n      transform: translateX(-50%); }\n      .custom-step-tracker.vertical .line .progress {\n        background: #41B0EE;\n        position: relative;\n        display: block;\n        height: 4px;\n        transition: 200ms; }\n    .custom-step-tracker.vertical .text-wrapper {\n      position: relative;\n      display: inline-block; }\n      .custom-step-tracker.vertical .text-wrapper .text {\n        position: relative;\n        text-align: left; }\n        .custom-step-tracker.vertical .text-wrapper .text:not(:last-child) {\n          margin-bottom: 50px; }\n        .custom-step-tracker.vertical .text-wrapper .text .name {\n          position: relative;\n          line-height: 100%;\n          font-size: 14px; }\n        .custom-step-tracker.vertical .text-wrapper .text.active .name {\n          color: #007AC7; }\n    .custom-step-tracker.vertical.left {\n      padding: 8px 40px 8px 10px; }\n      .custom-step-tracker.vertical.left .step-wrapper {\n        right: 5px;\n        left: auto; }\n      .custom-step-tracker.vertical.left .text-wrapper .text {\n        text-align: right; }\n  .custom-step-tracker.clickable .step-wrapper .step:not(.active):hover {\n    cursor: pointer;\n    background-color: #41B0EE; }\n",""])},992:function(e,t){e.exports='<hr>\n<p>title: Step Tracker\ncomponentid: component-steptracker\nvariantid: default</p>\n<h2 id="guid-steptracker-guid-default-component-react">guid: &#39;steptracker-guid-default-component-react&#39;</h2>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: Step Tracker Component\nModule: &quot;StepTracker&quot;\nSelector: &quot;&lt;StepTracker/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/StepTracker&quot;\nType: UI Component</code></pre>\n<h2 id="element-information">Element Information</h2>\n<p>This React component supports customization and configurations. The component name is <code>StepTracker</code> and the selector is <code>&lt;StepTracker/&gt;</code>.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;StepTracker\n      step={valueObj}\n      list={stepTrackerListObj}&gt;\n&lt;/StepTracker&gt;</code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>step</td>\n<td><code>number</code></td>\n<td>Current step (value)</td>\n</tr>\n<tr>\n<td>list</td>\n<td><code>Array&lt;string&gt;</code></td>\n<td>List of steps (titles)</td>\n</tr>\n<tr>\n<td>onClick?</td>\n<td><code>(index: number) =&gt; void</code></td>\n<td>onClick event, passes the array index of the clicked step</td>\n</tr>\n<tr>\n<td>labelPosition?</td>\n<td><code>string</code></td>\n<td>Label position<sup>1</sup> (defaut: <code>bottom</code> for <code>horizontal</code>, <code>right</code> for <code>vertical</code>)</td>\n</tr>\n<tr>\n<td>useNumbers?</td>\n<td><code>boolean</code></td>\n<td>Use numbers for each step</td>\n</tr>\n<tr>\n<td>orientation?</td>\n<td><code>string</code></td>\n<td>Tracker orientation (default: <code>horizontal</code>)</td>\n</tr>\n<tr>\n<td>className?</td>\n<td><code>string</code></td>\n<td>Custom class can be passed here</td>\n</tr>\n</tbody></table>\n<h2 id="footnote">Footnote</h2>\n<ol>\n<li>Label positions supported <code>top</code> and <code>bottom</code> for <code>horizontal</code> orientation, <code>left</code> and <code>right</code> for <code>vertical</code> orientation.</li>\n</ol>\n'}}]);