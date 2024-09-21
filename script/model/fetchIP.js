export default async function fetchIP(IP = null){
  try{
    let url;
    if(!IP){
      url = `https://ipinfo.io/?token=${token}`;
    } else {
      url = `https://ipinfo.io/${IP}?token=${token}`;
    }
    const res = await fetch(url);
    const data = res.json();
    return data
  } catch(e){
    console.log(e);
    return null
  }
}