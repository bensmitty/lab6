/**
 * Created by Vico on 11/4/2015.
 */
function Products($scope, $http) {
    $http.get('http://127.0.0.1:8080/api/products').success(function (data) {
        if (data) {
            //Ben 11/18/15
            // getProducts query updated to include rating
            // Loop checks each item to see if no rating exists
            data.items.forEach(function (item) {
                if (item.rating == null)
                {
                    item.rating = "Not yet rated";
                }
                //item.rating = 3;  //Hard coding the rating in this model.  Will fetch rating from service later
            });

            $scope.items = data.items;
            $scope.status = data.status;
        }
        else {
            $scope.status = "Something bad happened.";
        }
    });

}
function HeartBeat($scope, $http) {
    $http.get('http://127.0.0.1:8080/api').success(function (data) {
        if (data) {
            $scope.status = data.message;
        }
        else {
            $scope.status = "Something bad happened.";
        }
    });

}