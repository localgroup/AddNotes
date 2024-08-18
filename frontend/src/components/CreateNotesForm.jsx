import React from 'react';
import { useForm } from 'react-hook-form';

export default function CreateNotesForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Title:</label>
      <br />
      <input
        type="text"
        id="title"
        {...register('title', { required: 'Title is required' })}
      />
      {errors.title && <p>{errors.title.message}</p>}

      <label htmlFor="content">Content:</label>
      <br />
      <textarea
        id="content"
        {...register('content', { required: 'Content is required' })}
      ></textarea>
      {errors.content && <p>{errors.content.message}</p>}

      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

