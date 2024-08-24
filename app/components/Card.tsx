'use client'

import { useState } from 'react';
import { CardBody, CardHead } from './'

interface Props {
  value: number;
}

export const Card = ({ value }: Props) => {
  const [ counter, setCounter ] = useState( value );

  const onAdd = () => setCounter( counter + 1 );
  const onSubstract = () => setCounter( counter - 1 );
  
  const onReset = () => setCounter( value );

  return (
    <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
      <div></div>

      <div className="dark h-full">
        <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
              Counter
            </div>
          </div>
          
          <div className="mb-5">
            <CardHead value={ counter } />
            
            <CardBody
              onAdd={ onAdd }
              onReset={ onReset }
              onSubstract={ onSubstract }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
