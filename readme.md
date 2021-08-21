### 1. "zForkuj" repozytorium
1. Wejdź na [repozytorium projektu](https://github.com/Wyxuch/warsawjs-workshop-57-introduction-to-react-JK)
2. Kliknij fork (prawy górny róg strony) żeby móc wrzucić swoje zmiany na GH i na wszelki wypadek gdyby zostało w przyszłości usunięte
3. Sklonuj swoje repozytorium

### 2. Najpierw robimy zadania z folderu `zadania`

### 3. Bombowy warsztat
1. W konsoli przejdź do głównego folderu
2. Stwórz nowy projekt w React z pomocą boilerplate'a przygotowanego przez jego twórców:
   1. Użyj komendy `npx create-react-app warsztat` (warsztat to nazwa nowego folderu w którym będzie projekt)
   2. `cd warsztat` (lub tak jak nazwałeś folder)
   3. `rm -rf .git` żeby można było potem umieścić projekt na swoim gicie - jest to podejście zalecane przez autorów
3. Wrzuć do folderu z warsztatem zawartość folderu `/Do wklejenia`
4. Przerób komponent App na klasowy i zaimportuj App.css jeżeli go tam nie ma (reszta komponentów będzie komponentami funkcyjnymi)
5. Stwórz folder `components` a w nim trzy pliki z komponentami funkcyjnymi
   1. `Navigation.jsx`
   2. `Game.jsx`
   3. `Tile jsx`
6. Struktura projektu ma wyglądać następująco:

```
index.js
└── <App/> class: App
    ├── <Navigation/> class: 'navigation'
    │   ├── <div>
    │   │   └── <input> with label type: 'number' for rows
    │   ├── <div>
    │   │   └── <input> with label type: 'number' for columns
    │   ├── <div>
    │   │   └── <input> with label type: 'number' for bombs
    │   └── <button> for starting the game    
    └── <div> class: 'gameWrapper'
        └── <Game/> class: 'game'
            ├── <div> class: 'top'
            │   ├── <div> class: 'topCounter' for flags
            │   ├── <button> class: 'smileyWrapper'
            │   └── <div> class: 'topCounter' for bombs
            └── <div> class: 'main'
                └── based on rows and columns
                    └── <div> class: 'row'
                        └── <Tile/>
```

7. W koponencie App w state mają się znajdować liczba wierszy, kolumn i bomb w postaci int'a (nadaj im minimalną możliwą wartość polecam 3 wiersze, 9 kolumn i 1 bomba) oraz board który ma być pustą tablicą.
8. Stwórz uniwersalny setter który będzie przyjmować klucz w postaci stringa i value po czym będzie aktualizować state.
9. Zrób tak aby nawigacja aktualizowała wartości a po kliknięciu start aktualizwoała board funkcją z folderu utils `calcBoard(rows, columns, bombs)`
10. komponent game ma przyjmować jako props: ilość bomb, board i setter
11. Game w state powinno przechowywać:
   - czy gra jest przegrana jako Boolean
   - czy gra jest wygrana jako Boolean
   - `revealed` - to będzie służyć nam do odkrywania pustych pól planszy i przechowywać będzie `coordinates` ostatnio odkrytego pola
   - ilość bomb oflagowanych
   - ilość flag na planszy
12. Zrób tak aby game dynamicznie na podstawie board generowało Pola planszy
13. W trakcie zajęć wyślę wam snippet z komponentem Tile i będziecie musieli tak naprawić komponent game żeby Tile działało :)
14. Zrób tak aby gra się restartowała po kliknięciu 'start' - w `<Tile /> `znajdziesz podpowiedź jak wygląda restart
