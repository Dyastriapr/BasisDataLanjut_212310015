//TUGAS 2

use("RentalFilm");

db.customers.insert([
  {
    id: "1",
    fullname: "Fernanda Ramos",
    email: "fernadaramos4@uol.com.br",
    age: 24,
  },
  {
    id: "2",
    fullname: "Mark Philips",
    email: "mphilips12@shaw.ca",
    city: "San Francisco",
  },
  {
    id: "3",
    fullname: "Jennifer Peterson",
    email: "jenniferp@rogers.ca",
    occupation: "teacher",
  },
]);

db.customers.update({ id: "3" }, { $set: { fullname: "Marsha Lenathea" } });

db.customers.remove({ id: "5" });
