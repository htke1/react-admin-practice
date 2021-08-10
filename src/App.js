
import React from 'react';
import {Admin, Resource} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './userList';
import { PostList, PostCreate, PostShow, PostEdit } from './postList';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App(){
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts"  list={PostList} show={PostShow} edit={PostEdit} create={PostCreate}/>
           <Resource name="users" list={UserList} />
   </Admin>
  );
}

export default App;
