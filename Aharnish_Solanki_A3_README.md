# CSCI 5709 Assignment 3 

* *Date Created*: April 2, 2024
* *Last Modification Date*: April 04, 2024
* *Assignment (Project) URL*: https://eventify-csci5709.vercel.app/
* *GitLab individual URL for Assignment 3*: https://git.cs.dal.ca/asolanki/csci-5709_grp-10/-/tree/Aharnish?ref_type=heads
* *GitLab group URL for Assignment 3*: https://git.cs.dal.ca/asolanki/csci-5709_grp-10/-/tree/main?ref_type=heads

## Frontend URL : https://eventify-csci5709.vercel.app/
## Backend  URL : https://eventify-2f9d.onrender.com/

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