import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Table from "../components/Table";


function Home() {
const [users, setUsers] = useState([]);

const loadUsers = () => {
  API.getRandomUsers().then( userRes => {
    setUsers(userRes.data.results);
  });
}
useEffect(() => {
  loadUsers();
  }, []);

  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Employee Directory</h1>
        <h2>Click on carrots to filter by heading</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Table users={users} />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
