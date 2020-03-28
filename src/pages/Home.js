import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Table from "../components/Table";
import SearchForm from "../components/SearchForm/index";


function Home() {
const [users, setUsers] = useState([]);
const [age, setAge] = useState();

const handleAgeChange = event => {
  const ageValue = event.target.value;
  setAge(ageValue);
}

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log(age);
    let trueAge = parseInt(age);
    let filteredUsers = users.filter(user => 
      user.dob.age === trueAge
    );
    setUsers(filteredUsers);
  };

const loadUsers = () => {
  API.getRandomUsers().then( userRes => {
    console.log(userRes.data);
    setUsers(userRes.data.results);
  });
}

useEffect(() => {
  loadUsers();
  }, []);

  return (
    <div>
      <Hero backgroundImage="https://cdn.corporatefinanceinstitute.com/assets/share-based-compensation-theme.jpg">
        <h1>Employee Directory</h1>
        <h2>Click on carrots to filter by heading</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <SearchForm handleFormSubmit={handleFormSubmit} handleAgeChange={handleAgeChange} />
        {age}
        <Row>
          <Table users={users} />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
 