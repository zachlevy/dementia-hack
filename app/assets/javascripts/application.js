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
	renderCountdown();

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
		$("#reminder-template input").keyup(function () {
			updateReminderTemplate();
			console.log($(this).val());
		});
		$("#reminder-template input").on('input', function () {
			updateReminderTemplate();
			console.log($(this).val());
		});
		$("#howto-template input").keyup(function () {
			updateHowtoTemplate();
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

// use later to play the video when the slide becomes active
function playVideo (videoId) {
	html = '<iframe class="player" src="//www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&loop=0&theme=light&color=white&iv_load_policy=3" frameborder="0" allowfullscreen=""></iframe>';
	$("#" + videoId).html(html);
}

// update the howto template on the new slide page
function updateHowtoTemplate () {
	var howtoListA = $("#howto-list-a").val();
	var howtoListB = $("#howto-list-b").val();
	var howtoListC = $("#howto-list-c").val();
	var howtoHeader = $("#howto-header").val();
	html = '<div class="slide-type-howto"><div class="col-xs-12 col-sm-4"><img src="http://placehold.it/300x300" class="img-responsive" /></div><div class="col-xs-12 col-sm-8"><h1>' + howtoHeader + '</h1><ul class=""><li>' + howtoListA + '</li><li>' + howtoListB + '</li><li>' + howtoListC + '</li></ul></div></div>';
	$("#slide_slide_html").val(html);
}

// update the video template on the new slide page
function updateVideoTemplate () {
	var youtubeURL = $("#video-url").val();
	var videoId = youtubeURL.split('v=')[1];
	var ampersandPosition = videoId.indexOf('&');
	if(ampersandPosition != -1) {
		videoId = videoId.substring(0, ampersandPosition);
	}
	html = '<div class="slide-type-video"><div id="' + videoId + '"></div><iframe class="player" src="//www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&loop=0&theme=light&color=white&iv_load_policy=3" frameborder="0" allowfullscreen=""></iframe></div>';
	$("#slide_slide_html").val(html);
}

// update the video template on the new slide page
function updateReminderTemplate () {
	var reminderText = $("#reminder-text").val();
	var reminderTime = $("#reminder-time").val();
	html = '<div class="slide-type-reminder"><div class="reminder-text"><h1>' + reminderText + '</h1></div><div class="reminder-countdown"><ul class="countdown"><li> <span class="days">00</span><p class="days_ref">days</p></li><li class="seperator">.</li><li> <span class="hours">00</span><p class="hours_ref">hours</p></li><li class="seperator">:</li><li> <span class="minutes">00</span><p class="minutes_ref">minutes</p></li><li class="seperator">:</li><li> <span class="seconds">00</span><p class="seconds_ref">seconds</p></li></ul></div><div class="reminder-time">' + reminderTime + '</div></div>';
	$("#slide_slide_html").val(html);
}

function renderCountdown () {
	$(".reminder-time").each(function () {
		var reminderTime = $(this).html();
		var today = new Date();
		var lameDate = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
		var todayReminder = new Date(lameDate + " " + reminderTime);
		var countdown = Math.abs((new Date()).getTime() - todayReminder.getTime());
		var minutes = Math.round((countdown / 1000) / 60);
		var timeText = "";
		if (minutes > 60) {
			var hours = Math.round(minutes / 60);
			var hourMinutes = minutes % 60;
			timeText = hours + " hours, " + hourMinutes + " minutes";
		} else {
			timeText = minutes + " minutes";
		}

		$(this).siblings(".reminder-countdown").html("<h4>" + timeText + "</h4>");
		//$(this).siblings(".reminder-countdown");


	});
}