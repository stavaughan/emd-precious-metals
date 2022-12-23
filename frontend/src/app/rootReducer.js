// Users and authentication
import settingsReducer from '../features/settings/settingsSlice';
import metalsReducer from '../features/metals/metalsSlice';

const rootReducer = {
    setting: settingsReducer,
	metal: metalsReducer,
}

export default rootReducer
