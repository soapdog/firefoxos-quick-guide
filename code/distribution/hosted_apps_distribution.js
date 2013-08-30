var installapp = navigator.mozApps.install(manifestURL);
installapp.onsuccess = function(data) {
  // A App foi instalada
};
installapp.onerror = function() {
 // A App não foi instalada, informações em 
 // installapp.error.name
};
