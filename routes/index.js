const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Welcome to the party!",
    user: "Bot",
    added: new Date().toDateString()
  },
  {
    text: "This is kind of a small party",
    user: "Bob",
    added: new Date().toDateString()
  },
  {
    text: "Yeah, weird...",
    user: "Alice",
    added: new Date().toDateString()
  }
]

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render('index', { title: "Mini Message Board", messages: messages })
})

// GET new message form
router.get("/new", (req, res, next) => {
  res.render("form")
});

// POST new message
router.post("/new", (req, res, next) => {
  messages.push({text: req.body.usrMsg, user: req.body.usrName, added: new Date().toDateString()})
  res.redirect('/')
})

module.exports = router;
