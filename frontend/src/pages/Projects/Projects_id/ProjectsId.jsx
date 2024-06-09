import React from 'react'
import { useEffect } from "react";

// redux
import { getUserPhotos } from "../../../slices/photoSlice";

//hook
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import { photos_uploads } from '../../../utils/config';

//CSS
import "./ProjectsId.css";

//Router Dom
// import { NavLink } from 'react-router-dom';

const Projects_Id = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {photos} = useSelector((state) => state.photo);
    
    useEffect(() => {
      dispatch(getUserPhotos(id));
    }, [dispatch, id]);
    
  return (
    <div className='container-ProjectId'>
      {photos.map((photo) => photo._id === id && (
        <div className='container-ProjectId' key={photo._id}>
          <div className='title-project'>
            <p>{photo.title}</p>
          </div>
          <div className="img-project">
            <a href="https://github.com/DevJhonathas" target='_blank'>{photo.image && (<img src={`${photos_uploads}${photo.image}`} alt={photo.title} className='card-img-project'/>)}</a>
          </div>
          <div className="card-data-project">
            <div className="info-project">
              <p>{photo.description}</p>
              <p>Linguagens/Bibliotecas/Banco de dados: <span>{photo.language}</span></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects_Id