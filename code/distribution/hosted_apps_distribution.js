var installapp = navigator.mozApps.install(manifestURL);
installapp.onsuccess = function(data) {
  // A App was installed.
};
installapp.onerror = function() {
 // A App was not installed, more information at 
 // installapp.error.name
};
