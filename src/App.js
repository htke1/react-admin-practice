
import React from 'react';
import {Admin, EditGuesser, Resource} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './userList';
import { PostList, PostCreate } from './postList';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App(){
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={EditGuesser} />
           <Resource name="users" list={UserList} create={PostCreate} />
   </Admin>
  );
}

export default App;
