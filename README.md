# Spotter
An app designed to help gym-goers find workout partners, stay motivated, and achieve their fitness goals.

## Setup

Before starting:

- **Node.js (Latest LTS)** → Install from: [https://nodejs.org/](https://nodejs.org/)
- **Expo Go** on your mobile device → Install from: [Expo Setup Guide](https://docs.expo.dev/get-started/set-up-your-environment/)


Clone the repository to your local machine and navigate into the project folder:
```
$ git clone https://github.com/Spotter-Team/App
$ cd App
```

Navigate to the frontend folder:
```
$ cd frontend
```

Install Frontend Dependencies:
```
$ npm install
```

Create an .env file in the frontend folder:
```
API_BASE_URL=http://<your-local-IP>:3000
```

Navigate to the backend folder:

```
$ cd ..
$ cd backend
```

Install Backend Dependencies

```
$ npm install
```

Generate or download your JWT secret
```
$ node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
$ 9b8add1489bab5c885752a4326bb94c126c619f56945d0c60c1ff1f0341e9658
```

Create an environment variable file (.env) in the 'backend' directory
```
$ touch .env
```

Add variables to your .env file with a text editor
```text
# Nodejs
NODE_ENV=development

# Cryptography
JWT_SECRET=9b8add1489bab5c885752a4326bb94c126c619f56945d0c60c1ff1f0341e9658 # This is just an example secret
DEFAULT_TOKEN_LIFE=8h

# Database Stuff
DB_MODE=local # Options: local
DATA_PATH=data
LOCAL_DB_PATH=data/local.db
LOCAL_DB_USERNAME=test
LOCAL_DB_PASSWORD=somethingSecure*
```

Run the NPM command to initialize the local sqlite environment

```
$ npm run setup-local-db
```

Start the node server

```
$ npm run start
```

Run the app locally from frontend folder:
```
$ npx expo start
```

Open the Expo Go app on your mobile device to view the project.
