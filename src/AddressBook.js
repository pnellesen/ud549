function AddressBook() {
	var self = this;
	this.contactList = [];
	this.loadComplete = false;
	
	this.addContact = function(thisContact) {
		self.contactList.push(thisContact);
	};
	this.deleteContact = function(idx) {
		self.contactList.splice(idx,1);
	};
	this.getContact = function(idx) {
		return self.contactList[idx];
	};
	this.loadContactList = function(cb) {// "cb" is the callback function. For asynchronous testing, it will be "done()"
		setTimeout(function() {
			self.loadComplete = true;
			if (cb) {
				console.log("cb: " + cb);
				return cb();
			}
		}, 3);
	};
	
};