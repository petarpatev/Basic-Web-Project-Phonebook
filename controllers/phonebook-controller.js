const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    res.render('index', {contacts: phonebook.getPhoneBook()});
    // TODO: load index page
  },
  addPhonebookPost:(req, res) => {
    // TODO: add a phonebook object to the array
  }
}