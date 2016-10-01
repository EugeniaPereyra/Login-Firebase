angular.module('starter.controllers', [])

.controller('ctrlLogin', function($scope, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.estaLogueado="no";

  // Create the login modal that we will use later

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {

    firebase.auth().signInWithEmailAndPassword($scope.loginData.username,$scope.loginData.password)
    .catch(function(error){
      console.info("Error: ",error);
    })
    .then(function(respuesta){
      console.info("Respuesta: ",respuesta);
      $scope.estaLogueado="si";
      $scope.loginData.username="";
      $scope.loginData.password="";
      //$state.go('search');
      $scope.verificado=firebase.auth().currentUser.emailVerified;
    });

  };

  $scope.Logout = function() {
    firebase.auth().signOut();
    $scope.estaLogueado="no";
  };

  $scope.Reset=function(){
    firebase.auth().sendPasswordResetEmail($scope.loginData.username)
    .then(function(respuesta){
      console.info("Respuesta: ", respuesta);
    })
    .catch(function(error){
      console.info("Error: ",error);
    })

  }

  $scope.Verificar=function(){

  }
})







