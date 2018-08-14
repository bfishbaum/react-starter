import React from 'react';
import { connect } from 'react-redux';
import { annoyotron, psychotron } from '../../../images/index';

const App = ({corrupted, images, corrupt, purify, fetchImage}) => {
	const renderImage = (blob) => {
		let url = URL.createObjectURL(blob);
		return (
			<img src={url} />
		);
	}

	return (
		<div>
			<img src={corrupted ? psychotron : annoyotron} />
			<button onClick={fetchImage}>
				Fetch Image
			</button>
			<button onClick={!corrupted ? corrupt : purify}>
				{!corrupted ? 'Corrupt' : 'Purify'}
			</button>
			{images.map(renderImage)}
		</div>
	);
}

const mapStateToProps = state => {
	console.log(state);
	return {
		corrupted: state.corrupted,
		images: state.images
	}
}

const mapDispatchToProps = dispatch => {
	return {
		corrupt: () => {
			dispatch({type: 'corrupt'});
		},
		purify: () => {
			dispatch({type: 'purify'});
		},
		fetchImage: () => {
			dispatch({type: 'fetch_image', url: '/getImage'});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
