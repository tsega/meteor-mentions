Package.describe({
  name: 'tsega:mentions',
  version: '0.0.5',
  summary: '@metions for Meteor Apps',
  git: 'https://github.com/tsega/meteor-mentions',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  // Adding dependencies, bootstrap dependency
  // intentionally left out
  api.use('jquery', 'client');

  // Adding library files
  api.add_files([
    'lib/css/mention.css',
    'lib/js/mention.js',
    'lib/js/bootstrap-typeahead2.js'
    ], 'client');
});
