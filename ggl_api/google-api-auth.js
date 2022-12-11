"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("./shared");
function getToken() {
    return __awaiter(this, void 0, void 0, function* () {
        const { clientId, clientSecret, code } = yield (0, shared_1.getArgs)();
        const oauth2Client = (0, shared_1.makeOAuth2Client)({ clientId, clientSecret });
        if (code)
            yield getRefreshToken(code);
        else
            getAuthUrl();
        function getAuthUrl() {
            return __awaiter(this, void 0, void 0, function* () {
                const url = oauth2Client.generateAuthUrl({
                    // 'online' (default) or 'offline' (gets refresh_token)
                    access_type: 'offline',
                    // scopes are documented here: https://developers.google.com/identity/protocols/oauth2/scopes#calendar
                    scope: [
                        'https://www.googleapis.com/auth/calendar',
                        'https://www.googleapis.com/auth/calendar.events',
                    ],
                });
                console.log(`Go to this URL to acquire a refresh token:\n\n${url}\n`);
            });
        }
        function getRefreshToken(code) {
            return __awaiter(this, void 0, void 0, function* () {
                const token = yield oauth2Client.getToken(code);
                console.log(token);
            });
        }
    });
}
getToken();
