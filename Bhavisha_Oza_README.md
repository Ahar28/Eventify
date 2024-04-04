# Assignment 3

## **Author**

Name: Bhavisha Oza \
Banner ID: B00935827 \
Email ID: bhavisha.oza@dal.ca \
Date Created: 31 March 2024 \
Last Modification Date: 3 April 2024

# Eventify: Event Management System

## Overview

Eventify is a comprehensive event management system designed to simplify and enhance the experience of organizing and attending events. Whether it's a corporate conference, a music concert, or a community gathering, Eventify offers a suite of features to manage events from start to finish. Our intuitive platform allows users to create, promote, and manage events with ease, ensuring a seamless experience for both organizers and attendees.

## Technologies Used

- [React](https://legacy.reactjs.org/docs/getting-started.html/)
- [React Router](https://reactrouter.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Taildwind CSS](https://tailwindcss.com/)
- [Material UI](https://material-ui.com/)
- [Axios](https://www.npmjs.com/package/react-axios)

## Built With

- [React](https://reactjs.org/docs/getting-started.html) - The web framework used
- [npm](https://docs.npmjs.com/) - Dependency Management

## Deployement

Eventify application is deployed on Netlify.

[remarkable-torte-09a5d1.netlify.app](https://remarkable-torte-09a5d1.netlify.app/)

Backend is deployed on Render

[https://eventify-2f9d.onrender.com](https://eventify-2f9d.onrender.com)

## GitLab individual branch URL for Assignment 3

[https://git.cs.dal.ca/asolanki/csci-5709_grp-10/-/tree/Bhavisha](https://git.cs.dal.ca/asolanki/csci-5709_grp-10/-/tree/Bhavisha)

## GitLab group URL for Assignment 3

[git.cs.dal.ca/asolanki/csci-5709_grp-10](https://git.cs.dal.ca/asolanki/csci-5709_grp-10)

Project Features URL:

1. https://eventify-sepia-nu.vercel.app/auth/register
2. https://eventify-sepia-nu.vercel.app/auth/login
3. https://eventify-sepia-nu.vercel.app/auth/forgot-password
4. https://eventify-sepia-nu.vercel.app/auth/reset-password

## Getting Started

To get started with Eventify, follow these simple steps:

1. Clone the repository to your local machine:

```bash
git clone https://git.cs.dal.ca/asolanki/csci-5709_grp-10
```

2. Redirect into `client-app` directory.

```bash
cd client-app
```

3.  Install dependencies

```bash
npm install
```

4. Start project on localhost

```bash
npm start
```

5. (Optional) You can build project as below

```bash
npm run build
```

## Feature and its related tasks developed by Bhavisha Oza

### Feature:

1. **UserProfile**
2. **UserManagement**

### Related Tasks:

- Signup for new user
- Login existing user
- Forgot password for existing user
- Reset password for existing user
- View user profile
- Update user profile

## List of files authored by Bhavisha Oza

### Frontend

- client-app/src/components/SignUp/index.tsx
- client-app/src/components/Login/index.tsx
- client-app/src/components/ForgotPassword/index.tsx
- client-app/src/components/ResetPasswordForm/index.tsx
- client-app/src/pages/SignUp/index.tsx
- client-app/src/pages/Authentication/index.tsx
- client-app/src/pages/UserProfile/index.tsx
- client-app/src/services/UserService.ts

### Backend

- server-app/src/api/controllers/auth/index.ts
- server-app/src/api/controllers/auth/login.ts
- server-app/src/api/controllers/user/index.ts
- server-app/src/api/controllers/user/user.ts
- server-app/src/api/routes/auth/index.ts
- server-app/src/api/routes/user/index.ts
- server-app/src/api/routes/index.ts
- server-app/src/middlewares/auth.ts

## Backend APIs

- **/xyz**: This api fulfills the functionality of adding a new post in the StartThreadForm.js frontend component.
- **/xyz**: This api fulfills the functionality of submitting a reply in DiscussionPost.js frontend component.
- **/xyz**: This api fulfills the functionality of deleting a post in MainPost.js frontend component.
- **/xyz**: This api fulfills the functionality of deleting a reply in ReplyDisplay.js frontend component.
- **/xyz**: This api fulfills the functionality of displaying posts in DiscussionForumPage.js frontend component.

## Sources Used

### `UserProfile.js`

```
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Box,
  CircularProgress,
  Divider,
} from "@mui/material";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://express-t4.onrender.com/api/users/${id}`
        );
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <CircularProgress />
        </Box>
      ) : user ? (
        <Card sx={{ mt: 5 }}>
          <CardMedia
            component="img"
            height="300"
            image={user.picture}
            alt={user.name}
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {user.name}
            </Typography>
            <Divider />
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" gutterBottom>
                <strong>Email:</strong> {user.email}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Age:</strong> {user.age}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Gender:</strong> {user.gender}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Company:</strong> {user.company}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Address:</strong> {user.address}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>About:</strong> {user.about}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h5" sx={{ mt: 5 }}>
          User not found
        </Typography>
      )}
    </Container>
  );
}

export default UserProfile;
```

The code above was created by adapting the code as shown below:

```
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}
```

- I've used [useEffect()](https://react.dev/reference/react/useEffect) hook to synchronize a component with an external system.

### `UserList.js`

```
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#6c5ce7",
    },
    "&:hover fieldset": {
      borderColor: "#6c5ce7",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6c5ce7",
    },
  },
});

