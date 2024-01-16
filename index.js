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
   * @returns {Promise<Dab>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

     async getDab() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/dab`,
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
   * @returns {Promise<Dance>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getDance() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/dance`,
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
   * @returns {Promise<Die>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

     async getDie() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/die`,
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
   * @returns {Promise<Disgust>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getDisgust() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/disgust`,
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
   * @returns {Promise<Facepalm>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

     async getFacepalm() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/facepalm`,
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
   * @returns {Promise<Feed>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getFeed() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/feed`,
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
   * @returns {Promise<Glomp>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

     async getGlomp() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/glomp`,
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
   * @returns {Promise<Happy>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getHappy() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/happy`,
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
   * @returns {Promise<Hi>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

     async getHi() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/hi`,
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
   * @returns {Promise<Highfive>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getHighfive() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/highfive`,
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
   * @returns {Promise<Hug>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

     async getHug() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/hug`,
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
   * @returns {Promise<Kick>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getKick() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/kick`,
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
   * @returns {Promise<Kill>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

     async getKill() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/kill`,
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
   * @returns {Promise<Kiss>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getKiss() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/kiss`,
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
   * @returns {Promise<Laugh>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

     async getLaugh() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/laugh`,
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
   * @returns {Promise<Lick>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getLick() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/lick`,
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
   * @returns {Promise<Love>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

    async getLove() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/love`,
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
   * @returns {Promise<Lurk>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getLurk() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/lurk`,
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
   * @returns {Promise<Midfing>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

    async getMidfing() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/midfing`,
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
   * @returns {Promise<Nervous>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getNervous() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/nervous`,
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
   * @returns {Promise<Nom>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

    async getNom() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/nom`,
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
   * @returns {Promise<Nope>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getNope() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/nope`,
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
   * @returns {Promise<Nuzzle>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

    async getNuzzle() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/nuzzle`,
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
   * @returns {Promise<Panic>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getPanic() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/panic`,
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
   * @returns {Promise<Pat>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

    async getPat() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/pat`,
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
   * @returns {Promise<Peck>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getPeck() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/peck`,
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
   * @returns {Promise<Poke>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

    async getPoke() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/poke`,
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
   * @returns {Promise<Pout>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getPout() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/pout`,
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
   * @returns {Promise<Punch>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

    async getPunch() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/punch`,
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
   * @returns {Promise<Run>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getRun() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/run`,
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
   * @returns {Promise<Sad>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

    async getSad() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/sad`,
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
   * @returns {Promise<Shoot>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getShoot() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/shoot`,
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
   * @returns {Promise<Shrug>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

    async getShrug() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/shrug`,
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
   * @returns {Promise<Sip>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getSip() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/sip`,
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
   * @returns {Promise<Slap>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

    async getSlap() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/slap`,
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
   * @returns {Promise<Sleepy>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getSleepy() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/sleepy`,
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
   * @returns {Promise<Smile>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

    async getSmile() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/smile`,
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
   * @returns {Promise<Smug>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getSmug() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/smug`,
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
   * @returns {Promise<Stab>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

    async getStab() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/stab`,
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
   * @returns {Promise<Stare>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getStare() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/stare`,
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
   * @returns {Promise<Suicide>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

    async getSuicide() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/suicide`,
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
   * @returns {Promise<Tease>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getTease() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/tease`,
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
   * @returns {Promise<Think>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

    async getThink() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/think`,
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
   * @returns {Promise<Thumbsup>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getThumbsup() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/thumbsup`,
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
   * @returns {Promise<Tickle>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

    async getTickle() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/tickle`,
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
   * @returns {Promise<Triggered>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getTriggered() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/triggered`,
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
   * @returns {Promise<Wag>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

    async getWag() {
      if (!this._auth) {
        throw new TypeError("Missing authorization token");
      }
  
      const requestOptions = {
        url: `${baseurl}/wag`,
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
   * @returns {Promise<Wave>} - A promise that resolves to an object containing anime GIF data.
   * @throws {TypeError} - If the authorization token is missing.
   */

  async getWave() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/wave`,
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
