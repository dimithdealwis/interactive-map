	
/* 
 * Interactive Map JS | D de Alwis | Dec 2015 *
 * Build svg map markers using Raphael JS 
 * and handle interactions 
 */

var Map = (function() {	
	/*
	 * GLOBALS
	 */

	var $map = $('#map');

	var fancybox_options = {
		maxWidth	: 480,
		maxHeight	: 600,
		fitToView	: true,
		width		: '100%',
		height		: '70%',
		autoSize	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		padding		: 0,
		margin 		: 0
	}

	/*
	 * APP FUNCTIONS
	 */

	function init() {

		var rsr = Raphael('map', '600', '877.457');

		var regions = [];


		//1 CROSSRAIL (8)
		var crossrail_1 = rsr.set(); 
		var circle_1 = rsr.circle(350, 578, 7).attr({"fill-rule": 'evenodd',"clip-rule": 'evenodd',fill: '#8dc055',parent: 'crossrail_1','stroke-width': '0','stroke-opacity': '1', 'id':'1'}).data('id', 'info_1'); 
		var text_1 = rsr.text(0, 0, '').attr({fill: '#FFFFFF',"font-family": 'NetworkRailSans-Bold',"font-size": '14',parent: 'crossrail_1','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 402.4204 705.0317").data('id', 'info_1'); crossrail_1.attr({'id': 'crossrail_1','name': 'Crossrail'}); 

		//2 THAMESLINK (9)
		var thameslink_2 = rsr.set(); 
		var circle_2 = rsr.circle(382, 582, 7).attr({"fill-rule": 'evenodd',"clip-rule": 'evenodd',fill: '#8dc055',parent: 'thameslink_2','stroke-width': '0','stroke-opacity': '1'}).data('id', 'info_2'); 
		var text_2 = rsr.text(0, 0, '').attr({fill: '#FFFFFF',"font-family": 'NetworkRailSans-Bold',"font-size": '14',parent: 'thameslink_2','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 430.7866 704.5806").data('id', 'info_2'); thameslink_2.attr({'id': 'thameslink_2','name': 'Thameslink'}); 

		//3 EDINBURGH (1)
		var edinburgh_3 = rsr.set(); 
		var circle_3 = rsr.circle(227, 239, 7).attr({"fill-rule": 'evenodd',"clip-rule": 'evenodd',fill: '#8dc055',parent: 'edinburgh_3','stroke-width': '0','stroke-opacity': '1'}).data('id', 'info_3'); 
		var text_3 = rsr.text(0, 0, '').attr({fill: '#FFFFFF',"font-family": 'NetworkRailSans-Bold',"font-size": '14',parent: 'edinburgh_3','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 267.1646 338.5015").data('id', 'info_3'); edinburgh_3.attr({'id': 'edinburgh_3','name': 'Edinburgh Glasgow Improvement Programme'}); 

		//4 NORTHERN HUB (2)
		var northern_4 = rsr.set(); 
		var circle_4 = rsr.circle(252, 447, 7).attr({"fill-rule": 'evenodd',"clip-rule": 'evenodd',fill: '#8dc055',parent: 'northern_4','stroke-width': '0','stroke-opacity': '1'}).data('id', 'info_4'); 
		var text_4 = rsr.text(0, 0, '').attr({fill: '#FFFFFF',"font-family": 'NetworkRailSans-Bold',"font-size": '14',parent: 'northern_4','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 314.7339 549.2676").data('id', 'info_4'); northern_4.attr({'id': 'northern_4','name': 'North of England Programme'}); 

		//5 CARDIFF (6)
		var cardiff_5 = rsr.set(); 
		var circle_5 = rsr.circle(236, 567, 7).attr({"fill-rule": 'evenodd',"clip-rule": 'evenodd',fill: '#8dc055',parent: 'cardiff_5','stroke-width': '0','stroke-opacity': '1'}).data('id', 'info_5'); 
		var text_5 = rsr.text(0, 0, '').attr({fill: '#FFFFFF',"font-family": 'NetworkRailSans-Bold',"font-size": '14',parent: 'cardiff_5','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 268.2764 690.2529").data('id', 'info_5'); cardiff_5.attr({'id': 'cardiff_5','name': 'Cardiff Re-signalling'}); 

		//6 BRIGHTON (10)
		var brighton_6 = rsr.set(); 
		var circle_6 = rsr.circle(366, 628, 7).attr({"fill-rule": 'evenodd',"clip-rule": 'evenodd',fill: '#8dc055',parent: 'brighton_6','stroke-width': '0','stroke-opacity': '1'}).data('id', 'info_6'); 
		var text_6 = rsr.text(0, 0, '').attr({fill: '#FFFFFF',"font-family": 'NetworkRailSans-Bold',"font-size": '14', parent: 'brighton_6','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 414.5908 749.6074").data('id', 'info_6'); brighton_6.attr({'id': 'brighton_6','name': 'Brighton Mainline'}); 

		//7 PROJECT ANGLIA
		var anglia_7 = rsr.set(); 
		var circle_7 = rsr.circle(395, 531, 7).attr({"fill-rule": 'evenodd',"clip-rule": 'evenodd',fill: '#8dc055',parent: 'anglia_7','stroke-width': '0','stroke-opacity': '1'}).data('id', 'info_7');  
		var text_7 = rsr.text(0, 0, '').attr({fill: '#FFFFFF',"font-family": 'NetworkRailSans-Bold',"font-size": '14',parent: 'anglia_7','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 418.0225 682.2617").data('id', 'info_7'); anglia_7.attr({'id': 'anglia_7','name': 'Project Anglia'}); 

		//8 STAFFORDSHIRE (5)
		var stafford_8 = rsr.set(); 
		var circle_8 = rsr.circle(251, 503, 7).attr({"fill-rule": 'evenodd',"clip-rule": 'evenodd',fill: '#8dc055',parent: 'stafford_8','stroke-width': '0','stroke-opacity': '1'}).data('id', 'info_8'); 
		var text_8 = rsr.text(0, 0, '').attr({fill: '#FFFFFF',"font-family": 'NetworkRailSans-Bold',"font-size": '14',parent: 'stafford_8','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 324.7495 602.8774").data('id', 'info_8'); stafford_8.attr({'id': 'stafford_8','name': 'Staffordshire Area Improvements Programme'}); 

		//9 NORTH LINCS (4)
		var lincs_9 = rsr.set(); 
		var circle_9 = rsr.circle(350, 433, 7).attr({"fill-rule": 'evenodd',"clip-rule": 'evenodd',fill: '#8dc055',parent: 'lincs_9','stroke-width': '0','stroke-opacity': '1'}).data('id', 'info_9'); 
		var text_9 = rsr.text(0, 0, '').attr({fill: '#FFFFFF',"font-family": 'NetworkRailSans-Bold',"font-size": '14',parent: 'lincs_9','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 403.9858 542.8765").data('id', 'info_9'); lincs_9.attr({'id': 'lincs_9','name': 'North Lincolnshire Re-signalling'}); 


		//Push Edinburgh set
		regions.push( circle_3, text_3 ); 

		//Push Northern Hub set
		regions.push( circle_4 , text_4 ); 

		//Push North Lincs set
		regions.push( circle_9 , text_9 ); 

		//Push Stafford set
		regions.push( circle_8 , text_8 ); 

		//Push Cardiff set
		regions.push( circle_5 , text_5 ); 

		//Push Project Anglia set
		regions.push( circle_7 , text_7 ); 

		//Push Crossrail set
		regions.push( circle_1 , text_1 ); 

		//Push Thameslink set
		regions.push( circle_2 , text_2 ); 

		//Push Brightonset
		regions.push( circle_6 , text_6 );
	

		// Iterate through the regions
		for (var i = 0; i < regions.length; i++) {
			
		    regions[i].mouseover(function(e){
				this.node.style.cursor = "pointer";
				this.node.style['stroke-width'] = "7";
				this.node.style['stroke-opacity'] = "0.4";
				this.node.style.stroke = "#8dc055";
				var id =  this.data('id').substring(5,6);
				$("#key_"+id).css({"color": "#ff6600"});
				$(".rect_"+id+" a").css({"background-image": "../img/"+id+"_rect_ro.png"});

			});

			regions[i].mouseout(function(e){
				this.node.style['stroke-width'] = "0";
				this.node.style['stroke-opacity'] = "1.0";
				this.node.style.stroke = "#8dc055";
				var id =  this.data('id').substring(5,6);
			});

			regions[i].mousedown(function(e){

				var posx;
				var posy;

				if (typeof e !== 'undefined') {
					posx = e.pageX - $map.offset().left - 270;
					posy = e.pageY - $map.offset().top - 67;
				} else {
					// console.log(building);
					posx = parseInt(regions[i].getBBox().x, 10) - 260;
					posy = parseInt(regions[i].getBBox().y, 10) - 57;
				}

				//call Fancybox
				var id =  $("#"+this.data('id'));
				doFancyBox(id);

			});

			
			//Rectangle project mouseover/mouseout events
			$('.prog').each(function(e) {
				$(this).on("mouseover", function() {
					$(this).css({"color":"#ff6600"});
					var id = ($(this).attr('id').substring(4,5));				
					var circle = eval('circle_' + id);		
					//circle.data('id','info_'+id).attr({'stroke': 'green', 'stroke-width':'7', 'stroke-opacity': '0.5'});
					var $jQueryObject = $(circle.node);
					$jQueryObject.css({'stroke': '#8dc055', 'stroke-width':'7', 'stroke-opacity': '0.5'})
				});

				$(this).on("mouseout", function() {
					$(this).css({"color":"#000"});
					var id = ($(this).attr('id').substring(4,5));
					var circle = eval('circle_' + id);	
					var $jQueryObject = $(circle.node);		
					$jQueryObject.css({'stroke-width':'0', 'stroke-opacity': '1.0'});
				});
			});
			

			//Legend key mousedown events
			$('.prog').each(function(e) {
				$(this).mousedown(function() {
					var id = '#info_' + $(this).attr('id').substring(4,5);
					//call fancybox
					doFancyBox(id);
				});
			});
			
		}
	}

	function doFancyBox(data) {
		//setup Fancybox with options
		var html = data;
		$.fancybox.open(html, fancybox_options);

		//Set initial viewport height for BxSlider
		var $bx_viewport = $('.bx-viewport');
		$bx_viewport.height('330px');
	}


	/**
	 * EXPORT
	 */
	
	return {
		init: init
	};

})();