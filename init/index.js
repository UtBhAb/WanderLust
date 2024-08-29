const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
.then(() => {
    console.log("Connection Successful");
})
.catch(err => {
    console.log(err)}
);

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wonderlust');
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: '66cede8a45568368d7095cfc'}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();