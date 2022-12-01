import React from 'react';

import { ImLocation } from 'react-icons/im';
import { IoShareSocialSharp, IoPersonSharp } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { GiSkills, GiConversation } from 'react-icons/gi';
import { BsJournalPlus } from 'react-icons/bs';

const Icon = ({ name }) => {
  switch (name) {
    case 'profile':
      return <IoPersonSharp />;
    case 'location':
      return <ImLocation />;
    case 'socials':
      return <IoShareSocialSharp />;
    case 'work':
      return <MdWork />;
    case 'other':
      return <BsJournalPlus />;
    case 'education':
      return <FaUserGraduate />;
    case 'certificates':
      return <AiFillSafetyCertificate />;
    case 'skills':
      return <GiSkills />;
    case 'languages':
      return <GiConversation />;
    default:
      return null;
  }
};

export default Icon;
