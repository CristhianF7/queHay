appQhay.controller('login', function ($scope){
    
    $scope.ValidarIngreso = function (){
        
        if ($scope.usuario == "Cristhian" && $scope.pass == "123"){
            app.slidingMenu.setMainPage('Eventos.html', {closeMenu: true})
        }
        else{
            alert('Login incorrecto!');
        }
    }
});