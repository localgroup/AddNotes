import React from 'react';
import InputField from "../components/InputField";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "../styles/CreateNotesForm.css"
import { useState } from 'react';

export default function CreateNotesForm({ onSubmit, register, errors, reset }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form-container' >
        <InputField
          id="title"
          label="Title"
          type="text"
          error={!!errors.title}
          helperText={errors.title ? errors.title.message : ''}
          {...register('title', { required: 'Title is required' })}
          onClick={handleExpandClick}
        />

        { expanded && 
          (
          <>
          <br /><br />
        <InputField
          id="content"
          label="Content"
          multiline
          rows={10}
          error={!!errors.content}
          helperText={errors.content ? errors.content.message : ''}
          {...register('content', { required: 'Content is required' })}
        />
          <br />
        <button type="submit" className="submit-button">
          <AddCircleOutlineIcon className="submit-icon" />
        </button>
        </>)
        }

      </form>
      <br /><br />
    </div>
  );
}