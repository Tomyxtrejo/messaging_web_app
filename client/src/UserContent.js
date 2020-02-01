import { OrderedMap } from "immutable";

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
  }

  // Method to get messages
  getMessages = () => {
    return this.messages.valueSeq();
  };

  // Method to add messages, with index and message object as parameters
  addMessages = (index, message = {}) => {
    this.messages = this.messages.set(index, message);
    // after message is set, update it
    this.updateState();
  };

  // Method to retrieve personal message or group channel details
  getUserChannels = (index, channel = {}) => {
    // return this.userChannels.valueSeq();
    this.userChannels = this.userChannels.set(index, channel);
    // Once channel is set, force update it
    this.updateState();
  };

  // Update react state with forceUpdate() method
  updateState = () => {
    // console.log(this.app)
    this.app.forceUpdate();
  };
}
