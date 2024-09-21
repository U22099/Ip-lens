import showToast from "./showToast";

export default function handleData(data){
  console.log(data);
  if(data.bogon){
    showToast("warning", "Bogon IP", "IP is not accessible on internet");
    return data
  } else if(data.error){
    showToast("error", "Invalid IP", "IP is invalid");
    return null
  } else {
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
      timezone: data.timezone
    }
  }
}