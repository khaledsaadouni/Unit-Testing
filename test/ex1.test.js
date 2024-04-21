// stringUtils.test.js
import { test, expect } from 'vitest';
import { transformer } from '../ex1';

test('Test de la fonction transformer avec une chaîne vide', () => {
    const result = transformer('');
    expect(result).toBe('');
});

test('Test de la fonction transformer avec une chaîne en minuscules', () => {
    const result = transformer('hello');
    expect(result).toBe('HELLO');
});

test('Test de la fonction transformer avec une chaîne contenant des caractères spéciaux', () => {
    const result = transformer('@#$%^');
    expect(result).toBe('@#$%^');
});
