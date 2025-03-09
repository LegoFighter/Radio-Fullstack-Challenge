# Demo App: Top 100

## 1. Description

Create a Radio-Station-Aggregator-Application that fetches the top 100 radio stations from the provided API, displays the list with essential details, and allows the user to view more information about a selected radio station.

### API Reference:

- Top 100 API:  
  `https://prod.radio-api.net/stations/list-by-system-name?systemName=STATIONS_TOP&count=100`
- Station Detail API:  
  `https://prod.radio-api.net/stations/details?stationIds=1live`

### Your tasks contains 2 equally important tasks

1. **Assessment of feasibility and scope** (approx. 1 hour)
2. **Implementation in code** (approx. 5h)

In part 1 please check the requirements and give us feedback on which parts you will focus and which parts you will skip or implement only rudimentary. Implement in part 2 the items you have announced in part 1. Keep in mind we value the quality of implementation.  
Please let us know when you start.

## 2. Requirements

### Frontend

1. **React with TypeScript:**

   - Use functional components and hooks.
   - Ensure type safety using TypeScript for props, states, and reusable interfaces.

2. **Features:**

   - **Homepage:**
     - Display the top 100 radio stations fetched from the API.
     - Include details such as station name, logo, and genre.
   - **Details Page:**
     - When clicking a station, navigate to a details page showing its:
       - Name
       - Logo
       - Genre
       - Description
       - Streaming URL (playing the stream would be great)
   - **Responsive Design:**
     - Create a mobile-friendly and visually appealing layout

3. **Styling:**

   - Demonstrate your Tailwind capabilities.
   - You can use libraries like Shadcn (`https://ui.shadcn.com/`) for faster prototyping.

4. **Testing:**
   - Write comprehensive tests using an adequate library for your code and calls.

### Next.js Backend

- When it makes sense and it is possible, please render pages on the server side. Think about caching.

### Bonus Features

- Add a search bar to filter stations by name or genre.
- Add pagination for displaying the list if preferred over a single long list.
- Dockerize your application.

## 2. Deliverables

1. **GitHub Repository:**

### Bonus: Hosted Demo (Optional):

- Deploy the application to a platform like Vercel or Docker Hub.
