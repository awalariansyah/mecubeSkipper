console.log('Konichiwa')

var tombolSkip = document.getElementsByClassName("ytp-ad-skip-button");
var unskipIklan = document.getElementsByClassName('ytp-ad-text');
var iklanBanner = document.getElementsByClassName('ytp-ad-overlay-close-button');
var mute = document.getElementsByClassName('ytp-mute-button')[0]

setInterval( function(){
	if (tombolSkip != undefined && tombolSkip.length > 0){

		console.log("Iklan terdeteksi");
		tombolSkip[0].click();

	}else if(unskipIklan != undefined && unskipIklan.length > 0){

		console.log('Unskippable Iklan terdeteksi');
		if(mute.title == 'Mute (m)'){	
			mute.click()
		}

	}else{
		if(mute.title == 'Unmute (m)'){	
			mute.click()
		}

	}

	if (iklanBanner != undefined && iklanBanner.length > 0){
		console.log("Iklan Banner terdeteksi");
		for (var i = 0; i < iklanBanner.length -1; i++) {
			iklanBanner[i].click();
		}
	}
}, 500)
