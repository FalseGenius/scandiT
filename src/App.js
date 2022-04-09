import {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ProductAdd from './components/ProductAdd/ProductAdd';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useStateValue} from './StateProvider';


function App() {
  const [state, dispatch] = useStateValue();
  const [data, setData] = useState({
    selected: '',
    sku: '',
    name: '',
    price: '',
    size: '',
    weight: '',
    height: '',
    width: '',
    length: ''
  });

  const [pointer, setPointer] = useState(false);

  // console.log(data);
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path='/'
            element={[<Header pointer={pointer} set={setPointer} data={data} setData={setData} title='Product List' button1='ADD' button2='MASS DELETE' cancel={false}/>,
          <Home pointer={pointer} />, <Footer footer={state.allData.length > 8 ? 'footer': 'footer3'}/>]}
          />

          <Route path='/addproduct'
            element={[<Header pointer={pointer} set={setPointer} data={data} setData={setData} title='Product Add' button1='Save' button2='Cancel' cancel={true}/>
            ,<ProductAdd data={data} setData={setData} />, <Footer footer='footer2' />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
