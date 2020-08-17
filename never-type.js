"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred', 500);
