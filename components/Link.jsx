import React from 'react';
import {useRouter} from 'next/router';

export default function Link ({path, title, linkClass}) {
    const router = useRouter()
  
    const handleClick = (e) => {
      e.preventDefault()
      router.push(path)
    }
  
    return (
      <a href={path} onClick={handleClick} className={linkClass}>
        {title}
      </a>
    );
} 

