import React from 'react';
import './header.css';
import {useNavigate} from 'react-router-dom';
import {useStateValue} from '../../StateProvider';
import axios from 'axios';

function Header({data, setData, title, button1, button2, cancel}) {
  const [{clicked,  allData, checked}, dispatch] = useStateValue();

  const navigate = useNavigate();
  const post = () => {
    console.log(data);

    axios.post('https://juniordevv.online/api/product', data)
    .then(result => {
      if (result.data.Status != 'Invalid') navigate('/');

    });

    dispatch({
      type: 'EMPTY'
    })

  }
  // http://localhost:7882/api/products/
  const massDelete = async () => {
    await checked.map( async (item) => {
      await axios.delete(`https://juniordevv.online/api/product/${item}`).then(res => {
      // axios.delete(`http://localhost:7882/api/product/${item}`).then(res => {
        console.log('Successfully deleted the user');
        // dat();
      }).then(res => {
        window.location.reload(false);
      })
      .catch(error => console.log(error))
    })

    dispatch({
      type: 'EMPTY_CHECKED',
    });


    // dispatch({
    //   type: 'CLICKED',
    //   change: !clicked
    // })
    // window.location.reload(false);
  }

  const handleCancel = () => {
    console.log('cancel0');
    setData({...data, selected: ''});
    navigate('/');
  }

  // <button onClick={() => cancel=== false ? navigate('/addproduct') : post()}>{button1}</button>
  // <button form='product_form' type='submit' onClick={() => cancel=== false ? navigate('/addproduct') : post()}>{button1}</button>

  return (
    <div className='header'>
      <h1>{title}</h1>
      <div className='headerLeft'>
        {cancel === false ? <button onClick={() => navigate('/addproduct')}>{button1}</button> : <button form='product_form' type='submit'>{button1}</button>}
        <button onClick={() => cancel === true ? handleCancel() : massDelete()} id='delete-product-btn'>{button2}</button>
      </div>
    </div>
  )
}

export default Header;
