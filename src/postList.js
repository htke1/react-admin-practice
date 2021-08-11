import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
  Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Show, Edit, SimpleShowLayout, RichTextField,EditButton,ReferenceManyField, required,
     TopToolbar, Button
} from 'react-admin';


export const PostList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List> 
);

export const PostCreate = props => (
        <Create {...props}>
            <SimpleForm>
            <ReferenceInput  source="userId" reference="users">
            <SelectInput optionText="name" />
        </ReferenceInput>
                <TextInput source="title" />
                <TextInput multiline source="body" />
            </SimpleForm>
        </Create>
    );  

    const PostShowActions = ({ basePath, data, resource }) => (
        <TopToolbar>
            <EditButton basePath={basePath} record={data} />
            {/* Add your custom actions */}
            <Button color="primary" onClick={()=>console.log("custom action")} label="custom"></Button>
        </TopToolbar>
    );


export const PostShow = (props) => (
    <Show actions={<PostShowActions/>} {...props}>
        <SimpleShowLayout>
            <TextField source="title" />
            <RichTextField source="body" />
        </SimpleShowLayout>
    </Show>
); 


export const PostEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="title" validate={required()} />
            <TextInput multiline source="teaser" validate={required()} />
            <TextInput source="body" validate={required()} />
            <ReferenceManyField  label="Comments" reference="posts" target="post_id">
                <Datagrid>
                    <TextField source="body" />
                    <TextField source="title" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
);