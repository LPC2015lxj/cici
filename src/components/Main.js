require('normalize.css/normalize.css');
require('styles/App.scss');

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
})(imageDatas);

//单个图片组件
class ImgFigure extends React.Component {

	render(){
		return (
			<figure className='img-figure'>
				<img src={this.props.data.imageURL}
					alt={this.props.data.title}
				/>
				<figcaption>
					<h2>{this.props.data.title}</h2>
				</figcaption>
			</figure>
		)
	}
}

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {

  	var controllerUnits = [],
  		imgFigures = [];

  	// imageDatas.forEach(function(value){
  	// 	imgFigures.push(<ImgFigure data={value}/>)
  	// })

  	imageDatas.forEach((value)=>{
  		imgFigures.push(<ImgFigure data={value}/>)
  	})

    return (
    	<section className='stage'>
    		<section className='img-sec'>
    			{imgFigures}
    		</section>
    		<nav className='controller-nav'>
    			{controllerUnits}
    		</nav>
    	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
