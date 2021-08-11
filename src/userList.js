import * as React from "react";
import { List, Datagrid, TextField, EmailField, EditButton, TopToolbar, Button } from 'react-admin';
import MyUriField from './myUri'

const ListActions = (props) => (
    <TopToolbar>
       <EditButton/>
        {/* Add your custom actions */}
        <Button
            onClick={() => { alert('Your custom action'); }}
            label="Show calendar"
        >
        </Button>
    </TopToolbar>
);

export const UserList = props => (
  
     
    <List {...props} actions={<ListActions/>}>
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