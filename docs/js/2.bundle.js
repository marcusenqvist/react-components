(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{164:function(e,o,t){"use strict";t.r(o);var n=t(0),s=t(444).default,i=t(825);o.default=function(){return n.createElement("div",{className:"about-page"},n.createElement("div",{className:"md-file"},n.createElement(s,{innerHTML:!0},i)))}},825:function(e,o){e.exports='<h1 id="seb-react-components">SEB React Components</h1>\n<p><a href="https://travis-ci.com/sebgroup/react-components"><img src="https://travis-ci.com/sebgroup/react-components.svg?branch=master" alt="Build Status"></a>\n<a href="http://commitizen.github.io/cz-cli/"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen friendly"></a>\n<a href="https://github.com/semantic-release/semantic-release"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="semantic-release"></a>\n<a href="https://coveralls.io/github/sebgroup/react-components?branch=master"><img src="https://coveralls.io/repos/github/sebgroup/react-components/badge.svg?branch=master" alt="Coverage Status"></a></p>\n<p>This is a set of react components some of which are based on SEB&#39;s bootstrap. The plan for this project is to increase and improve components for future usage.</p>\n<ul>\n<li>The package name: <code>@sebgroup/react-components</code></li>\n<li>The package documentation: <a href="https://sebgroup.github.io/react-components">Documentation</a></li>\n<li>The package sourcecode: <a href="https://github.com/sebgroup/react-components">Github Source Code</a></li>\n</ul>\n<h2 id="minimum-requirements">Minimum requirements</h2>\n<p>This version of components has been developed with:</p>\n<ul>\n<li>React <code>16.10.1</code></li>\n<li>Typescript <code>3.6.3</code></li>\n<li>SEB Bootstrap <code>4.0.0</code></li>\n</ul>\n<h2 id="installation">Installation</h2>\n<p>You should be able to install the NPM package.</p>\n<pre><code class="language-bash">npm install @sebgroup/react-components --save</code></pre>\n<p>This project is based on SEB Bootstrap which includes <code>fonts</code>, <code>colors</code> and <code>variables</code>, to make sure everything works fine, please install these dependencies on your project:</p>\n<pre><code class="language-bash">npm install @sebgroup/bootstrap --save</code></pre>\n<p>Then make sure you add the Main SEB bootstrap package in your main style.SCSS or index.ts as follows\n<code>@import &#39;~@sebgroup/bootstrap/scss/bootstrap&#39;;</code>.</p>\n<p>For <code>Visual Studio Code</code> users, please install official <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin">TSLint</a> plugin which has been published by <code>Microsoft</code> on your IDE, to enable <code>ts-linting</code> as by default you need to pass TSLint to be able to compile your code for production.</p>\n<h2 id="development">Development</h2>\n<p>This project uses proper <code>ts-linting</code> and our lints are based on <code>tslint:latest</code> and <code>tslint-react</code>, with our changes in lint rules for a more consistent (less annoying) coding. We are using 4 different builds for this project. The <code>src</code> folder is where the actual components exist with all their necessary dependencies. and <code>develop</code> folder is where we develop and test those components. Unit tests are based on <code>jest</code> and <code>enzyme</code>.</p>\n<ol>\n<li>Development: <code>npm start</code></li>\n<li>Check for Lint-ing rules, Compile components and Create Docs folder: <code>npm run build</code></li>\n<li>Build and create the Documentation pages only: <code>npm run docs</code></li>\n<li>To run the unit tests, run: <code>npm run test</code></li>\n<li>To run a unit test for a specific component you have to pass the name of the component in <code>comp</code> variable, run: <code>npm run test --comp=Button</code></li>\n</ol>\n<h2 id="usage">Usage</h2>\n<p>For performance benefits we are not combining all the components into single Index rather they are chunked into their subpackage. Therefore, to use a component, you need to import the <code>Component</code> submodule from the <code>dist</code> folder, in whichever Class you want to use it. Here is a sample of how to import a <code>Button</code> component in a page.</p>\n<pre><code class="language-javascript">import { Button } from &quot;@sebgroup/react-components/dist/Button&quot;;\n\nclass Comp extends React.Component&lt;any, any&gt; {\n    constructor(props) {\n        super(props);\n\n        this.onClick = this.onClick.bind(this);\n    }\n\n    onClick(e) {\n        console.log(&quot;Im Clicked&quot;);\n    }\n\n    render() {\n        return (\n            &lt;div&gt;\n                &lt;Button label=&quot;a button&quot; onClick={this.onClick} /&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nexport default Comp;</code></pre>\n'}}]);