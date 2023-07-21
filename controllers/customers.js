import { v4 as uuid } from 'uuid';

let customers = [
    {
        id: uuid(),
        username: 'john_doe',
        age: 30,
    },
    {
        id: uuid(),
        username: 'jane_smith',
        age: 25,
    },
];

export const getCustomers = (req, res) => {
    console.log(`Customers in the database: ${customers}`);
    res.send(customers);
};

export const createCustomer = (req, res) => {
    const customer = req.body;
    customers.push({ ...customer, id: uuid() });
    console.log(`Customer [${customer.username}] added to the database.`);
};

export const getCustomer = (req, res) => {
    res.send(req.params.id);
};

export const deleteCustomer = (req, res) => {
    console.log(`Customer with id ${req.params.id} has been deleted`);
    customers = customers.filter((customer) => customer.id !== req.params.id);
};

export const updateCustomer = (req, res) => {
    const customer = customers.find((customer) => customer.id === req.params.id);
    customer.username = req.body.username;
    customer.age = req.body.age;
    console.log(`Username has been updated to ${req.body.username}. Age has been updated to ${req.body.age}`);
};
