
import { test, expect } from 'vitest';
import { trier } from '../ex2';

test('Test de la fonction trier avec un tableau déjà trie', () => {
    const result = trier([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('Test de la fonction trier avec un tableau inversé', () => {
    const result = trier([5, 4, 3, 2, 1]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('Test de la fonction trier avec des éléments non numériques', () => {
    const result = trier(['a', 'b', 'c']);
    expect(result).toEqual(['a', 'b', 'c']);
});
