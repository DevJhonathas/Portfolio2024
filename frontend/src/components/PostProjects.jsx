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

//Router Dom
import { NavLink } from 'react-router-dom';

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
      <div className="card-conteiner">
        {photos && photos.map((photo) => (
          <article className="article-photos-projects" key={photo._id}>
            {photo.image && (<img src={`${photos_uploads}${photo.image}`} alt={photo.title} className='card-img'/>)}

            <div className="card-data">
              <h2 className='card-title'>{photo.title}</h2>
              <span className="card-description">{photo.description}</span>
              <span className='card-tags'>{photo.language}</span>
              <ul className='card-list'>
                <li>
                  <NavLink to="/" className="card-buttons">Leia mais</NavLink>
                </li>
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default PostProjects