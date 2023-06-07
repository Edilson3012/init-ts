
//numbers
let name_var: number = 333;
name_var = 123;
name_var = 1.2;
name_var = 0xFA;
console.log(name_var);

//bool
let active: boolean = true;

//string
let firstname = 'Edilson';
let lastname = 'Murbach';
let fullname: string = `${firstname} ${lastname}`;
console.log(fullname);

// Enums
enum ROLES {
  MANAGER,
  ADMIN,
  CEO,
  CTO
};
console.log(ROLES.ADMIN);

function setRole(role: ROLES):void{

}
setRole(ROLES.CEO);

// arrays
let names = [
  'Edilson', 'Emerson', 'Eduardo', 27, true
];
let names1: string[] = [
  'Edilson', 'Emerson', 'Eduardo',
];
let names2: Array<string> = [
  'Edilson', 'Emerson', 'Eduardo',
];


