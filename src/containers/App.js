import React from 'react';
import './App.scss';
import Home from './home/home'
import '../assets/css/base.css'
import Map from './map/map'

document.title = '花瓣_陪你做生活的设计师'

// https://hbfile.huabanimg.com/img/home/banner/274be43cd0040dcbce838ead7584956330bfafe789242  背景图片
// https://hbfile.huabanimg.com/img/home/banner/5380a6dcf1389ac866bbb4eccea44e6978260379c130f
function App() {
  return (
    <>
      <Home/>
      <Map/>
    </>
  );
}

export default App;
