describe('Address Book', function() {
	var addressBook;
	var thisContact;
	
	beforeEach(function() {
		addressBook = new AddressBook();
		thisContact = new Contact();
	});
	
	it('should be able to add a contact', function() {
		
		addressBook.addContact(thisContact);
		
		expect(addressBook.getContact(0)).toBe(thisContact);
	});
	
	it('should be able to delete a contact', function() {
		addressBook.addContact(thisContact);
		addressBook.deleteContact(0);
		
		expect(addressBook.getContact(0)).not.toBeDefined();
	});
	
});

describe('Asynchronous Address Book Load', function() {
	var addressBook = new AddressBook();
	beforeEach(function(done) {
		addressBook.loadContactList(function() {
			done();
		});
	});
	
	it('should be able to load contact list asynchronously', function(done) {
		expect(addressBook.loadComplete).toBe(true);
		done();
	});
});