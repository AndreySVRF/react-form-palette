import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

import './InputFile.scss';

import uploadPreview from '../../assets/images/upload-image.svg';

const InputFile = ({ inputText, setInputValue }) => {
  const [image, setImage] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles => {
      setImage(
        acceptedFiles.map(upFile => Object.assign(upFile, {
          preview: URL.createObjectURL(upFile)
        }))
      );
    })
  });

  useEffect(() => {
    setInputValue(image);
  })

  return (
    <div className="input-file">
      <div className="input-file__title">{inputText}</div>
      <div {...getRootProps()} className="input-file__upload">
        {image.length
          ? image.map(upFile => <img src={upFile.preview} className="upload-preview" alt="preview"
                                     key={upFile.lastModified}/>)
          : <div className="upload-preview"><img src={uploadPreview} alt="preview"/></div>
        }
        <input {...getInputProps()}/>
        {isDragActive ? <p>Чтобы загрузить отпустите...</p> : <p>Для загрузки перетащите изображение или кликните </p>}
      </div>
    </div>
  );
};

export default InputFile;
