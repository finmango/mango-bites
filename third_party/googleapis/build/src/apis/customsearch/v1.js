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
var customsearch_v1;
(function (customsearch_v1) {
    /**
     * CustomSearch API
     *
     * Searches over a website or collection of websites
     *
     * @example
     * const {google} = require('googleapis');
     * const customsearch = google.customsearch('v1');
     *
     * @namespace customsearch
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Customsearch
     */
    class Customsearch {
        constructor(options, google) {
            this.context = { _options: options || {}, google };
            this.cse = new Resource$Cse(this.context);
        }
    }
    customsearch_v1.Customsearch = Customsearch;
    class Resource$Cse {
        constructor(context) {
            this.context = context;
            this.siterestrict = new Resource$Cse$Siterestrict(this.context);
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/customsearch/v1').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['q'],
                pathParams: [],
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
    customsearch_v1.Resource$Cse = Resource$Cse;
    class Resource$Cse$Siterestrict {
        constructor(context) {
            this.context = context;
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/customsearch/v1/siterestrict')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['q'],
                pathParams: [],
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
    customsearch_v1.Resource$Cse$Siterestrict = Resource$Cse$Siterestrict;
})(customsearch_v1 = exports.customsearch_v1 || (exports.customsearch_v1 = {}));
//# sourceMappingURL=v1.js.map