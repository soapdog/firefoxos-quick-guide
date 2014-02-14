var getphoto = new MozActivity({
  name: "pick",
  data: {
    type: ["image/png", "image/jpg", "image/jpeg"]
  }
});

getphoto.onsuccess = function () {
  var img = document.createElement("img");
  if (this.result.blob.type.indexOf("image") != -1) {
    img.src = window.URL.createObjectURL(this.result.blob);
  }
};

getphoto.onerror = function () { 
	// error!
};
