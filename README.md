<h3 align="center"><strong>Generate random stuff with a huge database.</strong></h3>
<center><strong>Powered by <a href="https://waifu.it/" target="_blank">Waifu.it</a></strong></center>
<br>

Need support? _[Soon]()_

### First make sure you have a [Waifu.it](https://waifu.it/) API Token. Join _[this](https://discord.gg/yyW389c)_ discord server to get one.

## Installation:

### NPM

```bash
$ npm install waifu-up
```

### YARN

```bash
$ yarn add waifu-up
```                                                                                                                                                                                

## Usage:

```javascript
const Client = require("waifu-up");
const api = new Client("YOUR TOKEN");

api.getFact().then((res) => console.log(res));

// Returns with:
{
  id: 5,
  fact: 'TEZUKA Osamu is the most famous manga artist in Japan.',
}
```
### Wanna take refrence from endpoints? [ClickHere](https://raw.githubusercontent.com/NavIshanOp/waifu-up/master/__tests__/endpoints.js)

## Functions

| **Functions** | **Description**                                              |
| :-----------: | ------------------------------------------------------------ |
|    getFact    | Generate random anime facts.                                 |
|    getWaifu   | Generate random anime waifu.                                 |
|    getQuote   | Generate anime quote.                                        |
|    getAngry   | This endpoint retrieves a random anime GIF that portrays an angry reaction.|
|    getBaka    | Get a random anime GIF representing the expression of being a "baka" or an idiot.|
|    getBite    | Explore a random anime GIF that showcases a biting action.   |
|    getBlush   | Get a random anime GIF showcasing a blushing expression.     |
|    getBonk    | Obtain a random anime GIF capturing a bonking action.        |
|    getBored   | Provides a random anime GIF displaying a bored expression.   |
|    getBully   | Retrieve a random anime GIF that illustrates a bullying action.|
|     getBye    | Obtain a random anime GIF depicting a goodbye gesture.       |
|    getChase   | Get a random anime GIF showcasing a chasing action.          |
|    getCheer   | Retrieve a random anime GIF representing a cheering expression.|
|   getCringe   | Returns a random anime GIF with a cringing reaction.         |
|     getCry    | Get a random anime GIF with a crying reaction.               |
|   getCuddle   | Obtain a random anime GIF depicting a cuddling action.       |
|     getDab    | Get a random anime GIF with a dabbing action.                |
|    getDance   | Retrieve a random anime GIF featuring a dancing action.      |
|     getDie    | Obtain a random anime GIF depicting a dying action.          |
|   getDisgust  | Get a random anime GIF with a disgusted reaction.            |
|  getFacepalm  | Retrieve a random anime GIF depicting a facepalm reaction.   |
|    getFeed    | Get a random anime GIF with a feeding action.                |
|   getGlomp    | Retrieve a random anime GIF featuring a glomping action.     |
|    getHappy   | Obtain a random anime GIF showcasing a happy expression.     |
|      getHi    | Get a random anime GIF with a greeting gesture.              |
|   getHighfive  | Retrieve a random anime GIF capturing a high five action.   |
|     getHold   | Obtain a random anime GIF depicting a holding action.        |
|     getHug    | Get a random anime GIF featuring a hugging action.           |
|     getKick   | Retrieve a random anime GIF showcasing a kicking action.     |
|     getKill   | Obtain a random anime GIF with a killing action.             |
|     getKiss   | Get a random anime GIF depicting a kissing action.           |
|    getLaugh   | Retrieve a random anime GIF showcasing a laughing reaction.  |
|     getLick   | Obtain a random anime GIF with a licking action.             |
|     getLove   | Get a random anime GIF depicting a loving expression.        |
|     getLurk   | Retrieve a random anime GIF featuring a lurking action.      |
|   getMidfing   | Returns a random anime GIF with a middle finger gesture.    |
|   getNervous   | Get a random anime GIF portraying a nervous expression.     |
|     getNom    | Retrieve a random anime GIF showcasing a nomming action.     |
|     getNope   | Obtain a random anime GIF representing a "nope" reaction.    |
|    getNuzzle  | Get a random anime GIF depicting a nuzzling action.          |
|    getPanic   | Retrieve a random anime GIF showing a panic reaction.        |
|     getPat    | Get a random anime GIF featuring a patting action.           |
|     getPeck   | Retrieve a random anime GIF showcasing a pecking action.     |
|     getPoke   | Obtain a random anime GIF with a poking action.              |
|     getPout   | Get a random anime GIF featuring a pouting expression.       |
|    getPunch   | Retrieve a random anime GIF illustrating a punching action.  |
|      getRun   | Get a random anime GIF showcasing a running action.          |
|      getSad   | Retrieve a random anime GIF representing a sad expression.   |
|    getShoot   | Returns a random anime GIF depicting a shooting action.      |
|     getShrug  | Get a random anime GIF with a shrugging gesture.             |
|      getSip   | Retrieve a random anime GIF showcasing a sipping action.     |
|     getSlap   | Obtain a random anime GIF illustrating a slapping action.    |
|    getSleepy  | Get a random anime GIF featuring a sleepy expression.        |
|    getSmile   | Retrieve a random anime GIF with a smiling expression.       |
|     getSmug   | Get a random anime GIF showcasing a smug expression.         |
|     getStab   | Obtain a random anime GIF depicting a stabbing action.       |
|    getStare   | Get a random anime GIF featuring a staring expression.       |
|   getSuicide  | Retrieve a random anime GIF related to suicide interactions. |
|     getTease  | Obtain a random anime GIF with a teasing action.             |
|     getThink  | Get a random anime GIF showcasing a thinking expression.     |
|   getThumbsup | Retrieve a random anime GIF with a thumbs-up gesture.        |
|    getTickle  | Get a random anime GIF illustrating a tickling action.       |
|   getTriggered | Returns a random anime GIF representing a triggered reaction.|
|     getWag    | Get a random anime GIF showcasing a wagging action.          |
|     getWave   | Get a random anime GIF with a waving gesture.                |
|     getWink   | Obtain a random anime GIF featuring a winking expression.    |
|      getYes   | Get a random anime GIF expressing a positive affirmation.    |


## Credits

### (Waifu.it wrapper)[https://github.com/kyrea/waifu.it]
