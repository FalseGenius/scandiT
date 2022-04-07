import React from 'react';
import '../ProductAdd/productadd.css';
import {useForm} from 'react-hook-form';


function Book({set}) {
  const {register, handleSubmit, watch, formState:{errors}} = useForm();

  return (
    <div id='Book' className='fields'>
      <div className='fieldsUp'>
        <h3>Weight (KG)</h3>
        <input {...register('weight', {required:true})} name='weight' onChange={set} id='weight' type='number'  placeholder='#size'/>
      </div>
      <span style={{fontStyle: 'italic'}}>Please provide Weight (in Kg)</span>
    </div>
  )
}

export default Book;
