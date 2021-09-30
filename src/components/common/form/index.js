import React from 'react';
import Button from '../button';
import InputContainer from './style';

export default function SearchBox() {
  const [value, setValue] = React.useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <InputContainer>
        <input
          type="text"
          placeholder="Nome super hero"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button name="Procurar" type="submit" />
      </InputContainer>
    </form>
  );
}
