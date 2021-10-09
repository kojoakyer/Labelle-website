import React, { useState, useEffect } from 'react'
 import {ImageData} from './GalleryData'
 import './Gallery.css'
 import './Tagbutton.css'
 import TagButton from './TagButton'
 import { SRLWrapper } from "simple-react-lightbox";

function GalleryImgage() {

    const [tag, setTag]=useState('all');
    const [filterimage, setFilterimage]=useState([]);

    useEffect(()=>{
        tag === 'all' ? setFilterimage(ImageData) : setFilterimage(ImageData.filter(image => image.tag === tag))
    },
    [tag]);

    const options={
        buttons:{
            showDownloadButton: false
        }

    }

    return (
        <div className="" handleSetTag={setTag}>
            <div className="tags">
              <TagButton name='all' handleSetTag={setTag} tagActive={tag === 'all' ? 'true' :'false'} />
              <TagButton name='Hosting' handleSetTag={setTag} tagActive={tag === 'Hosting' ? 'true' :'false'}  />
              <TagButton name='Ushering' handleSetTag={setTag} tagActive={tag === 'Ushering' ? 'true' :'false'} />
              <TagButton name='Events' handleSetTag={setTag} tagActive={tag === 'Events' ? 'true' :'false'} />
            </div>
            <SRLWrapper options={options}>
               <div className='gallery'>
                  {/* <h2 className='gallery_h2'>Gallery</h2> */}
                   {filterimage.map((image, index)=>{
                       return(
                          <div key={image.id} className="img">
                            <a href={image.imageSrc}>
                             <img src={image.imageSrc} alt="" />
                            </a> 
                           </div>
                        )
                    })}
               </div>
            </SRLWrapper>
        </div>

    )
}

export default GalleryImgage
