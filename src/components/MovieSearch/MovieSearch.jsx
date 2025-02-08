import c from './MovieSearch.module.css';

function MovieSearch({ query, handleSub, handleChange }) {
  return (
    <div className={c.container}>
      <form onSubmit={handleSub}> 
        <label htmlFor="search">Search</label>
        <input 
          type="text" 
          id="search" 
          value={query}  
          onChange={handleChange} 
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default MovieSearch;
