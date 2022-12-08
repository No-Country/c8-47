import { useEffect, useState } from 'react';

import customAxios from '../../Helpers/customAxios';
import { ReactComponent as Spinner } from '../../Assets/svg/spinner.svg';
import { uploadFile } from '../../Utils/S3';
import { FaUserAlt } from 'react-icons/fa';
import './PictureForm.css';

const PictureForm = () => {
  const [newAvatar, setNewAvatar] = useState(null);
  const [avatarFlag, setAvatarFlag] = useState(false);
  const [avatarError, setAvatarError] = useState(null);
  const [loadingAvatar, setLoadingAvatar] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);

  const validateImg = (fileListArrayImg) => {
    const fileTypesAllowed = ['image/jpeg', 'image/png'];

    if (!fileTypesAllowed.includes(fileListArrayImg[0].type)) {
      throw new Error(
        'Formato no soportado. Seleccione una imágen .jpg .jpeg o .png'
      );
    }

    if (fileListArrayImg[0].size > 2405442) {
      throw new Error('La imágen debe pesar 2mb como máximo');
    }
  };

  const handleAvatar = (e) => {
    if (e.target.files.length === 0) return;
    setLoadingAvatar(true);
    const fileListArrayImg = Array.from(e.target.files);

    try {
      validateImg(fileListArrayImg);

      setNewAvatar(fileListArrayImg[0]);
      setAvatarFlag(true);
    } catch (error) {
      setAvatarError(error.message);
      setTimeout(() => setAvatarError(null), 7000);
      setLoadingAvatar(false);
    }
  };

  const uploadAvatar = async () => {
    setAvatarError(null);

    try {
      const { Location: imageUrl } = await uploadFile(newAvatar);

      setAvatarUrl(imageUrl);

      const { data } = await customAxios.post('/user/image', {
        image_url: imageUrl,
      });

      console.log(data);
    } catch (error) {
      setAvatarUrl(null);
      console.log(error);
    } finally {
      setNewAvatar(null);
      setLoadingAvatar(false);
    }
  };

  useEffect(() => {
    if (avatarFlag) {
      setAvatarUrl(URL.createObjectURL(newAvatar));

      uploadAvatar();
      setAvatarFlag(false);
    }
  }, [avatarFlag]);

  return (
    <div>
      <span className='profile-avatar-container'>
        <label className='profile-avatar-container-label' htmlFor='filesButton'>
          {loadingAvatar ? (
            <Spinner className='cho-svg' />
          ) : (
            <>
              {avatarUrl ? (
                <img
                  eslint-disable-next-line
                  global-require
                  src={avatarUrl}
                  referrerPolicy='no-referrer'
                  alt='Foto de perfil'
                />
              ) : (
                <FaUserAlt style={{ color: '#3D3D3D' }} />
              )}

              <span className='profile-avatar-background'>Cambiar foto</span>
            </>
          )}
        </label>
      </span>

      {avatarError === null ? (
        <p className='g-hidden-placeholder'>hidden</p>
      ) : (
        <p className='g-error-input'>{avatarError}</p>
      )}

      <input
        type='file'
        name='image'
        disabled={loadingAvatar}
        accept='image/png, image/jpeg'
        onChange={handleAvatar}
        id='filesButton'
        className='profile-avatar-input'
      />
    </div>
  );
};

export default PictureForm;
