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
  useEffect(() => {
    dispatch(getUserPhotos(id));
  }, [dispatch, id]);

  return (
    <div className='container-postProjects'>
      <div className="card-conteiner">
        {photos && photos.map((photo) => (
          <article className="article-photos-projects" key={photo._id}>
            <NavLink to={`/projects/${photo._id}`}>
              {photo.image && (<img src={`${photos_uploads}${photo.image}`} alt={photo.title} className='card-img'/>)}
            </NavLink>
            <div className="card-data">
              <h2 className='card-title'>{photo.title}</h2>
              <span className="card-description">{photo.description}</span>
              <ul className='card-list'>
                <li className='card-list-text'>
                  <NavLink to={`/projects/${photo._id}`} className="card-buttons">Leia mais</NavLink>
                </li>
                <li className='card-list-text'><a href="https://github.com/DevJhonathas" className="card-buttons">Repositórios</a></li>
              </ul>   
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default PostProjects