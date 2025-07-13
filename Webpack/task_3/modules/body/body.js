import $ from 'jquery';
import _ from 'lodash';
import '../body/body.css';

$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");

let count = 0;
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

const debouncedUpdate = _.debounce(updateCounter, 500);
$('button').on('click', debouncedUpdate);
