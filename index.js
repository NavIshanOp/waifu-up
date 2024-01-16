const EventEmitter = require("events");
const fetch = require("phin");
const { baseurl } = require("./package.json");

class Client extends EventEmitter {
  /**
   * Represents the main client class.
   * @param {string} [auth] - The authorization token.
   */
  constructor(auth) {
    super();
    this._auth = auth;
  }

  /**
   * Retrieves a fact from the API.
   * @returns {Promise<Fact>} - A promise that resolves to a fact object.
   * @throws {TypeError} - If the authorization token is missing.
   */
  async getFact() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/fact`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    const response = await fetch(requestOptions);
    if (response.statusCode !== 200) {
      switch (response.statusCode) {
        case 404:
          return {
            statusCode: response.statusCode,
            body: response.body,
            error: "Could not find any fact",
          };
        case 502:
          return {
            statusCode: response.statusCode,
            body: response.body,
            error: "Server down",
          };
        default:
          return {
            statusCode: response.statusCode,
            body: response.body,
            error: "Unknown error",
          };
      }
    }

    return {
      id: response.body._id,
      fact: response.body.fact,
    };
  }

  /**
   * Retrieves a waifu from the API.
   * @returns {Promise<Waifu>} - A promise that resolves to a waifu object.
   * @throws {TypeError} - If the authorization token is missing.
   */
  async getWaifu() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/waifu`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    const response = await fetch(requestOptions);
    if (response.statusCode !== 200) {
      switch (response.statusCode) {
        case 404:
          return {
            statusCode: response.statusCode,
            body: response.body,
            error: "Could not find any waifu",
          };
        case 502:
          return {
            statusCode: response.statusCode,
            body: response.body,
            error: "Server down",
          };
        default:
          return {
            statusCode: response.statusCode,
            body: response.body,
            error: "Unknown error",
          };
      }
    }

