import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Input from '../Input/Input';
import InputFile from '../InputFile/InputFile';

import './Form.scss';

const Form = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [image, setImage] = useState([]);
  const [response, setResponse] = useState('');
  const [inputsValid, setInputsValid] = useState(false);

  useEffect(() => {
    if (name && surname && image.length) {
      setInputsValid(true);
    } else {
      setInputsValid(false);
    }
  }, [name, surname, image]);

  const formSubmit = async (e) => {
    e.preventDefault();

    if (name && surname && image.length) {
      try {
        const response = await axios.post(`https://test-job.pixli.app/send.php`, {
          action: 'send_data',
          id: 1,
          image,
          contacts: [name, surname, patronymic]
        });

        setResponse(response.data.msg);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <form className="form" onSubmit={e => formSubmit(e)}>
      <Input inputType="text" inputText="Имя" inputValue={name} setInputValue={setName}
             inputValidations={{ isEmpty: true }}/>
      <Input inputType="text" inputText="Фамилия" inputValue={surname} setInputValue={setSurname}
             inputValidations={{ isEmpty: true }}/>
      <Input inputType="text" inputText="Отчество" inputValue={patronymic} setInputValue={setPatronymic}/>
      <InputFile inputText="Фото" inputValue={image} setInputValue={setImage}/>
      <Input inputType="submit" inputText="Сохранить" inputClasses="btn" disable={inputsValid}/>
      <Input inputType="textarea" inputText="Response" inputValue={response}/>
    </form>
  );
};

export default Form;
