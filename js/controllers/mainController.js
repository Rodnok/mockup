app.controller('mainController',['$scope',function($scope){
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
        'Recruitment jon title',
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
    $scope.addProfili = function(){
        if($('.form-control.pro').val()){
             $scope.selectedProfili[$('.pro option:selected').val()]=$('.form-control.pro').val();
            $('.form-control.pro').val("")
        }
    };
    $scope.addPredefined = function(){
        if($('.form-control.pre').val()){
             $scope.selectedPredefined[$('.pre option:selected').val()]=$('.form-control.pre').val();
            $('.form-control.pre').val("");
        }
    };
    $scope.removeCrGen = function(key){
        delete $scope.selectedGeneric[key];
    };
    $scope.removeCrPro = function(key){
        delete $scope.selectedProfili[key];
    };
    $scope.removeCrPre = function(key){
        delete $scope.selectedPredefined[key];
    };
    
    
}]);