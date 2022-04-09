import React, {useState} from 'react';
import './productadd.css';
import DVD from '../TypeForm/DVD';
import Book from '../TypeForm/Book';
import Furniture from '../TypeForm/Furniture';
import {useStateValue} from '../../StateProvider';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function ProductAdd({data, setData}) {
  const navigate = useNavigate();
  const [state, dispatch] = useStateValue();
  const {register, handleSubmit, watch, formState:{errors}} = useForm();

  const handleChange = (e) => {
    // const value = e.target.value;
    setData({...data, [e.target.name]: e.target.value});
  };

  const post = () => {
    // axios.post('http://localhost:7882/api/product', data)
    axios.post('https://juniordevv.online/api/product', data)
    .then(result => {
      if (result.data.Status != 'Invalid') navigate('/');
    }).catch(err => console.log(err));
    dispatch({
      type: 'EMPTY'
    })
    // setData({...data, selected: ''});
    setData(
      {
        selected: '',
        sku: '',
        name: '',
        price: '',
        size: '',
        weight: '',
        height: '',
        width: '',
        length: ''
      }
    )
  }

  return (
    <div className='productAdd'>
      <form method='POST' id='product_form' onSubmit={handleSubmit(post)}>
        <div className='fieldsUp'>
          <h3>SKU</h3>
          <input {...register('sku', {required:true})} name='sku' onChange={handleChange} id='sku' type='text' placeholder='#sku'/>
        </div>

        <div  className='fieldsUp'>
          <h3>Name</h3>
          <input {...register('name', {required: true})} name='name'  onChange={handleChange} id='name' type='text' placeholder='#name'/>
        </div>

        <div className='fieldsUp'>
          <h3>Price ($)</h3>
          <input {...register('price', {required:true})} name='price'  onChange={handleChange} id='price' type='number' step="0.01" placeholder='#price'/>
        </div>

        <div className='typeField'>
          <label for="type">Type Switcher</label>
          <select {...register('selected', {required:true})}  onChange={handleChange} name="selected" id="productType">
            <option value="">Select</option>
            <option value="DVD">DVD</option>
            <option value="Furniture">Furniture</option>
            <option value="Book">Book</option>
          </select>
        </div>

        {data.selected === 'DVD'
          ?
          <>
            <div className='fieldsUp'>
              <h3>Size (MB)</h3>
              <input {...register('size', {required:true})} name='size' onChange={handleChange} id='size' type='number' placeholder='#size'/>
            </div>
            <span style={{fontStyle: 'italic'}}>Please provide size (in MB)</span>
          </>
          :
          data.selected === 'Furniture'
          ?
          <>
            <div id='Furniture' className='fieldsUp'>
              <h3>Height (CM)</h3>
              <input {...register('height', {required:true})} name='height' onChange={handleChange} id='height' type='number' placeholder='#height'/>
            </div>

            <div className='fieldsUp'>
              <h3>Width (CM)</h3>
              <input {...register('width', {required:true})} name='width' onChange={handleChange} id='width' type='number' placeholder='#width'/>
            </div>

            <div className='fieldsUp'>
              <h3>Length (CM)</h3>
              <input {...register('length', {required:true})} name='length' onInput={handleChange} id='length' type='number' placeholder='#Length'/>
            </div>
            <span style={{fontStyle: 'italic'}}>Please provide dimensions in HxWxL format</span>
          </>
          :
          data.selected === 'Book' ?
          <Book  set={handleChange}/>
          :
          ''
        }
      </form>
    </div>
  )
}

export default ProductAdd;

// <div id='Book'>
//   <div className='fieldsUp'>
//     <h3>Weight (KG)</h3>
//     <input {...register('weight', {required:true})} name='weight' onChange={handleChange} id='weight' type='number'  placeholder='#Weight'/>
//   </div>
//   <span style={{fontStyle: 'italic'}}>Please provide Weight (in Kg)</span>
// </div>
//


// {data.selected === 'DVD'
//   ? <DVD set={handleChange} />
//   :
//   data.selected === 'Furniture'
//   ? <Furniture  handle={handleChange}/>
//   :
//   data.selected === 'Book' ? <Book  set={handleChange}/>
//   :
//   ''
// }
