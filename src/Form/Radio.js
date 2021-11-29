import React from 'react';

const Radio = ({ pergunta, options, onChange, id, active }) => {
  if (active === false) return null;
  return (
    <div className='pergunta-div animate' data-anime='left'>
      <p className='pergunta'>{pergunta}</p>
      <form className='alternativas'>
        {options.map((option) => (
          <label
            className='label'
            key={option}
          >
            <input
              className='radio'
              type="radio"
              id={id}
              value={option}
              onChange={onChange}
            />
            {option}
          </label>
        ))}
      </form>
    </div>
  );
};

export default Radio;
