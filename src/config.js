export default {
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_7AyB3ayTH",
    APP_CLIENT_ID: "1ai0k234knq4lhd38rpdjdsfam",
    IDENTITY_POOL_ID: "us-east-2:ae08c48e-ed7b-4cc8-b745-0c3bc83ac0a5",
    DB_URI: "mongodb+srv://arose5:ZaraYaqob14$3@ramblerpy-5rd9x.mongodb.net/test?retryWrites=true&w=majority"
  },

  spotify: {
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    CLIENT_ID: "f6e60525270a4e698fa22aca0313a6f2",
    // REDIRECT_URI: "https://ramblerfy.com/",
    REDIRECT_URI: "http://localhost:3000/",
    SCOPES: [
              "user-read-currently-playing",
              "user-read-playback-state"
    ]
  }
};
