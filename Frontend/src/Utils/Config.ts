class Config {
    public groupsUrl = "http://localhost:3001/api/meetings/dev-groups/";
    public meetingsUrl = "http://localhost:3001/api/meetings/";
}

const appConfig = new Config(); // Singleton

export default appConfig;
