'use strict';

module.exports = function(
  $scope,
  $window,
  userFactory
) {
  $scope.user = {
    firstName: 'Example',
    lastName: 'User',
    email: 'example@example.com',
    password: '123456',
    passwordConfirmation: '123456'
  };

  $scope.signUp = () => {
    userFactory.signUp($scope.user)
    .then(() => $scope.logIn())
    .catch(error => console.error(error));
  };

  $scope.logIn = () => {
    userFactory.logIn($scope.user)
    .then(() => $window.location.href = '#!/blogs')
    .catch(error => console.error(error));
  };
};