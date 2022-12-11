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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeOAuth2Client = exports.getArgs = void 0;
const googleapis_1 = require("googleapis");
const yargs_1 = __importDefault(require("yargs/yargs"));
const { hideBin } = require('yargs/helpers');
function getArgs() {
    return __awaiter(this, void 0, void 0, function* () {
        const argv = yield Promise.resolve((0, yargs_1.default)(hideBin(process.argv)).argv);
        const clientId = argv['clientId'];
        const clientSecret = argv['clientSecret'];
        const code = argv.code;
        const refreshToken = argv.refreshToken;
        const test = argv.test;
        if (!clientId)
            throw new Error('No clientId ');
        console.log('We have a clientId');
        if (!clientSecret)
            throw new Error('No clientSecret');
        console.log('We have a clientSecret');
        if (code)
            console.log('We have a code');
        if (refreshToken)
            console.log('We have a refreshToken');
        return { code, clientId, clientSecret, refreshToken, test };
    });
}
exports.getArgs = getArgs;
function makeOAuth2Client({ clientId, clientSecret, }) {
    return new googleapis_1.google.auth.OAuth2(
    /* YOUR_CLIENT_ID */ clientId, 
    /* YOUR_CLIENT_SECRET */ clientSecret, 
    /* YOUR_REDIRECT_URL */ 'urn:ietf:wg:oauth:2.0:oob');
}
exports.makeOAuth2Client = makeOAuth2Client;
