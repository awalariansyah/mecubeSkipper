console.log('Konichiwa')

var tombolSkip = document.getElementsByClassName("ytp-ad-skip-button");
var unskipIklan = document.getElementsByClassName('ytp-ad-text');
var iklanBanner = document.getElementsByClassName('ytp-ad-overlay-close-button');
var mute = document.getElementsByClassName('ytp-mute-button')
var menonton = document.getElementsByClassName('yt-simple-endpoint style-scope yt-button-renderer')

setInterval( function(){
	if (tombolSkip != undefined && tombolSkip.length > 0){

		console.log("Iklan terdeteksi");
		tombolSkip[0].click();

	}else if(unskipIklan != undefined && unskipIklan.length > 0 && mute.length > 0){

		console.log('Unskippable Iklan terdeteksi');
		if(mute[0].title == 'Mute (m)'){	
			mute[0].click()
		}

	}else{
		if(mute != undefined && mute.length > 0){ 
			if(mute[0].title == 'Unmute (m)'){	
				mute[0].click()
			}
		}
	}

	if(menonton != undefined && menonton.length > 0){
		menonton[1].click()
	}

	if (iklanBanner != undefined && iklanBanner.length > 0){
		console.log("Iklan Banner terdeteksi");
		for (var i = 0; i < iklanBanner.length -1; i++) {
			iklanBanner[i].click();
		}
	}
}, 200)
