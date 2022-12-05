import React from 'react';
import { Banner } from '../Components/Banner/Banner';
import { FeatureList } from '../Components/Feature/FeatureList';
import { Paragraph } from '../Components/Feature/Paragraph';

export default function Landing({ onView }) {
  return (
    <>
      <Banner onView={onView} />
      <FeatureList />
      <Paragraph />
    </>
  );
}
