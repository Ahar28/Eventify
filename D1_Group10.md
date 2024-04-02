# CSCI 5709 Grp-10 (Advance Web Services)

### Team Members:

    1. Aharnish Solanki (B00933563) ah910744@dal.ca
    2. Bhavisha Oza (B00935827) bh327148@dal.ca
    3. Dharven Doshi (B00925391) dh442504@dal.ca
    4. Keyur Pradipbhai Khant (B00935171) ky468409@dal.ca
    5. Parth Mehta (B00931931) pr547283@dal.ca
    6. Riya Patel (B00926204) ry470536@dal.ca

# Eventify: Event Management System

## Overview

Eventify is a comprehensive event management system designed to simplify and enhance the experience of organizing and attending events. Whether it's a corporate conference, a music concert, or a community gathering, Eventify offers a suite of features to manage events from start to finish. Our intuitive platform allows users to create, promote, and manage events with ease, ensuring a seamless experience for both organizers and attendees.

## Technologies Used

- [React](https://legacy.reactjs.org/docs/getting-started.html/)
- [React Router](https://reactrouter.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Taildwind CSS](https://tailwindcss.com/)
- [Material UI](https://material-ui.com/)

## Deployement

Eventify application is deployed on Netlify.

[remarkable-torte-09a5d1.netlify.app](https://remarkable-torte-09a5d1.netlify.app/)

## GitLab URL

[git.cs.dal.ca/asolanki/csci-5709_grp-10](https://git.cs.dal.ca/asolanki/csci-5709_grp-10)

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

## Code References

### `Button/index.tsx`

```
import React from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    variant?: 'text' | 'contained' | 'outlined';
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

const EButton: React.FC<CustomButtonProps> = ({
    children,
    onClick,
    type = 'button',
    className,
    variant = 'contained',
    color = 'primary',
}) => {
    return (
        <Button
            type={type}
            onClick={onClick}
            className={`py-2 px-4 rounded ${className}`}
            variant={variant}
            color={color}
        >
            {children}
        </Button>
    );
};

export default EButton;
```

The code above was created by adapting the code as shown below:

Reference url: https://medium.com/@d_danailov/react-and-material-ui-creating-a-custom-button-ba8d5678506

```
import React from "react";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";

const CustomButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  label: {
    textTransform: "capitalize"
  }
})(props => <Button {...props} />);

function App() {
  return (
    <>
      <Button color="primary">Hello World</Button>
      <CustomButton>Hello World</CustomButton>
    </>
  );
}

export default App;
```

### `tailwind.config.js`

```
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "410px",
      },
      backgroundImage: {
        homefrontbg: "url(./assets/home/front_world.jpg)",
        "quiz-bg": "url(./assets/home/quiz_bg.png)",
      },
      colors: {
        "title-color": "#2C6D99",
        "button-primary": "#1b5785",
        "button-primary-hover": "#2C6D99",
      },
    },
  },
  plugins: [],
};
```

The code above was created by adapting the code as shown below:

Reference url: https://tailwindcss.com/docs/guides/create-react-app

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### `WorkingProgress/index.tsx`

```
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../../assets/working-progress.svg';

const WorkingInProgress: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center">
                <div className="mx-auto h-12 w-12 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-700">Working in Progress</h2>
                <p className="mt-2 text-base text-gray-500">We're working hard to bring you new features. Stay tuned!</p>
            </div>
        </div>
    );
};

export default WorkingInProgress;
```

The code above was created by adapting the code as shown below:

Reference url: https://tailwindcss.com/docs/guides/create-react-app

```
import React from 'react'

const PageNotFound = () => {
    return (
        <div id="wrapper">
            <img src="https://i.imgur.com/qIufhof.png" />
            <div id="info">
                <h3>This page could not be found</h3>
            </div>
        </div >
    )
}

export default PageNotFound
```