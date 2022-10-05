import React from "react";
import { fetchUsers } from "./fetchUsers";

const Github = () => {
  const [query, setQuery] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(1);

  let limit = 5;
  React.useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetchUsers("masai", { page, limit })
      .then((res) => {
        setUsers(res.data.items);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);

  const handleSearch = () => {
    setIsLoading(true);
    setIsError(false);
    fetchUsers(query)
      .then((res) => {
        setUsers(res.data.items);
        console.log(res.data.items)
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <h1> Github Users </h1>
      <div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search"
        />
        <button disabled={isLoading} onClick={handleSearch}>
          {isLoading ? "loading" : "SEARCH"}
        </button>
      </div>
      {isError ? <h3>Please Fill Text</h3> : null}
      <div style={{display:"flex",justifyContent:"space-around",marginTop:"30px",border:"1px solid"}}>
        {users?.map((item) => (
          <div key={item.id} className="box">
            <img style={{width:"150px",height:"150px"}} src={item.avatar_url} />
            <h2>{item.login} </h2>
          </div>

        ))}

      </div>
      <button onClick={() => setPage(page - 1)}>prev</button>
      <button>{page}</button>
      <button onClick={() => setPage(page + 1)}>next</button>
    </>
  );
};

// export { Github };
export default Github
