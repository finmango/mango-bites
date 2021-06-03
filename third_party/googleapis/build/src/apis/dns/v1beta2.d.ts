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
import { GaxiosPromise } from 'gaxios';
import { Compute, JWT, OAuth2Client, UserRefreshClient } from 'google-auth-library';
import { APIRequestContext, BodyResponseCallback, GlobalOptions, GoogleConfigurable, MethodOptions } from 'googleapis-common';
export declare namespace dns_v1beta2 {
    interface Options extends GlobalOptions {
        version: 'v1beta2';
    }
    interface StandardParameters {
        /**
         * Data format for the response.
         */
        alt?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API
         * access, quota, and reports. Required unless you provide an OAuth 2.0
         * token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * An opaque string that represents a user for quota purposes. Must not
         * exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Deprecated. Please use quotaUser instead.
         */
        userIp?: string;
    }
    /**
     * Google Cloud DNS API
     *
     * Configures and serves authoritative DNS records.
     *
     * @example
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * @namespace dns
     * @type {Function}
     * @version v1beta2
     * @variation v1beta2
     * @param {object=} options Options for Dns
     */
    class Dns {
        context: APIRequestContext;
        changes: Resource$Changes;
        dnsKeys: Resource$Dnskeys;
        managedZoneOperations: Resource$Managedzoneoperations;
        managedZones: Resource$Managedzones;
        policies: Resource$Policies;
        projects: Resource$Projects;
        resourceRecordSets: Resource$Resourcerecordsets;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    interface Schema$Change {
        additions?: Schema$ResourceRecordSet[];
        deletions?: Schema$ResourceRecordSet[];
        id?: string;
        isServing?: boolean;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#change&quot;.
         */
        kind?: string;
        startTime?: string;
        status?: string;
    }
    interface Schema$ChangesListResponse {
        changes?: Schema$Change[];
        header?: Schema$ResponseHeader;
        /**
         * Type of resource.
         */
        kind?: string;
        nextPageToken?: string;
    }
    interface Schema$DnsKey {
        algorithm?: string;
        creationTime?: string;
        description?: string;
        digests?: Schema$DnsKeyDigest[];
        id?: string;
        isActive?: boolean;
        keyLength?: number;
        keyTag?: number;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#dnsKey&quot;.
         */
        kind?: string;
        publicKey?: string;
        type?: string;
    }
    interface Schema$DnsKeyDigest {
        digest?: string;
        type?: string;
    }
    interface Schema$DnsKeysListResponse {
        dnsKeys?: Schema$DnsKey[];
        header?: Schema$ResponseHeader;
        /**
         * Type of resource.
         */
        kind?: string;
        nextPageToken?: string;
    }
    interface Schema$DnsKeySpec {
        algorithm?: string;
        keyLength?: number;
        keyType?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#dnsKeySpec&quot;.
         */
        kind?: string;
    }
    interface Schema$ManagedZone {
        creationTime?: string;
        description?: string;
        dnsName?: string;
        dnssecConfig?: Schema$ManagedZoneDnsSecConfig;
        forwardingConfig?: Schema$ManagedZoneForwardingConfig;
        id?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#managedZone&quot;.
         */
        kind?: string;
        labels?: {
            [key: string]: string;
        };
        name?: string;
        nameServers?: string[];
        nameServerSet?: string;
        peeringConfig?: Schema$ManagedZonePeeringConfig;
        privateVisibilityConfig?: Schema$ManagedZonePrivateVisibilityConfig;
        visibility?: string;
    }
    interface Schema$ManagedZoneDnsSecConfig {
        defaultKeySpecs?: Schema$DnsKeySpec[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#managedZoneDnsSecConfig&quot;.
         */
        kind?: string;
        nonExistence?: string;
        state?: string;
    }
    interface Schema$ManagedZoneForwardingConfig {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#managedZoneForwardingConfig&quot;.
         */
        kind?: string;
        targetNameServers?: Schema$ManagedZoneForwardingConfigNameServerTarget[];
    }
    interface Schema$ManagedZoneForwardingConfigNameServerTarget {
        ipv4Address?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#managedZoneForwardingConfigNameServerTarget&quot;.
         */
        kind?: string;
    }
    interface Schema$ManagedZoneOperationsListResponse {
        header?: Schema$ResponseHeader;
        /**
         * Type of resource.
         */
        kind?: string;
        nextPageToken?: string;
        operations?: Schema$Operation[];
    }
    interface Schema$ManagedZonePeeringConfig {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#managedZonePeeringConfig&quot;.
         */
        kind?: string;
        targetNetwork?: Schema$ManagedZonePeeringConfigTargetNetwork;
    }
    interface Schema$ManagedZonePeeringConfigTargetNetwork {
        deactivateTime?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#managedZonePeeringConfigTargetNetwork&quot;.
         */
        kind?: string;
        networkUrl?: string;
    }
    interface Schema$ManagedZonePrivateVisibilityConfig {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#managedZonePrivateVisibilityConfig&quot;.
         */
        kind?: string;
        networks?: Schema$ManagedZonePrivateVisibilityConfigNetwork[];
    }
    interface Schema$ManagedZonePrivateVisibilityConfigNetwork {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#managedZonePrivateVisibilityConfigNetwork&quot;.
         */
        kind?: string;
        networkUrl?: string;
    }
    interface Schema$ManagedZonesListResponse {
        header?: Schema$ResponseHeader;
        /**
         * Type of resource.
         */
        kind?: string;
        managedZones?: Schema$ManagedZone[];
        nextPageToken?: string;
    }
    interface Schema$Operation {
        dnsKeyContext?: Schema$OperationDnsKeyContext;
        id?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#operation&quot;.
         */
        kind?: string;
        startTime?: string;
        status?: string;
        type?: string;
        user?: string;
        zoneContext?: Schema$OperationManagedZoneContext;
    }
    interface Schema$OperationDnsKeyContext {
        newValue?: Schema$DnsKey;
        oldValue?: Schema$DnsKey;
    }
    interface Schema$OperationManagedZoneContext {
        newValue?: Schema$ManagedZone;
        oldValue?: Schema$ManagedZone;
    }
    interface Schema$PoliciesListResponse {
        header?: Schema$ResponseHeader;
        /**
         * Type of resource.
         */
        kind?: string;
        nextPageToken?: string;
        policies?: Schema$Policy[];
    }
    interface Schema$PoliciesPatchResponse {
        header?: Schema$ResponseHeader;
        policy?: Schema$Policy;
    }
    interface Schema$PoliciesUpdateResponse {
        header?: Schema$ResponseHeader;
        policy?: Schema$Policy;
    }
    interface Schema$Policy {
        alternativeNameServerConfig?: Schema$PolicyAlternativeNameServerConfig;
        description?: string;
        enableInboundForwarding?: boolean;
        enableLogging?: boolean;
        id?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#policy&quot;.
         */
        kind?: string;
        name?: string;
        networks?: Schema$PolicyNetwork[];
    }
    interface Schema$PolicyAlternativeNameServerConfig {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#policyAlternativeNameServerConfig&quot;.
         */
        kind?: string;
        targetNameServers?: Schema$PolicyAlternativeNameServerConfigTargetNameServer[];
    }
    interface Schema$PolicyAlternativeNameServerConfigTargetNameServer {
        ipv4Address?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#policyAlternativeNameServerConfigTargetNameServer&quot;.
         */
        kind?: string;
    }
    interface Schema$PolicyNetwork {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#policyNetwork&quot;.
         */
        kind?: string;
        networkUrl?: string;
    }
    interface Schema$Project {
        id?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#project&quot;.
         */
        kind?: string;
        number?: string;
        quota?: Schema$Quota;
    }
    interface Schema$Quota {
        dnsKeysPerManagedZone?: number;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#quota&quot;.
         */
        kind?: string;
        managedZones?: number;
        managedZonesPerNetwork?: number;
        networksPerManagedZone?: number;
        networksPerPolicy?: number;
        policies?: number;
        resourceRecordsPerRrset?: number;
        rrsetAdditionsPerChange?: number;
        rrsetDeletionsPerChange?: number;
        rrsetsPerManagedZone?: number;
        targetNameServersPerManagedZone?: number;
        targetNameServersPerPolicy?: number;
        totalRrdataSizePerChange?: number;
        whitelistedKeySpecs?: Schema$DnsKeySpec[];
    }
    interface Schema$ResourceRecordSet {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;dns#resourceRecordSet&quot;.
         */
        kind?: string;
        name?: string;
        rrdatas?: string[];
        signatureRrdatas?: string[];
        ttl?: number;
        type?: string;
    }
    interface Schema$ResourceRecordSetsListResponse {
        header?: Schema$ResponseHeader;
        /**
         * Type of resource.
         */
        kind?: string;
        nextPageToken?: string;
        rrsets?: Schema$ResourceRecordSet[];
    }
    interface Schema$ResponseHeader {
        operationId?: string;
    }
    class Resource$Changes {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * dns.changes.create
         * @alias dns.changes.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId
         * @param {string} params.managedZone
         * @param {string} params.project
         * @param {().Change} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Changes$Create, options?: MethodOptions): GaxiosPromise<Schema$Change>;
        create(params: Params$Resource$Changes$Create, options: MethodOptions | BodyResponseCallback<Schema$Change>, callback: BodyResponseCallback<Schema$Change>): void;
        create(params: Params$Resource$Changes$Create, callback: BodyResponseCallback<Schema$Change>): void;
        create(callback: BodyResponseCallback<Schema$Change>): void;
        /**
         * dns.changes.get
         * @alias dns.changes.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.changeId
         * @param {string=} params.clientOperationId
         * @param {string} params.managedZone
         * @param {string} params.project
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Changes$Get, options?: MethodOptions): GaxiosPromise<Schema$Change>;
        get(params: Params$Resource$Changes$Get, options: MethodOptions | BodyResponseCallback<Schema$Change>, callback: BodyResponseCallback<Schema$Change>): void;
        get(params: Params$Resource$Changes$Get, callback: BodyResponseCallback<Schema$Change>): void;
        get(callback: BodyResponseCallback<Schema$Change>): void;
        /**
         * dns.changes.list
         * @alias dns.changes.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.managedZone
         * @param {integer=} params.maxResults
         * @param {string=} params.pageToken
         * @param {string} params.project
         * @param {string=} params.sortBy
         * @param {string=} params.sortOrder
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Changes$List, options?: MethodOptions): GaxiosPromise<Schema$ChangesListResponse>;
        list(params: Params$Resource$Changes$List, options: MethodOptions | BodyResponseCallback<Schema$ChangesListResponse>, callback: BodyResponseCallback<Schema$ChangesListResponse>): void;
        list(params: Params$Resource$Changes$List, callback: BodyResponseCallback<Schema$ChangesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$ChangesListResponse>): void;
    }
    interface Params$Resource$Changes$Create extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        clientOperationId?: string;
        /**
         *
         */
        managedZone?: string;
        /**
         *
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Change;
    }
    interface Params$Resource$Changes$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        changeId?: string;
        /**
         *
         */
        clientOperationId?: string;
        /**
         *
         */
        managedZone?: string;
        /**
         *
         */
        project?: string;
    }
    interface Params$Resource$Changes$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        managedZone?: string;
        /**
         *
         */
        maxResults?: number;
        /**
         *
         */
        pageToken?: string;
        /**
         *
         */
        project?: string;
        /**
         *
         */
        sortBy?: string;
        /**
         *
         */
        sortOrder?: string;
    }
    class Resource$Dnskeys {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * dns.dnsKeys.get
         * @alias dns.dnsKeys.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId
         * @param {string=} params.digestType
         * @param {string} params.dnsKeyId
         * @param {string} params.managedZone
         * @param {string} params.project
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Dnskeys$Get, options?: MethodOptions): GaxiosPromise<Schema$DnsKey>;
        get(params: Params$Resource$Dnskeys$Get, options: MethodOptions | BodyResponseCallback<Schema$DnsKey>, callback: BodyResponseCallback<Schema$DnsKey>): void;
        get(params: Params$Resource$Dnskeys$Get, callback: BodyResponseCallback<Schema$DnsKey>): void;
        get(callback: BodyResponseCallback<Schema$DnsKey>): void;
        /**
         * dns.dnsKeys.list
         * @alias dns.dnsKeys.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.digestType
         * @param {string} params.managedZone
         * @param {integer=} params.maxResults
         * @param {string=} params.pageToken
         * @param {string} params.project
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Dnskeys$List, options?: MethodOptions): GaxiosPromise<Schema$DnsKeysListResponse>;
        list(params: Params$Resource$Dnskeys$List, options: MethodOptions | BodyResponseCallback<Schema$DnsKeysListResponse>, callback: BodyResponseCallback<Schema$DnsKeysListResponse>): void;
        list(params: Params$Resource$Dnskeys$List, callback: BodyResponseCallback<Schema$DnsKeysListResponse>): void;
        list(callback: BodyResponseCallback<Schema$DnsKeysListResponse>): void;
    }
    interface Params$Resource$Dnskeys$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        clientOperationId?: string;
        /**
         *
         */
        digestType?: string;
        /**
         *
         */
        dnsKeyId?: string;
        /**
         *
         */
        managedZone?: string;
        /**
         *
         */
        project?: string;
    }
    interface Params$Resource$Dnskeys$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        digestType?: string;
        /**
         *
         */
        managedZone?: string;
        /**
         *
         */
        maxResults?: number;
        /**
         *
         */
        pageToken?: string;
        /**
         *
         */
        project?: string;
    }
    class Resource$Managedzoneoperations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * dns.managedZoneOperations.get
         * @alias dns.managedZoneOperations.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId
         * @param {string} params.managedZone
         * @param {string} params.operation
         * @param {string} params.project
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Managedzoneoperations$Get, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        get(params: Params$Resource$Managedzoneoperations$Get, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        get(params: Params$Resource$Managedzoneoperations$Get, callback: BodyResponseCallback<Schema$Operation>): void;
        get(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * dns.managedZoneOperations.list
         * @alias dns.managedZoneOperations.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.managedZone
         * @param {integer=} params.maxResults
         * @param {string=} params.pageToken
         * @param {string} params.project
         * @param {string=} params.sortBy
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Managedzoneoperations$List, options?: MethodOptions): GaxiosPromise<Schema$ManagedZoneOperationsListResponse>;
        list(params: Params$Resource$Managedzoneoperations$List, options: MethodOptions | BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>, callback: BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>): void;
        list(params: Params$Resource$Managedzoneoperations$List, callback: BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>): void;
    }
    interface Params$Resource$Managedzoneoperations$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        clientOperationId?: string;
        /**
         *
         */
        managedZone?: string;
        /**
         *
         */
        operation?: string;
        /**
         *
         */
        project?: string;
    }
    interface Params$Resource$Managedzoneoperations$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        managedZone?: string;
        /**
         *
         */
        maxResults?: number;
        /**
         *
         */
        pageToken?: string;
        /**
         *
         */
        project?: string;
        /**
         *
         */
        sortBy?: string;
    }
    class Resource$Managedzones {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * dns.managedZones.create
         * @alias dns.managedZones.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId
         * @param {string} params.project
         * @param {().ManagedZone} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Managedzones$Create, options?: MethodOptions): GaxiosPromise<Schema$ManagedZone>;
        create(params: Params$Resource$Managedzones$Create, options: MethodOptions | BodyResponseCallback<Schema$ManagedZone>, callback: BodyResponseCallback<Schema$ManagedZone>): void;
        create(params: Params$Resource$Managedzones$Create, callback: BodyResponseCallback<Schema$ManagedZone>): void;
        create(callback: BodyResponseCallback<Schema$ManagedZone>): void;
        /**
         * dns.managedZones.delete
         * @alias dns.managedZones.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId
         * @param {string} params.managedZone
         * @param {string} params.project
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Managedzones$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Managedzones$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Managedzones$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * dns.managedZones.get
         * @alias dns.managedZones.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId
         * @param {string} params.managedZone
         * @param {string} params.project
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Managedzones$Get, options?: MethodOptions): GaxiosPromise<Schema$ManagedZone>;
        get(params: Params$Resource$Managedzones$Get, options: MethodOptions | BodyResponseCallback<Schema$ManagedZone>, callback: BodyResponseCallback<Schema$ManagedZone>): void;
        get(params: Params$Resource$Managedzones$Get, callback: BodyResponseCallback<Schema$ManagedZone>): void;
        get(callback: BodyResponseCallback<Schema$ManagedZone>): void;
        /**
         * dns.managedZones.list
         * @alias dns.managedZones.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.dnsName
         * @param {integer=} params.maxResults
         * @param {string=} params.pageToken
         * @param {string} params.project
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Managedzones$List, options?: MethodOptions): GaxiosPromise<Schema$ManagedZonesListResponse>;
        list(params: Params$Resource$Managedzones$List, options: MethodOptions | BodyResponseCallback<Schema$ManagedZonesListResponse>, callback: BodyResponseCallback<Schema$ManagedZonesListResponse>): void;
        list(params: Params$Resource$Managedzones$List, callback: BodyResponseCallback<Schema$ManagedZonesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$ManagedZonesListResponse>): void;
        /**
         * dns.managedZones.patch
         * @alias dns.managedZones.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId
         * @param {string} params.managedZone
         * @param {string} params.project
         * @param {().ManagedZone} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Managedzones$Patch, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        patch(params: Params$Resource$Managedzones$Patch, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(params: Params$Resource$Managedzones$Patch, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * dns.managedZones.update
         * @alias dns.managedZones.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId
         * @param {string} params.managedZone
         * @param {string} params.project
         * @param {().ManagedZone} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Managedzones$Update, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        update(params: Params$Resource$Managedzones$Update, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        update(params: Params$Resource$Managedzones$Update, callback: BodyResponseCallback<Schema$Operation>): void;
        update(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    interface Params$Resource$Managedzones$Create extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        clientOperationId?: string;
        /**
         *
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ManagedZone;
    }
    interface Params$Resource$Managedzones$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        clientOperationId?: string;
        /**
         *
         */
        managedZone?: string;
        /**
         *
         */
        project?: string;
    }
    interface Params$Resource$Managedzones$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        clientOperationId?: string;
        /**
         *
         */
        managedZone?: string;
        /**
         *
         */
        project?: string;
    }
    interface Params$Resource$Managedzones$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        dnsName?: string;
        /**
         *
         */
        maxResults?: number;
        /**
         *
         */
        pageToken?: string;
        /**
         *
         */
        project?: string;
    }
    interface Params$Resource$Managedzones$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        clientOperationId?: string;
        /**
         *
         */
        managedZone?: string;
        /**
         *
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ManagedZone;
    }
    interface Params$Resource$Managedzones$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        clientOperationId?: string;
        /**
         *
         */
        managedZone?: string;
        /**
         *
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ManagedZone;
    }
    class Resource$Policies {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * dns.policies.create
         * @alias dns.policies.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId
         * @param {string} params.project
         * @param {().Policy} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Policies$Create, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        create(params: Params$Resource$Policies$Create, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        create(params: Params$Resource$Policies$Create, callback: BodyResponseCallback<Schema$Policy>): void;
        create(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * dns.policies.delete
         * @alias dns.policies.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId
         * @param {string} params.policy
         * @param {string} params.project
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Policies$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Policies$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Policies$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * dns.policies.get
         * @alias dns.policies.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId
         * @param {string} params.policy
         * @param {string} params.project
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Policies$Get, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        get(params: Params$Resource$Policies$Get, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        get(params: Params$Resource$Policies$Get, callback: BodyResponseCallback<Schema$Policy>): void;
        get(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * dns.policies.list
         * @alias dns.policies.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults
         * @param {string=} params.pageToken
         * @param {string} params.project
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Policies$List, options?: MethodOptions): GaxiosPromise<Schema$PoliciesListResponse>;
        list(params: Params$Resource$Policies$List, options: MethodOptions | BodyResponseCallback<Schema$PoliciesListResponse>, callback: BodyResponseCallback<Schema$PoliciesListResponse>): void;
        list(params: Params$Resource$Policies$List, callback: BodyResponseCallback<Schema$PoliciesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$PoliciesListResponse>): void;
        /**
         * dns.policies.patch
         * @alias dns.policies.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId
         * @param {string} params.policy
         * @param {string} params.project
         * @param {().Policy} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Policies$Patch, options?: MethodOptions): GaxiosPromise<Schema$PoliciesPatchResponse>;
        patch(params: Params$Resource$Policies$Patch, options: MethodOptions | BodyResponseCallback<Schema$PoliciesPatchResponse>, callback: BodyResponseCallback<Schema$PoliciesPatchResponse>): void;
        patch(params: Params$Resource$Policies$Patch, callback: BodyResponseCallback<Schema$PoliciesPatchResponse>): void;
        patch(callback: BodyResponseCallback<Schema$PoliciesPatchResponse>): void;
        /**
         * dns.policies.update
         * @alias dns.policies.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId
         * @param {string} params.policy
         * @param {string} params.project
         * @param {().Policy} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Policies$Update, options?: MethodOptions): GaxiosPromise<Schema$PoliciesUpdateResponse>;
        update(params: Params$Resource$Policies$Update, options: MethodOptions | BodyResponseCallback<Schema$PoliciesUpdateResponse>, callback: BodyResponseCallback<Schema$PoliciesUpdateResponse>): void;
        update(params: Params$Resource$Policies$Update, callback: BodyResponseCallback<Schema$PoliciesUpdateResponse>): void;
        update(callback: BodyResponseCallback<Schema$PoliciesUpdateResponse>): void;
    }
    interface Params$Resource$Policies$Create extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        clientOperationId?: string;
        /**
         *
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Policy;
    }
    interface Params$Resource$Policies$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        clientOperationId?: string;
        /**
         *
         */
        policy?: string;
        /**
         *
         */
        project?: string;
    }
    interface Params$Resource$Policies$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        clientOperationId?: string;
        /**
         *
         */
        policy?: string;
        /**
         *
         */
        project?: string;
    }
    interface Params$Resource$Policies$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        maxResults?: number;
        /**
         *
         */
        pageToken?: string;
        /**
         *
         */
        project?: string;
    }
    interface Params$Resource$Policies$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        clientOperationId?: string;
        /**
         *
         */
        policy?: string;
        /**
         *
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Policy;
    }
    interface Params$Resource$Policies$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        clientOperationId?: string;
        /**
         *
         */
        policy?: string;
        /**
         *
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Policy;
    }
    class Resource$Projects {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * dns.projects.get
         * @alias dns.projects.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId
         * @param {string} params.project
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Get, options?: MethodOptions): GaxiosPromise<Schema$Project>;
        get(params: Params$Resource$Projects$Get, options: MethodOptions | BodyResponseCallback<Schema$Project>, callback: BodyResponseCallback<Schema$Project>): void;
        get(params: Params$Resource$Projects$Get, callback: BodyResponseCallback<Schema$Project>): void;
        get(callback: BodyResponseCallback<Schema$Project>): void;
    }
    interface Params$Resource$Projects$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        clientOperationId?: string;
        /**
         *
         */
        project?: string;
    }
    class Resource$Resourcerecordsets {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * dns.resourceRecordSets.list
         * @alias dns.resourceRecordSets.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.managedZone
         * @param {integer=} params.maxResults
         * @param {string=} params.name
         * @param {string=} params.pageToken
         * @param {string} params.project
         * @param {string=} params.type
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Resourcerecordsets$List, options?: MethodOptions): GaxiosPromise<Schema$ResourceRecordSetsListResponse>;
        list(params: Params$Resource$Resourcerecordsets$List, options: MethodOptions | BodyResponseCallback<Schema$ResourceRecordSetsListResponse>, callback: BodyResponseCallback<Schema$ResourceRecordSetsListResponse>): void;
        list(params: Params$Resource$Resourcerecordsets$List, callback: BodyResponseCallback<Schema$ResourceRecordSetsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$ResourceRecordSetsListResponse>): void;
    }
    interface Params$Resource$Resourcerecordsets$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         *
         */
        managedZone?: string;
        /**
         *
         */
        maxResults?: number;
        /**
         *
         */
        name?: string;
        /**
         *
         */
        pageToken?: string;
        /**
         *
         */
        project?: string;
        /**
         *
         */
        type?: string;
    }
}
