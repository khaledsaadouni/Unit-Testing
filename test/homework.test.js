// app.test.js
import { test, expect } from 'vitest';
import { fetchData, processData, processDataAsync, processDataError } from '../homework';

test('Test fetchData with valid URL', async () => {
    const data = await fetchData('https://jsonplaceholder.typicode.com/posts');
    expect(data).not.toBeNull();
    expect(data.length).toBeGreaterThan(0);
});

test('Test processData with valid data', () => {
    const data = [1, 2, 3, 4, 5];
    const result = processData(data);
    expect(result).toBe(15);
});

test('Test processDataAsync with valid data', async () => {
    const data = [10, 20, 30, 40, 50];
    const result = await processDataAsync(data);
    expect(result).toBe(50);
});

test('Test processDataError with invalid data', () => {
    const data = [];
    expect(() => processDataError(data)).toThrow('Invalid data provided.');
});
