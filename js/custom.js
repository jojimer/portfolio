$(document).on('click','span.close-icon',function(){
	let websiteName = $(this).data('website')
	$('section.recent-project-lightbox-area div.row#'+websiteName).addClass('d-none')
	$('section.recent-project-lightbox-area').fadeOut(300)

})

$(document).on('click','div.website-info-box',function(){
	let websiteName = $(this).data('website')
	$('section.recent-project-lightbox-area span.close-icon').data('website',websiteName)
	$('section.recent-project-lightbox-area div.row').addClass('d-none')
	$('section.recent-project-lightbox-area div.row#'+websiteName).removeClass('d-none')
	$('section.recent-project-lightbox-area').css('display','block')
	//console.log(websiteName, $(this))
})