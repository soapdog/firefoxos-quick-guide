var contact = new mozContact();
contact.init({name: "Odin"});

var request = navigator.mozContacts.save(contact);
request.onsuccess = function() {
  // contato salvo com sucesso
};
request.onerror = function() {
  // não foi possível salvar o contato
};
