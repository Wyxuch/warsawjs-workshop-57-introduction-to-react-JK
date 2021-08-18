### Od teraz wszystkie zadania robimy w folderze my-app
nie zapomnij najpierw użyć komendy `npm install` 
lub `yarn install`  

###Zadanie 1
W komponencie App stwórz tablicę  
`fruits = ['orange', 'apple', 'plum', 'tomato', 'cucumber']`  
wyświetl jej elementy jako punkty w liście

###Zadanie 2
Stwórz div który będzie czerwonym kwadratem - użyj do tego styli wewnątrz tagu div

###Zadanie 3
Stwórz komponent który będzie przyjmował jako props nazwy owoców z tabliy powyżej, 
generować losową cenę do każdego owoca w zakresie 1-100. Komponent ma renderować nazwę owoca i przycisk "kup" pod spodem - 
po kliknięciu ma wyświetlać w konsoli cenę owoca.  
(Do każdego elementu dodaj unikatowy klucz)

###Zadanie 4
Do komponentu w którym renderowana jest lista z zadania powyżej dodaj state `sum` który będzie przechowywać sumę wszystkich kupionych produktów. Dodaj na dole paragraf wyświetlający sumę.

###Zadanie 5 
Dodaj przycisk "reset" jako oddzielny komponent obok wyświetlanej sumy i w props'ach przekaż mu setter zerujący state `sum`, który będzie uruchamiany po kliknięciu

####Nie usuwaj kodu po skończeniu ostatniego zadania