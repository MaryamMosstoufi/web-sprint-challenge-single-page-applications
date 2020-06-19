import React, { useState, useEffect } from "react";
import Header from './components/Header.js';
import Form from './components/Form.js';
import formSchema from './validation/formSchema'
import axios from 'axios';
import * as Yup from 'yup'

import './App.css';

const initialFormValues = {
  size: '',
  sauce: {
    pesto: false,
    red: false,
    white: false,
    garlic: false,
    spicy: false,
    bbq: false,
  },
  cheese: {
    asiago: false,
    feta: false,
    gorgonzola: false,
    mozzarella: false,
    parmesan: false,
    ricotta: false,
  },
  instructions: '',
};

const initialFormErrors = {
  size: '',
  sauce: '',
  cheese: '',
  instructions: '',
};

const initialOrders = [];
const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getOrders = () => {
    return (orders)
  };

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/', newOrder)
      .then(response => {
        setOrders([...orders, response.data])
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  };
  const onInputChange = evt => {
    const { name, value } = evt.target
    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  };

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target

    setFormValues({
      ...formValues,
      sauce: {
        ...formValues.sauce,
        [name]: checked,
      },
      cheese: {
        ...formValues.cheese,
        [name]: checked,
      }
    })
  };

  const onSubmit = evt => {
    evt.preventDefault()

    const newOrder = {
      size: formValues.size.trim(),
      sauce: Object.keys(formValues.sauce)
        .filter(sauceName => (formValues.sauce[sauceName] === true)),
      cheese: Object.keys(formValues.cheese)
        .filter(cheeseName => (formValues.sauce[cheeseName] === true)),
      instructions: formValues.instructions,
    }
    postNewOrder(newOrder)
  };

  useEffect(() => {
    getOrders()
  }, []);

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues]);
  return (
    <div>
      <Header />
      <div className='uk-section'>
        <div className='uk-container'>
          <Form
            values={formValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
