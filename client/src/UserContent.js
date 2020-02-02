import { OrderedMap } from "immutable";

// Initialize the users as an OrderedMap
const users = OrderedMap({
  "1": {
    _id: "1",
    name: "Neeraj",
    created: new Date()
  },
  "2": {
    _id: "2",
    name: "Atishay",
    created: new Date()
  },
  "3": {
    _id: "3",
    name: "Dhiman",
    created: new Date()
  }
});

// User content class to fetch all functions
export default class UserContent {
  // constructor function
  constructor(appContent) {
    this.app = appContent;
    this.messages = new OrderedMap();
    this.userChannels = new OrderedMap();
    this.user = {
      _id: 0,
      name: "Atishay",
      created: new Date()
    };
    // active channel id
    this.activeChannelId = null;
  }

  // Method to get messages
  getMessages = () => {
    return this.messages.valueSeq();
  };

  // Retrieve all messages of a channel
  getMessagesByChannelId = channel => {
    // Initialise messages an an empty array
    let messages = [];
    if (channel) {
      return channel.messages.keySeq().map((value, key) => {
        console.log("hi--", value);
        const message = this.messages.get(key);
        messages.push(message);
      });
    }
    // return new OrderedMap();
    return messages;
  };

  // Method to add messages, with index and message object as parameters
  addMessages = (index, message = {}) => {
    this.messages = this.messages.set(`${index}`, message);
    // after message is set, update it
    this.updateState();
  };

  // Method to retrieve personal message or group channel details
  getUserChannels = (index, channel = {}) => {
    // return this.userChannels.valueSeq();
    this.userChannels = this.userChannels.set(`${index}`, channel);
    // Once channel is set, force update it
    // this.updateState();
  };

  // Set active channel id
  setActiveChannel = channelId => {
    this.activeChannelId = channelId;
    this.updateState();
  };

  // Get details of active channel
  getActiveChannel = () => {
    const activeChannel = this.activeChannelId
      ? this.userChannels.get(this.activeChannelId)
      : this.userChannels.first();

    // Return active channel
    return activeChannel;
  };

  // Add channel
  addChannel = (index, channel = {}) => {
    this.userChannels = this.userChannels.set(`${index}`, channel);
  };

  // Get members from channel
  getMembersFromChannel = channel => {
    // Intialise member array
    const members = [];

    // If channel exists, append the current members to the members array
    if (channel) {
      channel.members.map((value, key) => {
        console.log("Debug key is: ", key);
        const member = users.get(key);
        members.push(member);
      });
    }
    return members;
  };

  // Update react state with forceUpdate() method
  updateState = () => {
    // console.log(this.app)
    this.app.forceUpdate();
  };
}
