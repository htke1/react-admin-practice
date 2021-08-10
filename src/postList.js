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
    Show, Edit, SimpleShowLayout, DateField, RichTextField,EditButton,ReferenceManyField, RichTextInput,DateInput, required
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

export const PostShow = (props) => (
    <Show {...props}>
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
                    <DateField source="created_at" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
);