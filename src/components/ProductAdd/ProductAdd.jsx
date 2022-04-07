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
    const value = e.target.value;
    setData({...data, [e.target.name]: value});
  };

  const post = () => {
    axios.post('https://juniordevv.online/api/product', data)
    .then(result => {
      if (result.data.Status != 'Invalid') navigate('/');
    });
    dispatch({
      type: 'EMPTY'
    })
    setData({...data, selected: ''});
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
          ? <DVD set={handleChange} />
          :
          data.selected === 'Furniture'
          ? <Furniture  handle={handleChange}/>
          :
          data.selected === 'Book' ? <Book  set={handleChange}/>
          :
          ''
        }
      </form>
    </div>
  )
}

export default ProductAdd;
