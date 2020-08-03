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
            <h2>@eunoia.mia</h2>
            <div className="display">
            { photos && (
                photos.map( (photo) => {
                    console.log(photo.node.display_url)
                    return(
                        <img alt="imagen de instagram" className="display-image" src={photo.node.display_url} height="300px" />
                    );
                })
            )}
            </div>
        </div>
    )
}

export default InstagramDisplay;