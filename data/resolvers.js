import { Contacts } from './dbConnectors';

// resolver map
export const resolvers = {
  Query: {
    getContactById: (root, { id }) => {
      return new Promise((resolve, object) => {
        Contacts.findById(id, (err, contact) => {
          if (err) console.error(err);
          else resolve(contact);
        });
      })
    },
    getContactByQuery: (root, { query }) => {
      return new Promise((resolve, object) => {
        Contacts.find({query}, (err, contact) => {
          if (err) console.error(err);
          else resolve(contact);
        })
      })
    },
    getContacts: (root, { limit, sortBy }) => {
      var sort = { "firstName": 1 };
      switch (sortBy) {
        case "FIRSTNAME_DESC":
          sort = { "firstName": -1 }
          break;
        case "LASTNAME_DESC":
          sort = { "lastName": -1 };
          break;
        case "LASTNAME_ASC":
          sort = { "lastName": 1 };
          break;
        default:
          sort = { "firstName": 1 };
          break;
      }
      return new Promise((resolve, object) => {
        Contacts.find((err, contacts) => {
          if (err) console.error(err);
          else resolve(contacts);
        }).limit(limit).sort(sort);
      });
    }
  },
  Mutation: {
    createContact: (root, {input}) => {
      const newContact = new Contacts({
        firstName: input.firstName,
        lastName: input.lastName,
      });
      newContact.id = newContact._id;
      newContact._partition = "contacts";
      return new Promise((resolve, object) => {
        newContact.save((err) => {
          if (err) console.error(err);
          else resolve(newContact);
        });
      });
    },
    updateContact: (root, {id, input}) => {
      return new Promise((resolve, object) => {
        Contacts.findOneAndUpdate({_id: id}, input, {new: true}, (err, friend) => {
          if (err) console.error(err);
          else resolve(friend);
        });
      });
    },
    deleteContact: (root, {id}) => {
      return new Promise((resolve, object) => {
        Contacts.remove({_id: id}, (err) => {
          if (err) console.error(err);
          else resolve("Succesfully delete a Contact");
        });
      });
    }
  }
};
