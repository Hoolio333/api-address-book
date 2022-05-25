const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 3030;

const contacts = require("./data/contacts");
const meetings1 = require("./data/meetings");

app.use(morgan("dev"));
app.use(cors());

// Get request
app.get("/", (req, res) => {
  console.log("got request!");
  res.json("Hello!");
  console.log("got request!");
});

app.get("/contacts", (req, res) => {
  res.json({ contacts: contacts });
});

app.get("/contacts/:id", (req, res) => {
  console.log("params", req.params);
  console.log("id", req.params.id);
  const contact = contacts.find((item) => item.id === +req.params.id);
  res.json({ contact: contact });
});

app.get("/contacts/:id/meetings", (req, res) => {
  const meetings = meetings1.filter((contact) => {
    return contact.contactId === id;
  });
  res.json({ meetings });
});

https: app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
