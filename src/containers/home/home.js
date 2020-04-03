import React from 'react'
import './home.scss'

export default function Home() {
  return(
    <div className="home-wrap">
      {/* 背景 */}
      <div className="bg-img"></div>
      {/* mark */}
      <div className="mark"></div>
      {/* 头部 */}
      <div className="header-wrap clb">
        <div className="left-part fl">
          {/*  */}
          <img className="logo" src="https://huaban.com/img/logo_wt.svg" alt="dd"/>
          <a href="/">首页</a>
          <a href="/">发现</a>
        </div>
        <div className="right-part fr">
        
        </div>
      </div>
    </div>
  )
}
