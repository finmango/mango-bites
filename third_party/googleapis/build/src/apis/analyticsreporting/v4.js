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
var analyticsreporting_v4;
(function (analyticsreporting_v4) {
    /**
     * Analytics Reporting API
     *
     * Accesses Analytics report data.
     *
     * @example
     * const {google} = require('googleapis');
     * const analyticsreporting = google.analyticsreporting('v4');
     *
     * @namespace analyticsreporting
     * @type {Function}
     * @version v4
     * @variation v4
     * @param {object=} options Options for Analyticsreporting
     */
    class Analyticsreporting {
        constructor(options, google) {
            this.context = { _options: options || {}, google };
            this.reports = new Resource$Reports(this.context);
            this.userActivity = new Resource$Useractivity(this.context);
        }
    }
    analyticsreporting_v4.Analyticsreporting = Analyticsreporting;
    class Resource$Reports {
        constructor(context) {
            this.context = context;
        }
        batchGet(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://analyticsreporting.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v4/reports:batchGet')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [],
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
    analyticsreporting_v4.Resource$Reports = Resource$Reports;
    class Resource$Useractivity {
        constructor(context) {
            this.context = context;
        }
        search(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://analyticsreporting.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v4/userActivity:search')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [],
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
    analyticsreporting_v4.Resource$Useractivity = Resource$Useractivity;
})(analyticsreporting_v4 = exports.analyticsreporting_v4 || (exports.analyticsreporting_v4 = {}));
//# sourceMappingURL=v4.js.map