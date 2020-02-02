"use strict";

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var COLUMN_GAP = 50;
var TEXT_WIDTH = 40;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var randomBlueColor = function () {
  var randomNumber = Math.floor(Math.random() * 255);
  var randomSaturation = Math.floor(Math.random() * 9) + 10;
  return "rgba(" + 0 + ", " + randomNumber + ", " + 255 + ", " + (randomSaturation/10 - 0.9) + ")";
}

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#fff");
  ctx.font = "bold 16px PT Mono";
  ctx.fillStyle = "#000";
  ctx.textAlign = "left";
  ctx.textBaseline = "bottom";
  ctx.fillText("Ура вы победили!", CLOUD_X + FONT_GAP, 3 * FONT_GAP);
  ctx.fillText("Список результатов:", CLOUD_X + FONT_GAP, 4 * FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = "#000";
    ctx.fillText(players[i], CLOUD_X + 2 * FONT_GAP + ((COLUMN_GAP + TEXT_WIDTH) * (i)), CLOUD_HEIGHT, TEXT_WIDTH);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + 2 * FONT_GAP + ((COLUMN_GAP + TEXT_WIDTH) * (i)), CLOUD_HEIGHT - (BAR_HEIGHT * times[i])/maxTime - 3 * GAP);
    ctx.fillStyle = randomBlueColor();
    if (players[i] == "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    }
    ctx.fillRect(CLOUD_X + 2 * FONT_GAP + ((COLUMN_GAP + TEXT_WIDTH) * (i)), CLOUD_HEIGHT - (BAR_HEIGHT * times[i])/maxTime - FONT_GAP - GAP, BAR_WIDTH, (BAR_HEIGHT * times[i])/maxTime);
  }
};
