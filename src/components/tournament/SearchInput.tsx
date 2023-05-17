import React, { ChangeEventHandler } from 'react';

import Input from '../Input';

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return <Input placeholder="Search tournaments..." onChange={onChange} />;
};

interface SearchInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default SearchInput;
