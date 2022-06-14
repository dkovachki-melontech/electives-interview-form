import './App.css';
import { useState } from 'react';
import ClassesList from './components/ClassesList';
import Form from './components/Form';

function App() {
  const [inputs, setInputs] = useState([
    {
      id: new Date().valueOf().toString(),
      title: '',
      description: '',
    },
  ]);

  const [classesData, setClassesData] = useState([]);

  const handleChange = (e, id) =>
    setInputs((current) =>
      current.map((input) =>
        input.id === id ? { ...input, [e.target.name]: e.target.value } : input
      )
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    setClassesData(inputs);
  };

  const handleAddInputs = () =>
    setInputs((current) => [
      ...current,
      {
        id: new Date().valueOf().toString(),
        title: '',
        description: '',
      },
    ]);

  return (
    <div className="App">
      <h1>Classes</h1>
      <Form
        inputs={inputs}
        onChange={handleChange}
        onSubmit={handleSubmit}
        addInputs={handleAddInputs}
      />
      <ClassesList classesList={classesData} />
    </div>
  );
}

export default App;
