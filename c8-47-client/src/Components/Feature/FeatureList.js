import React from 'react';
import { Feature } from './Feature';
import ingresa from '../../Assets/Images/Ilus_ingresa.svg';
import genera from '../../Assets/Images/Ilus_genera.svg';
import blanca from '../../Assets/Images/Ilus_blanca.svg';

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
      paragraph: `Completa los campos de texto, nosotros vamos organizar tu información y hacer que destaques en el área que prefieras, ¡para eso puedes crear varios CV!`,
      gif: blanca,
    },
    {
      button: 'Genera tu CV',
      paragraph: `Genera un CV dinámico, listo para descargar en PDF y enviar a esas propuestas que llaman tu atención.`,
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
