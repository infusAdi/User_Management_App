import { Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="text-center text-3xl font-bold">User Manager App</h1>
        <nav className="h-12 m-auto flex justify-between m-8">
          <Button variant="contained" className="h-8">
            <Link to="/">Home</Link>
          </Button>

          <Button variant="contained" color="success" className="h-8">
            <Link to="/create">Create User +</Link>
          </Button>
        </nav>
      </header>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
