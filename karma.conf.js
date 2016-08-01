const frontendBuild = require('frontend-build');
const customConfig = require('./build.conf.js');
const cfg = frontendBuild.buildConfig(customConfig);

module.exports = function karmaConfig(config) {
  const options = cfg.karma;

  // include dependencies listed in the index.html here
  options.systemjs.includeFiles = [
    `${cfg.npmDir}/angular/angular.js`,
    `${cfg.npmDir}/angular-animate/angular-animate.js`,
    `${cfg.npmDir}/angular-aria/angular-aria.js`,
    `${cfg.npmDir}/angular-material/angular-material.js`,
    `${cfg.npmDir}/angular-ui-router/release/angular-ui-router.js`,
    `${cfg.npmDir}/angular-mocks/angular-mocks.js`,
  ].concat(options.systemjs.includeFiles || []);

  config.set(options);
};
