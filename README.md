# Ticketmustard - we give full refunds

The app can be accessed here: https://clever-kare-df3918.netlify.app/

To run the app locally:
```
# ensure node version: >=12
npm install
npm run dev
```

MVP: An application that helps users browse and discover events that they might be interested in.

As a user, I want to:

- [x] See a list of events
- [x] Have the ability to edit query based on keyword
- [x] See more results with pagination
- [x] Change my results based on filter
- [ ] Be able to select type of result (Event, Attraction, Venue, Classification)
- [ ] Be able to sort my results
- [ ] Click a result item and see more details
- [ ] Have my queries autocompleted

## Explanation / thought process

I used this project as a chance to explore some new technologies - namely TailwindCSS and  vite. I'm familiar with Vue and felt it was a good way to quickly prototype a MVP for this ticketmaster API. I aimed to cover a barebones project showcasing some different aspects of modern frontend development: namely tooling, testing, responsiveness, API retrieval, and code resuability. In terms of functionality, it meets the goal of seeing different events with some preliminary information. The current filters are a base and, given more time, could be extended to include sorting and other filter parameters. 

I made use of an Adapter/Mapper pattern to interface with the ticketmaster API. My rationale behind this was simply because it was a third party external API which I had no control over, so I felt this was the best way to map the data payload into the presentational model/interface that I wanted to display.

The test coverage isn't amazing but there are some unit tests to cover the main functionality of the app.