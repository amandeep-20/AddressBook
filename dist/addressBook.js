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
}
const addressBook = new AddressBook();