export default async function fetchIP(IP = null){
  try{
    const token = "89d4c270ab87af";
    let url;
    if(!IP){
      url = `https://ipinfo.io/?token=${token}`;
    } else {
      url = `https://ipinfo.io/${IP}?token=${token}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    return data
  } catch(e){
    console.log(e);
    return null
  }
}