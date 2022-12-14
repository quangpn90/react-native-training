const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const queryString = require('query-string');

const server = jsonServer.create();
const router = jsonServer.router('./server/db.json');
const userDB = JSON.parse(fs.readFileSync('./server/users.json', 'UTF-8'));
const middleware = jsonServer.defaults();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(middleware);

const SECRET_KEY = 'SecretKey@321';

const expiresIn = '1d';

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => (decode !== undefined ? decode : err));
}

// Check if the user exists in database
function existUser({ username, password }) {
  const result = userDB.users.find(user => user.username == username && user.password == password);
  console.log(result);
  return result;
}

// Register New User
server.post('/auth/register', (req, res) => {
  console.log('register endpoint called; request body:');
  console.log(req.body);
  const { email, password } = req.body;

  if (isAuthenticated({ email, password }) === true) {
    const status = 401;
    const message = 'Email and Password already exist';
    res.status(status).json({ status, message });
    return;
  }

  fs.readFile('./users.json', (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }

    // Get current users data
    // eslint-disable-next-line no-redeclare
    var data = JSON.parse(data.toString());

    // Get the id of last user
    var last_item_id = data.users[data.users.length - 1].id;

    //Add new user
    data.users.push({ id: last_item_id + 1, email: email, password: password }); //add some data
    // eslint-disable-next-line no-unused-vars
    var writeData = fs.writeFile('./users.json', JSON.stringify(data), (err, result) => {
      // WRITE
      if (err) {
        const status = 401;
        const message = err;
        res.status(status).json({ status, message });
        return;
      }
    });
  });

  // Create token for new user
  const access_token = createToken({ email, password });
  console.log('Access Token:' + access_token);
  res.status(200).json({ access_token });
});

// Login to one of the users from ./users.json
server.post('/auth/login', (req, res) => {
  console.log('login endpoint called; request body:');
  console.log(req.body);
  const { username, password } = req.body;
  const user = existUser({ username, password });
  if (!user) {
    const status = 401;
    const message = 'Incorrect username or password';
    res.status(status).json({ status, message });
    return;
  }
  const access_token = createToken({ username, password });
  console.log('access_token:' + access_token);
  console.log('user:' + JSON.stringify(user));
  res.status(200).json({
    access_token,
    user: {
      id: user.id,
      avatar: user.avatar,
      username: user.username,
      gender: user.gender,
      email: user.email,
      phone: user.phone,
      address: user.address,
      role: user.role
    }
  });
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  console.log('============headers', req.headers.authorization);
  return next();
});

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
    req.body.updatedAt = Date.now();
  } else if (req.method === 'PATCH') {
    req.body.updatedAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

// In this example, returned resources will be wrapped in a body property
router.render = (req, res) => {
  const headers = res.getHeaders();

  const totalCountHeader = headers['x-total-count'];
  if (req.method === 'GET' && totalCountHeader) {
    const queryParams = queryString.parse(req._parsedUrl.query);
    const response = {
      data: res.locals.data,
      pagination: {
        _page: Number.parseInt(queryParams._page) || 1,
        _limit: Number.parseInt(queryParams._limit) || 10,
        _totalRows: Number.parseInt(totalCountHeader)
      }
    };
    return res.jsonp(response);
  }

  res.jsonp(res.locals.data);
};

// Use default router

const port = 3000;

server.use(router);
server.listen(port | 3000, () => {
  console.log(`JSON Server is running at ${port}`);
});
