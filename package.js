Package.describe({
  summary: "Use plain-text passwords in accounts-password, but warn loudly if not using SSL.",
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.use('accounts-password', ['client']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client']);

  api.addFiles('password_client.js', 'client');
});
