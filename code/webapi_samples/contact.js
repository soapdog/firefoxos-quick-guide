var contact = new mozContact();
contact.init({name: "Odin"});

var request = navigator.mozContacts.save(contact);
request.onsuccess = function() {
  // contact saved successfully
};
request.onerror = function() {
  // there was an error while trying to save the contact
};
