
import { test, expect } from 'vitest';
import { isPriceInRange } from '../ex3';

test('Test isPriceInRange avec price égal à min', () => {
    const result = isPriceInRange(10, 10, 20);
    expect(result).toBe(true);
});

test('Test isPriceInRange avec price égal à max', () => {
    const result = isPriceInRange(20, 10, 20);
    expect(result).toBe(true);
});

test('Test isPriceInRange avec price juste en dessous de min', () => {
    const result = isPriceInRange(9, 10, 20);
    expect(result).toBe(false);
});

test('Test isPriceInRange avec price juste au-dessus de max', () => {
    const result = isPriceInRange(21, 10, 20);
    expect(result).toBe(false);
});

test('Test isPriceInRange avec price dans la plage', () => {
    const result = isPriceInRange(15, 10, 20);
    expect(result).toBe(true);
});

test('Test isPriceInRange avec price en dehors de la plage', () => {
    const result = isPriceInRange(5, 10, 20);
    expect(result).toBe(false);
});
