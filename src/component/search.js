const SearchBar = () => (
    <form action="/SearchResult" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Events</span>
        </label>
        <input
            type="text"
            id="title"
            placeholder="Title"
            name="title"
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;