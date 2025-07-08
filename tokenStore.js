// tokenStore.js

const fs = require("fs");
const path = require("path");

const storePath = path.join(__dirname, "/tokens.json");

// Load tokens from file (if it exists)
let tokenStore = {};
if (fs.existsSync(storePath)) {
  tokenStore = JSON.parse(fs.readFileSync(storePath, "utf-8"));
}

// Save the current token store to disk
function saveStore() {
  fs.writeFileSync(storePath, JSON.stringify(tokenStore, null, 2));
}

// Save token for a team ID
function saveTokenForTeam(teamId, token) {
  if (!tokenStore[teamId]) {
    tokenStore[teamId] = {}; // Initialize object if missing
  }
  tokenStore[teamId].botToken = token;
  saveStore();
}

// Get token for a team ID
function getTokenForTeam(teamId) {
  return tokenStore[teamId].botToken;
}

function saveChannelForTeam(teamId, channelId) {
  if (!tokenStore[teamId]) tokenStore[teamId] = {};
  tokenStore[teamId].channelId = channelId;
  saveStore();
}

function getChannelForTeam(teamId) {
  return tokenStore[teamId]?.channelId || null;
}

//get name for team id
function getNameForTeam(teamId) {
  return tokenStore[teamId]?.name || null;
}

//save name for team id
function saveNameForTeam(teamId, teamName) {
  if (!tokenStore[teamId]) {
    tokenStore[teamId] = {}; // Initialize object if missing
  }
  if (!tokenStore[teamId]) tokenStore[teamId] = {};
  tokenStore[teamId].name = teamName;
  saveStore();
}

function saveEventForTeam(teamId, eventId) {
  if (!tokenStore[teamId]) {
    tokenStore[teamId] = {}; // Initialize object if missing
  }
  if (!tokenStore[teamId]) tokenStore[teamId] = {};
  tokenStore[teamId].event = eventId;
  saveStore();
}
function getEventForTeam(teamId) {
  return tokenStore[teamId]?.event || null;
}
function getAllTokens() {
  if (!fs.existsSync(storePath)) return {};
  return JSON.parse(fs.readFileSync(storePath, "utf8"));
}

module.exports = {
  saveNameForTeam,
  getNameForTeam,
  saveTokenForTeam,
  getTokenForTeam,
  saveChannelForTeam,
  getChannelForTeam,
  getEventForTeam,
  saveEventForTeam,
  getAllTokens,
};
