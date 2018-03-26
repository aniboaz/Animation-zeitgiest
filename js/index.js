

// ID of the Google Spreadsheet
 var spreadsheetID = "1vD1pKMCsBUhZmiIR0dkVyb5avchpa7FqgtG8K3J9x9Y";

 // Make sure it is public or set to Anyone with link can view
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

 $.getJSON(url, function(data) {

  var entry = data.feed.entry;

  $(entry).each(function(){
    // Column names are name, age, etc.

    $('.results').prepend('<li class="card '+this.gsx$category.$t+' '+this.gsx$usage.$t+'"><h2>'+this.gsx$title.$t+'</h2><div class="image-shadow" style="background-image:url(https://res.cloudinary.com/boazz/image/url2png/w_317,h_150,c_fill,r_10,g_north/'+this.gsx$url.$t+')"></div><div class="card-body">'+'<a href="'+this.gsx$url.$t+'"><p>'+this.gsx$descreption.$t+'</p>'+'<div class="grade">'+this.gsx$grade.$t+'</div></a></div><a href="'+this.gsx$url.$t+'"><img class="favico" src="https://www.google.com/s2/favicons?domain='+this.gsx$url.$t+'"></a>'+'<a href=" '+this.gsx$github.$t+' "><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a><div class="icons right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="js-icon"><title>javascript</title><path fill="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" d="M2 1v125h125V1H2zm66.1 106.5a14.8 14.8 0 0 1-9.4 7.4c-6.3 1.5-12.3.6-16.8-2-3-1.9-5.3-4.7-6.9-8l9.6-5.8.6 1.1a10 10 0 0 0 4.3 4.5c2 .7 6.5 1.1 8.2-2.4 1-1.9.7-7.7.7-14.1V58h11.8v32.2c0 6.5.6 12.4-2 17.3zm48.6-3.3c-4 14-26.8 14.4-35.8 5.2-2-2.2-3.2-3.3-4.3-5.8l9.5-5.5c2.6 4 5 6 9.1 7 5.8.7 11.6-1.3 10.3-7.4-1.3-5-11.8-6.2-18.9-11.6a16.4 16.4 0 0 1-3-23.3c2-2.5 5.4-4.3 9-5.2l3.6-.5c7-.1 11.5 1.7 14.8 5.3.9 1 1.6 2 3 4l-9.2 6c-1.1-2.5-3-4-5-4.8-3.2-.9-7.2.1-8 3.5-.3 1-.2 2 .2 3.6 1.3 3 5.6 4.2 9.4 6 11 4.4 14.8 9.2 15.7 15 .9 4.8-.2 8-.4 8.5z"/></svg><svg title="css" class="css-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"  d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z"/></svg></div></li>');
  });
 });

 // external js: isotope.pkgd.js
 $( document ).ajaxComplete(function() {

 // Or, hide them
 $("img").error(function() {
   $(this).hide();
 });

//filter-class
 $('.header .button').on('click', function() { $('.header .button').toggleClass('is-checked')
         });

         $('.about-button').on('click', function() { $('.about.modal').toggleClass('visible')
                 });

 // quick search regex
 var qsRegex;
 var buttonFilter;
 //favico


 // init Isotope

 var $grid = $('#list').isotope({
   itemSelector: '.card',
  layoutMode: 'masonry',
   filter: function() {
     var $this = $(this);
     var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
     var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
     return searchResult && buttonResult;
   }
 });
   $('.filters').on('click', '.button', function() {
      buttonFilter = $( this ).attr('data-filter');
   $grid.isotope();
 });

 // use value of search field to filter
 var $quicksearch = $('.quicksearch').keyup( debounce( function() {
   qsRegex = new RegExp( $quicksearch.val(), 'gi' );
   $container.isotope();
  }) );


   // change is-checked class on buttons
 $('.button-group').each( function( i, buttonGroup ) {
   var $buttonGroup = $( buttonGroup );
   $buttonGroup.on( 'click', 'button', function() {
     $buttonGroup.find('.is-checked').removeClass('is-checked');
     $( this ).addClass('is-checked');
   });
 });
    //todo
 $('.quicksearch').keyup(function() {
   $('.filters p button').addClass('typing').delay(1000).queue(function(next){
     $(this).removeClass("typing");
     next();
 });
    });
 // debounce so filtering doesn't happen every millisecond
 function debounce( fn, threshold ) {
   var timeout;
   return function debounced() {
     if ( timeout ) {
       clearTimeout( timeout );
     }
     function delayed() {
       fn();
       timeout = null;
     }
     setTimeout( delayed, threshold || 100 );
   };
 }


 });
 function addLoadEvent(func) {
   var oldonload = window.onload;
   if (typeof window.onload != 'function') {
     window.onload = func;
   } else {
     window.onload = function() {
       oldonload();
       func();
     }
   }
 }

 function insertAfter(newElement,targetElement) {
   var parent = targetElement.parentNode;
   if (parent.lastChild == targetElement) {
     parent.appendChild(newElement);
   } else {
     parent.insertBefore(newElement,targetElement.nextSibling);
   }
 }

 function faviconize() {
   if (!document.getElementsByTagName) return false;
   if (!document.createElement) return false;
   var links = document.getElementsByTagName("a");
   	for (var j=0; j<links.length; j++) {
   		var hoststring = /^http:/;
   		var hrefvalue = links[j].getAttribute("href",2);
 		if (hrefvalue.search(hoststring) != -1) {
 			var domain = hrefvalue.match(/(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/);
 			domain = RegExp.$2;
 			var cue = document.createElement("img");
 			cue.className = "faviconimg";
 			var cuesrc = "http://"+domain+"/favicon.ico";
 			cue.setAttribute("src",cuesrc);
 			cue.onerror = function () {
 				this.src = "external.gif";
 				}
 			insertAfter(cue,links[j]);
 		}
 	}
 }$( document ).ajaxComplete(function() {
 //addLoadEvent(faviconize);
 });
