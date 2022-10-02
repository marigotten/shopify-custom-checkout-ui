import React from 'react';
import {
  useExtensionApi,
  render,
  TextField,
  useTranslate,
} from '@shopify/checkout-ui-extensions-react';
import { useState } from 'react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  const [error, setError] = useState(false);
  const [residentID, setResidentID] = useState('');

  const handleFieldChange = (value) => {
    setResidentID(value);
  };

  return ( 
    <TextField
      label='resident ID'
      value={residentID}
      error={error? 'Please provide a valid ID': false}
      onChange={handleFieldChange}
    />
  );
}