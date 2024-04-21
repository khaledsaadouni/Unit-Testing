// ex4.test.js
import { test, expect } from 'vitest';
import { fetchRandomUser } from '../ex4';

test('Test fetchRandomUser pour vérifier les données renvoyées', async () => {
    const user = await fetchRandomUser();
    expect(user).to.be.an.instanceOf(Object);
    expect(user).to.contain.keys(['name', 'email', 'dob', 'picture']);
});
