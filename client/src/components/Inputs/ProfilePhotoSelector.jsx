import React, { useState } from 'react'
import { useRef } from 'react'
import { LuUser, LuUload, LuTrash } from "react-icons/lu"
const ProfilePhotoSelector = ({ image, setImage }) => {

    const inputRef = useRef(null)
    const [previewUrl, setPreviewUrl] = useState(null)

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // update the image state
            setImage(false)

            // Generate preview URL from the file 
            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview)
        }
    };

    const handleRemoverImage = () => {
        setImage(null)
        setPreviewUrl(null)
    };

    const onChooseFile = () => {
        inputRef.current.click();
    }
    return
    <div className='flex justify-center mb-6'>
        <input type="file"
            accept='image/*'
            ref={inputRef}
            onChange={handleImageChange}
            className='hidden'
        />
        {image ? (
            <div className=''>
                <LuUser className='' />

                <button type='button' className=''
                    onClick={onChooseFile}></button>
                ) : (
                <div className=''>
                    <img src={previewUrl}  />
                </div>
                )
            </div>
            }
    </div>



}

export default ProfilePhotoSelector;