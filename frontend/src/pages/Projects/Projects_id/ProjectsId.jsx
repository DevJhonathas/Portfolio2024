import React from 'react'
import { useEffect } from "react";

// redux
import { getUserPhotos } from "../../../slices/photoSlice";

//hook
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import { photos_uploads } from '../../../utils/config';

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
          <p>{photo.title}</p>
          {photo.image && (<img src={`${photos_uploads}${photo.image}`} alt={photo.title} className='card-img'/>)}
          <p>{photo.description}</p>
          <p>{photo.language}</p>
        </div>
      ))}
    </div>
  )
}

export default Projects_Id