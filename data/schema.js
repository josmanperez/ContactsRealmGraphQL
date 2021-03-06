import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  type Contact {
    _id: ObjectId!
    _partition: String!
    firstName: String
    lastName: String
  }

  input ContactQueryInput {
    _partition_lte: String
    OR: [ContactQueryInput!]
    _id: ObjectId
    _id_gt: ObjectId
    _partition_in: [String]
    lastName_exists: Boolean
    _id_gte: ObjectId
    lastName_lt: String
    _partition: String
    lastName_in: [String]
    _id_nin: [ObjectId]
    _partition_ne: String
    lastName: String
    lastName_lte: String
    _id_lte: ObjectId
    _partition_gt: String
    firstName_in: [String]
    lastName_ne: String
    _id_lt: ObjectId
    AND: [ContactQueryInput!]
    lastName_nin: [String]
    _id_in: [ObjectId]
    _partition_gte: String
    _id_exists: Boolean
    firstName_lt: String
    firstName_exists: Boolean
    lastName_gte: String
    _partition_nin: [String]
    _partition_exists: Boolean
    firstName_lte: String
    lastName_gt: String
    firstName_ne: String
    firstName_gte: String
    _partition_lt: String
    firstName_nin: [String]
    firstName: String
    firstName_gt: String
    _id_ne: ObjectId
  }

  input ContactInput {
    firstName: String
    lastName: String
  }

  enum ContactSortByInput {
    LASTNAME_DESC
    FIRSTNAME_ASC
    FIRSTNAME_DESC
    LASTNAME_ASC
  }

  scalar ObjectId

  type Query {
    getContactById(id: ID): Contact
    getContactByQuery(query: ContactQueryInput): Contact
    getContacts(limit: Int = 100, sortBy: ContactSortByInput): [Contact]
  }

  type Mutation {
    createContact(input: ContactInput): Contact 
    updateContact(id: ID!, input: ContactInput): Contact
    deleteContact(id: ID!): String
  }
`
const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };