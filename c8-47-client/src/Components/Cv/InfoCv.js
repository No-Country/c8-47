import React from 'react'


export const InfoCv = () => {
    const datosCv = [
        {
          posicion: "Full Stack",
          generado: "Generado",
          enviado: "Enviado",
          entrevista: "Entrevista",
          rechazados: "Rechazados"
    
        }
      ];

  return (
    <div>
        {datosCv.map(datos =>(
            <>
            
                <div className=' grid gap-1.5 pb-10 dark:text-white'>
                    <div className=' flex items-center justify-between' ><p>{datos.posicion}</p> <span>2</span> </div>
                    <div className=' flex items-center justify-between' ><p>{datos.generado}</p> <span>2</span> </div>
                    <div className=' flex items-center justify-between' ><p>{datos.enviado}</p> <span>2</span> </div>
                    <div className=' flex items-center justify-between' ><p>{datos.entrevista}</p> <span>2</span> </div>
                    <div className=' flex items-center justify-between' ><p>{datos.rechazados}</p> <span>2</span> </div>

                </div>
            </>
        ) )}
    </div>
  )
}
