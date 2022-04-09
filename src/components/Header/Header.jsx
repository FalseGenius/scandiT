import React from 'react';
import './header.css';
import {useNavigate} from 'react-router-dom';
import {useStateValue} from '../../StateProvider';
import axios from 'axios';

function Header({pointer, set, data, setData, title, button1, button2, cancel}) {
  const [{clicked,  allData, checked}, dispatch] = useStateValue();
  const navigate = useNavigate();

  const getData = async () => {
    // await axios.get('http://localhost:7882/api/products/').then((res) => {
    await axios.get('https://juniordevv.online/api/products').then((res) => {
      // setData(res.data);
      dispatch({
        type: 'ADD_ALL',
        all: res.data
      })
    })
    }

  const massDelete = async () => {
    let setter = false;
    let last = checked[checked.length-1];
    await checked.map( async (item) => {
      if (item === last) setter = true;
      await axios.delete(`https://juniordevv.online/api/product/${item}`).then(res => {
      // axios.delete(`http://localhost:7882/api/product/${item}`).then(res => {
        console.log('Successfully deleted the user');
        // dat();
        }

      )
      .catch(error => console.log(error))

      if (setter) getData();
    }

    )

    await dispatch({
      type: 'EMPTY_CHECKED',
      clicked: !clicked
    });
  }
  const handleCancel = () => {
    console.log('cancel0');
    setData({...data, selected: ''});
    navigate('/');
  }
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