function UsersList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://express-t4.onrender.com/api/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user &&
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box p={3}>
      <StyledTextField
        label="Search by Name or Email"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: "20px" }}
      />
      <Grid container spacing={3}>
        {filteredUsers.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant="body1" color="text.secondary" align="center">
              No users found
            </Typography>
          </Grid>
        ) : (
          filteredUsers.map((user) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={user._id}
              onClick={() => navigate(`/users/${user._id}`)}
              style={{ cursor: "pointer" }}
            >
              <Card style={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={user.picture}
                  alt={`${user.name}`}
                  style={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Email: {user.email}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}

export default UsersList;
```

The code above was created by adapting the codes as shown below:

```
import { useNavigate } from "react-router-dom";

function useLogoutTimer() {
  const userIsInactive = useFakeInactiveUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (userIsInactive) {
      fake.logout();
      navigate("/session-timed-out");
    }
  }, [userIsInactive]);
}
```

```
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(28);
  const [name, setName] = useState('Taylor');
  const [todos, setTodos] = useState(() => createTodos());
  // ...
}
```

```
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}
```

- I have used [useNavigate()](https://reactrouter.com/en/main/hooks/use-navigate) hook to navigate the user to the profile page after successful login, [useState()](https://legacy.reactjs.org/docs/hooks-state.html) hook to manage the state of the form data and validation errors and [useEffect()](https://react.dev/reference/react/useEffect) hook to synchronize a component with an external system.

### `Login.js`

```
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CustomButton from "./components/Button";
import CustomInput from "./components/Input";
import { Typography, Paper, Container, Box, Alert } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required.");
    }
    if (!password) {
      setPasswordError("Password is required.");
    }

    if (email && password) {
      try {
        const response = await axios.post(
          "https://express-t4.onrender.com/api/login",
          {
            username: email,
            password: password,
          }
        );
        if (response.data) {
          navigate("/users");
        }
      } catch (error) {
        alert("Login failed!");
      }
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper
        elevation={6}
        style={{
          padding: "40px",
          marginTop: "40px",
          textAlign: "center",
          borderRadius: "15px",
          backgroundColor: "#f5f5f5",
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          style={{ fontWeight: "bold", color: "#3f51b5" }}
        >
          Login
        </Typography>
        <Box style={{ marginTop: "20px" }}>
          <CustomInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            style={{ margin: "10px 0" }}
          />
          {emailError && <Alert severity="error">{emailError}</Alert>}
          <CustomInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            style={{ margin: "10px 0" }}
          />
          {passwordError && <Alert severity="error">{passwordError}</Alert>}
          <CustomButton name="Login" onClick={handleSubmit} />
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
```

Line 44-88

- The stylig has been taken from my own submission of Assignment-1

## Additional Notes

- I have kept the design minimalistic.

* The base code structure has been taken from my Assignment-1 submission for code reusability.

* I have improved the code and enhanced the validation as per the feedback given by TA: Harsh Kathiria on my Assignment-1.
