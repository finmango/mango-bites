"use strict";
/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_common_1 = require("googleapis-common");
// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace
var datastore_v1beta3;
(function (datastore_v1beta3) {
    /**
     * Cloud Datastore API
     *
     * Accesses the schemaless NoSQL database to provide fully managed, robust,
     * scalable storage for your application.
     *
     * @example
     * const {google} = require('googleapis');
     * const datastore = google.datastore('v1beta3');
     *
     * @namespace datastore
     * @type {Function}
     * @version v1beta3
     * @variation v1beta3
     * @param {object=} options Options for Datastore
     */
    class Datastore {
        constructor(options, google) {
            this.context = { _options: options || {}, google };
            this.projects = new Resource$Projects(this.context);
        }
    }
    datastore_v1beta3.Datastore = Datastore;
    class Resource$Projects {
        constructor(context) {
            this.context = context;
        }
        allocateIds(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta3/projects/{projectId}:allocateIds')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        beginTransaction(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta3/projects/{projectId}:beginTransaction')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        commit(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta3/projects/{projectId}:commit')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        lookup(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta3/projects/{projectId}:lookup')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        reserveIds(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta3/projects/{projectId}:reserveIds')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        rollback(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta3/projects/{projectId}:rollback')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        runQuery(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta3/projects/{projectId}:runQuery')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    datastore_v1beta3.Resource$Projects = Resource$Projects;
})(datastore_v1beta3 = exports.datastore_v1beta3 || (exports.datastore_v1beta3 = {}));
//# sourceMappingURL=v1beta3.js.map