import React from 'react';

function ClassesList({ classesList }) {
  return (
    <ul>
      <li className="list-item-default">
        <span>Title</span>
        <span>Description</span>
      </li>
      {classesList?.map(({ id, title, description }) => (
        <li
          key={id}
          className={
            title.length > 0 && description.length > 0
              ? 'lightcyan'
              : 'lightsalmon'
          }
        >
          <span>{title}</span>
          <span>{description}</span>
        </li>
      ))}
    </ul>
  );
}

export default ClassesList;
