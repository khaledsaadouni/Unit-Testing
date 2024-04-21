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

9. Exécuter le test avec la commande `npm run test` ### Utilisation des assertions pour vérifier les résultats attendus.

En effet, la fonction "test" prend en paramètres une description du test à effectuer et une fonction de test qui contient le code du test lui-même. Dans ce cas, le test vérifie si l'addition de 2 et 3 à l'aide de la fonction "add" produit le résultat attendu, qui est 5. Si le résultat de l'addition est effectivement égal à 5, le test passe ; sinon, il échoue. Cette fonction de test est un élément essentiel du processus de développement logiciel qui garantit que chaque composant du logiciel fonctionne comme prévu.

![image](https://github.com/khaledsaadouni/Unit-Testing/assets/69814778/6941d406-c758-4e5e-814c-34ad40829287)

et voila le test passe.

### Activité-1

