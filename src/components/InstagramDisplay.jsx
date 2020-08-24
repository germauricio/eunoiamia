import React, { useState, useEffect } from 'react';
import getInstagramData from '../services/instagramService';

function InstagramDisplay(){
    const [photos, setPhotos] = useState(false);

    useEffect(() => {
        (async () => {        
            const gettedPhotos = await getInstagramData();
            setPhotos(gettedPhotos);
        })()
      }, []);

    return(
        <div>
            <h2 className="h1-info">@eunoia.mia</h2>
            <div className="display">
            { photos && (
                photos.map( (photo) => {
                    return(
                        <a 
                            href={`https://www.instagram.com/p/${photo.node.shortcode}/`} 
                            target="_blank"
                            rel="noopener noreferrer">
                            <img alt="imagen de instagram" className="display-image" src={photo.node.display_url} />
                        </a>    
                    );
                })
            )}
            </div>
        </div>
    )
}

export default InstagramDisplay;