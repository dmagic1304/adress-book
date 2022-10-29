const AddressBook = function() {
  this.contacts = {};
  this.id = 0;
}

const Contact = function(firstName, lastName, number) {
  this.name = firstName;
  this.lastName = lastName;
  this.number = number;
}

