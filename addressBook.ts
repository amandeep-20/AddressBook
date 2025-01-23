import * as readline from "readline-sync";

interface Contact {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phoneNumber: string;
  email: string;
}

class AddressBook {
  private contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  addContacts(): void {
    console.log("\nAdd Multiple Contacts:");
    while (true) {
      console.log("\nEnter Contact Details:");
      const firstName = readline.question("First Name: ");
      const lastName = readline.question("Last Name: ");
      const address = readline.question("Address: ");
      const city = readline.question("City: ");
      const state = readline.question("State: ");
      const zip = readline.question("ZIP Code: ");
      const phoneNumber = readline.question("Phone Number (10 digits): ");
      const email = readline.question("Email: ");

      const contact: Contact = {
        firstName,
        lastName,
        address,
        city,
        state,
        zip,
        phoneNumber,
        email,
      };

      this.contacts.push(contact);
      console.log("Contact added successfully!");

      const addAnother = readline
        .question("Do you want to add another contact? (yes/no): ")
        .toLowerCase();
      if (addAnother !== "yes") break;
    }
  }

  displayContacts(): void {
    if (this.contacts.length === 0) {
      console.log("No contacts available.");
    } else {
      console.log("\nContacts List:");
      this.contacts.forEach((contact, index) => {
        console.log(
          `${index + 1}. ${contact.firstName} ${contact.lastName}, Address: ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}, Phone: ${contact.phoneNumber}, Email: ${contact.email}`
        );
      });
    }
  }

  editContact(): void {
    const nameToSearch = readline.question(
      "\nEnter the first name of the contact you want to edit: "
    );
    const contact = this.contacts.find(
      (c) => c.firstName.toLowerCase() === nameToSearch.toLowerCase()
    );

    if (contact) {
      console.log("\nEditing Contact:");
      contact.firstName = readline.question(
        `First Name (${contact.firstName}): `
      ) || contact.firstName;
      contact.lastName = readline.question(
        `Last Name (${contact.lastName}): `
      ) || contact.lastName;
      contact.address = readline.question(
        `Address (${contact.address}): `
      ) || contact.address;
      contact.city = readline.question(
        `City (${contact.city}): `
      ) || contact.city;
      contact.state = readline.question(
        `State (${contact.state}): `
      ) || contact.state;
      contact.zip = readline.question(
        `ZIP Code (${contact.zip}): `
      ) || contact.zip;
      contact.phoneNumber = readline.question(
        `Phone Number (${contact.phoneNumber}): `
      ) || contact.phoneNumber;
      contact.email = readline.question(
        `Email (${contact.email}): `
      ) || contact.email;

      console.log("Contact updated successfully!");
    } else {
      console.log("Contact not found.");
    }
  }

  deleteContact(): void {
    const nameToDelete = readline.question(
      "\nEnter the first name of the contact you want to delete: "
    );

    const initialLength = this.contacts.length;

    this.contacts = this.contacts.filter(
      (c) => c.firstName.toLowerCase() !== nameToDelete.toLowerCase()
    );

    if (this.contacts.length < initialLength) {
      console.log("Contact deleted successfully!");
    } else {
      console.log("Contact not found.");
    }
  }
}

class AddressBookSystem {
  private addressBooks: Map<string, AddressBook>;

  constructor() {
    this.addressBooks = new Map();
  }

  manageAddressBook(): void {
    while (true) {
      console.log("\nAddress Book System Menu:");
      console.log("1. Create Address Book");
      console.log("2. Select Address Book");
      console.log("3. Display Address Books");
      console.log("4. Exit");

      const choice: string = readline.question("Enter your choice: ");

      switch (choice) {
        case "1":
          this.createAddressBook();
          break;
        case "2":
          this.selectAddressBook();
          break;
        case "3":
          this.displayAddressBooks();
          break;
        case "4":
          console.log("Exiting Address Book System. Goodbye!");
          process.exit(0);
        default:
          console.log("Invalid choice. Please try again.");
      }
    }
  }

  private createAddressBook(): void {
    const name = readline.question("Enter a unique name for the address book: ");
    if (this.addressBooks.has(name)) {
      console.log("Address book with this name already exists.");
    } else {
      this.addressBooks.set(name, new AddressBook());
      console.log(`Address book "${name}" created successfully.`);
    }
  }

  private selectAddressBook(): void {
    const name = readline.question("Enter the name of the address book: ");
    const addressBook = this.addressBooks.get(name);
    if (addressBook) {
      console.log(`Managing Address Book: "${name}"`);
      this.manageSpecificAddressBook(addressBook);
    } else {
      console.log("Address book not found.");
    }
  }

  private displayAddressBooks(): void {
    if (this.addressBooks.size === 0) {
      console.log("No address books available.");
    } else {
      console.log("\nAvailable Address Books:");
      this.addressBooks.forEach((_, name) => console.log(`- ${name}`));
    }
  }

  private manageSpecificAddressBook(addressBook: AddressBook): void {
    while (true) {
      console.log("\nAddress Book Menu:");
      console.log("1. Add Contacts");
      console.log("2. Display Contacts");
      console.log("3. Edit Contact");
      console.log("4. Delete Contact");
      console.log("5. Back to Main Menu");

      const choice: string = readline.question("Enter your choice: ");

      switch (choice) {
        case "1":
          addressBook.addContacts();
          break;
        case "2":
          addressBook.displayContacts();
          break;
        case "3":
          addressBook.editContact();
          break;
        case "4":
          addressBook.deleteContact();
          break;
        case "5":
          return;
        default:
          console.log("Invalid choice. Please try again.");
      }
    }
  }
}

const addressBookSystem = new AddressBookSystem();
addressBookSystem.manageAddressBook();
