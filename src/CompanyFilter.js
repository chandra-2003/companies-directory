import React from "react";
import { TextField, MenuItem, Grid } from "@mui/material";

// Helper function to get unique values for dropdowns
function getUniqueValues(arr, key) {
  return Array.from(new Set(arr.map(item => item[key])));
}

const CompanyFilter = ({ companies, onFilter }) => {
  // Create options for Industry and Location dropdowns
  const industryOptions = getUniqueValues(companies, "industry");
  const locationOptions = getUniqueValues(companies, "location");
  const CountryOptions = getUniqueValues(companies, "country");

  return (
    <Grid container spacing={2} style={{ marginBottom: 20 }}>
      {/* Name Search Input */}
      <Grid item xs={12} sm={4}>
        <TextField
          label="Search by Name"
          fullWidth
          onChange={e => onFilter("name", e.target.value)}
          variant="standard"
          size="medium"
        />
      </Grid>

      {/* Industry Dropdown */}
      <Grid item xs={12} sm={4}>
        <TextField
          select
          label="Select Industry"
          fullWidth
          onChange={e => onFilter("industry", e.target.value)}
          variant="standard"
          size="medium"
		  style={{ width: "250px" }}
          defaultValue=""
        >
          <MenuItem value="">All Industries</MenuItem>
          {industryOptions.map(industry => (
            <MenuItem key={industry} value={industry}>
              {industry}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* Location Dropdown */}
      <Grid item xs={12} sm={4}>
        <TextField
          select
          label="Select Location"
          fullWidth
          onChange={e => onFilter("location", e.target.value)}
          variant="standard"
          size="medium"
		  style={{ width: "250px" }}
          defaultValue=""
        >
          <MenuItem value="">All Locations</MenuItem>
          {locationOptions.map(location => (
            <MenuItem key={location} value={location}>
              {location}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
	  {/* country Dropdown */}
	   <Grid item xs={12} sm={4}>
        <TextField
          select
          label="Select country"
          fullWidth
          onChange={e => onFilter("country", e.target.value)}
          variant="standard"
          size="medium"
		  style={{ width: "250px" }}
          defaultValue=""
        >
          <MenuItem value="">All country</MenuItem>
          {CountryOptions.map(country => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
};

export default CompanyFilter;
