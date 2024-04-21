# TP 1 test logiciel 
## Écriture de tests unitaires en JavaScript avec Vitest
### Activité-1
1. Créer un nouveau projet TP1 avec votre IDE préféré
2. Créer un fichier `math.js` dans lequel ajouter une fonction `add` qui calcule la somme de deux entiers.
![image1](https://github.com/khaledsaadouni/Unit-Testing/assets/69814778/892a0ae4-a4ae-4308-aa98-c252fa16e0ed)
3. Créer un dossier `test`, sous lequel créer un fichier que vous nommez `math.test.js`.
4. Suivre les étapes mentionnées dans la section 2 pour installer Vitest.
5. Modifier le fichier package.json pour ajouter la section "scripts", Ajoutez la section "scripts" dans votre fichier package.json  :

![image](https://github.com/khaledsaadouni/Unit-Testing/assets/69814778/9fef1b92-cc40-4bb0-ac2d-78587cea91e6)

7. Copier le code ci-dessus pour tester la fonction `add`:
   
![image](https://github.com/khaledsaadouni/Unit-Testing/assets/69814778/8030281f-3958-4ca6-8dce-89b05d0c7f9d)

En effet, la fonction "test" prend en paramètres une description du test à effectuer et une fonction de test qui contient le code du test lui-même. Dans ce cas, le test vérifie si l'addition de 2 et 3 à l'aide de la fonction "add" produit le résultat attendu, qui est 5. Si le résultat de l'addition est effectivement égal à 5, le test passe ; sinon, il échoue. La fonction expect(value).toBe(expected): Vérifie si value est strictement égal à expected.

9. Exécuter le test avec la commande `npm run test` ### Utilisation des assertions pour vérifier les résultats attendus.

![image](https://github.com/khaledsaadouni/Unit-Testing/assets/69814778/6941d406-c758-4e5e-814c-34ad40829287)

et voila le test passe.

### Activité-1 : Écrire des tests unitaires pour une fonction de manipulation de chaînes.

1.La fonction transformer qui transforme une chaine de caractères en Majuscule :

![image](https://github.com/khaledsaadouni/Unit-Testing/assets/69814778/4e6cc097-3672-422b-840e-b4629ba23d48)

2.Trois cas de tests unitaires pour la fonction transformer :
   - Une chaîne vide.
   - Une chaîne avec des caractères en minuscules.
   - Une chaîne avec des caractères spéciaux.

![image](https://github.com/khaledsaadouni/Unit-Testing/assets/69814778/19f387ce-382c-46f8-8106-1b934f680d0a)

3. Couverture des cas de test

![image](https://github.com/khaledsaadouni/Unit-Testing/assets/69814778/691e4bba-eb9c-4f85-926d-1ff7819ae8fc)

### Exercice 2 : Écrire des tests unitaires pour une fonction de tri.

1. La fonction trier en JS.
   ![image](https://github.com/khaledsaadouni/Unit-Testing/assets/69814778/ae493795-779c-4180-8e55-dbbc35435f02)

3.  cas de test.

   ![image](https://github.com/khaledsaadouni/Unit-Testing/assets/69814778/8bd5af9a-2783-405e-a79e-5c81dd2bc981)
   
La fonction expect(value).toEqual(expected): Vérifie si value est égal à expected en effectuant une comparaison en profondeur pour les tableaux.
5. Couverture des cas de test :

![image](https://github.com/khaledsaadouni/Unit-Testing/assets/69814778/50118c8e-0c7f-4f2b-aaa3-91b5bc7defdc)

### Exercice 3 : Test au valeurs limites : Boundary testing.

1.La fonction isPriceInRange(price, min, max) vérifie si un prix donné se situe dans une plage donnée.

![image](https://github.com/khaledsaadouni/Unit-Testing/assets/69814778/8ae24f56-55a0-4aa8-8125-2f7b1cd8b0ad)

2.Les cas de test pour cette fonction en couvrant les limites de la plage :

![image](https://github.com/khaledsaadouni/Unit-Testing/assets/69814778/620c65dc-0772-4164-b567-23ade1dcaf0d)



