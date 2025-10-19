import React, { useState, useEffect } from "react";
import CompanyList from "./CompanyList";
import CompanyFilter from "./CompanyFilter";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import './App.css';

function App() {
  const [companies, setCompanies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({ name: "", industry: "", location: "" ,country: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/companies.json")
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data);
        setFiltered(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let temp = companies;
    if (filters.name)
      temp = temp.filter(c => c.name.toLowerCase().includes(filters.name.toLowerCase()));
    if (filters.industry)
      temp = temp.filter(c => c.industry === filters.industry);
    if (filters.location)
      temp = temp.filter(c => c.location === filters.location);
    if (filters.country)
      temp = temp.filter(c => c.country === filters.country);
    setFiltered(temp);
  }, [filters, companies]);

  const handleFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">Companies Directory</Typography>
      <CompanyFilter onFilter={handleFilter} companies={companies} />
      {loading ? <p>Loading...</p> : <CompanyList companies={filtered} />}
    </Container>
  );
}

export default App;
