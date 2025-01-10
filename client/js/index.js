var table = document.getElementById("myTable");
console.log(table.children[1]);

// get the data(id, username, phone) from the api

var allData = [];

async function getData() {
  try {
    await fetch("http://127.0.0.1:5001/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: json.stringify({ username: "admin", phone: 345667890 }),
    })
      // تحويل البيانات إلى JSON
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        var i = 1;
        data.forEach((element) => {
          var row = document.createElement("tr");

          var cell4 = document.createElement("td");
          var cell1 = document.createElement("td");
          var cell2 = document.createElement("td");
          var cell3 = document.createElement("td");

          cell1.innerHTML = element.id;
          cell2.innerHTML = element.username;
          cell3.innerHTML = element.phone;
          cell4.innerHTML = i;

          row.appendChild(cell4);
          row.appendChild(cell1);
          row.appendChild(cell2);
          row.appendChild(cell3);

          table.children[1].appendChild(row);

          i++;
        });

        allData = data; // تحديث المتغير allData
      });
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();
console.log(allData);
