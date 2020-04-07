import React, {useEffect, useState} from 'react'
import './map.scss'
import EventEmitter from '../../actions/events'

function mapLoad() {
  let url = 'https://webapi.amap.com/maps?v=1.4.15&key=81a2d49290cd8c6b5864b64af39e8e3b&callback=mapApiReady';
  let jsapi = document.createElement('script');
  jsapi.charset = 'utf-8'
  jsapi.src = url
  document.head.appendChild(jsapi)
}

function initMap() {
  return new window.AMap.Map('map', {
    zoom: 7.5,
    zooms: [3, 9],
    // center: [106, 25],
    resizeEnable: true,
    mapStyle: 'amap://styles/1d04f5c84c31649d68c0912a8465796a'
  })
}

export default function Map(props) {
  mapLoad()
  // const [map, setMap] = useState(null)
  // 只在挂载完成执行
  useEffect(() => {
    console.log('effect & []')
    window.mapApiReady  = function() {
      let map = initMap()
      // setMap(map)
      EventEmitter.emit('mapReady', map)
    }
  }, [])

  return(
    <div className="map-wrap" id="map">

    </div>
  )
}

