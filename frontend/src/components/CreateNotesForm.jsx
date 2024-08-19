import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from "../components/InputField";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "../styles/CreateNotesForm.css"
import { useState } from 'react';

export default function CreateNotesForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [click, setClick] = useState(false);

  const noteClick = (click) => {
    setClick(!click);
  }

  return (
    <div>
    
      <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
        <InputField
          id="title"
          label="Title"
          type="text"
          error={!!errors.title}
          helperText={errors.title ? errors.title.message : ''}
          {...register('title', { required: 'Title is required' })}
          onClick={noteClick}
        />
          <br /><br />
        <InputField
          id="content"
          label="Content"
          multiline
          rows={6}
          error={!!errors.content}
          helperText={errors.content ? errors.content.message : ''}
          {...register('content', { required: 'Content is required' })}
        />
          <br />
        <button type="submit" className="submit-button">
          <AddCircleOutlineIcon className="submit-icon" />
        </button>

      </form>
      <br /><br />
    </div>
  );
}
