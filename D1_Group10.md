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

# Author : [Keyur Pradipbhai Khant](keyur.khant@dal.ca) (B00935171)

- _Date Created_: April 03, 2024
- _Last Modification Date_: April 04, 2024
- _GitLab individual URL for Assignment 3_: https://git.cs.dal.ca/asolanki/csci-5709_grp-10/-/tree/Keyur?ref_type=heads
- _GitLab group URL for Assignment 3_: https://git.cs.dal.ca/asolanki/csci-5709_grp-10
- _Assignment (Project) URL_: https://eventify-csci5709.vercel.app/
- _Assignment (Project Feature) URLs_:
  - My Event Listing (Under Dashboard): https://eventify-csci5709.vercel.app/dashboard
  - Event Creation: https://eventify-csci5709.vercel.app/dashboard/add-event
  - Payment Module: https://eventify-csci5709.vercel.app/payment

**Note:** Above defined features can not be rendered directly. User have to login, follow procedure and then it will be accessible. Procedure steps are defined below.

## Authors

- [Keyur Pradipbhai Khant](keyur.khant@dal.ca) (B00935171)

## Technologies Used

- [React](https://legacy.reactjs.org/docs/getting-started.html/)
- [React Router](https://reactrouter.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Taildwind CSS](https://tailwindcss.com/)
- [Material UI](https://material-ui.com/)
- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [Chart.js](https://www.chartjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Stripe](https://stripe.com/en-ca)

## Feature and its related tasks developed by Keyur Pradipbhai Khant

### Feature:

- My Event Listing
- Event Creation
- Payment Gateway

### Pre-defined Credentials:

User can user pre-defined credentials if they want:

* **Email:** keyur.khant@dal.ca
* **Password:** pqr@123

### Related Tasks:

- Show event created by user, after successful login (Dashboard)
- Event creation page (Dashboard > Add Event)
- Payment Gateway (Events > Register paid events > Payment Gateway)

## List of files authored by Sushank Saini

### Frontend

- client-app/src/pages/UserDashboard/index.tsx
- client-app/src/pages/UserDashboard/CreateEventProcedure.tsx
- client-app/src/pages/UserDashboard/AddEvent.tsx
- client-app/src/components/HorizontalEventCard/index.tsx
- client-app/src/components/PaymentForm/index.tsx
- client-app/src/pages/Landing/index.tsx
- client-app/src/components/Navbar/index.tsx
- client-app/src/components/Footer/index.tsx
- client-app/src/services/EventService.ts
- client-app/src/components/Container/index.tsx
- client-app/src/components/EventCard/index.tsx
- client-app/src/store/store.ts
- client-app/src/redux/userSlice.ts
- client-app/src/services/utils.ts
- client-app/src/components/WorkingPrgress/index.tsx

### Backend

- server-app/src/models/Event.ts
- server-app/src/utils/response.ts
- server-app/src/utils/mailer.ts
- server-app/src/models/User.ts
- server-app/src/configs/dbConnection.ts
- server-app/src/api/controllers/event/index.ts
- server-app/src/api/controllers/event/event.ts
- server-app/src/api/controllers/payment/index.ts
- server-app/src/api/controllers/payment/payment.ts
- server-app/src/api/routes/event/index.ts
- server-app/src/api/routes/payment/index.ts

## Backend function/api and its corresponding frontend functionality that is fulfilled

- **/event/create**: This API endpoint is designed to handle the creation of new events. It allows users to submit event details, including the event name, date, location, and description, among other relevant information, to be added to the event management system or platform. This is essential for event organizers looking to promote and manage their events.
- **/event/update**: This endpoint provides the functionality to update existing event information. It can be used by event organizers to modify details of an event such as its name, date, location, or any other event-related information that needs to be corrected or updated to ensure accurate and up-to-date information is available to potential attendees.
- **/event/delete**: Aimed at managing the lifecycle of an event, this API endpoint allows for the removal of an event from the system. This could be used in scenarios where an event is canceled, completed, or needs to be removed for any reason, helping maintain a clean and relevant list of events for users.
- **/payment/pay**: Contrary to its current description, this API endpoint seems best suited for processing payments related to event registrations or purchases. It would handle transactions, including payment verification, processing payments for event tickets or merchandise, and providing confirmation of successful transactions to users, enhancing the financial operations around events.

## Sources Used

### server-app/src/models/Event.ts

*Lines 21- 81*

```
const eventSchema: Schema = new Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    details: {
      description: { type: String, required: true },
      venue: { type: String },
      link: { type: String },
      additionalInfo: { type: String },
    },
    titlePicture: {
      type: String,
      required: true,
    },
    pictures: [String],
    topic: {
      type: String,
      required: true,
    },
    categories: {
      type: [String],
      required: true,
    },
    eventStartDateTime: {
      type: Date,
      required: true,
    },
    eventEndDateTime: {
      type: Date,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isPaidEvent: {
      type: Boolean,
      required: true,
      default: false,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model<IEvent>('events', eventSchema);
```

The code above was created by adapting the code in [[1]](https://mongoosejs.com/docs/guide.html) as shown below, respectively : 

```
import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});
```

### server-app/src/api/controllers/payment/payment.ts

*Lines 19- 26*

```
const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "cad",
      confirm: true,
      confirmation_method: "automatic",
      return_url: BASE_FRONTEND_URL+"/dashboard",
      payment_method: paymentMethod,
    });
```
The code above was created by adapting the code in [[2]](https://docs.stripe.com/api/payment_intents/create?lang=node) as shown below, respectively : 

```
const paymentIntent = await stripe.paymentIntents.create({
  amount: 2000,
  currency: 'usd',
  automatic_payment_methods: {
    enabled: true,
  },
});
```

### client-app/src/redux/userSlice.ts

*Lines 1- 25*

```
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        user: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { login, logout, user } = userSlice.actions;

export const selectUser = (state: any) => state.user;

export default userSlice.reducer;
```

The code above was created by adapting the code in [[3]](https://redux-toolkit.js.org/api/createslice) as shown below, respectively : 

```
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState = { value: 0 } satisfies CounterState as CounterState

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```

## Additional Notes
* The design of Eventify is grounded in simplicity and elegance, drawing inspiration from modern web design principles while also paying homage to the clean, accessible aesthetic.
* For event creation and discussions within Eventify, we've prioritized user-friendly interfaces. Event titles are optional, but event descriptions are mandatory to ensure meaningful engagement and information sharing. Custom error messages guide users for a smoother experience.
* Accessing the details and responses to an event is straightforward—users need only hover over an event card and click to be taken to a page dedicated to in-depth information and discussions related to that event, enhancing navigability and user interaction.

## Future Work
* Looking ahead, Eventify plans to introduce features that allow users to edit their event details and discussion posts, empowering them with greater control over their content. This future functionality is aimed at enhancing user engagement and flexibility, further enriching the Eventify experience.


# Authors - [Aharnish Maheshbhai Solanki](ah910744@dal.ca)

# CSCI 5709 Assignment 3 

* *Date Created*: April 2, 2024
* *Last Modification Date*: April 04, 2024
* *Assignment (Project) URL*: https://eventify-csci5709.vercel.app/
* *GitLab individual URL for Assignment 3*: https://git.cs.dal.ca/asolanki/csci-5709_grp-10/-/tree/Aharnish?ref_type=heads
* *GitLab group URL for Assignment 3*: https://git.cs.dal.ca/asolanki/csci-5709_grp-10/-/tree/main?ref_type=heads


## Authors
* [Aharnish Maheshbhai Solanki](ah910744@dal.ca) - *Full Stack Developer*

## Built With
* [NodeJS](https://nodejs.org/en) - A cross-platform, open-source JavaScript runtime environment that executes JavaScript code outside a web browser
* [ExpressJS](https://expressjs.com/) -  A back end web application framework for building RESTful APIs with Node.js
* [ReactJS](https://react.dev/) - A free and open-source front-end JavaScript library for building user interfaces based on components
* [MongoDB](https://www.mongodb.com/) - A document-oriented NoSQL database program.
* [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom user interfaces.

## Feature and its related tasks developed by Aharnish Solanki
### Feature: 
* Event Details
* Event Ticket Registration
### Related Tasks:
* Display Event details when clicked on an event
* Register for the event
* Generate participant form based on number of tickets selected and order summary
* Creating ticket registration at backend
* Displaying registrations done by user
* Displaying event registration info
* Cancelling ticket registration by user

## List of files authored by Aharnish Maheshbhai Solanki
### Frontend
* client-app\src\components\CancelModal\index.ts
* client-app\src\components\EventDetails\index.ts
* client-app\src\components\ImageCarousel\index.ts
* client-app\src\components\ParticipantForm\index.ts
* client-app\src\components\ShareModal\index.ts
* client-app\src\components\SuccessModal\index.ts
* client-app\src\components\Ticket\index.ts
* client-app\src\components\TicketPurchaseModal\index.ts
* client-app\src\components\UserTickets\index.ts
* client-app\src\pages\EventDetials\index.ts
* client-app\src\pages\CancelModal\index.ts
* client-app\src\pages\EventDetails\index.ts
* client-app\src\pages\ParticipantForm\index.ts
* client-app\src\pages\Ticket\index.ts
* client-app\src\pages\UserTickets\index.ts

### Backend
* backend\src\api\controllers\event\event.ts
* backend\src\api\controllers\eventregister\eventregister.ts
* backend\src\api\routes\event\index.ts
* backend\src\api\routes\register\index.ts
* backend\src\api\routes\index.ts
* backend\src\api\models\Registration.ts


## Backend function/api and its corresponding frontend functionality that is fulfilled
* **/event/event/:eventId**: This api returns specific event details by its eventId.
* **/register/create**: This api fulfills the functionality of creating a registeration for participants entered by the user for an event .
* **/register/delete/:regId**: This api deletes the registration of a user for an event.
* **/event/events-registered-byuser/:userId**: This api returns events registered by the user, to display on /mytickets page.

## Sources Used

### client-app\src\components\CancelModal\index.ts

```
   <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
        ....
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg font-bold">Cancel Tickets</h3>
                <div className="mt-2">
                  <p className="">
                    Are you sure you want to cancel your tickets?
                  </p>
            ...
    </div>
```

The code above was created by adapting the code in [[1]](https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6), [[2]](https://tailwindcss.com/docs/installation) 


- <!---Why---> [1]st Code was taken as reference because I wanted to make a modal from scratch, achieved that by using the z index for elevating surface: z-10: Sets the z-index of the modal to 10.
- <!---How---> [1]'s Code was modified  to have specific styling properties for Layout and Positioning: such as background color, Content Styling. 

- <!---Why---> [2]  was used because I wanted to customize the modal.
- <!---How---> The code uses different styling options that are in tailwind by going over it's docs .
- <!---How---> The Code was modified by using tailwinds properties as per my need

### client-app\src\components\EventDetails\index.ts

```
  <Container>
      <div className="relative bg-white shadow-lg rounded-lg p-8 my-5 mx-auto max-w-7xl">
        <ImageCarousel images={event?.titlePicture} />
        <div className="flex flex-col lg:flex-row -mx-4 mt-4">
          <div className="w-full lg:w-2/3 px-4">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl lg:text-5xl font-bold text-title-color mb-3">
                {event?.eventName}
              </h1>
              <div className="flex items-center space-x-2">
                <button
                  className="ml-2 text-red-500 flex items-center"
                >
                  <div style={{ padding: "0 px 5px" }}>
                    {isWishlisted ? (
                      <FaHeart size={30} />
                    ) : (
                      <FaRegHeart size={25} />
                    )}
                  </div>
                </button>
   
                .........
            </div>
          </div>
        </div>
      </div>
    </Container>
```
 the code above was created by using the component/container  [[3]](https://tailwindcss.com/docs/container),[[4]](https://react-icons.github.io/react-icons/) [[5]](https://tailwindcss.com/docs/flex)


- <!---Why---> [3] & [5] reference was taken for Code because I wanted an container.
- <!---How---> The code in [3] was implemented by using the Container and flex component of Material UI.
- <!---How---> [3]'s Code was modified  to have specific styling properties such as Shadow, Border,Padding and Margin. 

- <!---Why---> [4]'s reference was used as I wanted to use the icons before the text.
- <!---How---> The code in [4] was implemented by using react-icons/fa package.

### client-app\src\services\utils.ts

```
   const defaultOptions: DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      second: undefined,
      timeZoneName: 'short',
      hour12: true
    };
  
    const date = new Date(dateTime);
    return date.toLocaleString('en-US', { ...defaultOptions, ...options });
```
The code above was created by adapting the code in [[6]](https://stackoverflow.com/questions/22347521/change-time-format-to-24-hours-in-javascript) as shown below: 

```
new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    hourCycle: 'h23',
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
});
```
- <!---Why---> [6]'s Code was used because I wanted to have Date in the desired format along with the timestamp
- <!---How---> The code in [6] was implemented by using in-built JavaScript library funcions i.e. Date() and .toLocaleString(). 
- <!---How---> [6]'s Code was modified by assigning different variables or properties to the options of the functions.

### * client-app\src\components\ImageCarousel\index.ts

```
 <div className="relative flex items-center justify-center  mb-6 ">
      {imageList.map((image, index) => (
        <div
          key={index}
          className={index === current ? "opacity-100" : "opacity-0"}
        >
          {index === current && (
            <img
              src={image}
              alt="Event Slide"
              className="w-full object-cover rounded-lg"
              style={{ width: "1200px", height: "500px" }}
            />
          )}
        </div>
      ))}
      {Array.isArray(images) && (
    ...
      )}
    </div>
``` 
[[7]] (https://scrimba.com/articles/react-list-array-with-map-function/)

- <!---Why---> I wanted to have a component to display a single image/array of image depending on the situation
- <!---How---> The styling in the ImageCarousel component is achieved using Tailwind CSS class flex[3] and inline styles
- <!---How---> understood and implemented [[7]]

### client-app\src\components\ShareModal\index.ts
```
  <div
      id="modal-backdrop"
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
    >
      <div
        className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Share</h3>
          <Button onClick={onClose} variant="text" color="inherit">
            <FaTimes size={25} />
          </Button>
        </div>
        <div className=" flex justify-center items-center mt-2 px-7 py-3">
          {socialMedia.map((media) => (
            <Button
              key={media.name}
              onClick={() => handleSocialShare(media.shareUrl)}
              variant="text"
            >
              <img
                src={media.svg}
                alt={`${media.name} icon`}
                className="w-12 h-12"
              />
            </Button>
          ))}
       .......
      </div>
    </div>
```
The code above was created by taking the code in [[8]](https://medium.com/@dimterion/modals-with-html-dialog-element-in-javascript-and-react-fb23c885d62e) as reference. [[4]] for icons

- <!---Why---> wanted to create a modal with HTML elements.
- <!---How---> constructed using HTML elements and using Tailwind CSS classes for styling
- <!---How---> Used svg images by storing them in the /assests/brandicon folder

### client-app\src\components\TicketPurchaseModal\index.ts
### client-app\src\components\SuccessModal\index.ts

```
 <Container>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto z-50 flex justify-center items-start pt-10 pb-10">
        <div
          className="relative bg-white rounded-lg shadow-xl m-auto my-0 sm:w-4/5 lg:w-3/4 xl:w-1/2  h-4/5 max-h-4/5 overflow-auto"
          style={{ width: "1200px", height: "600px" }}
        >
          <button
            onClick={onClose}
            className="absolute top-0 right-0 m-4" 
          >
            <FaTimes size={18} />
          </button>
          <div className="flex flex-col lg:flex-row h-full">
            {/* Ticket selection area (2/3 width) */}
            <div className="w-full lg:w-2/3 border-r p-8 overflow-auto">
              <h1 className="text-xl font-bold text-gray-900 mb-4 relative pb-2">
                <span className="pr-4">{event?.eventName}</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-300"></span>
              </h1>
              {ticketOptions.map((ticket, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg ">{ticket.type}</h3>
                  <div className=" border-b border-gray-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                      ......
                      </div>
                      <span>CA${ticket.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            .....
            </div>
          </div>
        </div>
      </div>
    </Container>
```

```
    <Container>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto z-50 flex justify-center items-center">
        <div
          className="relative bg-white p-4 rounded-lg shadow-lg"
          style={{ width: "1200px", height: "600px" }}
        >
       ......
            </Button>
          </div>
        </div>
      </div>
    </Container>
```


The code above was created by adapting the code in [[3]]((https://tailwindcss.com/docs/container)),[[1]](https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6)

- <!---Why---> wanted to create a modal from scratch and with container
- <!---How---> adapted the code [[3]] and [[1]] to fit my requirements. I mapped the ticket options , and gave counters for + and -, calculating the price of the registratoin


### client-app\src\components\ParticipantForm\index.ts

```
  <Container>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <SectionTitle title="Registration Information" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {/* Participant Form - Takes 2/3 space on medium screens and above */}
          <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-6 ">
            <form onSubmit={handleSubmit} className="space-y-6">
              {participants.map((participant, index) => (
                <div key={index}>
                  <h2 className="text-xl font-bold">Attendee {index + 1}</h2>
                  <div className="flex gap-4 mb-4">
                    <div className="w-1/2">
                      <input
                        type="text"
                        name="FirstName"
                        id="firstName"
                        value={participant.firstName}
                        onChange={(e) =>
                          handleInputChange(index, "firstName", e.target.value)
                        }
              .......
                        className="border border-gray-300 text-md block w-full p-2.5 mt-6"
                        placeholder="First Name"
                      />
                      {errors[index].firstName && <p className="text-red-500 text-xs mt-1">{errors[index].firstName}</p>}
                    </div>....
</Container>

```
The code above was created by adapting the code in [[3]](https://tailwindcss.com/docs/container),[[9]](https://tailwindcss.com/docs/grid-template-columns) [[10]](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)[[11]](https://smcohen.medium.com/how-to-use-javascripts-map-method-to-create-lists-of-components-in-react-f4b62b51b0c7)

- <!---Why---> I wanted to create a form for taking participant information based on the number of tickets generated 
- <!---How---> took [[11]] as reference and mapped participant information in html input elements to take information and used tailwind to style the css

### client-app\src\components\Ticket\index.ts
### client-app\src\pages\UserTickets\index.ts
```
  <Container>
      <div className="container mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <Link
              to="/mytickets"
              className="text-blue-600 font-bold hover:underline flex items-center ml-auto"
            >
              {" "}
              <FaArrowLeft className="mr-1" /> See All Tickets
            </Link>
          </div>
```
```
 <div className="flex flex-col items-center space-y-4">
                <QRCode value={qrCodeValue} size={128} level={"H"} />
                <span>Reg Id#: {registration._id}</span>
              </div>
```
[[12]](https://dev.to/onlyoneerin/creating-dynamic-qr-codes-using-reactjs-a-step-by-step-tutorial-341a) 
- <!---Why---> I wanted to display the ticket information of a registered event
- <!---How---> used flex and different class of Tailwind CSS to display the information
- <!---How---> used QR code from react packages and took code in 12 as reference

### backend\src\api\controllers\event\event.ts
### backend\src\api\controllers\event\event.ts
### backend\src\api\controllers\eventregister\eventregister.ts
### backend\src\api\routes\event\index.ts
### backend\src\api\routes\register\index.ts
### backend\src\api\routes\index.ts

```
import mongoose from "mongoose";

const events = await Event.find({ organizer: organizerId });

    if (events.length === 0) {
      return sendResponse(res, 200, {
        success: true,
        message: "No events found for the specified organizer",
        data: []
      });
    }

  const events = await Registration.find({
      user:new mongoose.Types.ObjectId(userId),
    }).populate('event');

    return sendResponse(res, 200, {
      success: true,
      message: "Events retrieved successfully",
      data: events,
    });
```
```
Model.find()
Model.save()
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndUpdate()
```
The above files use the static helper functions for CRUD operations provided by the Mongoose model[[13]](https://mongoosejs.com/docs/queries.html) and the Mongoose document save() method [[14]](https://mongoosejs.com/docs/documents.html#updating-using-save). The methods used are highlighted below:

The code above was created by adapting the code in [[16]](https://mongoosejs.com/docs/guide.html) as shown below: 
[[16]](https://stackoverflow.com/questions/64918147/delete-item-from-mongodb-using-react-redux-and-express)
[[17]](https://www.mongodb.com/docs/manual/crud/) [[18]](https://stackoverflow.com/questions/38051977/what-does-populate-in-mongoose-mean)

- <!---Why---> I wanted to get events by user and by eventid
- <!---How---> All the references were used for reading documentation of crud application, and as reference to perform crud operations from MongoDB using React, Redux and Express.

## Deployment

### Frontend

To deploy our project environment, We have used __Vercel__. The steps we followed for the deployment are as follows:

1. Mirrored our gitlab repo to a GitHub repository by generating a token from Github.
2. Authenticated Netlify with Github to access repositories in our GitHub.
3. Configured the deployement settings, such as root folder, build comand, environment variables 
[[19]]https://render.com/
### Backend

To deploy the project environment, We have used __Render__. The steps for backend deployment are as mentioned:

1. Mirrored our gitlab repo to a GitHub repository by generating a token from Github.(same step as in frontend)
2. Authenticated Netlify with Github to access repositories in our GitHub.
3. Configured the deployement settings, such as root folder, build comand, environment variables,deployment branch etc.
[[20]]https://vercel.com/

# Author - [Riyaben Pareshkumar Patel](ry470536@dal.ca)

# CSCI 5709 Assignment 3

- _Date Created_: March 30, 2024
- _Last Modification Date_: April 03, 2024
- _Assignment (Project) URL_: https://eventify-csci5709.vercel.app/
- _Assignment (Project Feature) URL_: https://eventify-csci5709.vercel.app/events
- _GitLab individual URL for Assignment 3_: https://git.cs.dal.ca/asolanki/csci-5709_grp-10/-/tree/Riya?ref_type=heads
- _GitLab group URL for Assignment 3_: https://git.cs.dal.ca/asolanki/csci-5709_grp-10

## Authors

- [Riyaben Pareshkumar Patel](ry470536@dal.ca) - _Full Stack Developer_

## Built With

- [NodeJS](https://nodejs.org/en) - An open-source, cross-platform JavaScript runtime environment.
- [ExpressJS](https://expressjs.com/) - A minimalist web framework for Node.js.
- [ReactJS](https://react.dev/) - A library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - A strongly typed programming language that builds on JavaScript.
- [MongoDB](https://www.mongodb.com/) - A document-oriented database program.
- [Taildwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- [Material UI](https://material-ui.com/) - A React UI framework for faster and easier web development.

## Images used from

- [Freepik](https://www.freepik.com/) - Images used from freepik.

## Feature developed by Riya Patel

### Feature:

- EventFeed & Wishlist

### Related Tasks:

- Show available events
- Add and remove from wishlist
- Show events in wishlist

## List of files authored by Riya Patel

### Frontend

- client-app\src\components\EventCard\index.tsx
- client-app\src\components\EventFeed\Events.tsx
- client-app\src\components\Landing\SearchBar.tsx
- client-app\src\components\Landing\UpcomingEvents.tsx
- client-app\src\components\Wishlist\WishlistPage.tsx
- client-app\src\context\WishlistContext.tsx
- client-app\src\pages\Events\index.tsx
- client-app\src\pages\Wishlist\index.tsx
- client-app\src\services\EventService.ts
- client-app\src\services\utils.ts
- client-app\src\components\Calendar\Calendar.tsx

### Backend

- server-app\src\api\controllers\event\event.ts
- server-app\src\api\controllers\event\wishlist.ts
- server-app\src\api\routes\event\index.ts
- server-app\src\models\Wishlist.ts

## Backend function/api and its corresponding frontend functionality that is fulfilled

- **geteventExcludeOrganizer**: This api fulfills the functionality of getting events that are not organized by organizer.
- **addWishlist**: This api fulfills the functionality of adding events into wishlist.
- **removeFromWishlist**: This api fulfills the functionality of deleting an event from wishlist.
- **deletereply**: This api fulfills the functionality of deleting a reply in ReplyDisplay.js frontend component.
- **getallWishlist**: This api fulfills the functionality of displaying all the events available in wishlist.
- **getallEvents**: This api fulfills the functionality of displaying all the events available in database before login.

## Sources Used

### client-app\src\components\EventCard\index.tsx

```
line-56

import { FaHeart } from "react-icons/fa";
<FaHeart />

import { FaRegHeart } from "react-icons/fa";
<FaRegHeart />

The code is provided in react icon - https://react-icons.github.io/react-icons/search/#q=fa%20heart

```

### client-app\src\components\EventFeed\Events.tsx

lines 98-105

```
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

The code is provided in https://www.npmjs.com/package/react-datepicker?activeTab=readme

```

## Deployment

### Frontend

To deploy our project environment, We have used **Vercel**. The steps we followed for the deployment are as follows:

1. Mirrored our gitlab repo to a GitHub repository by generating a token from Github.
2. Authenticated Netlify with Github to access repositories in our GitHub.
3. Configured the deployement settings, such as root folder, build comand, environment variables
   [[19]]https://render.com/

### Backend

To deploy the project environment, We have used **Render**. The steps for backend deployment are as mentioned:

1. Mirrored our gitlab repo to a GitHub repository by generating a token from Github.(same step as in frontend)
2. Authenticated Netlify with Github to access repositories in our GitHub.
3. Configured the deployement settings, such as root folder, build comand, environment variables,deployment branch etc.
   [[20]]https://vercel.com/


# Author - [Bhavisha Oza] (bhavisha.oza@dal.ca)

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

[https://eventify-csci5709.vercel.app/](https://eventify-csci5709.vercel.app/)

Backend is deployed on Render

[https://eventify-2f9d.onrender.com](https://eventify-2f9d.onrender.com)

## GitLab individual branch URL for Assignment 3

[https://git.cs.dal.ca/asolanki/csci-5709_grp-10/-/tree/Bhavisha](https://git.cs.dal.ca/asolanki/csci-5709_grp-10/-/tree/Bhavisha)

## GitLab group URL for Assignment 3

[git.cs.dal.ca/asolanki/csci-5709_grp-10](https://git.cs.dal.ca/asolanki/csci-5709_grp-10)

Project Features URL:

1. https://eventify-csci5709.vercel.app/auth/register
2. https://eventify-csci5709.vercel.app/auth/login
3. https://eventify-csci5709.vercel.app/auth/forgot-password
4. https://eventify-csci5709.vercel.app/auth/reset-password?id=660de09d2f67f953396f0099
5. https://eventify-csci5709.vercel.app/profile

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
- Login/Logout existing user
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

- **/auth/login**: For login
- **/auth/register**: For Signup
- **/auth/send-verification**:For sending the verification link while doing forgot password
- **/auth/reset-password**: For reset password
- **/auth/update/:userId**: For user profile modifications

## Sources Used

### server-app/src/api/controllers/user/index.ts

```
/**
 * Author: Bhavisha Oza
 * Banner ID: B00935827
 */
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import sendResponse from "../../../utils/response";
import User from "../../../models/User";
import { sendEmail } from "../../../utils/mailer";

interface LoginRequestBody {
  email: string;
  password: string;
}

interface RegisterRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface ResetPasswordRequestBody {
  userId: string;
  newPassword: string;
}

export const login = async (
  req: Request<{}, {}, LoginRequestBody>,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return sendResponse(res, 401, {
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return sendResponse(res, 401, {
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.BCRYPT_SECRET_KEY as string,
      {
        expiresIn: "30d",
      }
    );

    return sendResponse(res, 200, {
      success: true,
      message: "Login successful",
      data: {
        token,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        userId: user._id,
        bio: user.bio,
      },
    });
  } catch (error) {
    console.error(error);
    return sendResponse(res, 500, { success: false, message: "Login failed" });
  }
};

export const register = async (
  req: Request<{}, {}, RegisterRequestBody>,
  res: Response
) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return sendResponse(res, 400, {
        success: false,
        message: "User already exists with the given email",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return sendResponse(res, 200, {
      success: true,
      message: "User registered successfully",
      data: {
        email: savedUser.email,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        userId: savedUser._id,
      },
    });
  } catch (error) {
    console.error(error);
    return sendResponse(res, 500, {
      success: false,
      message: "Registration failed",
    });
  }
};

export const sendVerificationLink = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user: any = await User.findOne({ email: email });
    if (!user) {
      return sendResponse(res, 404, {
        success: false,
        message: "User not found",
      });
    }

    const verificationUrl = `http://localhost:3000/auth/reset-password?id=${user._id}`;

    const emailSent = await sendEmail(
      user.email,
      "Verification for forgotten password",
      verificationUrl
    );
    if (!emailSent) {
      return sendResponse(res, 500, {
        success: false,
        message: "Verification email could not be sent",
      });
    }

    return sendResponse(res, 200, {
      success: true,
      message: "Verification email sent successfully",
    });
  } catch (error) {
    console.error(error);
    return sendResponse(res, 500, {
      success: false,
      message: "Error in sending the verification email",
    });
  }
};

export const resetPassword = async (
  req: Request<{}, {}, ResetPasswordRequestBody>,
  res: Response
) => {
  try {
    const { userId, newPassword } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return sendResponse(res, 404, {
        success: false,
        message: "User not found",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    return sendResponse(res, 200, {
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.error("Reset Password Error:", error);
    return sendResponse(res, 500, {
      success: false,
      message: "Server error while resetting password",
    });
  }
};
```

_Line 29-77_ \
The code above was created by adapting the code as shown below [[6]](https://dev.to/eidorianavi/authentication-and-jwt-in-node-js-4i13):

```
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
router.post('/add-user', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            username: req.body.username,
            password: hashedPassword,
        });
        const savedUser = await user.save();
        res.json(savedUser);
    } catch(e) {
        res.json({ message: "Error"});
    }
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });

    try{
        const match = await bcrypt.compare(req.body.password, user.password);
        const accessToken = jwt.sign(JSON.stringify(user), process.env.TOKEN_SECRET)
        if(match){
            res.json({ accessToken: accessToken });
        } else {
            res.json({ message: "Invalid Credentials" });
        }
    } catch(e) {
        console.log(e)
    }
});
```

- I've used [jsonwebtoken](https://dev.to/eidorianavi/authentication-and-jwt-in-node-js-4i13).

### server-app/src/api/controllers/user/user.ts

```
/**
 * Author: Bhavisha Oza
 * Banner ID: B00935827
 */
import { Request, Response } from "express";
import User from "../../../models/User";
import sendResponse from "../../../utils/response";

interface UpdateRequestBody {
  firstName?: string;
  lastName?: string;
  bio?: string;
}

export const updateUser = async (
  req: Request<{ userId: string }, {}, UpdateRequestBody>,
  res: Response
) => {
  try {
    const { userId } = req.params;
    const { firstName, lastName, bio } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return sendResponse(res, 404, {
        success: false,
        message: "User not found",
      });
    }

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (bio) user.bio = bio;

    const updatedUser = await user.save();

    return sendResponse(res, 200, {
      success: true,
      message: "User updated successfully",
      data: {
        email: updatedUser.email,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        bio: updatedUser.bio,
      },
    });
  } catch (error) {
    console.error("Update User Error:", error);
    return sendResponse(res, 500, {
      success: false,
      message: "Failed to update user",
    });
  }
};

```

_Line 15-46_ \
The code above was created by adapting the codes as shown below:

```
var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

replaceUser: async (req, res, next) => {
    //enforce that req.body must contain all the fields
    const { userId } = req.params;
    const  newUser  = req.body;
    // const result = await User.findByIdAndUpdate(userId, newUser, {new: true}).exec();
    // console.log(result)
    console.log(newUser)
    console.log(userId)

    // res.status(200).json(result);
    // console.log(userId, newUser)
}
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
```

- To use body-parsing middleware to populate req.body I've take ref from [[5]] (https://stackoverflow.com/questions/52701454/node-js-async-await-why-i-cant-get-the-data-req-body).

### client-app/src/components/SignUp/index.tsx

### client-app/src/components/Login/index.tsx

### client-app/src/components/ForgotPassword/index.tsx

### client-app/src/components/ResetPasswordForm/index.tsx

```
  <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">User Register</h2>
      <div className="flex gap-4 mb-4">
        <div className="w-1/2">
          <label
            htmlFor="firstName"
            className="block text-md font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-black-300 text-md focus:ring-blue-500 focus:border-black-100 block w-full p-2.5 mt-2"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>
        <div className="w-1/2">
        .....
        </p>
      </div>
    </form>

```

```
 return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
    >
      <h2 className="text-2xl font-bold mb-4">User Login</h2>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-md font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-black-300 text-md focus:ring-blue-500 focus:border-black-100 block w-full p-2.5 mt-2"
        />
 )
    ..... more code
```

```
 return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
    >
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-md font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-black-300 text-md focus:ring-blue-500 focus:border-black-100 block w-full p-2.5 mt-2"
        />

    </form>
  );
    ......
```

```
 return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
    >
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-md font-medium text-gray-700"
        >
          New Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
       .....
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block text-md font-medium text-gray-700"
        >
          Confirm New Password
        </label>

    </form>
  );
```

[[1]](https://react.dev/reference/react-dom/components/form)
[[2]](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
[[3]](https://react.dev/reference/react-dom/components/input)
[[4]](https://luqmanshaban.medium.com/creating-a-sign-up-form-in-react-with-typescript-e48787c0aa14)
[[5]](https://stackoverflow.com/questions/52701454/node-js-async-await-why-i-cant-get-the-data-req-body)
[[6]](https://dev.to/eidorianavi/authentication-and-jwt-in-node-js-4i13)

- <!---Why---> I wanted to create a form for taking signup,  login,ForgotPassword, ResetPassword and have proper validations on the form
- <!---How---> Used form,input and label elements of react to create the form.
- <!---How---> Used [[4]] as reference for creating a signup form in typescript.

### client-app/src/pages/UserProfile/index.tsx

```
 return (
    <Container>
      <div className="flex flex-wrap md:flex-nowrap gap-10 mt-10 p-5 bg-white rounded shadow">
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <img
            src={formData.profilePicture}
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full border-2 border-gray-300"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
          {error && <div className="text-red-500">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-md font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={tempFormData.firstName}
                onChange={handleInputChange}
                disabled={!editMode}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-md font-medium
                ..........
      </div>)
    </Container>
```

[[7]](https://tailwindcss.com/docs/container),[[8]](https://react-icons.github.io/react-icons/)[[9]](https://tailwindcss.com/docs/grid-template-columns) [[10]](https://tailwindcss.com/docs/flex)

- <!---Why---> I wanted to show user details, for which i have genereated form as well, and used tailwainf css for styling
- <!---How--->  Used form,input and label elements of react to create the form.

## Additional Notes

- I have kept the design minimalistic.

* The base code structure has been taken from my Assignment-1 submission for code reusability.

* I have improved the code and enhanced the validation as per the feedback given by TA: Harsh Kathiria on my Assignment-1.
* Limitation: The user profile modal keeps opened, so click once again to hide it. I will enhance it in future work.



# Author  - [ Parth Mehta ](p.mehta20@dal.ca)

# CSCI 5709 Advanced Topics in Web Development

Welcome to the official course repository for CSCI 5709. This README provides organized links to the group project, individual tutorials, and assignments I've contributed to throughout the course.



## Author Details
- **Name**: Parth Mehta
- **Banner ID**: B00931931
- **Email ID**: p.mehta20@dal.ca
- **Date Created**: 3 Apr 2024
- **Last Modification Date**: 3 Apr 2024



## Contents
### Group Project
- Assignment (Project) URL: [CSCI-5709 Group 10](https://eventify-csci5709.vercel.app/)

- #### Main Repository
  - [CSCI-5709 Group 10](https://git.cs.dal.ca/asolanki/csci-5709_grp-10)
    - [My Personal Branch](https://git.cs.dal.ca/asolanki/csci-5709_grp-10/-/tree/Parth?ref_type=heads)

- #### Project Description
    - Eventify revolutionizes event management by offering an all-encompassing platform that simplifies the organization and participation of events. It seamlessly integrates registration, ticketing, and planning tools, making it an indispensable tool for organizers and a convenient hub for attendees. Designed with cutting-edge technology, Eventify ensures a user-centric experience, fostering enhanced engagement and interaction at every event phase.

- #### Project Features
    - Eventify stands out with its robust features designed to streamline the event management process. Key functionalities include comprehensive user profile management, event creation, and scheduling, alongside a dynamic event feed with advanced filtering capabilities. The platform also boasts an innovative ticketing and registration system, a secure payment module, and engagement-enhancing tools such as feedback and surveys, analytics, and badge or certificate generation. These features collectively ensure a seamless, efficient, and engaging event management experience for all users.

- #### Project Structure
    - The project is divided into two main parts: the client-side and the server-side. The client-side is built using React and includes components, pages, and services for the user interface. The server-side is built using Express and includes routes, controllers, models, and services for handling requests, interacting with the database, and managing business logic.

- #### My Features
    - Badge Generation
    - Certificate Generation

- #### My Contributions
    - ##### Badge Generation
        - **Description**: The badge generation feature gives different tyoes of badges for attendees. Attendees can see them in their Profile, which enhancing their event experience and fostering a sense of community. If attendees have earned multiple badges, they can view them all in their Profile.

    - ##### Certificate Generation
        - **Description**: The certificate generation feature allows organizers to create and distribute certificates to attendees. This feature adds value to the event by recognizing attendees' participation and achievements. THe attendees can view and download their certificates from their Profile.

- #### List of Files Authored by me
    - ##### Client Side
        - `client-app/src/pages/UserProfile/index.tsx`
        - `client-app/src/services/EventService.ts`
        - `client-app/src/services/BadgeService.ts`

    - ##### Server Side
        - `server-app/src/api/controllers/eventregister/eventregister.ts`
        - `server-app/src/api/routes/event/index.ts`
        - `server-app/src/api/controllers/eventregister/index.ts`
        - `server-app/src/api/routes/register/index.ts`
        - `server-app/src/api/routes/index.ts`
        - `server-app/src/utils/certificate.ts`
        - `server-app/src/models/Badge.ts`
        - `server-app/src/api/services/badge.ts`
        - `server-app/src/api/routes/badge/index.ts`
        - `server-app/src/api/controllers/badge/badge.ts`
        - `server-app/src/api/controllers/badge/index.ts`

- #### Backend Functionality
    - ##### Badge Generation
        - **Description**: The badge generation feature allows organizers to create and distribute badges to attendees. There are different types of badges based on their participation or achievements. Attendees can view their badges in their Profile, which enhances their event experience and fosters a sense of community.

        - **API Endpoints**:
            - `GET /generate/:userId`: It'll validate and then will generate a badge for the user with the given `userId`.

    - ##### Certificate Generation
        - **Description**: The certificate generation feature allows organizers to create and distribute certificates to attendees. Attendees can view and download their certificates in their Profile, which adds value to the event by recognizing attendees' participation and achievements.

        - **API Endpoints**:
            - `GET /certificate/:userId/:eventId`: It'll generate a certificate for the user with the given `userId` for the event with the given `eventId`.
            - `GET /participation/:userId`: It'll return the list of events the user with the given `userId` has participated in.

- #### Dependencies
    - ##### Client Side Dependencies
        - React - [https://reactjs.org/](https://reactjs.org/)
        - Material-UI (@mui/material) - [https://mui.com/](https://mui.com/)
        - Redux Toolkit (@reduxjs/toolkit) - [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)
        - React Router (@react-router-dom) - [https://reactrouter.com/](https://reactrouter.com/)
        - Axios - [https://axios-http.com/](https://axios-http.com/)
        - Formik - [https://formik.org/](https://formik.org/)
        - Chart.js - [https://www.chartjs.org/](https://www.chartjs.org/)
        - Date-fns - [https://date-fns.org/](https://date-fns.org/)
        - Moment - [https://momentjs.com/](https://momentjs.com/)
        - TypeScript - [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
        - Emotion - [https://emotion.sh/docs/introduction](https://emotion.sh/docs/introduction)
        - Font Awesome - [https://fontawesome.com/](https://fontawesome.com/)
        - Stripe JS Libraries (@stripe/react-stripe-js & @stripe/stripe-js) - [https://stripe.com/docs/js](https://stripe.com/docs/js)
        - React Testing Library - [https://testing-library.com/docs/react-testing-library/intro/](https://testing-library.com/docs/react-testing-library/intro/)
        - Yup - [https://github.com/jquense/yup](https://github.com/jquense/yup)

    - ##### Server Side Dependencies
        - Express - [https://expressjs.com/](https://expressjs.com/)
        - Mongoose - [https://mongoosejs.com/](https://mongoosejs.com/)
        - bcrypt - [https://github.com/kelektiv/node.bcrypt.js](https://github.com/kelektiv/node.bcrypt.js)
        - jsonwebtoken - [https://github.com/auth0/node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
        - Nodemailer - [https://nodemailer.com/about/](https://nodemailer.com/about/)
        - dotenv - [https://github.com/motdotla/dotenv](https://github.com/motdotla/dotenv)
        - cors - [https://github.com/expressjs/cors](https://github.com/expressjs/cors)
        - PDFKit - [http://pdfkit.org/](http://pdfkit.org/)
        - Stripe - [https://stripe.com/docs/api](https://stripe.com/docs/api)
        - UUID - [https://github.com/uuidjs/uuid](https://github.com/uuidjs/uuid)


- ### References
    - #### Backend
        - ##### utils/certificate.ts
            ```
            doc.pipe(res);
            doc.rect(50, 50, doc.page.width - 100, doc.page.height - 100).stroke();

            doc.opacity(1);

            doc.font('Helvetica-Bold')
                .fontSize(40)
                .fillColor('black')
                .text('CERTIFICATE OF COMPLETION', 0, 100, { align: 'center', width: doc.page.width });

            doc.moveTo(100, 150)
                .lineTo(doc.page.width - 100, 150)
                .lineWidth(2)
                .stroke();

            doc.font('Helvetica-Oblique')
                .fontSize(14)
                .fillColor('#444444')
                .text(`This is to certify that`, 0, 210, { align: 'center', width: doc.page.width })
                .moveDown(0.5)

            doc.font('Times-Roman')
                .fontSize(35)
                .fillColor('black')
                .text(`${user.firstName} ${user.lastName}`, 0, 245, { align: 'center', width: doc.page.width })
                .moveDown(0.5)

            doc.font('Helvetica-Oblique')
                .fontSize(14)
                .fillColor('#444444')
                .text(`Has successfully participated in`, 0, 300, { align: 'center', width: doc.page.width })
                .moveDown(0.5)

            doc.font('Times-Roman')
                .fontSize(24)
                .fillColor('black')
                .text(`${event.eventName}`, 0, 340, { align: 'center', width: doc.page.width })
                .moveDown(0.5)

            doc.font('Helvetica-Oblique')
                .fontSize(18)
                .fillColor('#444444')
                .text(`held on ${event.eventStartDateTime.toDateString()}.`, 0, 390, { align: 'center', width: doc.page.width })
                .moveDown(0.5)
            ```
            - This code snippet is used to generate a certificate for the user with the given `userId` for the event with the given `eventId`. It uses the PDFKit library to create a PDF document and add text, lines, and shapes to it. References for PDFKit can be found at [[1]][http://pdfkit.org/](http://pdfkit.org/).
            - There are other references as well:
                - [[2]](https://stackabuse.com/generating-pdf-files-in-node-js-with-pdfkit)
                - [[3]](https://medium.com/@eduardoqgomes/creating-a-certificate-template-with-pdfkit-in-node-js-dd843e09e6cf)
            - <!--- Why ---> I wanted to create a visually appealing certificate that attendees could download and keep as a memento of their participation in the event.
            - <!-- How ---> I used the PDFKit library to create a PDF document and added text, lines, and shapes to it to create a certificate template. I then filled in the user's name and the event details dynamically based on the user and event data from the database.

        - ##### api/controllers/eventregister/eventregister.ts
            ```
            const query = {
                participants: {
                    $elemMatch: { email: user.email }
                }
            };
            const registrations = await Registration.find(query).exec();

            const eventIds = registrations.map(registration => registration.event);
            const events = await Event.find({ '_id': { $in: eventIds } });
            ```
            - This code snippet is used to get the list of events the user with the given `userId` has participated in. It first finds all the registration records in the EventRegister collection that match the user's email address. It then extracts the event IDs from these registration records and finds the corresponding events in the Event collection. If successful, it returns the registration data with a status code of 200 (Created). If there is an error, it returns an error message with a status code of 500 (Internal Server Error).
            - The references are taken from the official documentation of Mongoose:
                - [[4]](https://mongoosejs.com/docs/queries.html)
                - [[5]](https://mongoosejs.com/docs/api.html#model_Model.find)
                - [[6]](https://mongoosejs.com/docs/api.html#model_Model-exec)
                - [[7]](https://mongoosejs.com/docs/api.html#model_Model-map)
            - <!--- Why ---> I wanted to provide users with a list of events they have participated in so that they could keep track of their engagement and achievements.
            - <!-- How ---> I used Mongoose queries to find all the registration records that match the user's email address and extract the event IDs from these records. I then used these event IDs to find the corresponding events in the Event collection and return the list of events to the user.


- ### Deployment
    - #### Frontend
        - To deploy our project environment, We have used __Vercel__. The steps we followed for the deployment are as follows:

        1. Mirrored our gitlab repo to a GitHub repository by generating a token from Github.
        2. Authenticated Netlify with Github to access repositories in our GitHub.
        3. Configured the deployement settings, such as root folder, build comand, environment variables
        [[19]]https://render.com/

    - #### Backend
        - To deploy the project environment, We have used __Render__. The steps for backend deployment are as mentioned:

        1. Mirrored our gitlab repo to a GitHub repository by generating a token from Github.(same step as in frontend)
        2. Authenticated Netlify with Github to access repositories in our GitHub.
        3. Configured the deployement settings, such as root folder, build comand, environment variables,deployment branch etc.
        [[20]]https://vercel.com/

# Author - [ Dharven Dosi ]

# CSCI 5709 Assignment 3

* *Date Created*: April 3, 2024
* *Last Modification Date*: April 03, 2024
* *Assignment (Project) URL*: https://eventify-csci5709.vercel.app/
* *GitLab individual URL for Assignment 3*: https://git.cs.dal.ca/asolanki/csci-5709_grp-10/-/tree/Aharnish?ref_type=heads
* *GitLab group URL for Assignment 3*: https://git.cs.dal.ca/asolanki/csci-5709_grp-10/-/tree/main?ref_type=heads


## Authors
* [Dharven Doshi]

## Built With
* [NodeJS](https://nodejs.org/en) - A cross-platform, open-source JavaScript runtime environment that executes JavaScript code outside a web browser
* [ExpressJS](https://expressjs.com/) -  A back end web application framework for building RESTful APIs with Node.js
* [ReactJS](https://react.dev/) - A free and open-source front-end JavaScript library for building user interfaces based on components
* [MongoDB](https://www.mongodb.com/) - A document-oriented NoSQL database program.
* [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom user interfaces.

## Feature and its related tasks developed by Dharven Doshi
### Feature:
* Event Dashboard
* Analytics
### Related Tasks:
* Display Event details on dashboard
* Displaying event analytics
* Event Analytics are graphs based on database

## List of files authored by Dharven Doshi
### Frontend
* client-app\src\components\Analytics\Analytics.tsx
* client-app\src\components\Analytics\index.ts
* client-app\src\pages\Analytics\index.tsx
* client-app\src\routes.tsx
* client-app\src\services\EventService.ts

### Backend
* server-app\src\api\routes\event\index.ts
* server-app\src\api\controllers\analytics\analytics.ts
* server-app\src\api\controllers\analytics\index.ts


## Deployment

### Frontend

To deploy our project environment, We have used __Vercel__. The steps we followed for the deployment are as follows:

1. Mirrored our gitlab repo to a GitHub repository by generating a token from Github.
2. Authenticated Netlify with Github to access repositories in our GitHub.
3. Configured the deployement settings, such as root folder, build comand, environment variables
[[19]]https://render.com/
### Backend

To deploy the project environment, We have used __Render__. The steps for backend deployment are as mentioned:

1. Mirrored our gitlab repo to a GitHub repository by generating a token from Github.(same step as in frontend)
2. Authenticated Netlify with Github to access repositories in our GitHub.
3. Configured the deployement settings, such as root folder, build comand, environment variables,deployment branch etc.
[[20]]https://vercel.com/
