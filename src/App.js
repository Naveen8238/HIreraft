import React from "react";
import ReusableTable from "./ReusableTable";

const App = () => {
  const tableData = [
    { id: 1, name: "John Doe", age: 25, city: "New York" },
    { id: 2, name: "Jane Doe", age: 30, city: "San Francisco" },
  ];
  const tableColumns = [
    { name: "id", label: "ID" },
    { name: "name", label: "Name" },
    { name: "age", label: "Age" },
    { name: "city", label: "City" },
  ];
  return (
    <div>
      <h1>Your Table</h1>
      <ReusableTable data={tableData} columns={tableColumns} />
    </div>
  );
};
export default App;
