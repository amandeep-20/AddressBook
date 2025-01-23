"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
class AddressBook {
    constructor() {
        this.contacts = [];
    }
    // Add a new contact
    addContact() {
        console.log("\nEnter Contact Details:");
        const firstName = readline.question("First Name: ");
        const lastName = readline.question("Last Name: ");
        const address = readline.question("Address: ");
        const city = readline.question("City: ");
        const state = readline.question("State: ");
        const zip = readline.question("ZIP Code: ");
        const phoneNumber = readline.question("Phone Number (10 digits): ");
        const email = readline.question("Email: ");
        const contact = {
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
    }
    // Display all contacts
    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("No contacts available.");
        }
        else {
            console.log("\nContacts List:");
            this.contacts.forEach((contact, index) => {
                console.log(`${index + 1}. ${contact.firstName} ${contact.lastName}, Address: ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}, Phone: ${contact.phoneNumber}, Email: ${contact.email}`);
            });
        }
    }
    // Edit an existing contact
    editContact() {
        const nameToSearch = readline.question("\nEnter the first name of the contact you want to edit: ");
        const contact = this.contacts.find((c) => c.firstName.toLowerCase() === nameToSearch.toLowerCase());
        if (contact) {
            console.log("\nEditing Contact:");
            contact.firstName = readline.question(`First Name (${contact.firstName}): `, { defaultInput: contact.firstName }) || contact.firstName;
            contact.lastName = readline.question(`Last Name (${contact.lastName}): `, { defaultInput: contact.lastName }) || contact.lastName;
            contact.address = readline.question(`Address (${contact.address}): `, { defaultInput: contact.address }) || contact.address;
            contact.city = readline.question(`City (${contact.city}): `, { defaultInput: contact.city }) || contact.city;
            contact.state = readline.question(`State (${contact.state}): `, { defaultInput: contact.state }) || contact.state;
            contact.zip = readline.question(`ZIP Code (${contact.zip}): `, { defaultInput: contact.zip }) || contact.zip;
            contact.phoneNumber = readline.question(`Phone Number (${contact.phoneNumber}): `, { defaultInput: contact.phoneNumber }) || contact.phoneNumber;
            contact.email = readline.question(`Email (${contact.email}): `, { defaultInput: contact.email }) || contact.email;
            console.log("Contact updated successfully!");
        }
        else {
            console.log("Contact not found.");
        }
    }
    // Delete a contact
    deleteContact() {
        const nameToDelete = readline.question("\nEnter the first name of the contact you want to delete: ");
        const initialLength = this.contacts.length;
        this.contacts = this.contacts.filter((c) => c.firstName.toLowerCase() !== nameToDelete.toLowerCase());
        if (this.contacts.length < initialLength) {
            console.log("Contact deleted successfully!");
        }
        else {
            console.log("Contact not found.");
        }
    }
    // Menu-driven interface
    menu() {
        while (true) {
            console.log("\nAddress Book Menu:");
            console.log("1. Add Contact");
            console.log("2. Display Contacts");
            console.log("3. Edit Contact");
            console.log("4. Delete Contact");
            console.log("5. Exit");
            const choice = readline.question("Enter your choice: ");
            switch (choice) {
                case "1":
                    this.addContact();
                    break;
                case "2":
                    this.displayContacts();
                    break;
                case "3":
                    this.editContact();
                    break;
                case "4":
                    this.deleteContact();
                    break;
                case "5":
                    console.log("Exiting Address Book. Goodbye!");
                    process.exit(0);
                default:
                    console.log("Invalid choice. Please try again.");
            }
        }
    }
}
const addressBook = new AddressBook();
addressBook.menu();
