import fs from 'fs'

const packageFile = `
{
  "name": "",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "license": "AGPL-version-3.0",
  "private": false,
  "engines": {
    "node": ">= 14.0.0",
    "npm": ">= 6.0.0"
  },
  "homepage": "",
  "repository": {
    "type": "git",
    "url": ""
  },
  "bugs": "",
  "keywords": [],
  "author": {
    "name": "",
    "email": "",
    "url": ""
  },
  "contributors": [

  ],
  "scripts": {
    "dev": "",
    "test": ""
  },
  "dependencies": {

  },
  "devDependencies": {

  }
}
`

fs.writeFileSync('package.json', packageFile)
