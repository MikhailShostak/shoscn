'use client';

import { useState } from 'react';

import { SearchableDropdown } from '@/components/ui/input/searchable-dropdown';

export function SearchableDropdownBasic() {
  const [value, setValue] = useState('');

  return (
    <SearchableDropdown
      value={value}
      onChange={setValue}
      options={['Apple', 'Banana', 'Orange', 'Mango', 'Grape']}
      placeholder="Select a fruit..."
    />
  );
}

export function SearchableDropdownWithLabel() {
  const [value, setValue] = useState('');

  return (
    <SearchableDropdown
      label="Favorite Fruit"
      value={value}
      onChange={setValue}
      options={['Apple', 'Banana', 'Orange']}
      placeholder="Select..."
    />
  );
}

export function SearchableDropdownWithGroups() {
  const [value, setValue] = useState('');

  return (
    <SearchableDropdown
      value={value}
      onChange={setValue}
      groups={[
        {
          label: 'Fruits',
          options: ['Apple', 'Banana', 'Orange'],
        },
        {
          label: 'Vegetables',
          options: ['Carrot', 'Broccoli', 'Spinach'],
        },
      ]}
      placeholder="Select..."
    />
  );
}

export function SearchableDropdownWithSubgroups() {
  const [value, setValue] = useState('');

  return (
    <SearchableDropdown
      value={value}
      onChange={setValue}
      groups={[
        {
          label: 'Food',
          options: [],
          subgroups: [
            {
              label: 'Fruits',
              options: ['Apple', 'Banana', 'Orange'],
            },
            {
              label: 'Vegetables',
              options: ['Carrot', 'Broccoli', 'Spinach'],
            },
          ],
        },
      ]}
      placeholder="Select..."
    />
  );
}

export function SearchableDropdownKeepOpen() {
  const [value, setValue] = useState('');

  return (
    <SearchableDropdown
      value={value}
      onChange={setValue}
      options={['Apple', 'Banana', 'Orange']}
      placeholder="Select..."
      keepOpenOnSelect
    />
  );
}
