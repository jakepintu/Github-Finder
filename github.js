class Github {
    constructor() {
        this.client_id = "9834b197f2d5424a31b8";
        this.client_secret = "2ed508f6e22b03764b4e29d8f232f9379e1cac58";
    }

    async getUsers(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}

