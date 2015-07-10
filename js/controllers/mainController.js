app.controller('mainController',['$scope','$http', function($scope,$http){
    //load data from json to people $scope
    $http.get('resource/people.json').success(function(data){
            $scope.people=data.people;
    });
    
    $scope.gene= {
        'Name': true,
        'Application arrival date': true,
        'Application valid until': true,
        'Recruitment job title':true,
        'Moved to recruitment':true,
        'Include direct or moved':false,
        'Application status':false,
        'Application classification':false,
        'Application custom classification 1':false,
        'Apllication custom classification 2':false,
        'Application custom classification 3':false
    };
    $scope.profi={
         'Age': true,
        'Gender': true,
        'Current location':false,
        'Personal description':false,
        'Skills':false,
        'Target salary':false,
        'Preferred line of work':false,
        'Preferred title':false,
        'Preferred employment type':false,
        'Preferred work type':false,
        'Work experience':false,
        'Education':false,
        'Certifications and Test results':false,
        'References':false
    };
    $scope.prede={
        'Predefined question':false,
        'Predefined question':false,
        'Predefined question':false,
        'Predefined question':false,
        'Predefined question':false,
        'Predefined question':false,
        'Predefined question':false,
        'Predefined question':false,
        'Predefined question':false,
        'Predefined question':false,
        'Predefined question':false,
        'Predefined question':false,
        'Predefined question':false,
        'Predefined question':false
    }
    $scope.profiliOptions=[
        'Age',
        'Gender',
        'Current location',
        'Personal description',
        'Skills',
        'Target salary',
        'Preferred line of work',
        'Preferred title',
        'Preferred employment type',
        'Preferred work type',
        'Work experience',
        'Education',
        'Certifications and Test results',
        'References'
    ];
    $scope.genericOptions=[
        'Name',
        'Application arrival date',
        'Application valid until',
        'Recruitment job title',
        'Moved to recruitment',
        'Include direct or moved',
        'Application status',
        'Application classification',
        'Application custom classification 1',
        'Apllication custom classification 2',
        'Application custom classification 3'
    ];
    $scope.predefinedOptions=[
        'Predefined question',
        'Predefined question',
        'Predefined question',
        'Predefined question',
        'Predefined question',
        'Predefined question',
        'Predefined question',
        'Predefined question',
        'Predefined question',
        'Predefined question',
        'Predefined question',
        'Predefined question',
        'Predefined question',
        'Predefined question'
    ];
    $scope.showGeneric = function(){
        if($('.generic').hasClass('hidden')){
            $('.generic').removeClass('hidden');
            $('.generic').addClass('active');
        }
        if(!$('.predefined').hasClass('hidden')){
            $('.predefined').addClass('hidden');
        };
          if(!$('.profili').hasClass('hidden')){
            $('.profili').addClass('hidden');
        };   
    };
    $scope.showProfili = function(){
         if($('.profili').hasClass('hidden')){
            $('.profili').removeClass('hidden');
        }
        if(!$('.predefined').hasClass('hidden')){
            $('.predefined').addClass('hidden');
        };
          if(!$('.generic').hasClass('hidden')){
            $('.generic').addClass('hidden');
        }; 
    };
    $scope.showPredefined = function(){
        if($('.predefined').hasClass('hidden')){
            $('.predefined').removeClass('hidden');
        }
        if(!$('.profili').hasClass('hidden')){
            $('.profili').addClass('hidden');
        };
          if(!$('.generic').hasClass('hidden')){
            $('.generic').addClass('hidden');
        }; 
    };
    
    //chosen criteria
    $scope.selectedGeneric={};
    $scope.selectedProfili={};
    $scope.selectedPredefined={};
    
    $scope.addGeneric = function(){
        if($('.form-control.gen').val())
        {
            $scope.selectedGeneric[$('.gen option:selected').val()]=$('.form-control.gen').val();
            $('.form-control.gen').val("");
        }
    };
     $scope.enterGeneric = function(keyEvent){
        if(keyEvent.which === 13){
             if($('.form-control.gen').val()){
            $scope.selectedGeneric[$('.gen option:selected').val()]=$('.form-control.gen').val();
            $('.form-control.gen').val("");
            }
        }
    };
    $scope.addProfili = function(){
        if($('.form-control.pro').val()){
             $scope.selectedProfili[$('.pro option:selected').val()]=$('.form-control.pro').val();
            $('.form-control.pro').val("");
        }
    };
    $scope.enterProfili = function(keyEvent){
        if(keyEvent.which === 13){
             if($('.form-control.pro').val()){
             $scope.selectedProfili[$('.pro option:selected').val()]=$('.form-control.pro').val();
            $('.form-control.pro').val("");
            }
        }
    };
    $scope.addPredefined = function(){
        if($('.form-control.pre').val()){
             $scope.selectedPredefined[$('.pre option:selected').val()]=$('.form-control.pre').val();
            $('.form-control.pre').val("");
        }
    };
    $scope.enterPredefined = function(keyEvent){
        if(keyEvent.which === 13){
              if($('.form-control.pre').val()){
             $scope.selectedPredefined[$('.pre option:selected').val()]=$('.form-control.pre').val();
            $('.form-control.pre').val("");
              }
        }
    };
    //'x' button to remove criteria
    $scope.removeCrGen = function(key){
        delete $scope.selectedGeneric[key];
    };
    $scope.removeCrPro = function(key){
        delete $scope.selectedProfili[key];
    };
    $scope.removeCrPre = function(key){
        delete $scope.selectedPredefined[key];
    };
    function isEmptyObject(obj) {
      for(var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          return false;
        }
      }
      return true;
    }
    //check if ciriteria is selected
    $scope.checkGene = function(){
        return !isEmptyObject($scope.selectedGeneric);
    };
    $scope.checkProfi = function(){
        return !isEmptyObject($scope.selectedProfili);
    };
    $scope.checkPrede = function(){
        return !isEmptyObject($scope.selectedPredefined);
    };
}]);