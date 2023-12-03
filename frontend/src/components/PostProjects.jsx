import React from 'react';
import { useEffect } from "react";

//CSS
import "./PostProjects.css";

// redux
import { getUserPhotos } from "../slices/photoSlice";
import { getUserDetails } from '../slices/userSlice';

//hook
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import { uploads } from '../utils/config';

const PostProjects = () => {
  const {id} = useParams();
  const dispatch = useDispatch();

  const {user: userAuth} = useSelector((state) => state.auth)
  const {photos} = useSelector((state) => state.photo);

  useEffect(() => {
    dispatch(getUserDetails(id));
    dispatch(getUserPhotos(id));
  }, [dispatch, id]);

  return (
    <div className='container-postProjects'>
        <div className="photos-projects">
          {photos && photos.map((photo) => (
            <div className="photo" key={photo._id}>
              <img src={`${uploads}/photos/${photo.image}`} alt={photo.title} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default PostProjects