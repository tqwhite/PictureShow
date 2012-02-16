steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/init.ejs', function($){

/**
 * @class PictureShow.controls.slideshow
 */
$.Controller('PictureShow.controls.slideshow',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
init : function(){

	this.element.html("//picture_show/controls/slideshow/views/init.ejs",{
		message: "Hello World!"
	});
	
	PictureShow.picture.getList({}, this.callback('catch'));
},

catch:function(inData){
	var html='<p/>'
		fileList=inData.data,
		sliderImages=[],
		size={},
		size.height=0,
		size.width=0,
		count=0;
		
	console.dir(fileList);
	
	for (var i in fileList){
		html+="<img src="+fileList[i].thumbnail.uri+" ><br/>";
		sliderImages.push({src:fileList[i].thumbnail.uri, link:fileList[i].fullsize.uri});
		size.width=Math.max(size.width, fileList[i].thumbnail.size.width);
		size.height=Math.max(size.height, fileList[i].thumbnail.size.height);
		count++;
	//	if (count==3){break;}
	}
//	$('#mainContainer').append(html);

			var slider = new Slider($('#upperLeft'));
	slider	.setSize(size.height, size.width)
			.setTheme('theme-light')
			.setTransition('transition-topfade')
			.setDuration(3000)
			.setPhotos(sliderImages);
A_slider=slider;
	var slider2 = new Slider($('#upperRight'));
	slider2	.setSize(size.height, size.width)
			.setTheme('theme-light')
			.setTransition('transition-left')
			.setPhotos(sliderImages)
			.setDuration(2000)
			.slide(Math.floor(count/2));
			

}
});

$('body').picture_show_controls_slideshow();

});