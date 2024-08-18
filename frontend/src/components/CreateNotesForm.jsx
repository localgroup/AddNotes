import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from "../components/InputField";

export default function CreateNotesForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        id="title"
        label="Title"
        type="text"
        error={!!errors.title}
        helperText={errors.title ? errors.title.message : ''}
        {...register('title', { required: 'Title is required' })}
      />
        <br /><br />
      <InputField
        id="content"
        label="Content"
        multiline
        rows={2}
        error={!!errors.content}
        helperText={errors.content ? errors.content.message : ''}
        {...register('content', { required: 'Content is required' })}
      />

      <input type="submit" value="Submit" />
    </form>
  );
}
