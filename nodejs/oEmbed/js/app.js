angular.module('test_oembed', [])

	.controller('test_cpntroller', function($scope,$http, $sce) {
		$scope.url_box = 'https://youtu.be/7LW740IQzEo?list=PLK8eN4nGwlAFT7DvA-hoJtCtMZMJBUzUK';
	
		$scope.getInfo = function(){
			//var url_box = $scope.url_box;
			var request = $http({
				method: 'post',
				url: '/get_info',
				data: {data: $scope.url_box},
				headers: {'Content-Type': 'application/json'}
			});
			
			request
				.success(function(resp){
					if(resp.error) {
						$scope.response_data = $sce.trustAsHtml(resp.link);
					} else {	
						$scope.response_data = $sce.trustAsHtml("<h3>"+resp.title+"</h3>\n" + resp.html);
					}
				})
				.error(function(data, status, headers, config){
					$scope.response_data = $sce.trustAsHtml(data.link);
				});
		}
	});

