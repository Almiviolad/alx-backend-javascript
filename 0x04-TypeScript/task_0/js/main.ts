interface Student {
    firstName: string,
    lastName: string, 
    age: number,
    location: string
  }
  
const student1: Student =
      {
          firstName: 'Michael',
          lastName: 'Aloh', 
          age: 21,
          location: 'Oyo'
      }
const student2: Student =
      {
          firstName: 'Vincent',
          lastName: 'Tobi', 
          age: 18,
          location: 'Lagos'
      }
const studentsList  = [ student1, student2 ];
  
const table = document.getElementById('studentTable') as HTMLTableElement;

studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})