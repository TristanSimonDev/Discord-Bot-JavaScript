require('module-alias/register');
const settingsJSON = require('@vscode/Settings.json')

const HelpPrefix = settingsJSON.Prefix.HelpPrefix
console.log(typeof(HelpPrefix))