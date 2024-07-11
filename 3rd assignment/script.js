// Mock data for student details
const studentDetails = {
    name: "John Doe",
    id: "12345"
  };
  
  // Mock data for document details
  const documentDetails = {
    vehicleDocument: "Car",
    licenceNumber: "ABC123"
  };
  
  // Mock data for insurance details
  const insuranceDetails = {
    issueDate: "2023-01-01",
    ownerName: "Jane Doe"
  };
  
  // Function to mimic asynchronous fetching of student details
  function getStudentDetail() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(studentDetails); // Resolving with mock student details after 1 second
      }, 1000);
    });
  }
  
  // Function to mimic asynchronous fetching of document details
  function getDocument() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(documentDetails); // Resolving with mock document details after 1 second
      }, 1000);
    });
  }
  
  // Function to mimic asynchronous fetching of insurance details
  function getInsuranceDetail() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(insuranceDetails); // Resolving with mock insurance details after 1 second
      }, 1000);
    });
  }
  
  // Function to update HTML with fetched details
  function updateDetails() {
    getStudentDetail()
      .then(student => {
        document.getElementById('student-details').textContent = JSON.stringify(student, null, 2);
        return Promise.all([getDocument(), getInsuranceDetail()]);
      })
      .then(([document, insurance]) => {
        document.getElementById('document-details').textContent = JSON.stringify(document, null, 2);
        document.getElementById('insurance-details').textContent = JSON.stringify(insurance, null, 2);
      })
      .catch(error => {
        console.error("Error fetching details:", error);
      });
  }
  
  // Call the updateDetails function when the page loads
  window.onload = updateDetails;
  