var main = window.parent.document.getElementById('main'),
    container = document.getElementById('container'),
	headlightImg,
    overlay,
	End = {

		WIDTH  : 300,
		HEIGHT : 250,

		/*
		 * Build the overlay container for the legal disclaimer
		 */
		addOverlay : function () {
            overlay = main.querySelector('.overlay');
            var overlayContent = overlay.querySelector('.content');
			var closeButton = overlay.querySelector('.close');

			if(overlay.classList.contains('open')) {
				closeButton.onclick = function(e) {
					e.preventDefault();
					overlay.classList.remove('open');
					overlayContent.innerHTML = myFT.instantAds.EF_disclaimerTxt_txt;
				}
			} else {
				overlayContent.innerHTML = myFT.instantAds.EF_disclaimerTxt_txt;
				closeButton.onclick = function(e) {
					e.preventDefault();
					End.overlay('close');
				}
			}
		},

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
		 * Determine which layout mode to build for
		 */
		determineLayout : function(layout) {
			switch(layout){
				default:
				case 'generic': End.Layout.generic(); break;
				case 'lease'  : End.Layout.lease();   break;
				case 'bonus'  : End.Layout.bonus();   break;
				case 'apr'    : End.Layout.apr();     break;
			}
		},


		/*
		 * Begin the process of building the end frame
		 */
		initialize : function(){
			var mainContainer = window.parent.document.getElementById('main');
            var clickContainer = End.buildElement('', 'div', 'click-container');

            mainContainer.style.border = '1px solid '+ myFT.instantAds.borderHex_F1_F2_F3_F4_F5.split(',')[4];
			mainContainer.style.backgroundColor = myFT.instantAds.bkgdHex_F1_F2_F3_F4_F5.split(',')[4];
			container.classList.add(myFT.instantAds.EF_layout_txt);
            container.appendChild(clickContainer);
            End.determineLayout(myFT.instantAds.EF_layout_txt);

			var regex1 = new RegExp(/audi/g);
			var regex2 = new RegExp(/generic/g);
			if(regex1.exec(myFT.instantAds.EF_backgroundIMG)) {
				console.log('audi found');
				headlightImg = End.buildElement(myFT.instantAds.headlightIMG, 'img', 'headlight');
				headlightImg.style.opacity = "0.8";
				container.appendChild(headlightImg);
			}
			if(regex2.exec(myFT.instantAds.EF_backgroundIMG)) {
				console.log('generic found');
				headlightImg = End.buildElement(myFT.instantAds.headlightIMG, 'img', 'headlight');
				headlightImg.style.opacity = "0.8";
				container.appendChild(headlightImg);
			}
        },


		/*
		 * Layouts pre-defined by creative direction, can accept new templates and variables
		 */
		Layout : {

			apr : function() {
				var cta 		 = End.buildElement(myFT.instantAds.cta_txt, 'p', 'cta'),
					carMake      = End.buildElement(myFT.instantAds.carMake_txt, 'p', 'car-make'),
					carModel     = End.buildElement(myFT.instantAds.carModel_txt, 'p', 'car-model'),
					carYear      = End.buildElement(myFT.instantAds.EF_car_year_txt, 'span', 'car-year'),
					carDetails   = End.buildElement([carYear, carMake], 'div', 'car-details'),
					divider		 = End.buildElement('', 'span', 'divider'),
					aprOffer     = End.buildElement(myFT.instantAds.EF_offerAPR_txt, 'p', 'apr-offer'),
					legalCopy    = End.buildElement(myFT.instantAds.EF_legal_txt + ' ', 'p', 'legal'),
					legalButton  = End.buildElement(myFT.instantAds.EF_disclaimerCta_txt, 'a', 'legal-link'),
					promoImage   = End.buildElement(myFT.instantAds.promoLogoIMG, 'img', 'promo-image'),
					//logo 		 = End.buildElement(myFT.instantAds.logoIMG, 'img', 'logo'),
					carInfoDiv   = End.buildElement([carDetails, carModel], 'div', 'car-information'),
					offerWrapper = End.buildElement([carInfoDiv, divider, aprOffer], 'div', 'offer-block'),
					legalOverlay = (myFT.instantAds.EF_disclaimerTxt_txt != '') ? true : false;

				offerWrapper.style.left = Number(Number(myFT.instantAds.EF_car_YearModelDetails_XY.split(',')[0]) + 14 ) + 'px';
				offerWrapper.style.top  = Number(Number(myFT.instantAds.EF_car_YearModelDetails_XY.split(',')[1]) + 100) + 'px';

				cta.style.left = Number(Number(myFT.instantAds.EF_cta_XY.split(',')[0]) + 14 ) + 'px';
				cta.style.top  = Number(Number(myFT.instantAds.EF_cta_XY.split(',')[1]) + 218) + 'px';

				legalButton.href = "#";
				legalButton.onclick = function(e) {
					e.preventDefault();
				}
				legalCopy.appendChild(legalButton);
				if(legalOverlay){
					End.addOverlay();
					legalButton.onclick = function(e) {
						e.preventDefault();
						End.overlay('open');
					}
				} else {
					myFT.applyClickTag(legalButton, 2, myFT.instantAds.clickTag2);
				}

				container.style.backgroundImage = 'url('+ myFT.instantAds.EF_backgroundIMG +')';

				container.appendChild(offerWrapper);
				container.appendChild(legalCopy);
				container.appendChild(promoImage);
				//container.appendChild(logo);
				container.appendChild(cta);

				End.ready();
			},

			bonus : function() {
				var dollarSign 	 = End.buildElement('$', 'span', 'dollar-sign'),
					carModel     = End.buildElement(myFT.instantAds.carModel_txt, 'p', 'car-model'),
					cta 		 = End.buildElement(myFT.instantAds.cta_txt, 'p', 'cta'),
					legalCopy    = End.buildElement(myFT.instantAds.EF_legal_txt + ' ', 'p', 'legal'),
					legalButton  = End.buildElement(myFT.instantAds.EF_disclaimerCta_txt, 'a', 'legal-link'),
					offerHead    = End.buildElement(myFT.instantAds.EF_offerBonus_txt, 'p', 'offer-head'),
					offerSubHead = End.buildElement(myFT.instantAds.EF_offerBonusSubText_txt, 'p', 'offer-subhead'),
					offerWrapper = End.buildElement([dollarSign, offerHead], 'div', 'offer-wrapper'),
					promoImage   = End.buildElement(myFT.instantAds.promoLogoIMG, 'img', 'promo-image'),
					carDetails   = End.buildElement(myFT.instantAds.EF_car_details_txt, 'p', 'car-details'),
					carInfoDiv   = End.buildElement([carModel, carDetails], 'div', 'car-information'),
					legalOverlay = (myFT.instantAds.EF_disclaimerTxt_txt != '') ? true : false;

				carInfoDiv.style.left = Number(Number(myFT.instantAds.EF_car_YearModelDetails_XY.split(',')[0]) + 14 ) + 'px';
				carInfoDiv.style.top  = Number(Number(myFT.instantAds.EF_car_YearModelDetails_XY.split(',')[1]) + 47) + 'px';

				dollarSign.style.color = myFT.instantAds.EF_dollarSign_hex;

				cta.style.left = Number(Number(myFT.instantAds.EF_cta_XY.split(',')[0]) + 14 ) + 'px';
				cta.style.top  = Number(Number(myFT.instantAds.EF_cta_XY.split(',')[1]) + 218) + 'px';

				legalButton.href = "#";
				legalButton.onclick = function(e) {
					e.preventDefault();
				}
				legalCopy.appendChild(legalButton);
				if(legalOverlay){
					End.addOverlay();
					legalButton.onclick = function(e) {
						e.preventDefault();
						End.overlay('open');
					}
				} else {
					myFT.applyClickTag(legalButton, 2, myFT.instantAds.clickTag2);
				}

				container.style.backgroundImage = 'url('+ myFT.instantAds.EF_backgroundIMG +')';

				container.appendChild(carInfoDiv);
				container.appendChild(offerWrapper);
				container.appendChild(offerSubHead);
				container.appendChild(legalCopy);
				container.appendChild(promoImage);
				//container.appendChild(logo);
				container.appendChild(cta);

				End.ready();
			},

			generic : function() {
				var cta 		 = End.buildElement(myFT.instantAds.cta_txt, 'p', 'cta'),
					promoImage   = End.buildElement(myFT.instantAds.promoLogoIMG, 'img', 'promo-image');

				cta.style.left = Number(Number(myFT.instantAds.EF_cta_XY.split(',')[0]) + 14 ) + 'px';
				cta.style.top  = Number(Number(myFT.instantAds.EF_cta_XY.split(',')[1]) + 207) + 'px';

				container.appendChild(promoImage);
				container.appendChild(cta);

                if(myFT.instantAds.EF_generic_carMake_txt) container.appendChild(End.buildElement(myFT.instantAds.EF_generic_carMake_txt, 'p', 'car-make'));
                if(myFT.instantAds.EF_generic_carModel_txt) container.appendChild(End.buildElement(myFT.instantAds.EF_generic_carModel_txt, 'p', 'car-model'));

                if(myFT.instantAds.EF_car_details_txt){
                    var carModel     = End.buildElement(myFT.instantAds.carModel_txt, 'p', 'car-model'),
                        carDetails   = End.buildElement(myFT.instantAds.EF_car_details_txt, 'p', 'car-details'),
                        carInfoDiv   = End.buildElement([carModel, carDetails], 'div', 'car-information');
                    carInfoDiv.style.left = Number(Number(myFT.instantAds.EF_car_YearModelDetails_XY.split(',')[0]) + 14) + 'px';
                    carInfoDiv.style.top  = Number(Number(myFT.instantAds.EF_car_YearModelDetails_XY.split(',')[1]) + 53) + 'px';
                    container.appendChild(carInfoDiv);
                }

                if(myFT.instantAds.EF_backgroundIMG) {
                    var efBgImg = new Image();
                    efBgImg.src = myFT.instantAds.EF_backgroundIMG;
                    efBgImg.style.position = 'absolute';
                    container.appendChild(efBgImg);
                    efBgImg.onload = function() {
						End.ready();
					}
                } else {
                    End.ready();
                }
			},

			lease : function() {
				var dollarSign 	 = End.buildElement('$', 'span', 'dollar-sign'),
					dollarSign1  = End.buildElement('$', 'span', 'dollar-sign'),
					priceCopy    = End.buildElement('per month', 'span', 'static-copy'),
					monthsCopy   = End.buildElement('mo. lease', 'span', 'static-copy'),
					dueCopy      = End.buildElement('due at signing', 'span', 'static-copy'),
					cta 		 = End.buildElement(myFT.instantAds.cta_txt, 'p', 'cta'),
					carModel     = End.buildElement(myFT.instantAds.carModel_txt, 'p', 'car-model'),
					carDetails   = End.buildElement(myFT.instantAds.EF_car_details_txt, 'p', 'car-details'),
					leasePrice   = End.buildElement(myFT.instantAds.EF_leasePrice_txt, 'p', 'price'),
					leaseMonths  = End.buildElement(myFT.instantAds.EF_leaseMonths_txt, 'p', 'months'),
					leaseDue     = End.buildElement(myFT.instantAds.EF_leaseDue_txt, 'p', 'due'),
					legalCopy    = End.buildElement(myFT.instantAds.EF_legal_txt + ' ', 'p', 'legal'),
					legalButton  = End.buildElement(myFT.instantAds.EF_disclaimerCta_txt, 'a', 'legal-link'),
					promoImage   = End.buildElement(myFT.instantAds.promoLogoIMG, 'img', 'promo-image'),
					//logo 		 = End.buildElement(myFT.instantAds.logoIMG, 'img', 'logo'),
					carInfoDiv   = End.buildElement([carModel, carDetails], 'div', 'car-information'),
					priceWrap    = End.buildElement([dollarSign, leasePrice, priceCopy], 'div', 'lease-price'),
					monthsWrap   = End.buildElement([leaseMonths, monthsCopy], 'div', 'lease-months'),
					dueWrap	     = End.buildElement([dollarSign1, leaseDue, dueCopy], 'div', 'lease-due'),
					leaseBlock   = End.buildElement([priceWrap, monthsWrap, dueWrap], 'div', 'lease-block'),
					legalOverlay = (myFT.instantAds.EF_disclaimerTxt_txt != '') ? true : false,
					leasePlus    = (myFT.instantAds.EF_leasePlusText_txt != '') ? true : false;

				carInfoDiv.style.left = Number(Number(myFT.instantAds.EF_car_YearModelDetails_XY.split(',')[0]) + 14) + 'px';
				carInfoDiv.style.top  = Number(Number(myFT.instantAds.EF_car_YearModelDetails_XY.split(',')[1]) + 42) + 'px';

				dollarSign.style.color  = myFT.instantAds.EF_dollarSign_hex;
				dollarSign1.style.color = myFT.instantAds.EF_dollarSign_hex;

				priceCopy.style.color   = myFT.instantAds.EF_leaseSubText_hex;
				monthsCopy.style.color  = myFT.instantAds.EF_leaseSubText_hex;
				dueCopy.style.color     = myFT.instantAds.EF_leaseSubText_hex;

				priceWrap.style.borderRight  = '1px solid ' + myFT.instantAds.EF_leaseBlockLinesHex;
				monthsWrap.style.borderRight = '1px solid ' + myFT.instantAds.EF_leaseBlockLinesHex;


				legalButton.href = "#";
				legalButton.onclick = function(e) {
					e.preventDefault();
				}
				legalCopy.appendChild(legalButton);
				if(legalOverlay){
					End.addOverlay();
					legalButton.onclick = function(e) {
						e.preventDefault();
						End.overlay('open');
					}
				} else {
					myFT.applyClickTag(legalButton, 2, myFT.instantAds.clickTag2);
				}

				container.style.backgroundImage = 'url('+ myFT.instantAds.EF_backgroundIMG +')';

				container.appendChild(carInfoDiv);
				container.appendChild(leaseBlock);
				container.appendChild(legalCopy);
				if(leasePlus){
					legalCopy.style.top = "175px";
					legalCopy.insertBefore(End.buildElement(myFT.instantAds.EF_leasePlusText_txt, 'p', 'lease-plus'), legalCopy.childNodes[0]);
					leaseBlock.style.left = Number(Number(myFT.instantAds.EF_leaseBlock_XY.split(',')[0]) + 19 ) + 'px';
					leaseBlock.style.top  = Number(Number(myFT.instantAds.EF_leaseBlock_XY.split(',')[1]) + 113) + 'px';
					cta.style.left = Number(Number(myFT.instantAds.EF_cta_XY.split(',')[0]) + 14) + 'px';
					cta.style.top  = Number(Number(myFT.instantAds.EF_cta_XY.split(',')[1]) + 88) + 'px';
				} else {
					leaseBlock.style.left = Number(Number(myFT.instantAds.EF_leaseBlock_XY.split(',')[0]) + 19 ) + 'px';
					leaseBlock.style.top  = Number(Number(myFT.instantAds.EF_leaseBlock_XY.split(',')[1]) + 128) + 'px';
					cta.style.left = Number(Number(myFT.instantAds.EF_cta_XY.split(',')[0]) + 14) + 'px';
					cta.style.top  = Number(Number(myFT.instantAds.EF_cta_XY.split(',')[1]) + 95) + 'px';
				}
				container.appendChild(promoImage);
				//container.appendChild(logo);
				container.appendChild(cta);

				End.ready();
			}

		},

		/*
		 * Toggle overlay disclaimer
		 */
		overlay : function(state) {
            console.log('clicked');
			(state === 'open') ? overlay.classList.add('open') : overlay.classList.remove('open');
		},


		/*
		 * Show the end frame
		 */
		ready : function () {
			myFT.applyClickTag(document.querySelector('.click-container'), 1, myFT.instantAds.clickTag1);
			myFT.richLoads.endFrame_RL.frame.classList.remove('hidden');

			if(myFT.instantAds.EF_generic_carMake_txt
				&& myFT.instantAds.EF_generic_carModel_txt
				&& myFT.instantAds.EF_backgroundIMG == "audi_a3.png"
				&& myFT.instantAds.EF_layout_txt == "generic") {
                setTimeout(function() {
                    myFT.richLoads.main_RL.frame.classList.add('hidden');
                }, 500);
            } else {
				setTimeout(function() {
					myFT.richLoads.main_RL.frame.classList.add('hidden');
					console.log('main faded');
				}, 100);
            }

			//myFT.richLoads.animation_RL.frame.classList.add('hidden');

			setTimeout(function(){
				myFT.richLoads.main_RL.frame.style.display = 'none';
				//myFT.richLoads.animation_RL.frame.style.display = 'none';
			}, 1000);
		}

	};



