function FilterForm({ filter, setFilter }) {
  return (
    <div className="filter-form">
      <label htmlFor="post-filter">Search posts:</label>

      <input
        id="post-filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Enter a post title..."
      />
    </div>
  );
}

export default FilterForm;
