import './style.css';
//Leave this file except for MUIZ and I

const token="89d4c270ab87af";

async function test(){
  const res = await fetch(`https://ipinfo.io/?token=${token}`);
  const data = await res.json();
  console.log(data);
}
//test();
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

*/
