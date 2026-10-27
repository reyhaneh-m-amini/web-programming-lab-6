import { useEffect, useReducer, useState } from "react";
import { fetchPosts } from "./api/postsApi";
import { initialState, postsReducer } from "./reducer/postsReducer";
import FilterForm from "./components/FilterForm";
import PostList from "./components/PostList";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    let active = true;

    async function loadPosts() {
      dispatch({ type: "FETCH_START" });

      try {
        const data = await fetchPosts();

        if (active) {
          dispatch({ type: "FETCH_SUCCESS", payload: data });
        }
      } catch (error) {
        if (active) {
          dispatch({ type: "FETCH_ERROR", payload: error.message });
        }
      }
    }

    loadPosts();

    return () => {
      active = false;
    };
  }, []);

  const filteredPosts = state.posts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Post Dashboard</h1>

      <FilterForm filter={filter} setFilter={setFilter} />

      {state.loading && <p>Loading posts...</p>}

      {state.error && <p>Error: {state.error}</p>}

      {!state.loading && !state.error && (
        <PostList posts={filteredPosts} />
      )}
    </div>
  );
}

export default App;
