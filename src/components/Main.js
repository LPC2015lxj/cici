require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
//获取图片相关的数据
let imageDatas = require('json!../data/imageDatas.json');

/*
imageDatas = (function genImageURL(imageDatasArray){
	for(var i=0,j=imageDatasArray.length;i<j;i++){
		var singleImageData=imageDatasArray[i]
		singleImageData.imageURL = require('../images/'+singleImageData.fileName)
		imageDatasArray[i] = singleImageData
	}
	return imageDatasArray
})(imageDatas)
*/

//ES6
imageDatas = ((imageDatasArray)=>{
	for(let i=0,j=imageDatasArray.length;i<j;i++){
		let singleImageData=imageDatasArray[i]
		singleImageData.imageURL = require('../images/'+singleImageData.fileName)
		imageDatasArray[i] = singleImageData
	}
	return imageDatasArray
})(imageDatas)

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
    	<section className='stage'>
    		<section className='img-sec'></section>
    		<nav className='controller-nav'></nav>
    	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
