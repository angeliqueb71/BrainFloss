
var loadedRichloads = 0;
var successLoad = false;
var logo;
var main = document.getElementById('main');

function runAnimationFrame() {
  loadedRichloads === 3 ? myFT.richLoads.animation_RL.frame.contentWindow.Background.initialize() : setTimeout(runAnimationFrame, 1000);
}

function runLastFrame() { 
  loadedRichloads === 3 ? myFT.richLoads.endFrame_RL.frame.contentWindow.End.initialize() : setTimeout(runLastFrame, 1000);
}

myFT.on('richload', function(){ 
	loadedRichloads++;
	if(loadedRichloads === 3){
		addDynamicFont('auditype-bold', 'Audi Bold');
		addDynamicFont('auditype-extendedbold', 'Audi Extended Bold');
		addDynamicFont('auditype-normal', 'Audi Normal');
		addDynamicFont('AudiType-ExtendedNormal', 'Audi Normal Extended');
        logo = buildElement(myFT.instantAds.logoIMG, 'img', 'logo');
        main.appendChild(logo);
        main.style.border = '1px solid '+ myFT.instantAds.borderHex_F1_F2_F3_F4_F5.split(',')[0];

    }
});

function initiliazeAd() {
    setTimeout(function() {
        logo.addEventListener('onload', myFT.richLoads.main_RL.frame.contentWindow.Ad.initialize());
        main.classList.remove('hidden');
        console.log('succes = true');
    }, 500);
}
/*
 * Build a DOM element with specific attributes
 */
function buildElement(data, type, className) {
	var element = document.createElement(type);

	element.classList.add(className);
	if(Array.isArray(data)){
		for(a in data){
			element.appendChild(data[a]);
		}
	} else {
		(type === 'img') ? element.src = data : element.innerHTML = data;
	}

	return element;
}
/*
 *  Adds dynamic font and sets it as main
 *  font to be used in ad
 */
function addDynamicFont(fileName, fontName) {
	var dynamicStyle  = document.createElement("style"),
		dynamicStyle2 = document.createElement("style"),
		request 	  = new XMLHttpRequest();

	// send ajax request to see if font file exists
	request.onreadystatechange = function() {
		// if file exists, use filereader to display font.  if fails, default to arial
		if(request.readyState === 4 && request.status === 200){
			success(request);
		}
	};
	request.open("GET","fonts/"+ fileName +".woff");
	request.responseType = 'blob';
	request.send();

	// custom font file found
	function success(req) {
        var reader  = new FileReader();

        reader.onloadend = function () {
			dynamicStyle.setAttribute("type", "text/css");
	        dynamicStyle.innerHTML = "@font-face{ font-family:'"+ fontName +"'; font-style:normal; src: url('"+ reader.result +"') format('woff');}\n";
        	
			dynamicStyle2.setAttribute("type", "text/css");
	        dynamicStyle2.innerHTML = "@font-face{ font-family:'"+ fontName +"'; font-style:normal; src: url('"+ reader.result +"') format('woff');}\n";
        };
        reader.readAsDataURL(req.response);
		myFT.richLoads.main_RL.frame.contentDocument.getElementsByTagName("head")[0].appendChild(dynamicStyle);
		myFT.richLoads.endFrame_RL.frame.contentDocument.getElementsByTagName("head")[0].appendChild(dynamicStyle2);
        successLoad = true;
	}
}

var interval = setInterval(function(){
    if(successLoad == true) {
        clearInterval(interval);
        initiliazeAd();
    }
},100);