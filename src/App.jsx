import React from 'react';
import ContextApi from './components/Context';
import ApiList from './components/ApiList';
import Form from './components/Form';

function App() {
  return (
    <div>
      <ContextApi>
        <Form />
        <ApiList />
      </ContextApi>
    </div>
  );
}

export default App;
