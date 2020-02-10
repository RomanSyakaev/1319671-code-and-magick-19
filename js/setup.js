'use strict';

var wizards = [{}, {}, {}, {}];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var randomInteger = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

var renderName = function () {
  var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var secondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var getFullName = function (namesArrow, surnamesArrow) {
    var fullName = '';
    if (randomInteger(0, 1) === 1) {
      fullName = namesArrow[randomInteger(0, namesArrow.length - 1)] + ' ' + surnamesArrow[randomInteger(0, surnamesArrow.length - 1)];
    } else {
      fullName = surnamesArrow[randomInteger(0, surnamesArrow.length - 1)] + ' ' + namesArrow[randomInteger(0, namesArrow.length - 1)];
    }

    return fullName;
  };

  return getFullName(firstNames, secondNames);

};

var renderCoatColor = function () {
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  return coatColors[randomInteger(0, coatColors.length - 1)];
};

var renderEyesColor = function () {
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  return eyesColors[randomInteger(0, eyesColors.length - 1)];
};

var renderWizards = function (wizardsList) {

  for (var i = 0; i < 4; i++) {
    wizardsList[i].name = renderName();
    wizardsList[i].coatColor = renderCoatColor();
    wizardsList[i].eyesColor = renderEyesColor();
  }

  return wizardsList;
};

renderWizards(wizards);

var createWizardCards = function () {
  for (var i = 0; i < 4; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

    similarListElement.appendChild(wizardElement);
  }
};

createWizardCards();

document.querySelector('.setup-similar').classList.remove('hidden');
