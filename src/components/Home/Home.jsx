import React, {useEffect, useState} from 'react';
import './home.css';
import axios from 'axios';
import {data1, data2, data3} from '../../dummyData';
import Product from '../Product/Product';
import {useStateValue} from '../../StateProvider';


function Home({pointer}) {
  // const [data, setData] = useState([]);
  const [{allData, clicked, checked}, dispatch] = useStateValue();
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

  useEffect(() => {
    getData();
  }, [])


  return (
    <div className='home'>
      {allData.map((item, idx) => (
        <Product
          dat={getData}
          key={idx}
          selected={item.Selected}
          sku={item.SKU}
          name={item.Name}
          price={item.Price}
          size={item.Size}
          weight={item.Weight}
          width={item.Width}
          height={item.Height}
          length={item.Length}
          />
      ))}
    </div>
  )
}

export default Home;
