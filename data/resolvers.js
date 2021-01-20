import { Contacts } from './dbConnectors';

// resolver map
export const resolvers = {
  Query: {
    getContactBy: (root, {id}) => {
      return new Promise((resolve, object) => {
        Contacts.findById(id, (err, contact) => {
          if (err) console.error(err);
          else resolve(contact);
        });
      })
    },
    // getContacts: () => {
    //   return new Promise((resolve, object) => {
    //     Contacts.find((err, contacts) => {
    //       if (err) console.error(err);
    //       else resolve(contacts);
    //     });
    //   });
    // }
  }

};
