// (function() {
//   // Load the script
//   var script = document.createElement("SCRIPT");
//   script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
//   script.type = 'text/javascript';
//   document.getElementsByTagName("head")[0].appendChild(script);
// })();
var testsData = [
  {
    courseName: "BI11",
    testName: "Midterm"
  },
  {
    courseName: "BI11",
    testName: "Final"
  },
  {
    courseName: "BI13",
    testName: "Q1"
  },
  {
    courseName: "BI13",
    testName: "Q2"
  },
  {
    courseName: "BI13",
    testName: "Q3"
  },
  {
    courseName: "BI13",
    testName: "Final"
  },
  {
    courseName: "BI14",
    testName: "Q1"
  },
  {
    courseName: "BI14",
    testName: "Q2"
  },
  {
    courseName: "BI14",
    testName: "Q3"
  },
  {
    courseName: "BI14",
    testName: "Q4"
  },
  {
    courseName: "BI14",
    testName: "Final"
  },
  {
    courseName: "BI14",
    testName: "2019 Final"
  },
  {
    courseName: "BT11",
    testName: "Q1"
  },
  {
    courseName: "BT11",
    testName: "Q2"
  },
  {
    courseName: "BT11",
    testName: "Q3"
  },
  {
    courseName: "BT11",
    testName: "Q4"
  },
  {
    courseName: "BT11",
    testName: "Final"
  },
  {
    courseName: "BT12",
    testName: "Q1"
  },
  {
    courseName: "BT12",
    testName: "Q2"
  },
  {
    courseName: "BT12",
    testName: "Q3"
  },
  {
    courseName: "BT12",
    testName: "Q4"
  },
  {
    courseName: "BT12",
    testName: "Final"
  },
  {
    courseName: "BT42",
    testName: "Final"
  },
  {
    courseName: "NT31",
    testName: "Q1"
  },
  {
    courseName: "NT31",
    testName: "Q2"
  },
  {
    courseName: "NT31",
    testName: "Q3"
  },
  {
    courseName: "NT31",
    testName: "Q4"
  },
  {
    courseName: "NT31",
    testName: "Final"
  },
  {
    courseName: "NT41",
    testName: "Final"
  },
  {
    courseName: "HT11",
    testName: "Exam 1"
  },
  {
    courseName: "HT11",
    testName: "Exam 2"
  },
  {
    courseName: "HT11",
    testName: "Exam 3"
  },
  {
    courseName: "HT12",
    testName: "Exam 1"
  },
  {
    courseName: "HT12",
    testName: "Exam 2"
  },
  {
    courseName: "HT12",
    testName: "Exam 3"
  },
  {
    courseName: "HT13",
    testName: "Exam 1"
  },
  {
    courseName: "HT13",
    testName: "Exam 2"
  },
  {
    courseName: "HT13",
    testName: "Exam 3"
  },
  {
    courseName: "HT14",
    testName: "Midterm"
  },
  {
    courseName: "HT14",
    testName: "Final"
  },
  {
    courseName: "HT15",
    testName: "Midterm"
  },
  {
    courseName: "HT15",
    testName: "Final"
  },
  {
    courseName: "HT41",
    testName: "Q1"
  },
  {
    courseName: "HT41",
    testName: "Q2"
  },
  {
    courseName: "HT41",
    testName: "Q3"
  },
  {
    courseName: "HT41",
    testName: "Q4"
  },
  {
    courseName: "HT41",
    testName: "Q5"
  },
  {
    courseName: "HT41",
    testName: "Final"
  },
  {
    courseName: "HT42",
    testName: "Q1"
  },
  {
    courseName: "HT42",
    testName: "Q2"
  },
  {
    courseName: "HT44",
    testName: "Final"
  },
  {
    courseName: "HT45",
    testName: "Q1"
  },
  {
    courseName: "HT45",
    testName: "Q2"
  },
  {
    courseName: "HT45",
    testName: "Q3"
  },
  {
    courseName: "HT45",
    testName: "Q4"
  },
  {
    courseName: "HT45",
    testName: "Q5"
  },
  {
    courseName: "HT45",
    testName: "Q6"
  },
  {
    courseName: "HT45",
    testName: "Final"
  },
  {
    courseName: "HT46",
    testName: "Exam 1"
  },
  {
    courseName: "HT46",
    testName: "Exam 2"
  },
  {
    courseName: "PT11",
    testName: "Final"
  },
  {
    courseName: "PT12",
    testName: "Final"
  },
  {
    courseName: "PT13",
    testName: "Q1"
  },
  {
    courseName: "PT13",
    testName: "Q2"
  },
  {
    courseName: "PT15",
    testName: "Q1"
  },
  {
    courseName: "PT15",
    testName: "Q2"
  },
  {
    courseName: "PT15",
    testName: "Midterm"
  },
  {
    courseName: "PT15",
    testName: "Q3"
  },
  {
    courseName: "PT15",
    testName: "Q4"
  },
  {
    courseName: "PT15",
    testName: "Final"
  },
  {
    courseName: "PT16",
    testName: "Q1"
  },
  {
    courseName: "PT16",
    testName: "Q2"
  },
  {
    courseName: "PT16",
    testName: "Q3"
  },
  {
    courseName: "PT16",
    testName: "Q4"
  },
  {
    courseName: "PT16",
    testName: "Q5"
  },
  {
    courseName: "PT16",
    testName: "Final"
  },
  {
    courseName: "PT17",
    testName: "Final"
  },
  {
    courseName: "PT18",
    testName: "Final"
  },
  {
    courseName: "ST14",
    testName: "Q1"
  },
  {
    courseName: "ST14",
    testName: "Q2"
  },
  {
    courseName: "ST14",
    testName: "Q3"
  },
  {
    courseName: "ST14",
    testName: "Q4"
  },
  {
    courseName: "ST14",
    testName: "Q5"
  },
  {
    courseName: "ST14",
    testName: "Q6"
  },
  {
    courseName: "ST14",
    testName: "Q7"
  },
  {
    courseName: "ST14",
    testName: "Q8"
  },
  {
    courseName: "ST14",
    testName: "Q9"
  },
  {
    courseName: "ST14",
    testName: "Final"
  },
  {
    courseName: "ST21",
    testName: "Q1"
  },
  {
    courseName: "ST21",
    testName: "Q2"
  },
  {
    courseName: "ST21",
    testName: "Q3"
  },
  {
    courseName: "ST21",
    testName: "Q4"
  },
  {
    courseName: "ST21",
    testName: "Final"
  },
  {
    courseName: "ST22",
    testName: "Q1"
  },
  {
    courseName: "ST22",
    testName: "Q2"
  },
  {
    courseName: "ST22",
    testName: "Q3"
  },
  {
    courseName: "ST22",
    testName: "Q4"
  },
  {
    courseName: "ST22",
    testName: "Final"
  },
  {
    courseName: "ST23",
    testName: "Q1"
  },
  {
    courseName: "ST23",
    testName: "Q2"
  },
  {
    courseName: "ST23",
    testName: "Q3"
  },
  {
    courseName: "ST23",
    testName: "Q4"
  },
  {
    courseName: "ST23",
    testName: "Q5"
  },
  {
    courseName: "ST23",
    testName: "Q6"
  },
  {
    courseName: "ST23",
    testName: "Q7"
  },
  {
    courseName: "ST23",
    testName: "Q8"
  },
  {
    courseName: "ST23",
    testName: "Final"
  },
  {
    courseName: "ST24",
    testName: "Q1"
  },
  {
    courseName: "ST24",
    testName: "Q2"
  },
  {
    courseName: "ST24",
    testName: "Q3"
  },
  {
    courseName: "ST24",
    testName: "Q4"
  },
  {
    courseName: "ST24",
    testName: "Q5"
  },
  {
    courseName: "ST24",
    testName: "Final"
  },
  {
    courseName: "ST25",
    testName: "Midterm"
  },
  {
    courseName: "ST25",
    testName: "Final"
  },
  {
    courseName: "ST26",
    testName: "Final"
  },
  {
    courseName: "ST27",
    testName: "Q1"
  },
  {
    courseName: "ST27",
    testName: "Q2"
  },
  {
    courseName: "ST27",
    testName: "Q3"
  },
  {
    courseName: "ST27",
    testName: "Q4"
  },
  {
    courseName: "ST27",
    testName: "Q5"
  },
  {
    courseName: "ST27",
    testName: "Q6"
  },
  {
    courseName: "ST27",
    testName: "Final"
  },
  {
    courseName: "ST41",
    testName: "Q1"
  },
  {
    courseName: "ST41",
    testName: "Q2"
  },
  {
    courseName: "ST41",
    testName: "Q3"
  },
  {
    courseName: "ST41",
    testName: "Q4"
  },
  {
    courseName: "ST41",
    testName: "Final"
  },
  {
    courseName: "ST43",
    testName: "Q1"
  },
  {
    courseName: "ST43",
    testName: "Q2"
  },
  {
    courseName: "ST43",
    testName: "Q3"
  },
  {
    courseName: "ST43",
    testName: "Q4"
  },
  {
    courseName: "ST43",
    testName: "Final"
  },
  {
    courseName: "ST44",
    testName: "Final"
  }
];

