'use strict';

module.exports = function(
  $q,
  $http,
  api
) {

  let token = '';

  const signUp = (user) => {
    let userObj = angular.toJson({
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      password: user.password,
      password_confirmation: user.passwordConfirmation,
    });
    return $q((resolve, reject) => {
      $http.post(`${api.server}${api.signup}`, userObj)
      .then(() => resolve())
      .catch(error => reject(error));
    });
  };

  const logIn = (user) => {
    let userObj = angular.toJson(user);
    return $q((resolve, reject) => {
      $http.post(`${api.server}${api.login}`, userObj)
      .then((data) => {
        token = data.auth_token;
        resolve();
      })
      .catch(error => reject(error));
    });
  };

  const sendToken = () => token ? token : null;

  return {
    signUp,
    logIn,
    sendToken
  };

};