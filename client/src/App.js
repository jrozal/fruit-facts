import { useState, useEffect } from 'react';
import axios from 'axios';
import FruitGallery from './components/FruitGallery';
import Header from './components/Header';
import Loading from './components/Loading';
import Footer from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/data');
      setLoading(false);
      setData(response.data);
      console.log(response.data)
    }

    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header/>
      {loading && <Loading/>}
      {!loading && <FruitGallery data={data}/>}
      <Footer/>
    </div>
  );
}

export default App;
