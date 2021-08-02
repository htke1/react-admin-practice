import * as React from "react";
import { List, Datagrid, TextField, EmailField, EditButton } from 'react-admin';
import MyUriField from './myUri'
export const UserList = props => (
  
     
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="website" />
            <MyUriField source="company.name" />
        </Datagrid>
    </List>
);