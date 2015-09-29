appQhay.controller('parcial', function ($scope){
    var sumatoriaTotal = 0;
    var info = []
    
    
    $scope.Calcular = function (){
        sumatoriaTotal += parseInt($scope.numArticulos) * parseInt($scope.precioArticulo);
        info.push("Descripción: " + $scope.descripcion + " - Número de Articulos; " + $scope.numArticulos + " - Precio por Articulo: " + $scope.precioArticulo);
        $scope.MostrarResultados();
    }
    
    $scope.Limpiar = function () {
        sumatoriaTotal += parseInt($scope.numArticulos) * parseInt($scope.precioArticulo);
        
        if ($scope.descripcion && $scope.numArticulos){
        info.push("Descripción: " + $scope.descripcion + " - Número de Articulos; " + $scope.numArticulos + " - Precio por Articulo: " + $scope.precioArticulo);
        }
        $scope.descripcion = "";
        $scope.numArticulos = "";
        $scope.precioArticulo = "";
        
        $("#txtDescripcion").focus();
    }
    
    $scope.MostrarResultados = function () {
        $.each(info, function()
        {
            $("#tblResultado").append("<tr><td>" + this +  "</td></tr>");
        });
        $("#hresultado").text("Total: " +sumatoriaTotal.toString());
    }
});