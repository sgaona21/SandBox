console.log("JS Linked");

const playlist = [
  ['So What', 'Miles Davis', '9:04'],
  ['Respect', 'Aretha Franklin', '2:45'],
  ['What a Wonderful World', 'Louis Armstrong', '2:21'],
  ['At Last', 'Ella Fitzgerald', '4:18'],
  ['Three Little Birds', 'Bob Marley and the Wailers', '3:01'],
  ['The Way You Look Tonight', 'Frank Sinatra', '3:21']
];

let text = '';

for (let i = 0; i < playlist.length; i++) {
  text += `<p> #${i +1} ${playlist[i][0]}, by ${playlist[i][1]} - ${playlist[i][2]}`
}

document.getElementById("paragraph").innerHTML = text;