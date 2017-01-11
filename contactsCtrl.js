
app.controller('contactsCtrl', function($scope, contactsService) {
  $scope.contactName = '';
  $scope.contactList = contactsService.$get();
  $scope.clonedList = [];
  
  $scope.clonedList = ($scope.contactList).slice(0,$scope.contactList.length);
  
    function toLower(str) 
      {
        return str.toLowerCase();
      }
  
   //filter function for filtering contacts by familyname or firstname
      $scope.contactsFilter = function(obj) {
        if($scope.contactName === ''){
          return obj;
        }
        return toLower(obj.firstName) === toLower($scope.contactName) || toLower(obj.familyName) === toLower($scope.contactName);
      };
      
    
      
      $scope.remove= function (contactName) {
         $scope.contacts =[];
         console.log(contactName);
         
       for(var i =0; i < $scope.clonedList.length;i++){
        // console.log($scope.clonedList[i]);
          if($scope.clonedList[i].firstName === contactName){
              $scope.clonedList.splice(i,1);
          }
        }
      };
});