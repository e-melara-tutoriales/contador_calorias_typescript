import { useReducer } from 'react'

import { initialState, activityReducer } from './reducers/activity-reducer'
import Form from "./component/Form";
import ActivityList from './component/ActivityList';

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)
  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de Calorias
          </h1>
        </div>
      </header>
      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form 
            state={state}
            dispatch={dispatch}
          />
        </div>
      </section>
      <section className='p-10 mx-auto max-w-4xl bg-gray-100'>
        <ActivityList 
          dispatch={dispatch}
          activities={state.activities} 
        />
      </section>
    </>
  );
}

export default App;
