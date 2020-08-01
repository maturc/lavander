export default function timestampParse( time: string ) {
  let n: any, timestamp: any;
  if(time.length < 21) {
    n = time.match(/\d+/g);
    timestamp = `${n[0]}/${n[1]}/${n[2]} at ${n[3]}:${n[4]}`
  } else {
    n = time.match(/\d+/g);
    timestamp = `${n[2]}/${n[1]}/${n[0]} at ${n[3]}:${n[4]}`
  }
  const currentTime = new Date().toLocaleString('en-GB');
  if(currentTime.slice(0,5) === timestamp.slice(0,5)) {
    timestamp = "Today" + timestamp.slice(10);
  }
  return timestamp;
}