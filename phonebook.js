/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/

let phoneBook = [
	{name: 'Maria', number: '+359-088-43223'},
	{name: 'Petar', number: '+359-674-43533'}
];

function getPhoneBook() {
	return phoneBook;
}
function addContact(contact) {
	phoneBook.push(contact);
}

module.exports = {
	getPhoneBook,
	addContact
}