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
var webmasters_v3;
(function (webmasters_v3) {
    /**
     * Search Console API
     *
     * View Google Search Console data for your verified sites.
     *
     * @example
     * const {google} = require('googleapis');
     * const webmasters = google.webmasters('v3');
     *
     * @namespace webmasters
     * @type {Function}
     * @version v3
     * @variation v3
     * @param {object=} options Options for Webmasters
     */
    class Webmasters {
        constructor(options, google) {
            this.context = { _options: options || {}, google };
            this.searchanalytics = new Resource$Searchanalytics(this.context);
            this.sitemaps = new Resource$Sitemaps(this.context);
            this.sites = new Resource$Sites(this.context);
            this.urlcrawlerrorscounts =
                new Resource$Urlcrawlerrorscounts(this.context);
            this.urlcrawlerrorssamples =
                new Resource$Urlcrawlerrorssamples(this.context);
        }
    }
    webmasters_v3.Webmasters = Webmasters;
    class Resource$Searchanalytics {
        constructor(context) {
            this.context = context;
        }
        query(paramsOrCallback, optionsOrCallback, callback) {
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
                    url: (rootUrl +
                        '/webmasters/v3/sites/{siteUrl}/searchAnalytics/query')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['siteUrl'],
                pathParams: ['siteUrl'],
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
    webmasters_v3.Resource$Searchanalytics = Resource$Searchanalytics;
    class Resource$Sitemaps {
        constructor(context) {
            this.context = context;
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
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
                    url: (rootUrl +
                        '/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: ['siteUrl', 'feedpath'],
                pathParams: ['feedpath', 'siteUrl'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
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
                    url: (rootUrl +
                        '/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['siteUrl', 'feedpath'],
                pathParams: ['feedpath', 'siteUrl'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
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
                    url: (rootUrl + '/webmasters/v3/sites/{siteUrl}/sitemaps')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['siteUrl'],
                pathParams: ['siteUrl'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        submit(paramsOrCallback, optionsOrCallback, callback) {
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
                    url: (rootUrl +
                        '/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params,
                requiredParams: ['siteUrl', 'feedpath'],
                pathParams: ['feedpath', 'siteUrl'],
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
    webmasters_v3.Resource$Sitemaps = Resource$Sitemaps;
    class Resource$Sites {
        constructor(context) {
            this.context = context;
        }
        add(paramsOrCallback, optionsOrCallback, callback) {
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
                    url: (rootUrl + '/webmasters/v3/sites/{siteUrl}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params,
                requiredParams: ['siteUrl'],
                pathParams: ['siteUrl'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
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
                    url: (rootUrl + '/webmasters/v3/sites/{siteUrl}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: ['siteUrl'],
                pathParams: ['siteUrl'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
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
                    url: (rootUrl + '/webmasters/v3/sites/{siteUrl}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['siteUrl'],
                pathParams: ['siteUrl'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
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
                    url: (rootUrl + '/webmasters/v3/sites')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
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
    webmasters_v3.Resource$Sites = Resource$Sites;
    class Resource$Urlcrawlerrorscounts {
        constructor(context) {
            this.context = context;
        }
        query(paramsOrCallback, optionsOrCallback, callback) {
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
                    url: (rootUrl +
                        '/webmasters/v3/sites/{siteUrl}/urlCrawlErrorsCounts/query')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['siteUrl'],
                pathParams: ['siteUrl'],
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
    webmasters_v3.Resource$Urlcrawlerrorscounts = Resource$Urlcrawlerrorscounts;
    class Resource$Urlcrawlerrorssamples {
        constructor(context) {
            this.context = context;
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
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
                    url: (rootUrl +
                        '/webmasters/v3/sites/{siteUrl}/urlCrawlErrorsSamples/{url}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['siteUrl', 'url', 'category', 'platform'],
                pathParams: ['siteUrl', 'url'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
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
                    url: (rootUrl +
                        '/webmasters/v3/sites/{siteUrl}/urlCrawlErrorsSamples')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['siteUrl', 'category', 'platform'],
                pathParams: ['siteUrl'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        markAsFixed(paramsOrCallback, optionsOrCallback, callback) {
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
                    url: (rootUrl +
                        '/webmasters/v3/sites/{siteUrl}/urlCrawlErrorsSamples/{url}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: ['siteUrl', 'url', 'category', 'platform'],
                pathParams: ['siteUrl', 'url'],
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
    webmasters_v3.Resource$Urlcrawlerrorssamples = Resource$Urlcrawlerrorssamples;
})(webmasters_v3 = exports.webmasters_v3 || (exports.webmasters_v3 = {}));
//# sourceMappingURL=v3.js.map