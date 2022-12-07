import React from 'react';
import { Feature } from './Feature';
import ingresa from "../../Assets/Images/Ilus_ingresa.svg"
import genera from "../../Assets/Images/Ilus_genera.svg"
import blanca from "../../Assets/Images/Ilus_blanca.svg"

export const FeatureList = () => {
  const featureList = [
    {
      button: 'Ingresa tus datos',
      paragraph: `Crea tu perfil e ingresa tus datos por una única vez,
        nos encargaremos de recordarlos para que no tengas que volver a repetir el proceso.`,
      gif: ingresa,
    },
    {
      button: 'Aplica las etiquetas',
      paragraph: `Crea tu perfil e ingresa tus datos por una única vez,
        nos encargaremos de recordarlos para que no tengas que volver a repetir el proceso.`,
      gif: blanca,
    },
    {
      button: 'Genera tu CV',
      paragraph: `Crea tu perfil e ingresa tus datos por una única vez,
        nos encargaremos de recordarlos para que no tengas que volver a repetir el proceso.`,
      gif: genera,
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

  return (
    <div className=' grid place-items-center container mx-auto '>{feature}</div>
  );
};
