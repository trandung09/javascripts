document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const birthday = document.getElementById("birthday").value;
    const mobile = document.getElementById("mobile").value;
    const hometown = document.getElementById("hometown").value;

    const tableBody = document.getElementById("studentTableBody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td><input type="checkbox" class="select-row"></td>
        <td>${name}</td>
        <td>${formatDate(birthday)}</td>
        <td>${mobile}</td>
        <td>${hometown}</td>
    `;
    tableBody.appendChild(newRow);

    document.getElementById("studentForm").reset();
  });

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function deleteSelected() {
  const tableBody = document.getElementById("studentTableBody");
  const rows = tableBody.getElementsByTagName("tr");
  for (let i = rows.length - 1; i >= 0; i--) {
    const checkbox = rows[i].querySelector(".select-row");
    if (checkbox.checked) {
      tableBody.removeChild(rows[i]);
    }
  }
}

function editSelected() {
  const tableBody = document.getElementById("studentTableBody");
  const rows = tableBody.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    const checkbox = rows[i].querySelector(".select-row");
    if (checkbox.checked) {
      const cells = rows[i].getElementsByTagName("td");
      document.getElementById("name").value = cells[1].textContent;
      document.getElementById("birthday").value = reformatDate(
        cells[2].textContent
      );
      document.getElementById("mobile").value = cells[3].textContent;
      document.getElementById("hometown").value = cells[4].textContent;
      tableBody.removeChild(rows[i]);
      break;
    }
  }
}

function reformatDate(dateString) {
  const [day, month, year] = dateString.split("/");
  return `${year}-${month}-${day}`;
}
