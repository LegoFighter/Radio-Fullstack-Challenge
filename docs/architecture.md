# Next.js Radio Aggregator Application Structure

# General Stragey

https://nextjs.org/docs/app/getting-started/project-structure#split-project-files-by-feature-or-route


## Split project files by feature or route
This strategy stores globally shared application code in the root app directory and splits more specific application code into the route segments that use them.

### Why?

To resprect the open closed princinple. Adding or removing a component does not inflict changes on existing components. No shared `I do everything files`.