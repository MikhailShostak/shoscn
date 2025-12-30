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
          color: '#f97316',
        },
        {
          label: 'Vegetables',
          options: ['Carrot', 'Broccoli', 'Spinach'],
          color: '#10b981',
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
          color: '#10b981',
          subgroups: [
            {
              label: 'Fruits',
              options: ['Apple', 'Banana', 'Orange', 'Mango', 'Grape', 'Strawberry', 'Watermelon', 'Pineapple', 'Kiwi', 'Peach'],
            },
            {
              label: 'Vegetables',
              options: ['Carrot', 'Broccoli', 'Spinach', 'Tomato', 'Cucumber', 'Lettuce', 'Pepper', 'Onion', 'Garlic', 'Potato'],
            },
            {
              label: 'Grains',
              options: ['Rice', 'Wheat', 'Oats', 'Barley', 'Quinoa', 'Corn', 'Millet', 'Rye'],
            },
          ],
        },
        {
          label: 'Beverages',
          options: [],
          color: '#3b82f6',
          subgroups: [
            {
              label: 'Hot Drinks',
              options: ['Coffee', 'Tea', 'Hot Chocolate', 'Espresso', 'Cappuccino', 'Latte', 'Mocha'],
            },
            {
              label: 'Cold Drinks',
              options: ['Water', 'Juice', 'Soda', 'Lemonade', 'Iced Tea', 'Smoothie', 'Milkshake'],
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
