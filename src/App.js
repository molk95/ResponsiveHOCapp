import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import PCard from "./components/Card";
import Box from '@material-ui/core/Box'
import Navbar from "./components/Navbar";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setUsers(
        await fetch("https://reqres.in/api/users?page=2")
          .then(res => res.json())
          .then(res => res.data)
          .catch(err => console.log("err", err))
      );
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <Navbar/>
      <Grid
        style={{ padding: "10px" }}>
      <Box textAlign="center"
      fontWeight="fontWeightMedium"
      fontSize={50}
      letterSpacing={2.2}
      >Welcome to Users Page</Box>
      </Grid>
      <Grid container spacing={10} style={{ padding: "24px" }}>
        {users.map(user => (
          <Grid item xs={12} sm={4} lg={4} xl={3}>
            <PCard
              key={user.id}
              email={user.email}
              first_name={user.first_name}
              last_name={user.last_name}
              avatar={user.avatar}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
 
export default App;
