import React from 'react';
import './product.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useStateValue} from '../../StateProvider';


function Product({dat,selected, sku, name, price, size, weight, width, height, length}) {
  const navigate = useNavigate();
  const [state, dispatch] = useStateValue();

  const handleDelete = (e, sku) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      dispatch({
        type: 'TO_DELETE',
        remove: sku,
      })
    } else {
      dispatch({
        type: 'UNCHECKED',
        uncheckedItem: sku,

      })
    }
  }
  return (
    <div className='product'>
      <small  onClick={(e) => handleDelete(e, sku)} className='delete-checkbox'>
        <input value={sku} type='checkbox' />
      </small>
      <div className='productDetail'>
        {selected === 'DVD' ?
          <div className='details'>
            <p>{sku}</p>
            <p>{name}</p>
            <p>{price} $</p>
            <p>{size} MB</p>
          </div>
        :
        selected === 'Furniture' ?
          <div className='details'>
            <p>{sku}</p>
            <p>{name}</p>
            <p>{price} $</p>
            <p>Dimensions: {height} x {width} x {length}</p>
          </div>
        :
        selected === 'Book' ?
          <div className='details'>
            <p>{sku}</p>
            <p>{name}</p>
            <p>{price} $</p>
            <p>{weight} KG</p>
          </div>
        :
        ''
        }
      </div>
    </div>
  )
}

export default Product;