jQuery(document).ready(function ($) {
  $(function () {
    // Class Codes Dropdown
    var classCodes = $("#classCode");
    var titles = testsData.map((x) => x.courseName);
    titles = [...new Set(titles)];
    $.map(titles, function (val) {
      classCodes.append($("<option></option>").val(val).html(val));
    });
  });

  function postForm(obj) {
    obj = JSON.stringify(obj);
    fetch(
      "https://cors-anywhere.herokuapp.com/http://ec2-18-232-166-134.compute-1.amazonaws.com:5000/api/courses/prf",
      {
        method: "POST",
        body: obj,
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then((x) => console.log("OK"));
  }
  $("#mainForm").submit(function (event) {
    var studentFirst = document.getElementById("studentFirst").value;
    var studentLast = document.getElementById("studentLast").value;
    var studentEmail = document.getElementById("studentEmail").value;
    var proctorName = document.getElementById("proctorName").value;
    var proctorEmail = document.getElementById("proctorEmail").value;
    var classCodeSelected = document.getElementById("classCode").value;
    var testNumberSelected = document.getElementById("testNumber").value;
    if (studentEmail !== proctorEmail) {
      var dataSubmitted = {
        studentFirst,
        studentLast,
        studentEmail,
        proctorName,
        proctorEmail,
        classCodeSelected,
        testNumberSelected
      };
      postForm(dataSubmitted);
      // Swal.fire(
      //   "Form submitted!",
      //   "Your proctor will receive the Quiz/Test password.",
      //   "success"
      // );
      // setTimeout(function () {
      //   window.location.reload();
      // }, 3500);
      event.preventDefault();
    } else {
      alert("Invalid Proctor Email");
    }
    event.preventDefault();
  });
});

// Quiz/Test Dropdown
window.classCodeSelectChanged = function () {
  // Form Values
  var classCodeSelected = document.getElementById("classCode").value;
  // Fill Dropdown
  var testNumber = $("#testNumber");
  testNumber.empty();
  var testsForSelectedCourse = testsData.filter(
    (x) => x.courseName === classCodeSelected
  );
  $.map(testsForSelectedCourse, function (val) {
    testNumber.append(
      $("<option></option>").val(val.testName).html(val.testName)
    );
  });
};
