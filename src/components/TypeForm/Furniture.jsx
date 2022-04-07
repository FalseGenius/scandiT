import React from 'react';
import '../ProductAdd/productadd.css';
import {useForm} from 'react-hook-form';


function Furniture({handle}) {
  const {register, handleSubmit, watch, formState:{errors}} = useForm();

  return (
    <div>
      <div id='height' className='fieldsUp'>
        <h3>Height (CM)</h3>
        <input {...register('height', {required:true})} name='height' onChange={handle} id='height' type='number' placeholder='#height'/>
      </div>

      <div className='fieldsUp'>
        <h3>Width (CM)</h3>
        <input {...register('width', {required:true})} name='width' onChange={handle} id='width' type='number' placeholder='#width'/>
      </div>

      <div className='fieldsUp'>
        <h3>Length (CM)</h3>
        <input {...register('length', {required:true})} name='length' onInput={handle} id='length' type='number' placeholder='#Length'/>
      </div>
      <span style={{fontStyle: 'italic'}}>Please provide dimensions in HxWxL format</span>

    </div>
  )
}

export default Furniture;
