
import React, { useState } from 'react';
import {Admin, EditGuesser, ListGuesser, Resource, ShowGuesser} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './userList';
import { PostList, PostCreate, PostShow, PostEdit } from './postList';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App(){
  const [page, setPage] = useState("hello");
  return page?(
    <>
    <button onClick={()=>setPage("sample")}>JsonSampleApi</button>
    <button onClick={()=>setPage("quiz")}>Quiz Api</button>
    {page==="sample"?(<Admin dataProvider={dataProvider}>
      <Resource name="posts"  list={PostList} show={PostShow} edit={PostEdit} create={PostCreate}/>
           <Resource name="users" list={UserList} />
           <Resource name="todos" list={ListGuesser} show={ShowGuesser} edit={EditGuesser}/>
   </Admin>):<h1>Quiz api page</h1>}
    
</> 
  ):(<h1>Loading...</h1>)
}

export default App;
