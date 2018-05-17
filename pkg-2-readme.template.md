# {{name}}

{{#author}}
## Author
{{author_name}}

## Version
v{{version}}

{{#badges}}
## Badges

{{#add_nodeico}}[![NPM](https://nodei.co/npm/{{name}}.png)](https://nodei.co/npm/{{name}}/){{/add_nodeico}}

[![NPM downloads/month](https://img.shields.io/npm/dm/{{name}}.svg)](hhttps://img.shields.io/npm/dm/{{name}}.svg)

{{#add_github_badges}}{{#add_github_stars}}[![GitHub stars](https://img.shields.io/github/stars/{{author}}/{{name}}.svg?style=plastic)](https://github.com/{{author}}/{{name}}/stargazers){{/add_github_stars}} {{#add_github_forks}}[![GitHub forks](https://img.shields.io/github/forks/{{author}}/{{name}}.svg?style=plastic)](https://github.com/{{author}}/{{name}}/network){{/add_github_forks}} {{#add_github_issues}}[![GitHub issues](https://img.shields.io/github/issues/{{author}}/{{name}}.svg?style=plastic)](https://github.com/{{author}}/{{name}}/issues){{/add_github_issues}} {{#add_github_license}}[![GitHub license](https://img.shields.io/github/license/{{author}}/{{name}}.svg?style=plastic)](https://github.com/{{author}}/{{name}}/blob/master/LICENSE){{/add_github_license}}{{/add_github_badges}} 

{{#add_travis}}[![Build Status](https://travis-ci.org/{{author}}/{{name}}.svg?branch=master)](https://travis-ci.org/{{author}}/{{name}}){{/add_travis}} {{#add_coverage}}[![Coverage Status](https://coveralls.io/repos/github/{{author}}/{{name}}/badge.svg?branch=master)](https://coveralls.io/github/{{author}}/{{name}}?branch=master){{/add_coverage}}
{{/badges}}
{{/author}}

## Documentation
Check out the [Latest Documentation]({{documentation}}) here

## Description
{{description}}

## Example
Check out this [Codepen]({{example}}) example

## Installation

This is a [Node.js](https://nodejs.org/) module available through the 
[npm registry](https://www.npmjs.com/). It can be installed using the 
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or 
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
{{#preferGlobal}}
npm install {{name}} --global
{{/preferGlobal}}
{{^preferGlobal}}
npm install {{name}} --save
{{/preferGlobal}}
```
{{#usage}}

## Usage

```{{language}}
{{{content}}}
```
{{/usage}}

## Dependencies

{{#depDetails}}
- [{{name}}]({{repository}}): {{description}}
{{/depDetails}}
{{^depDetails}}
None
{{/depDetails}}

## Dev Dependencies

{{#devDepDetails}}
- [{{name}}]({{repository}}): {{description}}
{{/devDepDetails}}
{{^devDepDetails}}
None
{{/devDepDetails}}

{{#scripts.test}}
## Tests

```sh
npm install
npm test
```
{{/scripts.test}}

{{#testOutput}}
```
{{{testOutput}}}
```
{{/testOutput}}

{{#license}}
## License

{{license}}
{{/license}}

## Powered By
<a href="http://js.org" target="_blank" title="JS.ORG | JavaScript Community">
<img src="http://logo.js.org/dark_horz.png" width="102" alt="JS.ORG Logo"/></a>
<!-- alternatives [bright|dark]_[horz|vert|tiny].png (width[horz:102,vert:50,tiny:77]) -->
