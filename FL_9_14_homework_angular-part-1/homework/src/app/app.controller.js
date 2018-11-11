usersPosts.controller('UsersCtrl', function($scope) {
  $scope.userName = 'Will Smith'
  $scope.userImg = '../assets/img/user.jpg';
  $scope.appTitle = 'post wall'; 
  $scope.posts = USERS;
  $scope.modalIsOpen = false;
  $scope.savePost = function(title,message) {
    if(message) {
      var newPost = {
        title: title ,
        author:  $scope.userName,
        likes: 0,
        img: $scope.userImg,
        message: message
      };
      $scope.posts.push(newPost);
      $scope.handleModal();
    }

  }
  $scope.handleModal = function() {
    $scope.modalIsOpen = !$scope.modalIsOpen;
  }
})