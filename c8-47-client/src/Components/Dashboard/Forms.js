import React from 'react';
import ProfileForm from './ProfileForm';
import AddressForm from './AddressForm';
import SocialForm from './SocialForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillForm from './SkillForm';
import LanguageForm from './LanguageForm';

const Forms = ({ name }) => {
  switch (name) {
    case 'profile':
      return <ProfileForm />;
    case 'location':
      return <AddressForm />;
    case 'socials':
      return <SocialForm />;
    case 'work':
      return <ExperienceForm />;
    case 'other':
      return;
    case 'education':
      return <EducationForm />;
    case 'certificates':
      return;
    case 'skills':
      return <SkillForm />;
    case 'languages':
      return <LanguageForm />;
    default:
      return null;
  }
};

export default Forms;
