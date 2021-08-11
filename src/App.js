
import React from 'react';
import {Admin, EditGuesser, ListGuesser, Resource, ShowGuesser} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './userList';
import { PostList, PostCreate, PostShow, PostEdit } from './postList';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App(){
  return (
    <>
    <Admin dataProvider={dataProvider}>
      <Resource name="posts"  list={PostList} show={PostShow} edit={PostEdit} create={PostCreate}/>
           <Resource name="users" list={UserList} />
           <Resource name="todos" list={ListGuesser} show={ShowGuesser} edit={EditGuesser}/>
   </Admin>
   <h1>hi</h1>
</>
  );
}

export default App;
