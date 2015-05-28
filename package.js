Package.describe({
  name: 'tysonclugg:accounts-secure',
  version: '0.2.0',
  summary: 'Use plain-text passwords in accounts-password, but warn loudly if not using SSL.',
  git: 'https://github.com/tysonclugg/accounts-secure',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('accounts-password', ['client']);
  api.addFiles('password_client.js', ['client']);
});
