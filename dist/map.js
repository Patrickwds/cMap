!function(){Map=function(e){var t=this,o=document.getElementById(e.wrapperId),a=parseFloat(o.getAttribute("data-map-lat")),l=parseFloat(o.getAttribute("data-map-lng")),p=parseFloat(o.getAttribute("data-pin-lat")),i=parseFloat(o.getAttribute("data-pin-lng"));Map.prototype.stylesConfig=function(){var t=[{featureType:"road",elementType:"geometry",stylers:[{visibility:"on"},{color:e.color.street}]},{featureType:"landscape",elementType:"geometry",stylers:[{visibility:"on"},{color:e.color.landscape}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{invert_lightness:!1},{visibility:"on"},{color:e.color.landscape__man_made}]},{featureType:"road",elementType:"labels.text",stylers:[{visibility:"on"},{color:e.color.roadText},{weight:.4}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"on"},{color:e.color.importantPlaces},{weight:.1}]},{featureType:"poi",elementType:"labels.icon",stylers:e.color.iconPlaces},{featureType:"poi.park",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"geometry",stylers:[{visibility:"on"},{color:"#19283b"}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{visibility:"off"}]}];styledMap=new google.maps.StyledMapType(t,{name:e.name})},Map.prototype.setOptions=function(){if(e.mobile)var t=!1;var o={zoom:e.zoom||15,center:new google.maps.LatLng(a,l),panControl:!1,zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,overviewMapControl:!1,scrollwheel:!1,draggable:t,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,"map_style"]}};return{mapOptions:o}}(),Map.prototype.init=function(){var a=new google.maps.Map(o,t.setOptions.mapOptions);new google.maps.Marker({position:{lat:p,lng:i},map:a,icon:e.icon,animation:google.maps.Animation.DROP});return!!e.color&&(t.stylesConfig(),a.mapTypes.set("map_style",styledMap),void a.setMapTypeId("map_style"))},this.init()}}();