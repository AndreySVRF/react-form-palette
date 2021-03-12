import { useState, useEffect } from 'react';

export const useInput = (initialValue, validations, setInputValue) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
    setInputValue(e.target.value);
  };

  const onBlur = (e) => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  };
};

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState({ empty: true, textEmpty: 'Заполните поле!' });
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value.trim()
            ? setEmpty({ empty: false, textEmpty: '' })
            : setEmpty({ empty: true, textEmpty: 'Заполните поле!' });
          break;
        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty]);

  return {
    isEmpty,
    inputValid
  };
};
