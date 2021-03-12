import React from 'react';

import { useInput } from '../../utils/hooks.validate';

import './Input.scss';

const Input = ({ inputType, inputText, inputValue, inputClasses, disable, setInputValue, inputValidations }) => {
  const input = useInput('', inputValidations, setInputValue);

  return (
    <div className="input">
      <div className="input-title">
        {inputType === 'text' || inputType === 'textarea' ?
          <span className="input-text" htmlFor={inputText}>{inputText}</span> : ''}
        {inputValidations ? (input.isDirty && input.isEmpty.empty) &&
          <span className="input-error">{input.isEmpty.textEmpty}</span> : ''}
      </div>

      {
        inputType === 'text'
          ? <input
            type={inputType}
            id={inputText}
            className={inputClasses}
            value={inputValue}
            onChange={e => input.onChange(e)}
            onBlur={e => input.onBlur(e)}
          />
          : ''
      }
      {inputType === 'submit' ?
        <input type={inputType} className={inputClasses} value={inputText} disabled={!disable}/> : ''}
      {inputType === 'textarea' ? <textarea value={inputValue} rows="6" disabled></textarea> : ''}
    </div>
  );
};

export default Input;
