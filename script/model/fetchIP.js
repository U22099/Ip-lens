//Function to fetch api data
export default async function fetchIP(IP = null) {
  try {
    //Api token
    const token = "89d4c270ab87af";
    let url;
    if (IP === null) {
      //Set url for default ip if no ip is input
      url = `https://ipinfo.io/?token=${token}`;
    } else {
      //Set url for input ip
      url = `https://ipinfo.io/${IP}?token=${token}`;
    }
    //Fetches data from the api
    const res = await fetch(url);
    //Converts to json
    const data = await res.json();
    //Returns data
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
}
