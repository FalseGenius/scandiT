import React from 'react';
import '../ProductAdd/productadd.css';
import {useForm} from 'react-hook-form';


function DVD({set}) {
  const {register, handleSubmit, watch, formState:{errors}} = useForm();

  return (
    <div id='DVD' className='fields'>
      <div className='fieldsUp'>
        <h3>Size (MB)</h3>
        <input {...register('size', {required:true})} name='size' onChange={set} id='size' type='number' placeholder='#size'/>
      </div>
      <span style={{fontStyle: 'italic'}}>Please provide size (in MB)</span>

    </div>
  )
}

export default DVD;
