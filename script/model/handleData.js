import showToast from "./showToast";

export default function handleData(data) {
  //Checks if the data is bogon(local ip) and displays a warning toast
  if (data.bogon) {
    showToast("warning", "Bogon IP", "IP is not accessible on internet");
    return data;
  } else if (data.error) {
    //Checks if the data as error(invalid ip) and displays an error toast
    showToast("error", "Invalid IP", data.error.message);
    return null;
  } else {
    //Returns needed outputs
    return {
      ip: data.ip,
      hostname: data.hostname,
      city: data.city,
      region: data.region,
      country: data.country,
      latitude: data.loc.split(",")[0],
      longitude: data.loc.split(",")[1],
      org: data.org,
      postal: data.postal,
      timezone: data.timezone,
    };
  }
}
