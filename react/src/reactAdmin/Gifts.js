import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const GiftList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="owner" />
            <TextField source="url" />
        </Datagrid>
    </List>
);