import React, { Fragment } from 'react';

function Form({ inputs, onChange, onSubmit, addInputs }) {
  return (
    <form onSubmit={onSubmit} className="mh-auto">
      {inputs?.map((inputsPair) => (
        <Fragment key={inputsPair.id}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={inputsPair.title}
            onChange={(e) => onChange?.(e, inputsPair.id)}
          />
          <textarea
            type="text"
            placeholder="Description"
            name="description"
            rows={4}
            value={inputsPair.description}
            onChange={(e) => onChange?.(e, inputsPair.id)}
          />
        </Fragment>
      ))}
      <button type="button" onClick={addInputs} className="mh-auto">
        Add
      </button>
      <button type="submit" className="mh-auto">
        Save
      </button>
    </form>
  );
}

export default Form;