    return response.body;
  }

  /**
   * Retrieves a quote from the API.
   * @returns {Promise<Quote>} - A promise that resolves to a quote object.
   * @throws {TypeError} - If the authorization token is missing.
   */
  async getQuote() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/quote`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    const response = await fetch(requestOptions);
    if (response.statusCode !== 200) {
      switch (response.statusCode) {
        case 404:
          return {
            statusCode: response.statusCode,
            body: response.body,
            error: "Could not find any quote",
          };
        case 502:
          return {
            statusCode: response.statusCode,
            body: response.body,
            error: "Server down",
          };
        default:
          return {
            statusCode: response.statusCode,
            body: response.body,
            error: "Unknown error",
          };
      }
    }

    return {
      id: response.body._id,
      quote: response.body.quote,
      anime: response.body.anime,
      author: response.body.author,
    };
  }
  /**
   * Retrieves angry-related data from the API.
   * @returns {Promise<Angry>} - A promise that resolves to an angry object.
   * @throws {TypeError} - If the authorization token is missing.
   */
  async getAngry() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/angry`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    try {
      const response = await fetch(requestOptions);

      if (response.statusCode !== 200) {
        throw new Error(`Server responded with status ${response.statusCode}`);
      }

      return response.body; // Assuming the response is already parsed
    } catch (error) {
      throw new Error(error.message);
    }
  }

   /**
   * Retrieves a random anime GIF representing the expression of being a "baka" or an idiot.
   * @returns {Promise<Baka>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */
   async getBaka() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/baka`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    try {
      const response = await fetch(requestOptions);

      if (response.statusCode !== 200) {
        throw new Error(`Server responded with status ${response.statusCode}`);
      }

      return response.body; // Assuming the response is already parsed
    } catch (error) {
      throw new Error(error.message);
    }
  }

   /**
   * Retrieves a random anime GIF representing the expression of being a "baka" or an idiot.
   * @returns {Promise<Bite>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getBite() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/bite`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    try {
      const response = await fetch(requestOptions);

      if (response.statusCode !== 200) {
        throw new Error(`Server responded with status ${response.statusCode}`);
      }

      return response.body; // Assuming the response is already parsed
    } catch (error) {
      throw new Error(error.message);
    }
  }

   /**
   * Retrieves a random anime GIF representing the expression of being a "baka" or an idiot.
   * @returns {Promise<Blush>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getBlush() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/blush`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    try {
      const response = await fetch(requestOptions);

      if (response.statusCode !== 200) {
        throw new Error(`Server responded with status ${response.statusCode}`);
      }

      return response.body; // Assuming the response is already parsed
    } catch (error) {
      throw new Error(error.message);
    }
  }

   /**
   * Retrieves a random anime GIF representing the expression of being a "baka" or an idiot.
   * @returns {Promise<Bonk>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getBonk() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/bonk`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    try {
      const response = await fetch(requestOptions);

      if (response.statusCode !== 200) {
        throw new Error(`Server responded with status ${response.statusCode}`);
      }

      return response.body; // Assuming the response is already parsed
    } catch (error) {
      throw new Error(error.message);
    }
  }

   /**
   * Retrieves a random anime GIF representing the expression of being a "baka" or an idiot.
   * @returns {Promise<Bored>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getBored() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/bored`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    try {
      const response = await fetch(requestOptions);

      if (response.statusCode !== 200) {
        throw new Error(`Server responded with status ${response.statusCode}`);
      }

      return response.body; // Assuming the response is already parsed
    } catch (error) {
      throw new Error(error.message);
    }
  }

   /**
   * Retrieves a random anime GIF representing the expression of being a "baka" or an idiot.
   * @returns {Promise<Bully>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getBully() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/bully`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    try {
      const response = await fetch(requestOptions);

      if (response.statusCode !== 200) {
        throw new Error(`Server responded with status ${response.statusCode}`);
      }

      return response.body; // Assuming the response is already parsed
    } catch (error) {
      throw new Error(error.message);
    }
  }

   /**
   * Retrieves a random anime GIF representing the expression of being a "baka" or an idiot.
   * @returns {Promise<Bye>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getBye() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/bye`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    try {
      const response = await fetch(requestOptions);

      if (response.statusCode !== 200) {
        throw new Error(`Server responded with status ${response.statusCode}`);
      }

      return response.body; // Assuming the response is already parsed
    } catch (error) {
      throw new Error(error.message);
    }
  }

   /**
   * Retrieves a random anime GIF representing the expression of being a "baka" or an idiot.
   * @returns {Promise<Chase>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getChase() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/chase`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    try {
      const response = await fetch(requestOptions);

      if (response.statusCode !== 200) {
        throw new Error(`Server responded with status ${response.statusCode}`);
      }

      return response.body; // Assuming the response is already parsed
    } catch (error) {
      throw new Error(error.message);
    }
  }

   /**
   * Retrieves a random anime GIF representing the expression of being a "baka" or an idiot.
   * @returns {Promise<Cheer>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getCheer() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/cheer`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    try {
      const response = await fetch(requestOptions);

      if (response.statusCode !== 200) {
        throw new Error(`Server responded with status ${response.statusCode}`);
      }

      return response.body; // Assuming the response is already parsed
    } catch (error) {
      throw new Error(error.message);
    }
  }

   /**
   * Retrieves a random anime GIF representing the expression of being a "baka" or an idiot.
   * @returns {Promise<Cringe>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getCringe() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/cringe`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    try {
      const response = await fetch(requestOptions);

      if (response.statusCode !== 200) {
        throw new Error(`Server responded with status ${response.statusCode}`);
      }

      return response.body; // Assuming the response is already parsed
    } catch (error) {
      throw new Error(error.message);
    }
  }

   /**
   * Retrieves a random anime GIF representing the expression of being a "baka" or an idiot.
   * @returns {Promise<Cry>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getCry() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/cry`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    try {
      const response = await fetch(requestOptions);

      if (response.statusCode !== 200) {
        throw new Error(`Server responded with status ${response.statusCode}`);
      }

      return response.body; // Assuming the response is already parsed
    } catch (error) {
      throw new Error(error.message);
    }
  }

   /**
   * Retrieves a random anime GIF representing the expression of being a "baka" or an idiot.
   * @returns {Promise<Cuddle>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getCuddle() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/cuddle`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    try {
      const response = await fetch(requestOptions);

      if (response.statusCode !== 200) {
        throw new Error(`Server responded with status ${response.statusCode}`);
      }

      return response.body; // Assuming the response is already parsed
    } catch (error) {
      throw new Error(error.message);
    }
  }

   /**
   * Retrieves a random anime GIF representing the expression of being a "baka" or an idiot.
   * @returns {Promise<Wink>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getWink() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/wink`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    try {
      const response = await fetch(requestOptions);

      if (response.statusCode !== 200) {
        throw new Error(`Server responded with status ${response.statusCode}`);
      }

      return response.body; // Assuming the response is already parsed
    } catch (error) {
      throw new Error(error.message);
    }
  }

   /**
   * Retrieves a random anime GIF representing the expression of being a "baka" or an idiot.
   * @returns {Promise<Yes>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getYes() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/yes`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    try {
      const response = await fetch(requestOptions);

      if (response.statusCode !== 200) {
        throw new Error(`Server responded with status ${response.statusCode}`);
      }

      return response.body; // Assuming the response is already parsed
    } catch (error) {
      throw new Error(error.message);
    }
  }
}


module.exports = Client;

/**
 * @typedef {object} Fact - Represents a fact object.
 * @property {number} id - The fact ID.
 * @property {string} fact - The fact itself.
 * @typedef {object} Quote - Represents a fact object.
 * @property {number} id - The fact ID.
 * @property {string} quote - The fact itself.
 * @property {string} anime - The anime from where the character is from.
 * @property {string} author - The author of the quote.
 * @typedef {object} Angry - Represents angry-related data object.
 * @property {number} status - The HTTP status code.
 * @property {object} message - The response message.
 * @typedef {object} Baka - Represents data for the "baka" endpoint.
 * @property {number} status - The HTTP status code.
 * @property {object} message - The response message.
 * @typedef {object} Bite - Represents data for the "bite" endpoint.
 * @property {number} status - The HTTP status code.
 * @property {object} message - The response message.
 * @typedef {object} Blush - Represents data for the "blush" endpoint.
 * @property {number} status - The HTTP status code.
 * @property {object} message - The response message.
 * @typedef {object} Bonk - Represents data for the "bonk" endpoint.
 * @property {number} status - The HTTP status code.
 * @property {object} message - The response message.
 */