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
var groupsmigration_v1;
(function (groupsmigration_v1) {
    /**
     * Groups Migration API
     *
     * Groups Migration Api.
     *
     * @example
     * const {google} = require('googleapis');
     * const groupsmigration = google.groupsmigration('v1');
     *
     * @namespace groupsmigration
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Groupsmigration
     */
    class Groupsmigration {
        constructor(options, google) {
            this.context = { _options: options || {}, google };
            this.archive = new Resource$Archive(this.context);
        }
    }
    groupsmigration_v1.Groupsmigration = Groupsmigration;
    class Resource$Archive {
        constructor(context) {
            this.context = context;
        }
        insert(paramsOrCallback, optionsOrCallback, callback) {
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
                    url: (rootUrl + '/groups/v1/groups/{groupId}/archive')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                mediaUrl: (rootUrl + '/upload/groups/v1/groups/{groupId}/archive')
                    .replace(/([^:]\/)\/+/g, '$1'),
                requiredParams: ['groupId'],
                pathParams: ['groupId'],
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
    groupsmigration_v1.Resource$Archive = Resource$Archive;
})(groupsmigration_v1 = exports.groupsmigration_v1 || (exports.groupsmigration_v1 = {}));
//# sourceMappingURL=v1.js.map