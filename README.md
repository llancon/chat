# Chat App to demonstrate Hotwire

This is a chat application built with Rails 7.0.4.3 and Ruby 3.0. It uses [Hotwire](https://hotwire.dev/) to implement real-time features such as broadcasting and Turbo Streams. To demonstrate these features, the application allows users to create chat rooms and send messages within those rooms.

## Frontend: 
CSS: [Simple.css](https://simplecss.org/)

### [Hotwire](https://hotwire.dev/)
Turbo: A set of complementary techniques to reduce the complexity of building modern web applications without needing to use a client-side JavaScript framework. It gives you the speed benefits of a single-page application without the added complexity much client-side JavaScript. https://turbo.hotwired.dev/

JS: [Stimulus.js](https://stimulus.hotwire.dev/)
Adds interactivity to your HTML with just a sprinkle of JavaScript. Stimulus is a modest JavaScript framework for the HTML you already have. 

## Models

### Message

The `Message` model represents a single message in a chat room. It has the following associations:

- `belongs_to :room`: Specifies that a message belongs to a room.
- `broadcasts_to :room`: Enables real-time broadcasting of messages to the associated room.

### Room

The `Room` model represents a chat room. It has the following associations:

- `has_many :messages, dependent: :destroy`: Specifies that a room can have multiple messages. When a room is deleted, all associated messages will be destroyed.

## Controllers

### MessagesController

The `MessagesController` handles actions related to creating and displaying messages. It has the following actions:

- `new`: Renders the form to create a new message within a room.
- `create`: Creates a new message and associates it with the specified room. It supports Turbo Streams for real-time updates and HTML for non-AJAX requests.

### RoomsController

The `RoomsController` handles actions related to managing chat rooms. It has the following actions:

- `index`: Lists all chat rooms.
- `show`: Displays a specific chat room.
- `new`: Renders the form to create a new chat room.
- `edit`: Renders the form to edit a chat room.
- `create`: Creates a new chat room.
- `update`: Updates an existing chat room.
- `destroy`: Deletes a chat room.

## Usage

1. Clone the repository.
2. Run `bundle install` to install the required dependencies.
3. Set up the database by running `rails db:create` and `rails db:migrate`.
4. Start the Rails server with `rails server`.
5. Open your web browser and navigate to `http://localhost:3000`.
6. Use the application to create chat rooms and send messages.

Feel free to explore the code and customize the application according to your requirements.

