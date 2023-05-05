var Account = {
    userName: "faris",
    password: "12345"
};

var Center = `
    <div class="card">
                <div class="content">
                    <h5>Chart of Account</h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-chart-simple text-black"></i>
                </div>
            </div>

            <div class="card">
                <div>
                    <H5>Item List</H5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-rectangle-list text-black"></i>
                </div>
            </div>

            <div id="value" class="card">
                <div>
                    <h5>Class List</h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-table-list text-black"></i>
                </div>
            </div>

            <div class="card">
                <div>
                    <h5>
                        Currency List
                    </h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-clipboard-list text-black"></i>
                </div>
            </div>

            <div class="card">
                <div>
                    <h5>
                        Tamplete
                    </h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-file text-black"></i>
                </div>
            </div>
            <div class="card">
                <div>
                    <h5>
                        General Journal
                    </h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-book-journal-whills text-black"></i>
                </div>
            </div>
            <div class="card">
                <div>
                    <h5>
                        Tranfer Funds
                    </h5>
                </div>

                <div class="iconBx">
                    <ion-icon name="cash-outline"></ion-icon>
                </div>
            </div>
            <div class="card">
                <div>
                    <h5>
                        Make Deposits
                    </h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-chart-simple text-black"></i>
                </div>
            </div>
            <div class="card">
                <div>
                    <h5>
                        Reconcile
                    </h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-chart-simple text-black"></i>
                </div>
            </div>


`;


var customer = `
            <div class="card">
                <div class="content">
                    <h5>Customer Center</h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-chart-simple text-black"></i>
                </div>
            </div>

            <div class="card">
                <div>
                    <H5>Create Invoices</H5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-rectangle-list text-black"></i>
                </div>
            </div>

            <div id="value" class="card">
                <div>
                    <h5>Creat Estimates</h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-table-list text-black"></i>
                </div>
            </div>

            <div class="card">
                <div>
                    <h5>
                        Creat Sales Order
                    </h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-clipboard-list text-black"></i>
                </div>
            </div>

            <div class="card">
                <div>
                    <h5>
                        Create Sales Receipts
                    </h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-file text-black"></i>
                </div>
            </div>
            <div class="card">
                <div>
                    <h5>
                        Customer Payment
                    </h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-book-journal-whills text-black"></i>
                </div>
            </div>
`;
var vendors = `
            <div class="card">
                <div class="content">
                    <h5>Enter Bills</h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-chart-simple text-black"></i>
                </div>
            </div>

            <div class="card">
                <div>
                    <H5>Pay Bills</H5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-rectangle-list text-black"></i>
                </div>
            </div>

            <div id="value" class="card">
                <div>
                    <h5>Create Purchase Order</h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-table-list text-black"></i>
                </div>
            </div>

            <div class="card">
                <div>
                    <h5>
                        Creat Sales Order
                    </h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-clipboard-list text-black"></i>
                </div>
            </div>

            <div class="card">
                <div>
                    <h5>
                        Create Sales Receipts
                    </h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-file text-black"></i>
                </div>
            </div>
            <div class="card">
                <div>
                    <h5>
                        Customer Payment
                    </h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-book-journal-whills text-black"></i>
                </div>
            </div>
`;
var Empoly = `
            <div class="card">
                <div class="content">
                    <h5>Empolyees Center</h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-chart-simple text-black"></i>
                </div>
            </div>

            <div class="card">
                <div>
                    <H5>Enter Time</H5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-rectangle-list text-black"></i>
                </div>
            </div>

            <div id="value" class="card">
                <div>
                    <h5>Pay Roll</h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-table-list text-black"></i>
                </div>
            </div>

            <div class="card">
                <div>
                    <h5>
                        Guide to Hirring Employees
                    </h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-clipboard-list text-black"></i>
                </div>
            </div>

            <div class="card">
                <div>
                    <h5>
                        HR Essentials and Insurance
                    </h5>
                </div>

                <div class="iconBx">
                    <i class="fa-solid fa-file text-black"></i>
                </div>
            </div>
`;


if (document.getElementById("customer") != null) {
  document.getElementById("customer").addEventListener("click", function () {
    $("#box .card").fadeOut(500, () => {
      document.getElementById("box").innerHTML = customer;
    });
  });
}
if (document.getElementById("acountant") !=null) {
  document.getElementById("acountant").addEventListener("click", function () {
    $("#box .card").fadeOut(500, () => {
      document.getElementById("box").innerHTML = Center;
    });
  });
}
if (document.getElementById("vendors") != null) {
    document.getElementById("vendors").addEventListener("click", function () {
        $("#box .card").fadeOut(500, () => {
            document.getElementById("box").innerHTML = vendors;
        });
    });
}
if (document.getElementById("empoly") != null) {
    document.getElementById("empoly").addEventListener("click", function () {
        $("#box .card").fadeOut(500, () => {
            document.getElementById("box").innerHTML = Empoly;
        });
    });
}


var nam = document.getElementById("userName");
var pass = document.getElementById("password");


var btn = document.getElementById("submit");

if (nam != null) {
    nam.addEventListener("keypress", function () {
      document.getElementById("alert").classList.add("d-none");
    });
}

if (pass != null)
{
    pass.addEventListener("keypress", function () {
      document.getElementById("alert").classList.add("d-none");
    });
}

if (btn != null) {
    btn.addEventListener("click", function () {
      var name = nam.value;
      var pas = pass.value;
      if (name === Account.userName && pas === Account.password) {
        btn.setAttribute("href", "dashbord.html");
      } else {
        document.getElementById("alert").classList.remove("d-none");
      }
    });
}



