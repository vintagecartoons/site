var playlist = [
	{ urlpart: 'BettyBoopM.d/BettyBoop-1932-BettyBoopM.d.', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'PopeyeTheSailor-PopeyesPappy/PopeyesPappy1951', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'popeye_patriotic_popeye/popeye_patriotic_popeye', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'FelixTheCatTheater/Felix-theCat-1925Pb-MonkeysWithMagicrelquiaDoCinemaMudo', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'FelixTheCatInComicalamities/FelixTheCat-Comicalamities1928-03-18', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'FelixTheCat-FelixGetsBroadcasted1923/FelixTheCat-1923-FelixGetsBroadcasted', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'Felix_AprilMaze_NoAudio/Felix_AprilMaze_NoAudio', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'Felix_NeptuneNonsense/Felix_NeptuneNonsense', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'Felix_BoldKingCole/Felix_BoldKingCole', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'Felix_TwoLipTime_NoAudio/Felix_TwoLipTime_NoAudio', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'bb_and_grampy/bb_and_grampy', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'SurpriseCartoon/1923.04.01Surprise1923ShortDaveFleischerOutOfTheInkwellFilms', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: '40sSupermanCartoonCopiedInskyCaptainAndTheWorldOfTomorrow/Superman', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'BettyBoopInKittyFromKansasCity/MaxFleischer-1931-BettyBoop-KittyFromKansasCity', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'Popeye_Out_of_the_Punch_1956/Popeye_Out_To_Punch_1956', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'MarysLittleLamb/MarysLittleLamb1936', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'InMyMerr1932/InMyMerr1932', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'MuchAdoAboutMutton/MuchAdoAboutMutton1947', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'HeckleAndJeckleInSteepleJacks/HeckleJeckle-29-SteepleJacks1951', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'BalloonLandrestored/SavedFromTheFlames212-BalloonLandubIwerks1935', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'OswaldTheLuckyRabbitInOhTeacher/Winkler-OswaldTheLuckyRabbit-02-OhTeacher1927disneysoundEffectsAddedIn1932', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'RaggedyAnnAndAndy/cartoonFleischer-RaggedyAnnRaggedyAndy1940', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'TheTantalizingFly/1919-10-04BrayProductions-OutOfTheInkwell-TheTantalizingFly-MaxFleischer', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'OswaldTheLuckyRabbitInAMerryOldSoul/oswald_the_lucky_rabbit_80_merry_old_soul_DVDRip.XviD-moonsong.sharethefiles.com', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'DangerousDanMcfoo/Tex.Avery.01.Dangerous.Dan.McFoo.ENG.-.sub.FR.DVDRip.XviD-Pepsy.tvu.org.ru', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'FlipTheFrog-SodaSquirt1933/FlipTheFrog-SodaSquirt', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'bananarama/Bananarama', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'TheBlackDuck/AFabletoon-TheBlackDuck1922', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'The_Tantalizing_Fly_1919/The_Tantalizing_Fly_1919', watched: false, formats: ['mp4', 'ogv', 'mov'] },
	{ urlpart: 'AJollyGoodFurlough/Cartoons-Popeye-1943-AJollyGoodFurloughwwii-Banned', watched: false, formats: ['mp4', 'ogv', 'mov'] }
];

function allWatched()
{
	var result = true;
	for (var i in playlist) {
		if (playlist[i] && !playlist[i].watched) {
			result = false;
			break;
		}
	}
	return result;
}

function clearWatched()
{
	for (var i in playlist) {
		playlist[i].watched = false;
	}
}

function playNextVideo()
{
	if ($('.videoframe').length <= 0) {
		window.setTimeout(playNextVideo, 200);
		return;
	}

	var currentIndex = Math.round(Math.random()*playlist.length);
	if (allWatched()) {
		console.log("all watched, starting over");
		clearWatched();
	}

	while (!playlist[currentIndex] || playlist[currentIndex].watched) {
		currentIndex = Math.round(Math.random()*playlist.length);
	}

	playVideo(currentIndex);
}

function playVideo(index) {
	var currentVideo = playlist[index];

	$('.videoframe').remove();
	$('#iframecontainer').prepend($('<video class="videoframe" style="width:100%;height:100%;">'));

	for (var i in currentVideo.formats) {
		$('.videoframe').append($('<source src="http://archive.org/download/'+currentVideo.urlpart+'.'+currentVideo.formats[i]+'"\/>'));
	}

	$('.videoframe')[0].play();

	console.log("playing video " + index + " (" + currentVideo.urlpart + ")");

	window.location.hash = '#v' + index;
}

function fbs_click(width, height) {
    var leftPosition, topPosition;
    //Allow for borders.
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    //Allow for title and status bars.
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    u=location.href;
    t=document.title;
    window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer', windowFeatures);
    return false;
}
    
function tws_click(width, height) {
    var leftPosition, topPosition;
    //Allow for borders.
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    //Allow for title and status bars.
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    u=location.href;
    t=document.title;
    window.open('http://twitter.com/home?status=This is unbelieveable: '+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer', windowFeatures);
    return false;
}
    
function gps_click(width, height) {
    var leftPosition, topPosition;
    //Allow for borders.
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    //Allow for title and status bars.
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    u=location.href;
    t=document.title;
    window.open('https://plus.google.com/share?url='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer', windowFeatures);
    return false;
}

$(function() {
	$('#noisecontainer').css('opacity', 0.1);

	window.setInterval(function(){
		$('#noisecontainer').css('margin-left', Math.random()>=0.3?5:5 * Math.random()>=0.5?-1:1);
		//$('#noisecontainer').css('margin-top', Math.random()>=0.3?5:0 * Math.random()>=0.5?-1:1);
		if (Math.random() > 0.5) {
			$('#noisecontainer').toggleClass('flippedX');
		}
		if (Math.random() > 0.5) {
			$('#noisecontainer').toggleClass('flippedY');
		}
	}, 20);

	console.log("start playing");

	if (window.location.hash.length > 0) {
		var videoId = parseInt(window.location.hash.substr(2));
		if (videoId >= 0 && videoId < playlist.length) {
			playVideo(videoId);
		} else {
			playNextVideo();
		}
	} else {
		playNextVideo();
	}

	$('#tv_button_facebook').click(function(e) {
		fbs_click(500, 300);
		e.stopPropagation();
		return false;
	});
	$('#tv_button_twitter').click(function(e) {
		tws_click(500, 300);
		e.stopPropagation();
		return false;
	});
	$('#tv_button_plus').click(function(e) {
		gps_click(500, 300);
		e.stopPropagation();
		return false;
	});
	$('#tv_button_next').click(function(e) {
		$('.videoframe').empty();
		playNextVideo();
		e.stopPropagation();
		return false;
	});

	$('#videoframe').on('ended', function() {
		playNextVideo();
	});
});

$(document).ready(function () {
  function reorient(e) {
    var portrait = (window.orientation % 180 == 0);
    $("body > div").css("-webkit-transform", !portrait ? "rotate(-90deg)" : "");
  }
  window.onorientationchange = reorient;
  window.setTimeout(reorient, 0);
});