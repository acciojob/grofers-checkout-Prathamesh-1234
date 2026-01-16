// Create button
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  // 1. Select all price cells
  const prices = document.querySelectorAll(".price");

  let total = 0;

  // 2. Calculate total
  prices.forEach(cell => {
    total += Number(cell.textContent);
  });

  // 3. Get table
  const table = document.querySelector("table");

  // 4. Remove old total row if exists
  const oldTotalRow = document.getElementById("total-row");
  if (oldTotalRow) {
    oldTotalRow.remove();
  }

  // 5. Create new row
  const totalRow = document.createElement("tr");
  totalRow.id = "total-row";

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: Rs ${total}`;
  totalCell.style.fontWeight = "bold";
  totalCell.style.textAlign = "center";

  // 6. Append
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

// Event listener
getSumBtn.addEventListener("click", getSum);
