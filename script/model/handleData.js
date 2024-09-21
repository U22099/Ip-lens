export default function handleData(data){
  if(data.bogon){
    return data
  } else if(data.error){
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

/*
Output example
{
  "ip": "0.0.0.0",
  "city": "Lagos",
  "region": "Lagos",
  "country": "NG",
  "loc": "8.521,92.647",
  "org": "AS65152 MTN NIGERIA Communication limited",
  "timezone": "Africa/Lagos"
}
{
  "ip": "::1",
  "bogon": true
}
{
  "ip": "172.217.160.142",
  "hostname": "maa03s29-in-f14.1e100.net",
  "city": "Chennai",
  "region": "Tamil Nadu",
  "country": "IN",
  "loc": "13.0878,80.2785",
  "org": "AS15169 Google LLC",
  "postal": "600001",
  "timezone": "Asia/Kolkata"
}
{
  "ip": "2001:0:200:3::1",
  "city": "Solna",
  "region": "Stockholm",
  "country": "SE",
  "loc": "59.3600,18.0009",
  "postal": "105 04",
  "timezone": "Europe/Stockholm"
}
*/