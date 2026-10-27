export function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      return response.json();
    });
}
