import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const YourComponent = () => {
  const [content, setContent] = useState('');

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const handleImageUpload = (file) => {
    // Обработка загруженного изображения
    // Вы можете выполнить необходимую обработку, например, загрузить изображение на сервер
    // и получить URL изображения, а затем добавить его в содержимое редактора

    // Пример сохранения изображения на сервере и получения URL
    uploadImageToServer(file)
      .then(imageUrl => {
        // Добавить URL изображения в содержимое редактора
        const updatedContent = `${content}<img src="${imageUrl}" alt="Uploaded Image" />`;
        setContent(updatedContent);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const uploadImageToServer = (file) => {
    // Реализуйте функцию загрузки изображения на ваш сервер и получения URL
    // Вы можете использовать Fetch API или библиотеку для отправки запроса на сервер
    // Верните Promise, который разрешается URL изображения или отклоняется в случае ошибки

    return new Promise((resolve, reject) => {
      // Ваш код загрузки изображения на сервер
      // resolve(imageUrl) в случае успеха
      // reject(error) в случае ошибки
    });
  };

  return (
    <div>
      <ReactQuill
        value={content}
        onChange={handleEditorChange}
        modules={{
            toolbar: {
              container: [

                ['link', 'image', 'resize'], // Опции для вставки и изменения размера изображений

                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['blockquote', 'code-block'],
              
                [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                [{ 'direction': 'rtl' }],                         // text direction
              
                [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              
                [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                [{ 'font': [] }],
                [{ 'align': [] }],
              
                ['clean'] 
              ],
              handlers: {
                image: handleImageUpload, // Обработчик кнопки вставки изображения
              },
            },
          }}
        formats={[
            'bold',
            'italic',
            'underline',
            'strike',
            'image',
          ]}
        onImageUpload={handleImageUpload}
        placeholder="Введите текст..."
      />
    </div>
  );
};

export default YourComponent;
