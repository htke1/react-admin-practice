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
     TopToolbar, Button, downloadCSV, BulkDeleteButton, useNotify, useRefresh, useRedirect 
} from 'react-admin';
import jsonExport from 'jsonexport/dist';

const PostBulkActionButtons = props => (
    
        <BulkDeleteButton {...props} />

        );

const exporter = posts => {
    const postsForExport = posts.map(post => {
        const { backlinks, userId, ...postForExport } = post; // omit backlinks and author
        console.log(post)
        return postForExport;
    });
    jsonExport(postsForExport, {
        headers: [ 'id', 'title', 'body'] // order fields in the export
    }, (err, csv) => {
        if(err){
            alert(err.message)
        }
        downloadCSV(csv, 'posts'); // download as 'posts.csv` file
    });
};

const postFilters = [
    <TextInput label="Search" source="title" alwaysOn />,
];

export const PostList = props => (
    <List {...props} title="lists of postss" exporter={exporter} filter={{ id: 2 }} bulkActionButtons={<PostBulkActionButtons />}>
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

    const PostShowActions = (props ) => (
        <TopToolbar>
     
       
        <Button
            onClick={() => { alert('Your custom action'); }}
            label="Show calendar"
        >
        </Button>
    </TopToolbar>
    );


export const PostShow = (props) => (
    <Show  {...props} actions={<PostShowActions/>}>
        <SimpleShowLayout>
            <TextField source="title" />
            <RichTextField source="body" />
        </SimpleShowLayout>
    </Show>
); 


export const PostEdit = (props) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Changes saved okay?`)
        redirect('/users');
        refresh();
    };
    const onFailure = (error) => {
        notify(`Could not edit post: ${error.message}`)
        redirect('/todos');
        refresh();
    };

    return(
    <Edit {...props} mutationMode="undoable" onSuccess={onSuccess} onFailure={onFailure}>
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
    </Edit>)
    }