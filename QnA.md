# QnA

### Planning

> What do you think are the greatest areas of risk in completing the project?

- From a planning perspective - the ambiguities in the design could lead to time lost "pushing pixels around". It will be benificial to spend time upfront getting clear on the design system, as well as the various component states.

- From a technical perspective - since the search field doesn't have a button, I am assuming that the query parameters are to be updated as the user types. Because of this, we'll want to make sure to debounce the network call.

> What changes/additions would you make to the design?

- Having designs for error, loading, and empty states would be a bonus. Also, it would be nice if there was a bigger distinciton between open and closed issue cards.

> List a two or three features that you would consider implementing in the future that would add significant value to the project.

- Authentication
- Add information about the repository
- A separate view for indivial issues where auth'd users can comment / react
- A way to create new issues directly from the dashboard

---

### Looking Back

> Describe the major design/build decisions and why you made them.

- I decided to use NextJS with SSG/ISR because I thought it would be nice to have the ability to navigate to a page directly, rather than always having to interface with the search box on the home page. It also lets us build the pages on the server and serve static html/JSON, and even though the revalidation interval is low, it still provides a degree of protection against hitting the api's rate limit.

- I decided to use Tailwind as the styling solution because given the time constraint, it is very quick to get going and you don't need to worry too much about browser prefixes and media queries. I also enjoy their out of the box defaults, as they make it easy to make things look "nice" without spending too much time in "design mode". It does of course come with it's limitations, namely interpolating runtime values into your classnames, hence why you'll see a couple of inline styles in my components.

- I decided not to use Apollo/GraphQL because it seemed like overkill for only making a couple network requests, but in hindsight this may have been a naive decision. As I got to know the REST api, it became apparent that the network response contains a lot of data that we dont need (check out those type defs 🙀), and is missing some data that we do need. Because of this (and the time constraint) I was not able to get the "closed" state issues, or paginate through the results. 

> How long did the assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Framework", "Coding", "Debugging").

- Learning: 1hr, Coding: 5hrs, Debugging: 1hr. I won't lie, I went a bit over-time on this. I think I had hands on keys for around 6 hours. I took little bit of time to check out the github REST api docs, and to consider how I would approach this. Then after making some design decisions, I got to work. It took a bit longer because of what I mentioned in the previous section about the REST api.

> If you could go back and give yourself advice at the beginning of the project, what would it be?

- Spend a bit more time with the api docs and cURL some of those large datasets (ie facebook/react). 

> Did you learn anything new?

- I haven't worked with the Github api before, so that was new for me. Also, writing a debounce function instead of opting for lodash was new and fun.

> Do you feel that this assignment allowed you to showcase your abilities effectively?

- I do. Though I am disappointed that I couldnt get the closed issues or complete the pagination in time. May just have to put in a PR 😁

> Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?

- I've made some neat animations in the past 😎
