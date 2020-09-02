

export default function reducer(state = [], action) {
	switch (action.type) {
		case 'ADD': {
			return [...state, action.task]
		}

		case 'FINISH': {
			const {id} = action;
			return setIsDone(id, true);
		}

		case 'UNFINISH': {
			const {id} = action;
			return setIsDone(id, false);
		}

		case 'DELETE':
			return state.filter(task => task.id !== action.id);

		default:
			return state
	}

	function setIsDone(id, isDone) {
		const nextState = state.map(task => {
			if (task.id === id) {
				return {
					...task,
					isDone
				}
			} else {
				return task;
			}
		});
		return nextState;
	}
}