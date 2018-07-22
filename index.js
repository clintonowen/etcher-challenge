'use strict';
/* global $ */

// Add Event Listeners here:
function handleCellHover() {
  $('.cell').hover(function() {
    $(this).addClass('active');
  });
}

function handleRedraw() {
  $('.controls').find('button').click(function() {
    createAndPlaceRows(8);
    handleCellHover();
  });
}

// When DOM is ready:
$(() => {
  createAndPlaceRows(8);

  // Bind your event listeners here:
  handleCellHover();
  handleRedraw();
});







// ===============================
// Code below is to automate grid creation
// You can ignore this!
// ===============================
function createRow(cellCount) {
  let row = '<div class="row">';
  let str = '<div class="cell">&nbsp;</div>';
  for (let i = 0; i < cellCount; i++) {
    row += str;
  }
  row += '</div>';
  return row;
}

function createRows(n) {
  let rows = '';
  for (let i = 0; i < n; i++) {
    rows += createRow(n);
  }
  return rows;
}

function createAndPlaceRows(n) {
  $('.cell').remove(); // Clear all current cells and listeners
  const rows = createRows(n);
  $('.grid').html(rows);
  const cells = $('.cell');
  cells.css({ height: cells.width() });
}