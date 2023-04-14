# ☕ YCoffee

Node.js / typescript / WebSocket server for Y-coffee

L'objectif de **_YCoffe_** est d'informer les étudiants du campus d'Ynov sur le statut de la machine à café via une application web et mobile, informant si la machine à café est opérationnelle ou non.

Les caractéristiques sont les suivantes : [features](#-features)

Ce projet a été réalisé lors du challenge 48h

#

## 🧑🏽‍💻 `Developpement Context`

### _Team :_

- KAUFFMANT Thomas - B1 A
- LE BARAZER Manon - B1 B
- LYONNET Amaury - B2 A
- DUJOUR Lénaïc - B3 Dev A
- SEDDIK Mehdi - B3 Dev A
- ALONSO Sebastian - B3 Cyber
- ROMY Nicolas - B3 Infra

### _Project management :_

- Notion

### _Project communication :_

- Discord

#

## 🧱 `Features`

- 🌐 Affiche l'état de la machine à café
- ⏏️ Envoie d'une notification quand la machine change d'état

#

## 🏛️ `Technology used`

- Kotlin

#

## 🏗️ `Getting started`

Vous aurez besoin de Node.js ( v16 ou plus récent ), de yarn

et bien évidemment, le [Serveur websocket](https://github.com/Challenge-48h-Ynov-coffeeUP/node-server)

Dans le répertoire du projet, vous pouvez lancer les commandes suivantes :

```md
yarn install
``` 
Pour installer les dépendances
puis
```md
yarn start
``` 
Pour lancer l'app en local
Vous pourrez ensuite voir l'application [ici](http://localhost:3000)

If the websocket server is hosted on a different port/ip, you can change it in the .env file
Si le serveur WebSocket est exposé sur un port ou une ip différente, vous pouvez configurer cela dans le fichier `.env` a la racine du projet 

exemple:
```md
REACT_APP_backend=ws://192.168.1.6:8999
```
