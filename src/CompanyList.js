import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CompanyList = ({ companies }) => {
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "transparent" }}>
      <Table>
        <TableHead>
          <TableRow>
			<TableCell sx={{ backgroundColor: "#2196f2", color: "white" }}>ID</TableCell>
            <TableCell sx={{ backgroundColor: "#2196f2", color: "white" }}>Name</TableCell>
            <TableCell sx={{ backgroundColor: "#2196f2", color: "white" }}>Industry</TableCell>
            <TableCell sx={{ backgroundColor: "#2196f2", color: "white" }}>Location</TableCell>
			<TableCell sx={{ backgroundColor: "#2196f2", color: "white" }}>Country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies.map(company => (
            <TableRow key={company.id}>
              <TableCell>{company.id}</TableCell>
			  <TableCell>{company.name}</TableCell>
              <TableCell>{company.industry}</TableCell>
              <TableCell>{company.location}</TableCell>
			  <TableCell>{company.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompanyList;
