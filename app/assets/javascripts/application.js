// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .


$(function() {
	console.log("app.js");
	// when select list changed
	$('#slide-type-select').change(function() {
		slideType = $("#slide-type-select option:selected").val();

		// reset template
		$(".template").addClass("hidden");
		$("#slide_slide_html").value = "";

		// reveal template
		$("#" + slideType + "-template").removeClass("hidden");

		$("#video-template input").keyup(function () {
			updateVideoTemplate();
			console.log($(this).val());
		});
	});
});

function onVideoClick (videoId) {
    var playerHtml = '<iframe class="player" src="//www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&loop=0&theme=light&color=white&iv_load_policy=3" frameborder="0" allowfullscreen=""></iframe>';
    document.getElementById('yt-' + videoId).innerHTML = playerHtml;

    var html = "";
	html =+ '<iframe class="player" src="//www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&loop=0&theme=light&color=white&iv_load_policy=3" frameborder="0" allowfullscreen=""></iframe>';


}

function playVideo (videoId) {
	html = '<iframe class="player" src="//www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&loop=0&theme=light&color=white&iv_load_policy=3" frameborder="0" allowfullscreen=""></iframe>';
	$("#" + videoId).html(html);
}

function updateVideoTemplate () {
	var youtubeURL = $("#video-url").val();

	var videoId = youtubeURL.split('v=')[1];
	var ampersandPosition = videoId.indexOf('&');
	if(ampersandPosition != -1) {
		videoId = videoId.substring(0, ampersandPosition);
	}
	console.log(videoId);

	html = '<div class="slide-type-video"><div id="' + videoId + '"></div><iframe class="player" src="//www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&loop=0&theme=light&color=white&iv_load_policy=3" frameborder="0" allowfullscreen=""></iframe></div>';
	$("#slide_slide_html").val(html);
}


