'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

var _reconnectingWebsocket = require('reconnecting-websocket');

var _reconnectingWebsocket2 = _interopRequireDefault(_reconnectingWebsocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (url) {
  return new _reconnectingWebsocket2.default(url, undefined, {
    connectionTimeout: 4E3,
    constructor: typeof window !== 'undefined' ? WebSocket : _ws2.default,
    debug: false,
    maxReconnectionDelay: 10E3,
    maxRetries: Infinity,
    minReconnectionDelay: 4E3
  });
};