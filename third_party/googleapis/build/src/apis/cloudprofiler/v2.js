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
var cloudprofiler_v2;
(function (cloudprofiler_v2) {
    /**
     * Stackdriver Profiler API
     *
     * Manages continuous profiling information.
     *
     * @example
     * const {google} = require('googleapis');
     * const cloudprofiler = google.cloudprofiler('v2');
     *
     * @namespace cloudprofiler
     * @type {Function}
     * @version v2
     * @variation v2
     * @param {object=} options Options for Cloudprofiler
     */
    class Cloudprofiler {
        constructor(options, google) {
            this.context = { _options: options || {}, google };
            this.projects = new Resource$Projects(this.context);
        }
    }
    cloudprofiler_v2.Cloudprofiler = Cloudprofiler;
    class Resource$Projects {
        constructor(context) {
            this.context = context;
            this.profiles = new Resource$Projects$Profiles(this.context);
        }
    }
    cloudprofiler_v2.Resource$Projects = Resource$Projects;
    class Resource$Projects$Profiles {
        constructor(context) {
            this.context = context;
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://cloudprofiler.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2/{+parent}/profiles')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['parent'],
                pathParams: ['parent'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        createOffline(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://cloudprofiler.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2/{+parent}/profiles:createOffline')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['parent'],
                pathParams: ['parent'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://cloudprofiler.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
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
    cloudprofiler_v2.Resource$Projects$Profiles = Resource$Projects$Profiles;
})(cloudprofiler_v2 = exports.cloudprofiler_v2 || (exports.cloudprofiler_v2 = {}));
//# sourceMappingURL=v2.js.map