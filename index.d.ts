import EventEmitter from "eventemitter3";

declare module './package.json' {
  interface PackageJson {
    baseurl: string;
  }

  const packageJson: PackageJson;
  export = packageJson;
}


declare class Client extends EventEmitter {
  constructor(auth?: string);

  getFact(): Promise<Fact>;
  getWaifu(): Promise<Waifu>;
  getQuote(): Promise<Quote>;
  getAngry(): Promise<Angry>;
  getBaka(): Promise<Baka>;
  getBite(): Promise<Bite>;
  getBlush(): Promise<Blush>;
  getBonk(): Promise<Bonk>;
  getBored(): Promise<Bored>;
  getBully(): Promise<Bully>;
  getBye(): Promise<Bye>;
  getChase(): Promise<Chase>;
  getCheer(): Promise<Cheer>;
  getCringe(): Promise<Cringe>;
  getCry(): Promise<Cry>;
  getCuddle(): Promise<Cuddle>;
  getDab(): Promise<Dab>;
  getDance(): Promise<Dance>;
  getDie(): Promise<Die>;
  getDisgust(): Promise<Disgust>;
  getFacepalm(): Promise<Facepalm>;
  getFeed(): Promise<Feed>;
  getGlomp(): Promise<Glomp>;
  getHappy(): Promise<Happy>;
  getHi(): Promise<Hi>;
  getHighfive(): Promise<Highfive>;
  getHold(): Promise<Hold>;
  getHug(): Promise<Hug>;
  getKick(): Promise<Kick>;
  getKill(): Promise<Kill>;
  getKiss(): Promise<Kiss>;
  getLaugh(): Promise<Laugh>;
  getLick(): Promise<Lick>;
  getLove(): Promise<Love>;
  getLurk(): Promise<Lurk>;
  getMidfing(): Promise<Midfing>;
  getNervous(): Promise<Nervous>;
  getNom(): Promise<Nom>;
  getNope(): Promise<Nope>;
  getNuzzle(): Promise<Nuzzle>;
  getPanic(): Promise<Panic>;
  getPat(): Promise<Pat>;
  getPeck(): Promise<Peck>;
  getPoke(): Promise<Poke>;
  getPout(): Promise<Pout>;
  getPunch(): Promise<Punch>;
  getRun(): Promise<Run>;
  getSad(): Promise<Sad>;
  getShoot(): Promise<Shoot>;
  getShrug(): Promise<Shrug>;
  getSip(): Promise<Sip>;
  getSlap(): Promise<Slap>;
  getSleepy(): Promise<Sleepy>;
  getSmile(): Promise<Smile>;
  getSmug(): Promise<Smug>;
  getStab(): Promise<Stab>;
  getStare(): Promise<Stare>;
  getSuicide(): Promise<Suicide>;
  getTease(): Promise<Tease>;
  getThink(): Promise<Think>;
  getThumbsup(): Promise<Thumbsup>;
  getTickle(): Promise<Tickle>;
  getTriggered(): Promise<Triggered>;
  getWag(): Promise<Wag>;
  getWave(): Promise<Wave>;
  getWink(): Promise<Wink>;
  getYes(): Promise<Yes>;
}

interface Fact {
  id: number;
  fact: string;
}

interface Waifu {
  _id: number;
  images: string[];
  names: {
    en: string;
    jp: string;
    alt: string | null;
  };
  from: {
    name: string;
    type: string;
  };
  statistics: {
    fav: number;
    love: number;
    hate: number;
    upvote: number;
    downvote: number;
  };
}

interface Quote {
  id: number;
  quote: string;
  anime: string;
  author: string
}

interface Angry {
  status: number;
  message: object;
}

interface Baka {
  status: number;
  message: object;
}

interface Bite {
  status: number;
  message: object;
}

interface Blush {
  status: number;
  message: object;
}

interface Bonk {
  status: number;
  message: object;
}

interface Bored {
  status: number;
  message: object;
}

interface Bully {
  status: number;
  message: object;
}

interface Bye {
  status: number;
  message: object;
}

interface Chase {
  status: number;
  message: object;
}

interface Cheer {
  status: number;
  message: object;
}

interface Cringe {
  status: number;
  message: object;
}

interface Cry {
  status: number;
  message: object;
}

interface Cuddle {
  status: number;
  message: object;
}

interface Dab {
  status: number;
  message: object;
}

interface Dance {
  status: number;
  message: object;
}

interface Die {
  status: number;
  message: object;
}

interface Disgust {
  status: number;
  message: object;
}

interface Facepalm {
  status: number;
  message: object;
}

interface Feed {
  status: number;
  message: object;
}

interface Glomp {
  status: number;
  message: object;
}

interface Happy {
  status: number;
  message: object;
}

interface Hi {
  status: number;
  message: object;
}

interface Highfive {
  status: number;
  message: object;
}

interface Hold {
  status: number;
  message: object;
}

interface Hug {
  status: number;
  message: object;
}

interface Kick {
  status: number;
  message: object;
}

interface Kill {
  status: number;
  message: object;
}

interface Kiss {
  status: number;
  message: object;
}

interface Laugh {
  status: number;
  message: object;
}

interface Lick {
  status: number;
  message: object;
}

interface Love {
  status: number;
  message: object;
}

interface Lurk {
  status: number;
  message: object;
}

interface Midfing {
  status: number;
  message: object;
}

interface Nervous {
  status: number;
  message: object;
}

interface Nom {
  status: number;
  message: object;
}

interface Nope {
  status: number;
  message: object;
}

interface Nuzzle {
  status: number;
  message: object;
}

interface Panic {
  status: number;
  message: object;
}

interface Pat {
  status: number;
  message: object;
}

interface Peck {
  status: number;
  message: object;
}

interface Poke {
  status: number;
  message: object;
}

interface Pout {
  status: number;
  message: object;
}

interface Punch {
  status: number;
  message: object;
}

interface Run {
  status: number;
  message: object;
}

interface Sad {
  status: number;
  message: object;
}

interface Shoot {
  status: number;
  message: object;
}

interface Shrug {
  status: number;
  message: object;
}

interface Sip {
  status: number;
  message: object;
}

interface Slap {
  status: number;
  message: object;
}

interface Sleepy {
  status: number;
  message: object;
}

interface Smile {
  status: number;
  message: object;
}

interface Smug {
  status: number;
  message: object;
}

interface Stab {
  status: number;
  message: object;
}

interface Stare {
  status: number;
  message: object;
}

interface Suicide {
  status: number;
  message: object;
}

interface Tease {
  status: number;
  message: object;
}

interface Think {
  status: number;
  message: object;
}

interface Thumbsup {
  status: number;
  message: object;
}

interface Tickle {
  status: number;
  message: object;
}

interface Triggered {
  status: number;
  message: object;
}

interface Wag {
  status: number;
  message: object;
}

interface Wave {
  status: number;
  message: object;
}

interface Wink {
  status: number;
  message: object;
}

interface Yes {
  status: number;
  message: object;
}

export = Client;