import $ from 'jquery';
import '../header/header.css';
import logo from '../../assets/holberton-logo.jpg';

console.log('Init header');

const header = $(`
  <div id="logo"></div>
  <h1>Holberton Dashboard</h1>
`);

$('#app').append(header);
$('#logo').css({
  'background-image': `url(${logo})`,
  'width': '200px',
  'height': '200px',
  'background-size': '200px 200px',
  'background-repeat': 'no-repeat',
  'background-position': 'center center',
});
