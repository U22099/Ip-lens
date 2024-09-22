import fetchIP from "./fetchIP";
import handleData from "./handleData";
import createMap from "./map";
import validateIP from "./validateIP";
import showToast from "./showToast";

export default class Model {
  async fetch(IP = null) {
    //Calls validate function
    const valid = validateIP(IP);
    if (IP && !valid) {
      //Shows an error toast if input doesnt pass the validation
      showToast("error", "Invalid Input", "Input must be an IPv4 or IPv6");
      return null;
    }
    const data = await fetchIP(IP);
    if (!data) {
      //Returns null if there's an error
      return null;
    } else if (data.status === 429) {
      //Display a limit exceeded error if limit is reached
      showToast(
        "error",
        "Request Limit Reached",
        "Request limit reached, available until next month"
      );
      return null;
    }
    //Returns returned data from handleData function
    return handleData(data);
  }
  map(lat, long) {
    //Runs the creat map function
    createMap(lat, long);
  }
}
