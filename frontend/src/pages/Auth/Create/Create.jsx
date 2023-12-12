import React, {useRef, useState, useEffect} from 'react'

//CSS
import "./Create.css"

//Hooks
import { useDispatch, useSelector } from 'react-redux';
import MessageValidations from '../../../components/Messages/MessageValidations';
import {useParams} from "react-router-dom";

//redux
import { publishPhoto, resetMessage } from '../../../slices/photoSlice';
import { getUserDetails } from '../../../slices/userSlice';

const Create = () => {
  const {id} = useParams();
  const dispath = useDispatch();
  
  const {user: userAuth} = useSelector((state) => state.auth)
  const {loading:loadingPhoto, message:messagePhoto, error: errorPhoto} = useSelector((state) => state.photo)

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [language, setLanguage] = useState("")

  //New form and edit form refs
  const newPhotoForm = useRef()

  const handleFile = (e) => {
    //image preview
    const image = e.target.files[0];

    setImage(image);
  }

  const submitHandle = (e) => {
    e.preventDefault();

    const photoData = {
      title,
      image,
      description,
      language
    };
    
    //build form data
    const formData = new FormData()
    const photoFormData = Object.keys(photoData).forEach((key) => formData.append(key, photoData[key]))

    formData.append("photo", photoFormData);
    
    dispath(publishPhoto(formData))

    setTitle("")
    setDescription("")
    setLanguage("")

    setTimeout(() => {
      dispath(resetMessage());
    }, 2000);
  };
  return (
    <div className='container_create'>
      {id === userAuth._id && (
        <>
          <div className='new-photo' ref={newPhotoForm}>
            <h3>Criação de um novo projeto</h3>
            <form onSubmit={submitHandle}>
              <label>
                <span>Título para a foto:</span>
                <input type="text" placeholder='Insira um título' onChange={(e) => setTitle(e.target.value)} value={title || ""}/>
              </label>
              <label>
                <span>Descrição:</span>
                <textarea placeholder='Insira um Descrição' onChange={(e) => setDescription(e.target.value)} value={description || ""}/>
              </label>
              <label>
                <span>Image:</span>
                <input type='file'onChange={handleFile}/>
              </label>
              <label>
                <span>Quais linguagens foram utilizadas:</span>
                <input type="text" placeholder='Insira as linguagens de programação/texto:' onChange={(e) => setLanguage(e.target.value)} value={language || ""}/>
              </label>
              {!loadingPhoto && <input type="submit" value="Postar"/>}
              {loadingPhoto && <input type="submit" disabled value="Aguarde..."/>}
            </form>
          </div>
          {errorPhoto && <MessageValidations msg={errorPhoto} type="error" />}
          {messagePhoto && <MessageValidations msg={messagePhoto} type="success" />}

        </>
      )}

    </div>
  )
}

export default Create