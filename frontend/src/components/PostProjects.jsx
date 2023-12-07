import React from 'react';
import { useEffect } from "react";

//CSS
import "./PostProjects.css";

// redux
import { getUserPhotos } from "../slices/photoSlice";

//hook
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import { photos_uploads } from '../utils/config';

const PostProjects = () => {
  const {id} = useParams();
  const dispatch = useDispatch();

  const {photos} = useSelector((state) => state.photo);
  console.log(photos)
  useEffect(() => {
    dispatch(getUserPhotos(id));
  }, [dispatch, id]);

  return (
    <div className='container-postProjects'>
        <div className="photos-projects">
        {photos && photos.map((photo) => (
            <div className="photo" key={photo.id}>
              {photo.image && (<img src={`${photos_uploads}${photo.image}`} alt={photo.title} />)}
            </div>
          ))}
        </div>
    </div>
  )
}

export default PostProjects