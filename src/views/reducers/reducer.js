export const defaultState = {corrupted: true, images:[]}

const reducer = (state=defaultState, action) => {
	switch(action.type){
		case 'corrupt':
			return Object.assign({}, state, {
				corrupted: true
			});

		case 'purify':
			return Object.assign({}, state, {
				corrupted: false
			});

		case 'add_image':
			return Object.assign({}, state, {
				images: state.images.concat([action.img])
			});

		default:
			return state;
	}
}

export default reducer;
