$(function(){
	var num=0;
	var $Img=$('img');

	$('input').on('click',function(){
		num++;
		if(num>3){
			num =1;
		}
		
		$Img.attr('src','imgs/'+num+'.png');

		
	});

});

	