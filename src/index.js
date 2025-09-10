class MimePost {
  constructor({ apiToken, baseUrl = 'https://api.mimepost.com/v1/' } = {}) {
    if (!apiToken) throw new Error('apiToken is required');
    this.apiToken = apiToken;
    this.baseUrl = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
  }

  async sendEmail(payload) {
    return this.#request('emails/', { method: 'POST', body: payload });
  }

  async listTemplates() {
    return this.#request('templates/', { method: 'GET' });
  }

  async getTemplate(templateUid) {
    if (!templateUid) throw new Error('templateUid is required');
    return this.#request(`templates/${templateUid}`, { method: 'GET' });
  }

  async #request(path, { method = 'GET', body } = {}) {
    const headers = {
      'Content-Type': 'application/json',
      'X-Auth-Token': this.apiToken,
    };
    const options = { method, headers };
    if (body) options.body = JSON.stringify(body);
    const res = await fetch(this.baseUrl + path, options);
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Request failed with status ${res.status}: ${text}`);
    }
    return res.json();
  }
}

module.exports = MimePost;
