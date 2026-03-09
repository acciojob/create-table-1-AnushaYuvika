function insert_Row() {
    //Write your code here
  const row = document.createElement("tr");
  const tableData1 = document.createElement("td");
  tableData1.textContent = "New Cell1";
  const tableData2 = document.createElement("td");
  tableData2.textContent = "New Cell2";

  row.appendChild(tableData1);
  row.appendChild(tableData2);
	
  const table = document.querySelector("#sampleTable");
  table.insertBefore(row, table.children[1]);
  table.prepend(row);
}

