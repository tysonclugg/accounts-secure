Accounts._hashPassword = function (password) {
  // Complain loudly if not using SSL
  if (Meteor.connection._stream.socket._base_url.search(/^https:/) != 0) {
    if(window.prompt("Sending password without encryption, type 'OK' to allow this.", "I'd rather keep my password secure.") !== 'OK') {
      throw "REFUSING TO SEND AUTHENTICATION CREDENTIALS WITHOUT ENCRYPTION!";
    }
  }
  return password;
};
