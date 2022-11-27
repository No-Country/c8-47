import React from 'react';
import { Feature } from './Feature';

export const FeatureList = () => {
  const featureList = [
    {
      button: 'Ingresa tus datos',
      paragraph: `Crea tu perfil e ingresa tus datos por una única vez,
        nos encargaremos de recordarlos para que no tengas que volver a repetir el proceso.`,
      gif: 'GIF',
    },
    {
      button: 'Aplica las etiquetas',
      paragraph: `Crea tu perfil e ingresa tus datos por una única vez,
        nos encargaremos de recordarlos para que no tengas que volver a repetir el proceso.`,
      gif: 'GIF',
    },
    {
      button: 'Genera tu CV',
      paragraph: `Crea tu perfil e ingresa tus datos por una única vez,
        nos encargaremos de recordarlos para que no tengas que volver a repetir el proceso.`,
      gif: 'GIF',
    },
  ];
  const feature = featureList.map((feat, i) => (
    <Feature
      button={feat.button}
      paragraph={feat.paragraph}
      gif={feat.gif}
      key={i}
    />
  ));

  return <div className=''>{feature}</div>;
};
