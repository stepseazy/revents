import {
    combineReducers
} from 'redux'
import {
    reducer as FormReducer
} from 'redux-form'
import testReducer from '../../features/testarea/testReducer'
import eventReducer from '../../features/event/eventReducer'
import {
    Form
} from 'semantic-ui-react';

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer
})

export default rootReducer