const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 5000;
const dotenv = require('dotenv');

dotenv.config();
// Use CORS middleware
app.use(cors()); // This will allow all origins by default

app.use(express.json()); // To parse JSON bodies

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define your send-otp route here
app.post('/api/send-otp', require('./pages/api/send-otp'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});








// const express = require('express');
// const next = require('next');
// const passport = require('passport');
// const session = require('express-session');
// const cors = require('cors'); // Import the cors package
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// // const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// const PORT = process.env.PORT || 5000;


// // app.use(cors()); // This will allow all origins by default

// // app.use(express.json());

// // app.post('/api/send-otp', require('./pages/api/send-otp'));

// passport.use(new GoogleStrategy({
//     clientID: 'YOUR_GOOGLE_CLIENT_ID',
//     clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
//     callbackURL: '/auth/google/callback', // Notice relative path
//   },
//   (accessToken, refreshToken, profile, done) => {
//     // Store user profile here if needed (e.g., into database)
//     return done(null, profile);
//   }
// ));

// // Serialize and deserialize user into session
// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

// app.prepare().then(() => {
//   const server = express();

//   // Session middleware
//   server.use(session({
//     secret: 'your-secret-key',
//     resave: false,
//     saveUninitialized: true,
//   }));

//   // Initialize passport
//   server.use(passport.initialize());
//   server.use(passport.session());

//   // Google OAuth route
//   server.get('/auth/google',
//     passport.authenticate('google', {
//       scope: ['profile', 'email'],
//     })
//   );

//   // Google OAuth callback
//   server.get('/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: '/login' }),
//     (req, res) => {
//       // Successful authentication
//       res.redirect('/');
//     }
//   );

//   // Catch all other requests and pass them to Next.js
//   server.all('*', (req, res) => {
//     return handle(req, res);
//   });

//   server.listen(PORT, (err) => {
//     if (err) throw err;
//     console.log(`Server running on http://localhost:${PORT}`);
//   });
// });
