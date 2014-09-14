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
		//speak();
	});

	nextSlide();

});

// speak text in the speak-this class
function speak (text) {
	//var text = $(".speak-this").html();
	console.log("text: " + text);
	var msg = new SpeechSynthesisUtterance(text);
	window.setTimeout(function () {
		window.speechSynthesis.speak(msg);
	}, 1000);
}

// rotate based on db values
function nextSlide () {
	window.setTimeout(function () {
		var slide = $("#carousel-example-generic .item.active");
		var timer = slide.attr("data-timer");
		var videoId = slide.find(".slide-type-video").find("div").attr("id");
		var speachText = slide.find(".speak-this").html();
		if (speachText) {
			speak(speachText);
		}
		console.log("speachText " + speachText);
		if (videoId) {
			console.log("this slide is a video");
			playVideo(videoId);
		} else {
			//console.log("this slide is not a video");
		}
		window.setTimeout(function () {
			$("#carousel-example-generic").carousel('next');
			if (videoId) {
				$("#" + videoId).html("");
			}
			nextSlide();
		}, timer);
	}, 1000);
}

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
	var howtoImage = $("#howto-img").val();
	html = '<div class="slide-type-howto"><div class="col-xs-12 col-sm-3 col-sm-offset-2"><img src="http://placehold.it/300x300" class="img-responsive img-circle howto-image" /></div><div class="col-xs-12 col-sm-5"><h1 class="speak-this howto-header">' + howtoHeader + '</h1><ul class="howto-list"><li class="speak-this hidden">... First you need to ' + howtoListA + '</li><li><span>1</span> ' + howtoListA + '</li><li class="speak-this hidden">... Then you need to ' + howtoListB + '</li><li><span>2</span> ' + howtoListB + '</li><li class="speak-this hidden"> ...Finally you need to ' + howtoListC + '</li><li><span>3</span> ' + howtoListC + '</li></ul></div></div>';
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
	html = '<div class="slide-type-video"><div id="' + videoId + '"></div></div>';
	$("#slide_slide_html").val(html);
}

// update the video template on the new slide page
function updateReminderTemplate () {
	var reminderText = $("#reminder-text").val();
	var reminderTime = $("#reminder-time").val();
	var reminderImg = $("#reminder-img").val();
	html = '<div class="slide-type-reminder"><div class="reminder-image-wrap"><img src="' + reminderImg + '" class="img-responsive img-circle reminder-image" /></div><div class="reminder-text"><h1 class="speak-this">' + reminderText + '</h1></div><div class="reminder-countdown"></div><div class="reminder-time hidden">' + reminderTime + '</div><div class="reminder-time-wrap">Reminder for <span class="reminder-time-visible">' + reminderTime + '</span></div></div>';
	$("#slide_slide_html").val(html);
}

function renderCountdown () {
	$(".reminder-time").each(function () {
		var reminderTime = $(this).html();
		var today = new Date();
		var lameDate = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
		var todayReminder = new Date(lameDate + " " + reminderTime);
		var countdown = Math.abs((new Date()).getTime() - todayReminder.getTime());
		console.log("countdown " + countdown);
		var minutes = Math.round((countdown / 1000) / 60);
		console.log("minutes " + minutes);
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