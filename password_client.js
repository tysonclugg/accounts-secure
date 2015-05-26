Meteor.loginWithPassword = (function (original) {
  return function () {
    if (Meteor.connection._stream.socket._base_url.search(/^https:/) !== 0) {
      if(! confirm("Send password without encryption?"))
        return;
    }

    return original.apply(this, arguments);
  };
}(Meteor.loginWithPassword));

Accounts._hashPassword = function (password) {
  return password;
};
