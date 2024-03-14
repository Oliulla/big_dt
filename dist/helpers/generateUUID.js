"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateUserId() {
    const timestamp = new Date().getTime().toString(36);
    const randomStringLength = 22 - timestamp.length;
    const randomString = Math.random()
        .toString(36)
        .substring(2, 2 + randomStringLength);
    const user_id = timestamp + randomString;
    return user_id;
}
exports.default = generateUserId;
