const mongoose = require('mongoose');

const userModel = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    },
    avatar: {
      type: String,
      required: true,
      default: "https://website.com/cdn/avatars/default.png"
    },
    isDiscordLinked: {
      type: Boolean,
      required: true,
      default: false
    },
    isRobloxLinked: {
      type: Boolean,
      required: true,
      default: false
    },
    isGithubLinked: {
      type: Boolean,
      required: true,
      default: false
    },
    discordId: {
      type: String,
      default: null
    },
    discordUsername: {
      type: String,
      default: null
    },
  }
)
