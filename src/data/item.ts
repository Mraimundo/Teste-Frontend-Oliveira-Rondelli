import { v4 as uuidv4 } from 'uuid';

import { Item } from '../types/item';

export const items: Item[] = [
    { id: uuidv4(), date: new Date(2022, 0, 5), category: 'food', title: 'McDonalds', value: 32.12 },
    { id: uuidv4(), date: new Date(2022, 0, 5), category: 'food', title: 'Burguer King', value: 28 },
    { id: uuidv4(), date: new Date(2022, 0, 15), category: 'rent', title: 'Aluguel APT', value: 2300 },
    { id: uuidv4(), date: new Date(2022, 0, 15), category: 'salary', title: 'Salário ACME', value: 4500 },
];