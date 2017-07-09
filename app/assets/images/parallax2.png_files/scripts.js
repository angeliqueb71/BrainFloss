var container	= document.getElementById('container'),
	main = window.parent.document.getElementById('main'),
    clickContainer,
	overlay,
	subHeadline1,
	subHeadline2,
	subHeadline3,
    ff_disclaimer,
	backgroundIMG,

	Ad = {

		WIDTH  : 300,
		HEIGHT : 250,

		/*
		 * Build a DOM element with specific attributes
		 */
		buildElement : function (data, type, className) {
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
		},

		/*
		 * Initialize intro animation
		 */
		initialize : function(){
			var carImage  	= Ad.buildElement(myFT.instantAds.carIMG, 'img', 'car'),
				headlight 	= Ad.buildElement(myFT.instantAds.headlightIMG, 'img', 'headlight'),
				cta 	  	= Ad.buildElement(myFT.instantAds.cta_txt, 'p', 'cta'),
				carMake   	= Ad.buildElement(myFT.instantAds.carMake_txt, 'p', 'car-make'),
				carModel  	= Ad.buildElement(myFT.instantAds.carModel_txt, 'p', 'car-model'),
				headline1 	= Ad.buildElement(myFT.instantAds.headline1_txt, 'p', 'headline'),
				headline2 	= Ad.buildElement(myFT.instantAds.headline2_txt, 'p', 'headline'),
				headline3   = Ad.buildElement(myFT.instantAds.headline3_txt, 'p', 'headline'),
				headWrapper = Ad.buildElement([headline1, headline2, headline3], 'div', 'headlines'),
				overlayContent = Ad.buildElement(myFT.instantAds.disclaimerTxt_txt, 'p', 'content'),
				closeButton    = Ad.buildElement('', 'span', 'close'),
				overlay 	   = Ad.buildElement([closeButton, overlayContent], 'div', 'overlay');
				clickContainer = Ad.buildElement('', 'div', 'click-container');
				ff_disclaimer  = Ad.buildElement(myFT.instantAds.disclaimerCta_txt, 'p', 'ff-disclaimer');
				backgroundIMG = Ad.buildElement(myFT.instantAds.backgroundIMG, 'img', 'background-img');

			//ff_disclaimer.setAttribute('href', '#');


			if(myFT.instantAds.subHeadline1_txt) {
				subHeadline1 = Ad.buildElement(myFT.instantAds.subHeadline1_txt, 'p', 'sub-headline');
				headline1.appendChild(subHeadline1);
			}
			if(myFT.instantAds.subHeadline2_txt) {
				subHeadline2 = Ad.buildElement(myFT.instantAds.subHeadline2_txt, 'p', 'sub-headline');
				headline2.appendChild(subHeadline2);
			}
			if(myFT.instantAds.subHeadline3_txt) {
				subHeadline3 = Ad.buildElement(myFT.instantAds.subHeadline3_txt, 'p', 'sub-headline');
				headline3.appendChild(subHeadline3);
			}
			if(myFT.instantAds.disclaimerTxt_txt) {
				ff_disclaimer.onclick = function(e) {
					e.preventDefault();
					Ad.overlay('open');
				};

				closeButton.onclick = function(e) {
					e.preventDefault();
					Ad.overlay('close');
				}
			} else {
				myFT.applyClickTag(ff_disclaimer, 2, myFT.instantAds.clickTag2);
			}

			var main = window.parent.document.getElementById('main');
			overlay.style.position = "absolute !important";
			main.appendChild(backgroundIMG);
			main.appendChild(overlay);
			overlay.style.fontFamily ="'Audi Normal', Helvetica, Arial,'Lucida Grande', sans-serif";

			//container.appendChild(logo);
			container.appendChild(headlight);
			container.appendChild(carImage);
			container.appendChild(carMake);
			container.appendChild(carModel);
			container.appendChild(headWrapper);
			container.appendChild(cta);
			container.appendChild(clickContainer);
			container.appendChild(ff_disclaimer);


			TweenLite.set([carMake, carModel], {left: Ad.WIDTH});

			Ad.ready();
		},

		/*
		 * Show ad
		 */
		ready : function() {
			container.classList.remove('hidden');
			myFT.applyClickTag(clickContainer, 1, myFT.instantAds.clickTag1);

			var overlay = window.parent.document.getElementsByClassName('overlay');
			overlay[0].style.position = "absolute !important";

			setTimeout(function() {
				Ad.animate();
			},500);
		},

		/*
		 * Animate elements
		 */
		animate : function() {
			var carMake   = container.querySelector('.car-make'),
				carModel  = container.querySelector('.car-model'),
				carImage  = container.querySelector('.car'),
				headlight = container.querySelector('.headlight'),
				cta 	  = container.querySelector('.cta'),
				headlines = container.querySelector('.headlines');

			TweenLite.lagSmoothing();

			if(!myFT.instantAds.subHeadline1_txt) {
				if(myFT.instantAds.headline1_txt.length <= 10) {
					TweenLite.to(headlines.childNodes[0], .1, {top:"30%"});
				} else if (myFT.instantAds.headline1_txt.length <= 21) {
					TweenLite.to(headlines.childNodes[0], .1, {top:"40%"});
				}
			} else {
				if(myFT.instantAds.headline1_txt.length + myFT.instantAds.subHeadline1_txt.length <= 10) {
					TweenLite.to(headlines.childNodes[0], .1, {top:"30%"});
				} else if (myFT.instantAds.headline1_txt.length + myFT.instantAds.subHeadline1_txt.length<= 21) {
					TweenLite.to(headlines.childNodes[0], .1, {top:"40%"});
				}
			}

			if(!myFT.instantAds.subHeadline2_txt) {
				if(myFT.instantAds.headline2_txt.length <= 10) {
					TweenLite.to(headlines.childNodes[1], .1, {top:"30%"});
				} else if (myFT.instantAds.headline2_txt.length <= 21) {
					TweenLite.to(headlines.childNodes[1], .1, {top:"40%"});
				}
			} else {
				if(myFT.instantAds.headline2_txt.length + myFT.instantAds.subHeadline2_txt.length <= 10) {
					TweenLite.to(headlines.childNodes[1], .1, {top:"30%"});
				} else if (myFT.instantAds.headline2_txt.length + myFT.instantAds.subHeadline2_txt.length <= 21) {
					TweenLite.to(headlines.childNodes[1], .1, {top:"40%"});
				}
			}

			if(!myFT.instantAds.subHeadline3_txt) {
				if(myFT.instantAds.headline3_txt.length <= 10) {
					TweenLite.to(headlines.childNodes[2], .1, {top:"30%"});
				} else if (myFT.instantAds.headline3_txt.length <= 21) {
					TweenLite.to(headlines.childNodes[2], .1, {top:"40%"});
				}
			} else {
				if(myFT.instantAds.headline3_txt.length + myFT.instantAds.subHeadline3_txt.length <= 10) {
					TweenLite.to(headlines.childNodes[2], .1, {top:"30%"});
				} else if (myFT.instantAds.headline3_txt.length + myFT.instantAds.subHeadline3_txt.length <= 21) {
					TweenLite.to(headlines.childNodes[2], .1, {top:"40%"});
				}
			}

			Ad.updateBorderAndBg(1);
			TweenLite.to([carMake, carModel], 1, {left: 14});
			TweenLite.to([carImage, cta], 1, {opacity: 1, delay: 1});

			TweenLite.delayedCall(2, Ad.updateBorderAndBg, [2]);

			if(myFT.instantAds.backgroundIMG) {
				TweenLite.to(backgroundIMG, 1, {opacity:1, delay:2});
			}

			if(myFT.instantAds.subHeadline1_txt) {
				TweenLite.to(headlines.childNodes[0], 1, {opacity: 1, delay: 2});
				TweenLite.to(subHeadline1, 1, {opacity: 1, delay: 3});
				TweenLite.to(ff_disclaimer, 1, {opacity: 1, delay: 2});

            } else {
				TweenLite.to(headlines.childNodes[0], 1, {opacity: 1, delay: 2});
				TweenLite.to(ff_disclaimer, 1, {opacity: 1, delay: 2});

			}

			//Check if there is a third headline first because the animation length depends on if its there or not
			if(myFT.instantAds.headline3_txt) {

				//If there is a third headline, check if there is a sub headline 2
				if(myFT.instantAds.subHeadline2_txt) {

					//If so, run subheadline 2 animation
					TweenLite.delayedCall(4.5, Ad.updateBorderAndBg, [3]);
					TweenLite.to(headlines.childNodes[0], 0.2, {opacity: 0, delay: 4.5});
					TweenLite.to(headlines.childNodes[1], 1, {opacity: 1, delay: 4.5});
					TweenLite.to(subHeadline2, 1, {opacity: 1, delay: 5.5});

					//Check if there is a subheadline 3
					if(myFT.instantAds.subHeadline3_txt) {
						//If so, run subheadline 3 animation
						TweenLite.delayedCall(7, Ad.updateBorderAndBg, [4]);
						TweenLite.to(headlines.childNodes[1], 0.2, {opacity: 0, delay: 7});
						TweenLite.to(headlines.childNodes[2], 1, {opacity: 1, delay: 7});
						TweenLite.to([headlight, subHeadline3], 1, {opacity: 1, delay: 8});
						TweenLite.to(headlight, 0.7, {opacity: 0.8, delay: 10});
						TweenLite.delayedCall(11, Ad.showEndFrame);
					} else {
						//If not, run just headline 3 animation
						TweenLite.delayedCall(7, Ad.updateBorderAndBg, [4]);
						TweenLite.to(headlines.childNodes[1], 0.2, {opacity: 0, delay: 7});
						TweenLite.to([headlight, headlines.childNodes[2]], 1, {opacity: 1, delay: 7});
						TweenLite.to(headlight, 0.7, {opacity: 0.8, delay: 9});
						TweenLite.delayedCall(10, Ad.showEndFrame);
					}

					//If there isnt a sub headline 2, run this
				} else {
					TweenLite.delayedCall(4.5, Ad.updateBorderAndBg, [3]);
					TweenLite.to(headlines.childNodes[0], 0.2, {opacity: 0, delay: 4.5});
					TweenLite.to(headlines.childNodes[1], 1, {opacity: 1, delay: 4.5});

					//Check if there is a subheadline 3
					if(myFT.instantAds.subHeadline3_txt) {
						TweenLite.delayedCall(7, Ad.updateBorderAndBg, [4]);
						TweenLite.to(headlines.childNodes[1], 0.2, {opacity: 0, delay: 7});
						TweenLite.to(headlines.childNodes[2], 1, {opacity: 1, delay: 7});
						TweenLite.to([headlight, subHeadline3], 1, {opacity: 1, delay: 8});
						TweenLite.to(headlight, 0.7, {opacity: 0.8, delay: 10});
						TweenLite.delayedCall(11, Ad.showEndFrame);
					} else {
						//If not, run just headline 3 animation
						TweenLite.delayedCall(7, Ad.updateBorderAndBg, [4]);
						TweenLite.to(headlines.childNodes[1], 0.2, {opacity: 0, delay: 7});
						TweenLite.to([headlight, headlines.childNodes[2]], 1, {opacity: 1, delay: 7});
						TweenLite.to(headlight, 0.7, {opacity: 0.8, delay: 9});
						TweenLite.delayedCall(10, Ad.showEndFrame);
					}
				}

			//If there isnt a headline 3 run this
			} else {

				if(myFT.instantAds.subHeadline2_txt) {
					TweenLite.delayedCall(4.5, Ad.updateBorderAndBg, [3]);
					TweenLite.to(headlines.childNodes[0], 0.2, {opacity: 0, delay: 4.5});
					TweenLite.to(headlines.childNodes[1], 1, {opacity: 1, delay: 4.5});
					TweenLite.to([headlight, subHeadline2], 1, {opacity: 1, delay: 5.5});
					TweenLite.to(headlight, 0.7, {opacity: 0.8, delay: 7.5});
					TweenLite.delayedCall(8, Ad.showEndFrame);
				} else {
					TweenLite.delayedCall(4.5, Ad.updateBorderAndBg, [3]);
					TweenLite.to(headlines.childNodes[0], 0.2, {opacity: 0, delay: 4.5});
					TweenLite.to([headlight, headlines.childNodes[1]], 1, {opacity: 1, delay: 4.5});
					TweenLite.to(headlight, 0.7, {opacity: 0.8, delay: 6.5});
					TweenLite.delayedCall(7, Ad.showEndFrame);
				}
			}
		},
		/*
		 * Toggle overlay disclaimer
		 */
		overlay : function(state) {
			console.log('clicked');
			overlay = main.querySelector('.overlay');
			(state === 'open') ? overlay.classList.add('open') : overlay.classList.remove('open');
		},
		/*
		 * Show final frame
		 */
		showEndFrame : function() {
			TweenLite.to(backgroundIMG, 0.2, {opacity: 0});			
			window.parent.runLastFrame();
		},

		/*
		 * Update border and background colors
		 */
		updateBorderAndBg : function(frame) {
			main.style.border = '1px solid '+ myFT.instantAds.borderHex_F1_F2_F3_F4_F5.split(',')[frame-1];
			main.style.backgroundColor = myFT.instantAds.bkgdHex_F1_F2_F3_F4_F5.split(',')[frame-1];
		}

	};