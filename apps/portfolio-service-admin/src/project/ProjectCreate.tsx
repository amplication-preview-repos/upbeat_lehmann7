import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="createdAtProject" source="createdAtProject" />
        <TextInput label="description" multiline source="description" />
        <TextInput
          label="descriptionProject"
          multiline
          source="descriptionProject"
        />
        <TextInput label="link" source="link" />
        <TextInput label="linkProject" source="linkProject" />
        <TextInput label="title" source="title" />
        <TextInput label="titleProject" source="titleProject" />
        <DateTimeInput label="updatedAtProject" source="updatedAtProject" />
      </SimpleForm>
    </Create>
  );
};
