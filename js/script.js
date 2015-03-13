var foundationApp = angular.module('foundationApp', []);

foundationApp.run(function($rootScope) {
    $rootScope.$on('$viewContentLoaded', function () {
        $(document).foundation();
    });
});


$(document).ready(function() {
    $('#fullpage').fullpage(
    {
    	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    	menu:'#myMenu',
    	recordHistory:false,
    	sectionsColor: ['#2980b9', '#2ecc71', '#ecf0f1', '#9b59b6', '#34495e']
    });
  });

$(document).ready(function(){
    $('#show').live('click', function(event) {        
         $('#content').toggle('show');
    });
});

$(function(){
	var cw = $('.hero').width();
	if(cw<1000)
{
$('.hero').css({'margin-bottom':-cw/5+'px'});
$('.hero-inner').css({'margin-bottom':-cw/5+'px'});
}
});
