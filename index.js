import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './data/schema';

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL for ContactsRealmApp!');
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(5001, () => console.log('Running server on port localhost:5001/graphql'));