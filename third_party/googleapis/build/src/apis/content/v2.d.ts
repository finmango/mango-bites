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
export declare namespace content_v2 {
    interface Options extends GlobalOptions {
        version: 'v2';
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
     * Content API for Shopping
     *
     * Manages product items, inventory, and Merchant Center accounts for Google
     * Shopping.
     *
     * @example
     * const {google} = require('googleapis');
     * const content = google.content('v2');
     *
     * @namespace content
     * @type {Function}
     * @version v2
     * @variation v2
     * @param {object=} options Options for Content
     */
    class Content {
        context: APIRequestContext;
        accounts: Resource$Accounts;
        accountstatuses: Resource$Accountstatuses;
        accounttax: Resource$Accounttax;
        datafeeds: Resource$Datafeeds;
        datafeedstatuses: Resource$Datafeedstatuses;
        inventory: Resource$Inventory;
        liasettings: Resource$Liasettings;
        orderinvoices: Resource$Orderinvoices;
        orderpayments: Resource$Orderpayments;
        orderreports: Resource$Orderreports;
        orderreturns: Resource$Orderreturns;
        orders: Resource$Orders;
        pos: Resource$Pos;
        products: Resource$Products;
        productstatuses: Resource$Productstatuses;
        shippingsettings: Resource$Shippingsettings;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Account data. After the creation of a new account it may take a few minutes
     * before it is fully operational. The methods delete, insert, patch, and
     * update require the admin role.
     */
    interface Schema$Account {
        /**
         * Indicates whether the merchant sells adult content.
         */
        adultContent?: boolean;
        /**
         * List of linked AdWords accounts that are active or pending approval. To
         * create a new link request, add a new link with status active to the list.
         * It will remain in a pending state until approved or rejected either in
         * the AdWords interface or through the  AdWords API. To delete an active
         * link, or to cancel a link request, remove it from the list.
         */
        adwordsLinks?: Schema$AccountAdwordsLink[];
        /**
         * The business information of the account.
         */
        businessInformation?: Schema$AccountBusinessInformation;
        /**
         * The GMB account which is linked or in the process of being linked with
         * the Merchant Center account.
         */
        googleMyBusinessLink?: Schema$AccountGoogleMyBusinessLink;
        /**
         * Merchant Center account ID.
         */
        id?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#account&quot;.
         */
        kind?: string;
        /**
         * Display name for the account.
         */
        name?: string;
        /**
         * [DEPRECATED] This field is never returned and will be ignored if
         * provided.
         */
        reviewsUrl?: string;
        /**
         * Client-specific, locally-unique, internal ID for the child account.
         */
        sellerId?: string;
        /**
         * Users with access to the account. Every account (except for subaccounts)
         * must have at least one admin user.
         */
        users?: Schema$AccountUser[];
        /**
         * The merchant&#39;s website.
         */
        websiteUrl?: string;
        /**
         * List of linked YouTube channels that are active or pending approval. To
         * create a new link request, add a new link with status active to the list.
         * It will remain in a pending state until approved or rejected in the YT
         * Creator Studio interface. To delete an active link, or to cancel a link
         * request, remove it from the list.
         */
        youtubeChannelLinks?: Schema$AccountYouTubeChannelLink[];
    }
    interface Schema$AccountAddress {
        /**
         * CLDR country code (e.g. &quot;US&quot;).
         */
        country?: string;
        /**
         * City, town or commune. May also include dependent localities or
         * sublocalities (e.g. neighborhoods or suburbs).
         */
        locality?: string;
        /**
         * Postal code or ZIP (e.g. &quot;94043&quot;).
         */
        postalCode?: string;
        /**
         * Top-level administrative subdivision of the country. For example, a state
         * like California (&quot;CA&quot;) or a province like Quebec
         * (&quot;QC&quot;).
         */
        region?: string;
        /**
         * Street-level part of the address.
         */
        streetAddress?: string;
    }
    interface Schema$AccountAdwordsLink {
        /**
         * Customer ID of the AdWords account.
         */
        adwordsId?: string;
        /**
         * Status of the link between this Merchant Center account and the AdWords
         * account. Upon retrieval, it represents the actual status of the link and
         * can be either active if it was approved in Google AdWords or pending if
         * it&#39;s pending approval. Upon insertion, it represents the intended
         * status of the link. Re-uploading a link with status active when it&#39;s
         * still pending or with status pending when it&#39;s already active will
         * have no effect: the status will remain unchanged. Re-uploading a link
         * with deprecated status inactive is equivalent to not submitting the link
         * at all and will delete the link if it was active or cancel the link
         * request if it was pending.
         */
        status?: string;
    }
    interface Schema$AccountBusinessInformation {
        /**
         * The address of the business.
         */
        address?: Schema$AccountAddress;
        /**
         * The customer service information of the business.
         */
        customerService?: Schema$AccountCustomerService;
        /**
         * The phone number of the business.
         */
        phoneNumber?: string;
    }
    interface Schema$AccountCustomerService {
        /**
         * Customer service email.
         */
        email?: string;
        /**
         * Customer service phone number.
         */
        phoneNumber?: string;
        /**
         * Customer service URL.
         */
        url?: string;
    }
    interface Schema$AccountGoogleMyBusinessLink {
        /**
         * The GMB email address of which a specific account within a GMB account. A
         * sample account within a GMB account could be a business account with set
         * of locations, managed under the GMB account.
         */
        gmbEmail?: string;
        /**
         * Status of the link between this Merchant Center account and the GMB
         * account.
         */
        status?: string;
    }
    interface Schema$AccountIdentifier {
        /**
         * The aggregator ID, set for aggregators and subaccounts (in that case, it
         * represents the aggregator of the subaccount).
         */
        aggregatorId?: string;
        /**
         * The merchant account ID, set for individual accounts and subaccounts.
         */
        merchantId?: string;
    }
    interface Schema$AccountsAuthInfoResponse {
        /**
         * The account identifiers corresponding to the authenticated user. - For an
         * individual account: only the merchant ID is defined - For an aggregator:
         * only the aggregator ID is defined - For a subaccount of an MCA: both the
         * merchant ID and the aggregator ID are defined.
         */
        accountIdentifiers?: Schema$AccountIdentifier[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#accountsAuthInfoResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$AccountsClaimWebsiteResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#accountsClaimWebsiteResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$AccountsCustomBatchRequest {
        /**
         * The request entries to be processed in the batch.
         */
        entries?: Schema$AccountsCustomBatchRequestEntry[];
    }
    /**
     * A batch entry encoding a single non-batch accounts request.
     */
    interface Schema$AccountsCustomBatchRequestEntry {
        /**
         * The account to create or update. Only defined if the method is insert or
         * update.
         */
        account?: Schema$Account;
        /**
         * The ID of the targeted account. Only defined if the method is not insert.
         */
        accountId?: string;
        /**
         * An entry ID, unique within the batch request.
         */
        batchId?: number;
        /**
         * Whether the account should be deleted if the account has offers. Only
         * applicable if the method is delete.
         */
        force?: boolean;
        /**
         * Details about the link request.
         */
        linkRequest?: Schema$AccountsCustomBatchRequestEntryLinkRequest;
        /**
         * The ID of the managing account.
         */
        merchantId?: string;
        /**
         * The method of the batch entry.
         */
        method?: string;
        /**
         * Only applicable if the method is claimwebsite. Indicates whether or not
         * to take the claim from another account in case there is a conflict.
         */
        overwrite?: boolean;
    }
    interface Schema$AccountsCustomBatchRequestEntryLinkRequest {
        /**
         * Action to perform for this link. The &quot;request&quot; action is only
         * available to select merchants.
         */
        action?: string;
        /**
         * The ID of the linked account.
         */
        linkedAccountId?: string;
        /**
         * Type of the link between the two accounts.
         */
        linkType?: string;
    }
    interface Schema$AccountsCustomBatchResponse {
        /**
         * The result of the execution of the batch requests.
         */
        entries?: Schema$AccountsCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#accountsCustomBatchResponse&quot;.
         */
        kind?: string;
    }
    /**
     * A batch entry encoding a single non-batch accounts response.
     */
    interface Schema$AccountsCustomBatchResponseEntry {
        /**
         * The retrieved, created, or updated account. Not defined if the method was
         * delete, claimwebsite or link.
         */
        account?: Schema$Account;
        /**
         * The ID of the request entry this entry responds to.
         */
        batchId?: number;
        /**
         * A list of errors defined if and only if the request failed.
         */
        errors?: Schema$Errors;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#accountsCustomBatchResponseEntry&quot;.
         */
        kind?: string;
        /**
         * Deprecated. This field is never set.
         */
        linkStatus?: string;
    }
    interface Schema$AccountsLinkRequest {
        /**
         * Action to perform for this link. The &quot;request&quot; action is only
         * available to select merchants.
         */
        action?: string;
        /**
         * The ID of the linked account.
         */
        linkedAccountId?: string;
        /**
         * Type of the link between the two accounts.
         */
        linkType?: string;
    }
    interface Schema$AccountsLinkResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#accountsLinkResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$AccountsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#accountsListResponse&quot;.
         */
        kind?: string;
        /**
         * The token for the retrieval of the next page of accounts.
         */
        nextPageToken?: string;
        resources?: Schema$Account[];
    }
    /**
     * The status of an account, i.e., information about its products, which is
     * computed offline and not returned immediately at insertion time.
     */
    interface Schema$AccountStatus {
        /**
         * The ID of the account for which the status is reported.
         */
        accountId?: string;
        /**
         * A list of account level issues.
         */
        accountLevelIssues?: Schema$AccountStatusAccountLevelIssue[];
        /**
         * DEPRECATED - never populated.
         */
        dataQualityIssues?: Schema$AccountStatusDataQualityIssue[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#accountStatus&quot;.
         */
        kind?: string;
        /**
         * List of product-related data by channel, destination, and country. Data
         * in this field may be delayed by up to 30 minutes.
         */
        products?: Schema$AccountStatusProducts[];
        /**
         * Whether the account&#39;s website is claimed or not.
         */
        websiteClaimed?: boolean;
    }
    interface Schema$AccountStatusAccountLevelIssue {
        /**
         * Country for which this issue is reported.
         */
        country?: string;
        /**
         * The destination the issue applies to.
         */
        destination?: string;
        /**
         * Additional details about the issue.
         */
        detail?: string;
        /**
         * The URL of a web page to help resolving this issue.
         */
        documentation?: string;
        /**
         * Issue identifier.
         */
        id?: string;
        /**
         * Severity of the issue.
         */
        severity?: string;
        /**
         * Short description of the issue.
         */
        title?: string;
    }
    interface Schema$AccountStatusDataQualityIssue {
        country?: string;
        destination?: string;
        detail?: string;
        displayedValue?: string;
        exampleItems?: Schema$AccountStatusExampleItem[];
        id?: string;
        lastChecked?: string;
        location?: string;
        numItems?: number;
        severity?: string;
        submittedValue?: string;
    }
    interface Schema$AccountstatusesCustomBatchRequest {
        /**
         * The request entries to be processed in the batch.
         */
        entries?: Schema$AccountstatusesCustomBatchRequestEntry[];
    }
    /**
     * A batch entry encoding a single non-batch accountstatuses request.
     */
    interface Schema$AccountstatusesCustomBatchRequestEntry {
        /**
         * The ID of the (sub-)account whose status to get.
         */
        accountId?: string;
        /**
         * An entry ID, unique within the batch request.
         */
        batchId?: number;
        /**
         * If set, only issues for the specified destinations are returned,
         * otherwise only issues for the Shopping destination.
         */
        destinations?: string[];
        /**
         * The ID of the managing account.
         */
        merchantId?: string;
        /**
         * The method (get).
         */
        method?: string;
    }
    interface Schema$AccountstatusesCustomBatchResponse {
        /**
         * The result of the execution of the batch requests.
         */
        entries?: Schema$AccountstatusesCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#accountstatusesCustomBatchResponse&quot;.
         */
        kind?: string;
    }
    /**
     * A batch entry encoding a single non-batch accountstatuses response.
     */
    interface Schema$AccountstatusesCustomBatchResponseEntry {
        /**
         * The requested account status. Defined if and only if the request was
         * successful.
         */
        accountStatus?: Schema$AccountStatus;
        /**
         * The ID of the request entry this entry responds to.
         */
        batchId?: number;
        /**
         * A list of errors defined if and only if the request failed.
         */
        errors?: Schema$Errors;
    }
    interface Schema$AccountstatusesListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#accountstatusesListResponse&quot;.
         */
        kind?: string;
        /**
         * The token for the retrieval of the next page of account statuses.
         */
        nextPageToken?: string;
        resources?: Schema$AccountStatus[];
    }
    interface Schema$AccountStatusExampleItem {
        itemId?: string;
        link?: string;
        submittedValue?: string;
        title?: string;
        valueOnLandingPage?: string;
    }
    interface Schema$AccountStatusItemLevelIssue {
        /**
         * The attribute&#39;s name, if the issue is caused by a single attribute.
         */
        attributeName?: string;
        /**
         * The error code of the issue.
         */
        code?: string;
        /**
         * A short issue description in English.
         */
        description?: string;
        /**
         * A detailed issue description in English.
         */
        detail?: string;
        /**
         * The URL of a web page to help with resolving this issue.
         */
        documentation?: string;
        /**
         * Number of items with this issue.
         */
        numItems?: string;
        /**
         * Whether the issue can be resolved by the merchant.
         */
        resolution?: string;
        /**
         * How this issue affects serving of the offer.
         */
        servability?: string;
    }
    interface Schema$AccountStatusProducts {
        /**
         * The channel the data applies to.
         */
        channel?: string;
        /**
         * The country the data applies to.
         */
        country?: string;
        /**
         * The destination the data applies to.
         */
        destination?: string;
        /**
         * List of item-level issues.
         */
        itemLevelIssues?: Schema$AccountStatusItemLevelIssue[];
        /**
         * Aggregated product statistics.
         */
        statistics?: Schema$AccountStatusStatistics;
    }
    interface Schema$AccountStatusStatistics {
        /**
         * Number of active offers.
         */
        active?: string;
        /**
         * Number of disapproved offers.
         */
        disapproved?: string;
        /**
         * Number of expiring offers.
         */
        expiring?: string;
        /**
         * Number of pending offers.
         */
        pending?: string;
    }
    /**
     * The tax settings of a merchant account. All methods require the admin role.
     */
    interface Schema$AccountTax {
        /**
         * The ID of the account to which these account tax settings belong.
         */
        accountId?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#accountTax&quot;.
         */
        kind?: string;
        /**
         * Tax rules. Updating the tax rules will enable US taxes (not reversible).
         * Defining no rules is equivalent to not charging tax at all.
         */
        rules?: Schema$AccountTaxTaxRule[];
    }
    interface Schema$AccounttaxCustomBatchRequest {
        /**
         * The request entries to be processed in the batch.
         */
        entries?: Schema$AccounttaxCustomBatchRequestEntry[];
    }
    /**
     * A batch entry encoding a single non-batch accounttax request.
     */
    interface Schema$AccounttaxCustomBatchRequestEntry {
        /**
         * The ID of the account for which to get/update account tax settings.
         */
        accountId?: string;
        /**
         * The account tax settings to update. Only defined if the method is update.
         */
        accountTax?: Schema$AccountTax;
        /**
         * An entry ID, unique within the batch request.
         */
        batchId?: number;
        /**
         * The ID of the managing account.
         */
        merchantId?: string;
        method?: string;
    }
    interface Schema$AccounttaxCustomBatchResponse {
        /**
         * The result of the execution of the batch requests.
         */
        entries?: Schema$AccounttaxCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#accounttaxCustomBatchResponse&quot;.
         */
        kind?: string;
    }
    /**
     * A batch entry encoding a single non-batch accounttax response.
     */
    interface Schema$AccounttaxCustomBatchResponseEntry {
        /**
         * The retrieved or updated account tax settings.
         */
        accountTax?: Schema$AccountTax;
        /**
         * The ID of the request entry this entry responds to.
         */
        batchId?: number;
        /**
         * A list of errors defined if and only if the request failed.
         */
        errors?: Schema$Errors;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#accounttaxCustomBatchResponseEntry&quot;.
         */
        kind?: string;
    }
    interface Schema$AccounttaxListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#accounttaxListResponse&quot;.
         */
        kind?: string;
        /**
         * The token for the retrieval of the next page of account tax settings.
         */
        nextPageToken?: string;
        resources?: Schema$AccountTax[];
    }
    /**
     * Tax calculation rule to apply in a state or province (USA only).
     */
    interface Schema$AccountTaxTaxRule {
        /**
         * Country code in which tax is applicable.
         */
        country?: string;
        /**
         * State (or province) is which the tax is applicable, described by its
         * location ID (also called criteria ID).
         */
        locationId?: string;
        /**
         * Explicit tax rate in percent, represented as a floating point number
         * without the percentage character. Must not be negative.
         */
        ratePercent?: string;
        /**
         * If true, shipping charges are also taxed.
         */
        shippingTaxed?: boolean;
        /**
         * Whether the tax rate is taken from a global tax table or specified
         * explicitly.
         */
        useGlobalRate?: boolean;
    }
    interface Schema$AccountUser {
        /**
         * Whether user is an admin.
         */
        admin?: boolean;
        /**
         * User&#39;s email address.
         */
        emailAddress?: string;
        /**
         * Whether user is an order manager.
         */
        orderManager?: boolean;
        /**
         * Whether user can access payment statements.
         */
        paymentsAnalyst?: boolean;
        /**
         * Whether user can manage payment settings.
         */
        paymentsManager?: boolean;
    }
    interface Schema$AccountYouTubeChannelLink {
        /**
         * Channel ID.
         */
        channelId?: string;
        /**
         * Status of the link between this Merchant Center account and the YouTube
         * channel. Upon retrieval, it represents the actual status of the link and
         * can be either active if it was approved in YT Creator Studio or pending
         * if it&#39;s pending approval. Upon insertion, it represents the intended
         * status of the link. Re-uploading a link with status active when it&#39;s
         * still pending or with status pending when it&#39;s already active will
         * have no effect: the status will remain unchanged. Re-uploading a link
         * with deprecated status inactive is equivalent to not submitting the link
         * at all and will delete the link if it was active or cancel the link
         * request if it was pending.
         */
        status?: string;
    }
    interface Schema$Amount {
        /**
         * [required] Value before taxes.
         */
        pretax?: Schema$Price;
        /**
         * [required] Tax value.
         */
        tax?: Schema$Price;
    }
    interface Schema$CarrierRate {
        /**
         * Carrier service, such as &quot;UPS&quot; or &quot;Fedex&quot;. The list
         * of supported carriers can be retrieved via the getSupportedCarriers
         * method. Required.
         */
        carrierName?: string;
        /**
         * Carrier service, such as &quot;ground&quot; or &quot;2 days&quot;. The
         * list of supported services for a carrier can be retrieved via the
         * getSupportedCarriers method. Required.
         */
        carrierService?: string;
        /**
         * Additive shipping rate modifier. Can be negative. For example {
         * &quot;value&quot;: &quot;1&quot;, &quot;currency&quot; : &quot;USD&quot;
         * } adds $1 to the rate, { &quot;value&quot;: &quot;-3&quot;,
         * &quot;currency&quot; : &quot;USD&quot; } removes $3 from the rate.
         * Optional.
         */
        flatAdjustment?: Schema$Price;
        /**
         * Name of the carrier rate. Must be unique per rate group. Required.
         */
        name?: string;
        /**
         * Shipping origin for this carrier rate. Required.
         */
        originPostalCode?: string;
        /**
         * Multiplicative shipping rate modifier as a number in decimal notation.
         * Can be negative. For example &quot;5.4&quot; increases the rate by 5.4%,
         * &quot;-3&quot; decreases the rate by 3%. Optional.
         */
        percentageAdjustment?: string;
    }
    interface Schema$CarriersCarrier {
        /**
         * The CLDR country code of the carrier (e.g., &quot;US&quot;). Always
         * present.
         */
        country?: string;
        /**
         * The name of the carrier (e.g., &quot;UPS&quot;). Always present.
         */
        name?: string;
        /**
         * A list of supported services (e.g., &quot;ground&quot;) for that carrier.
         * Contains at least one service.
         */
        services?: string[];
    }
    interface Schema$CustomAttribute {
        /**
         * The name of the attribute. Underscores will be replaced by spaces upon
         * insertion.
         */
        name?: string;
        /**
         * The type of the attribute.
         */
        type?: string;
        /**
         * Free-form unit of the attribute. Unit can only be used for values of type
         * int, float, or price.
         */
        unit?: string;
        /**
         * The value of the attribute.
         */
        value?: string;
    }
    interface Schema$CustomerReturnReason {
        description?: string;
        reasonCode?: string;
    }
    interface Schema$CustomGroup {
        /**
         * The sub-attributes.
         */
        attributes?: Schema$CustomAttribute[];
        /**
         * The name of the group. Underscores will be replaced by spaces upon
         * insertion.
         */
        name?: string;
    }
    interface Schema$CutoffTime {
        /**
         * Hour of the cutoff time until which an order has to be placed to be
         * processed in the same day. Required.
         */
        hour?: number;
        /**
         * Minute of the cutoff time until which an order has to be placed to be
         * processed in the same day. Required.
         */
        minute?: number;
        /**
         * Timezone identifier for the cutoff time. A list of identifiers can be
         * found in  the AdWords API documentation. E.g. &quot;Europe/Zurich&quot;.
         * Required.
         */
        timezone?: string;
    }
    /**
     * Datafeed configuration data.
     */
    interface Schema$Datafeed {
        /**
         * The two-letter ISO 639-1 language in which the attributes are defined in
         * the data feed.
         */
        attributeLanguage?: string;
        /**
         * [DEPRECATED] Please use targets[].language instead. The two-letter ISO
         * 639-1 language of the items in the feed. Must be a valid language for
         * targetCountry.
         */
        contentLanguage?: string;
        /**
         * The type of data feed. For product inventory feeds, only feeds for local
         * stores, not online stores, are supported.
         */
        contentType?: string;
        /**
         * Fetch schedule for the feed file.
         */
        fetchSchedule?: Schema$DatafeedFetchSchedule;
        /**
         * The filename of the feed. All feeds must have a unique file name.
         */
        fileName?: string;
        /**
         * Format of the feed file.
         */
        format?: Schema$DatafeedFormat;
        /**
         * The ID of the data feed.
         */
        id?: string;
        /**
         * [DEPRECATED] Please use targets[].includedDestinations instead. The list
         * of intended destinations (corresponds to checked check boxes in Merchant
         * Center).
         */
        intendedDestinations?: string[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#datafeed&quot;.
         */
        kind?: string;
        /**
         * A descriptive name of the data feed.
         */
        name?: string;
        /**
         * [DEPRECATED] Please use targets[].country instead. The country where the
         * items in the feed will be included in the search index, represented as a
         * CLDR territory code.
         */
        targetCountry?: string;
        /**
         * The targets this feed should apply to (country, language, destinations).
         */
        targets?: Schema$DatafeedTarget[];
    }
    /**
     * The required fields vary based on the frequency of fetching. For a monthly
     * fetch schedule, day_of_month and hour are required. For a weekly fetch
     * schedule, weekday and hour are required. For a daily fetch schedule, only
     * hour is required.
     */
    interface Schema$DatafeedFetchSchedule {
        /**
         * The day of the month the feed file should be fetched (1-31).
         */
        dayOfMonth?: number;
        /**
         * The URL where the feed file can be fetched. Google Merchant Center will
         * support automatic scheduled uploads using the HTTP, HTTPS, FTP, or SFTP
         * protocols, so the value will need to be a valid link using one of those
         * four protocols.
         */
        fetchUrl?: string;
        /**
         * The hour of the day the feed file should be fetched (0-23).
         */
        hour?: number;
        /**
         * The minute of the hour the feed file should be fetched (0-59). Read-only.
         */
        minuteOfHour?: number;
        /**
         * An optional password for fetch_url.
         */
        password?: string;
        /**
         * Whether the scheduled fetch is paused or not.
         */
        paused?: boolean;
        /**
         * Time zone used for schedule. UTC by default. E.g.,
         * &quot;America/Los_Angeles&quot;.
         */
        timeZone?: string;
        /**
         * An optional user name for fetch_url.
         */
        username?: string;
        /**
         * The day of the week the feed file should be fetched.
         */
        weekday?: string;
    }
    interface Schema$DatafeedFormat {
        /**
         * Delimiter for the separation of values in a delimiter-separated values
         * feed. If not specified, the delimiter will be auto-detected. Ignored for
         * non-DSV data feeds.
         */
        columnDelimiter?: string;
        /**
         * Character encoding scheme of the data feed. If not specified, the
         * encoding will be auto-detected.
         */
        fileEncoding?: string;
        /**
         * Specifies how double quotes are interpreted. If not specified, the mode
         * will be auto-detected. Ignored for non-DSV data feeds.
         */
        quotingMode?: string;
    }
    interface Schema$DatafeedsCustomBatchRequest {
        /**
         * The request entries to be processed in the batch.
         */
        entries?: Schema$DatafeedsCustomBatchRequestEntry[];
    }
    /**
     * A batch entry encoding a single non-batch datafeeds request.
     */
    interface Schema$DatafeedsCustomBatchRequestEntry {
        /**
         * An entry ID, unique within the batch request.
         */
        batchId?: number;
        /**
         * The data feed to insert.
         */
        datafeed?: Schema$Datafeed;
        /**
         * The ID of the data feed to get, delete or fetch.
         */
        datafeedId?: string;
        /**
         * The ID of the managing account.
         */
        merchantId?: string;
        method?: string;
    }
    interface Schema$DatafeedsCustomBatchResponse {
        /**
         * The result of the execution of the batch requests.
         */
        entries?: Schema$DatafeedsCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#datafeedsCustomBatchResponse&quot;.
         */
        kind?: string;
    }
    /**
     * A batch entry encoding a single non-batch datafeeds response.
     */
    interface Schema$DatafeedsCustomBatchResponseEntry {
        /**
         * The ID of the request entry this entry responds to.
         */
        batchId?: number;
        /**
         * The requested data feed. Defined if and only if the request was
         * successful.
         */
        datafeed?: Schema$Datafeed;
        /**
         * A list of errors defined if and only if the request failed.
         */
        errors?: Schema$Errors;
    }
    interface Schema$DatafeedsFetchNowResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#datafeedsFetchNowResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$DatafeedsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#datafeedsListResponse&quot;.
         */
        kind?: string;
        /**
         * The token for the retrieval of the next page of datafeeds.
         */
        nextPageToken?: string;
        resources?: Schema$Datafeed[];
    }
    /**
     * The status of a datafeed, i.e., the result of the last retrieval of the
     * datafeed computed asynchronously when the feed processing is finished.
     */
    interface Schema$DatafeedStatus {
        /**
         * The country for which the status is reported, represented as a  CLDR
         * territory code.
         */
        country?: string;
        /**
         * The ID of the feed for which the status is reported.
         */
        datafeedId?: string;
        /**
         * The list of errors occurring in the feed.
         */
        errors?: Schema$DatafeedStatusError[];
        /**
         * The number of items in the feed that were processed.
         */
        itemsTotal?: string;
        /**
         * The number of items in the feed that were valid.
         */
        itemsValid?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#datafeedStatus&quot;.
         */
        kind?: string;
        /**
         * The two-letter ISO 639-1 language for which the status is reported.
         */
        language?: string;
        /**
         * The last date at which the feed was uploaded.
         */
        lastUploadDate?: string;
        /**
         * The processing status of the feed.
         */
        processingStatus?: string;
        /**
         * The list of errors occurring in the feed.
         */
        warnings?: Schema$DatafeedStatusError[];
    }
    /**
     * An error occurring in the feed, like &quot;invalid price&quot;.
     */
    interface Schema$DatafeedStatusError {
        /**
         * The code of the error, e.g., &quot;validation/invalid_value&quot;.
         */
        code?: string;
        /**
         * The number of occurrences of the error in the feed.
         */
        count?: string;
        /**
         * A list of example occurrences of the error, grouped by product.
         */
        examples?: Schema$DatafeedStatusExample[];
        /**
         * The error message, e.g., &quot;Invalid price&quot;.
         */
        message?: string;
    }
    interface Schema$DatafeedstatusesCustomBatchRequest {
        /**
         * The request entries to be processed in the batch.
         */
        entries?: Schema$DatafeedstatusesCustomBatchRequestEntry[];
    }
    /**
     * A batch entry encoding a single non-batch datafeedstatuses request.
     */
    interface Schema$DatafeedstatusesCustomBatchRequestEntry {
        /**
         * An entry ID, unique within the batch request.
         */
        batchId?: number;
        /**
         * The country for which to get the datafeed status. If this parameter is
         * provided then language must also be provided. Note that for multi-target
         * datafeeds this parameter is required.
         */
        country?: string;
        /**
         * The ID of the data feed to get.
         */
        datafeedId?: string;
        /**
         * The language for which to get the datafeed status. If this parameter is
         * provided then country must also be provided. Note that for multi-target
         * datafeeds this parameter is required.
         */
        language?: string;
        /**
         * The ID of the managing account.
         */
        merchantId?: string;
        method?: string;
    }
    interface Schema$DatafeedstatusesCustomBatchResponse {
        /**
         * The result of the execution of the batch requests.
         */
        entries?: Schema$DatafeedstatusesCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#datafeedstatusesCustomBatchResponse&quot;.
         */
        kind?: string;
    }
    /**
     * A batch entry encoding a single non-batch datafeedstatuses response.
     */
    interface Schema$DatafeedstatusesCustomBatchResponseEntry {
        /**
         * The ID of the request entry this entry responds to.
         */
        batchId?: number;
        /**
         * The requested data feed status. Defined if and only if the request was
         * successful.
         */
        datafeedStatus?: Schema$DatafeedStatus;
        /**
         * A list of errors defined if and only if the request failed.
         */
        errors?: Schema$Errors;
    }
    interface Schema$DatafeedstatusesListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#datafeedstatusesListResponse&quot;.
         */
        kind?: string;
        /**
         * The token for the retrieval of the next page of datafeed statuses.
         */
        nextPageToken?: string;
        resources?: Schema$DatafeedStatus[];
    }
    /**
     * An example occurrence for a particular error.
     */
    interface Schema$DatafeedStatusExample {
        /**
         * The ID of the example item.
         */
        itemId?: string;
        /**
         * Line number in the data feed where the example is found.
         */
        lineNumber?: string;
        /**
         * The problematic value.
         */
        value?: string;
    }
    interface Schema$DatafeedTarget {
        /**
         * The country where the items in the feed will be included in the search
         * index, represented as a  CLDR territory code.
         */
        country?: string;
        /**
         * The list of destinations to exclude for this target (corresponds to
         * unchecked check boxes in Merchant Center).
         */
        excludedDestinations?: string[];
        /**
         * The list of destinations to include for this target (corresponds to
         * checked check boxes in Merchant Center). Default destinations are always
         * included unless provided in the excluded_destination field.
         */
        includedDestinations?: string[];
        /**
         * The two-letter ISO 639-1 language of the items in the feed. Must be a
         * valid language for targets[].country.
         */
        language?: string;
    }
    interface Schema$DeliveryTime {
        /**
         * Business days cutoff time definition. If not configured the cutoff time
         * will be defaulted to 8AM PST.
         */
        cutoffTime?: Schema$CutoffTime;
        /**
         * Holiday cutoff definitions. If configured, they specify order cutoff
         * times for holiday-specific shipping.
         */
        holidayCutoffs?: Schema$HolidayCutoff[];
        /**
         * Maximum number of business days spent before an order is shipped. 0 means
         * same day shipped, 1 means next day shipped. Must be greater than or equal
         * to minHandlingTimeInDays.
         */
        maxHandlingTimeInDays?: number;
        /**
         * Maximum number of business days that is spent in transit. 0 means same
         * day delivery, 1 means next day delivery. Must be greater than or equal to
         * minTransitTimeInDays.
         */
        maxTransitTimeInDays?: number;
        /**
         * Minimum number of business days spent before an order is shipped. 0 means
         * same day shipped, 1 means next day shipped.
         */
        minHandlingTimeInDays?: number;
        /**
         * Minimum number of business days that is spent in transit. 0 means same
         * day delivery, 1 means next day delivery. Either
         * {min,max}transitTimeInDays or transitTimeTable must be set, but not both.
         */
        minTransitTimeInDays?: number;
        /**
         * Transit time table, number of business days spent in transit based on row
         * and column dimensions. Either {min,max}transitTimeInDays or
         * transitTimeTable can be set, but not both.
         */
        transitTimeTable?: Schema$TransitTable;
    }
    /**
     * An error returned by the API.
     */
    interface Schema$Error {
        /**
         * The domain of the error.
         */
        domain?: string;
        /**
         * A description of the error.
         */
        message?: string;
        /**
         * The error code.
         */
        reason?: string;
    }
    /**
     * A list of errors returned by a failed batch entry.
     */
    interface Schema$Errors {
        /**
         * The HTTP status of the first error in errors.
         */
        code?: number;
        /**
         * A list of errors.
         */
        errors?: Schema$Error[];
        /**
         * The message of the first error in errors.
         */
        message?: string;
    }
    interface Schema$GmbAccounts {
        /**
         * The ID of the account.
         */
        accountId?: string;
        /**
         * A list of GMB accounts which are available to the merchant.
         */
        gmbAccounts?: Schema$GmbAccountsGmbAccount[];
    }
    interface Schema$GmbAccountsGmbAccount {
        /**
         * The email which identifies the GMB account.
         */
        email?: string;
        /**
         * Number of listings under this account.
         */
        listingCount?: string;
        /**
         * The name of the GMB account.
         */
        name?: string;
        /**
         * The type of the GMB account (User or Business).
         */
        type?: string;
    }
    /**
     * A non-empty list of row or column headers for a table. Exactly one of
     * prices, weights, numItems, postalCodeGroupNames, or location must be set.
     */
    interface Schema$Headers {
        /**
         * A list of location ID sets. Must be non-empty. Can only be set if all
         * other fields are not set.
         */
        locations?: Schema$LocationIdSet[];
        /**
         * A list of inclusive number of items upper bounds. The last value can be
         * &quot;infinity&quot;. For example [&quot;10&quot;, &quot;50&quot;,
         * &quot;infinity&quot;] represents the headers &quot;&lt;= 10 items&quot;,
         * &quot; 50 items&quot;. Must be non-empty. Can only be set if all other
         * fields are not set.
         */
        numberOfItems?: string[];
        /**
         * A list of postal group names. The last value can be &quot;all other
         * locations&quot;. Example: [&quot;zone 1&quot;, &quot;zone 2&quot;,
         * &quot;all other locations&quot;]. The referred postal code groups must
         * match the delivery country of the service. Must be non-empty. Can only be
         * set if all other fields are not set.
         */
        postalCodeGroupNames?: string[];
        /**
         * A list of inclusive order price upper bounds. The last price&#39;s value
         * can be &quot;infinity&quot;. For example [{&quot;value&quot;:
         * &quot;10&quot;, &quot;currency&quot;: &quot;USD&quot;},
         * {&quot;value&quot;: &quot;500&quot;, &quot;currency&quot;:
         * &quot;USD&quot;}, {&quot;value&quot;: &quot;infinity&quot;,
         * &quot;currency&quot;: &quot;USD&quot;}] represents the headers
         * &quot;&lt;= $10&quot;, &quot; $500&quot;. All prices within a service
         * must have the same currency. Must be non-empty. Can only be set if all
         * other fields are not set.
         */
        prices?: Schema$Price[];
        /**
         * A list of inclusive order weight upper bounds. The last weight&#39;s
         * value can be &quot;infinity&quot;. For example [{&quot;value&quot;:
         * &quot;10&quot;, &quot;unit&quot;: &quot;kg&quot;}, {&quot;value&quot;:
         * &quot;50&quot;, &quot;unit&quot;: &quot;kg&quot;}, {&quot;value&quot;:
         * &quot;infinity&quot;, &quot;unit&quot;: &quot;kg&quot;}] represents the
         * headers &quot;&lt;= 10kg&quot;, &quot; 50kg&quot;. All weights within a
         * service must have the same unit. Must be non-empty. Can only be set if
         * all other fields are not set.
         */
        weights?: Schema$Weight[];
    }
    interface Schema$HolidayCutoff {
        /**
         * Date of the order deadline, in ISO 8601 format. E.g.
         * &quot;2016-11-29&quot; for 29th November 2016. Required.
         */
        deadlineDate?: string;
        /**
         * Hour of the day on the deadline date until which the order has to be
         * placed to qualify for the delivery guarantee. Possible values are: 0
         * (midnight), 1, ..., 12 (noon), 13, ..., 23. Required.
         */
        deadlineHour?: number;
        /**
         * Timezone identifier for the deadline hour. A list of identifiers can be
         * found in  the AdWords API documentation. E.g. &quot;Europe/Zurich&quot;.
         * Required.
         */
        deadlineTimezone?: string;
        /**
         * Unique identifier for the holiday. Required.
         */
        holidayId?: string;
        /**
         * Date on which the deadline will become visible to consumers in ISO 8601
         * format. E.g. &quot;2016-10-31&quot; for 31st October 2016. Required.
         */
        visibleFromDate?: string;
    }
    interface Schema$HolidaysHoliday {
        /**
         * The CLDR territory code of the country in which the holiday is available.
         * E.g. &quot;US&quot;, &quot;DE&quot;, &quot;GB&quot;. A holiday cutoff can
         * only be configured in a shipping settings service with matching delivery
         * country. Always present.
         */
        countryCode?: string;
        /**
         * Date of the holiday, in ISO 8601 format. E.g. &quot;2016-12-25&quot; for
         * Christmas 2016. Always present.
         */
        date?: string;
        /**
         * Date on which the order has to arrive at the customer&#39;s, in ISO 8601
         * format. E.g. &quot;2016-12-24&quot; for 24th December 2016. Always
         * present.
         */
        deliveryGuaranteeDate?: string;
        /**
         * Hour of the day in the delivery location&#39;s timezone on the guaranteed
         * delivery date by which the order has to arrive at the customer&#39;s.
         * Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Always
         * present.
         */
        deliveryGuaranteeHour?: string;
        /**
         * Unique identifier for the holiday to be used when configuring holiday
         * cutoffs. Always present.
         */
        id?: string;
        /**
         * The holiday type. Always present.
         */
        type?: string;
    }
    interface Schema$Installment {
        /**
         * The amount the buyer has to pay per month.
         */
        amount?: Schema$Price;
        /**
         * The number of installments the buyer has to pay.
         */
        months?: string;
    }
    interface Schema$Inventory {
        /**
         * The availability of the product.
         */
        availability?: string;
        /**
         * Custom label 0 for custom grouping of items in a Shopping campaign. Only
         * supported for online products.
         */
        customLabel0?: string;
        /**
         * Custom label 1 for custom grouping of items in a Shopping campaign. Only
         * supported for online products.
         */
        customLabel1?: string;
        /**
         * Custom label 2 for custom grouping of items in a Shopping campaign. Only
         * supported for online products.
         */
        customLabel2?: string;
        /**
         * Custom label 3 for custom grouping of items in a Shopping campaign. Only
         * supported for online products.
         */
        customLabel3?: string;
        /**
         * Custom label 3 for custom grouping of items in a Shopping campaign. Only
         * supported for online products.
         */
        customLabel4?: string;
        /**
         * Number and amount of installments to pay for an item. Brazil only.
         */
        installment?: Schema$Installment;
        /**
         * The instore product location. Supported only for local products.
         */
        instoreProductLocation?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#inventory&quot;.
         */
        kind?: string;
        /**
         * Loyalty points that users receive after purchasing the item. Japan only.
         */
        loyaltyPoints?: Schema$LoyaltyPoints;
        /**
         * Store pickup information. Only supported for local inventory. Not setting
         * pickup means &quot;don&#39;t update&quot; while setting it to the empty
         * value ({} in JSON) means &quot;delete&quot;. Otherwise, pickupMethod and
         * pickupSla must be set together, unless pickupMethod is &quot;not
         * supported&quot;.
         */
        pickup?: Schema$InventoryPickup;
        /**
         * The price of the product.
         */
        price?: Schema$Price;
        /**
         * The quantity of the product. Must be equal to or greater than zero.
         * Supported only for local products.
         */
        quantity?: number;
        /**
         * The sale price of the product. Mandatory if sale_price_effective_date is
         * defined.
         */
        salePrice?: Schema$Price;
        /**
         * A date range represented by a pair of ISO 8601 dates separated by a
         * space, comma, or slash. Both dates might be specified as &#39;null&#39;
         * if undecided.
         */
        salePriceEffectiveDate?: string;
        /**
         * The quantity of the product that is available for selling on Google.
         * Supported only for online products.
         */
        sellOnGoogleQuantity?: number;
    }
    interface Schema$InventoryCustomBatchRequest {
        /**
         * The request entries to be processed in the batch.
         */
        entries?: Schema$InventoryCustomBatchRequestEntry[];
    }
    /**
     * A batch entry encoding a single non-batch inventory request.
     */
    interface Schema$InventoryCustomBatchRequestEntry {
        /**
         * An entry ID, unique within the batch request.
         */
        batchId?: number;
        /**
         * Price and availability of the product.
         */
        inventory?: Schema$Inventory;
        /**
         * The ID of the managing account.
         */
        merchantId?: string;
        /**
         * The ID of the product for which to update price and availability.
         */
        productId?: string;
        /**
         * The code of the store for which to update price and availability. Use
         * online to update price and availability of an online product.
         */
        storeCode?: string;
    }
    interface Schema$InventoryCustomBatchResponse {
        /**
         * The result of the execution of the batch requests.
         */
        entries?: Schema$InventoryCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#inventoryCustomBatchResponse&quot;.
         */
        kind?: string;
    }
    /**
     * A batch entry encoding a single non-batch inventory response.
     */
    interface Schema$InventoryCustomBatchResponseEntry {
        /**
         * The ID of the request entry this entry responds to.
         */
        batchId?: number;
        /**
         * A list of errors defined if and only if the request failed.
         */
        errors?: Schema$Errors;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#inventoryCustomBatchResponseEntry&quot;.
         */
        kind?: string;
    }
    interface Schema$InventoryPickup {
        /**
         * Whether store pickup is available for this offer and whether the pickup
         * option should be shown as buy, reserve, or not supported. Only supported
         * for local inventory. Unless the value is &quot;not supported&quot;, must
         * be submitted together with pickupSla.
         */
        pickupMethod?: string;
        /**
         * The expected date that an order will be ready for pickup, relative to
         * when the order is placed. Only supported for local inventory. Must be
         * submitted together with pickupMethod.
         */
        pickupSla?: string;
    }
    interface Schema$InventorySetRequest {
        /**
         * The availability of the product.
         */
        availability?: string;
        /**
         * Custom label 0 for custom grouping of items in a Shopping campaign. Only
         * supported for online products.
         */
        customLabel0?: string;
        /**
         * Custom label 1 for custom grouping of items in a Shopping campaign. Only
         * supported for online products.
         */
        customLabel1?: string;
        /**
         * Custom label 2 for custom grouping of items in a Shopping campaign. Only
         * supported for online products.
         */
        customLabel2?: string;
        /**
         * Custom label 3 for custom grouping of items in a Shopping campaign. Only
         * supported for online products.
         */
        customLabel3?: string;
        /**
         * Custom label 3 for custom grouping of items in a Shopping campaign. Only
         * supported for online products.
         */
        customLabel4?: string;
        /**
         * Number and amount of installments to pay for an item. Brazil only.
         */
        installment?: Schema$Installment;
        /**
         * The instore product location. Supported only for local products.
         */
        instoreProductLocation?: string;
        /**
         * Loyalty points that users receive after purchasing the item. Japan only.
         */
        loyaltyPoints?: Schema$LoyaltyPoints;
        /**
         * Store pickup information. Only supported for local inventory. Not setting
         * pickup means &quot;don&#39;t update&quot; while setting it to the empty
         * value ({} in JSON) means &quot;delete&quot;. Otherwise, pickupMethod and
         * pickupSla must be set together, unless pickupMethod is &quot;not
         * supported&quot;.
         */
        pickup?: Schema$InventoryPickup;
        /**
         * The price of the product.
         */
        price?: Schema$Price;
        /**
         * The quantity of the product. Must be equal to or greater than zero.
         * Supported only for local products.
         */
        quantity?: number;
        /**
         * The sale price of the product. Mandatory if sale_price_effective_date is
         * defined.
         */
        salePrice?: Schema$Price;
        /**
         * A date range represented by a pair of ISO 8601 dates separated by a
         * space, comma, or slash. Both dates might be specified as &#39;null&#39;
         * if undecided.
         */
        salePriceEffectiveDate?: string;
        /**
         * The quantity of the product that is available for selling on Google.
         * Supported only for online products.
         */
        sellOnGoogleQuantity?: number;
    }
    interface Schema$InventorySetResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#inventorySetResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$InvoiceSummary {
        /**
         * Summary of the total amounts of the additional charges.
         */
        additionalChargeSummaries?: Schema$InvoiceSummaryAdditionalChargeSummary[];
        /**
         * Deprecated.
         */
        customerBalance?: Schema$Amount;
        /**
         * Deprecated.
         */
        googleBalance?: Schema$Amount;
        /**
         * Deprecated.
         */
        merchantBalance?: Schema$Amount;
        /**
         * [required] Total price for the product.
         */
        productTotal?: Schema$Amount;
        /**
         * Deprecated.
         */
        promotionSummaries?: Schema$Promotion[];
    }
    interface Schema$InvoiceSummaryAdditionalChargeSummary {
        /**
         * [required] Total additional charge for this type.
         */
        totalAmount?: Schema$Amount;
        /**
         * [required] Type of the additional charge.
         */
        type?: string;
    }
    interface Schema$LiaAboutPageSettings {
        /**
         * The status of the verification process for the About page.
         */
        status?: string;
        /**
         * The URL for the About page.
         */
        url?: string;
    }
    interface Schema$LiaCountrySettings {
        /**
         * The settings for the About page.
         */
        about?: Schema$LiaAboutPageSettings;
        /**
         * CLDR country code (e.g. &quot;US&quot;).
         */
        country?: string;
        /**
         * The status of the &quot;Merchant hosted local storefront&quot; feature.
         */
        hostedLocalStorefrontActive?: boolean;
        /**
         * LIA inventory verification settings.
         */
        inventory?: Schema$LiaInventorySettings;
        /**
         * LIA &quot;On Display To Order&quot; settings.
         */
        onDisplayToOrder?: Schema$LiaOnDisplayToOrderSettings;
        /**
         * The POS data provider linked with this country.
         */
        posDataProvider?: Schema$LiaPosDataProvider;
        /**
         * The status of the &quot;Store pickup&quot; feature.
         */
        storePickupActive?: boolean;
    }
    interface Schema$LiaInventorySettings {
        /**
         * The email of the contact for the inventory verification process.
         */
        inventoryVerificationContactEmail?: string;
        /**
         * The name of the contact for the inventory verification process.
         */
        inventoryVerificationContactName?: string;
        /**
         * The status of the verification contact.
         */
        inventoryVerificationContactStatus?: string;
        /**
         * The status of the inventory verification process.
         */
        status?: string;
    }
    interface Schema$LiaOnDisplayToOrderSettings {
        /**
         * Shipping cost and policy URL.
         */
        shippingCostPolicyUrl?: string;
        /**
         * The status of the ?On display to order? feature.
         */
        status?: string;
    }
    interface Schema$LiaPosDataProvider {
        /**
         * The ID of the POS data provider.
         */
        posDataProviderId?: string;
        /**
         * The account ID by which this merchant is known to the POS data provider.
         */
        posExternalAccountId?: string;
    }
    /**
     * Local Inventory ads (LIA) settings. All methods except listposdataproviders
     * require the admin role.
     */
    interface Schema$LiaSettings {
        /**
         * The ID of the account to which these LIA settings belong. Ignored upon
         * update, always present in get request responses.
         */
        accountId?: string;
        /**
         * The LIA settings for each country.
         */
        countrySettings?: Schema$LiaCountrySettings[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#liaSettings&quot;.
         */
        kind?: string;
    }
    interface Schema$LiasettingsCustomBatchRequest {
        /**
         * The request entries to be processed in the batch.
         */
        entries?: Schema$LiasettingsCustomBatchRequestEntry[];
    }
    interface Schema$LiasettingsCustomBatchRequestEntry {
        /**
         * The ID of the account for which to get/update account shipping settings.
         */
        accountId?: string;
        /**
         * An entry ID, unique within the batch request.
         */
        batchId?: number;
        /**
         * Inventory validation contact email. Required only for
         * SetInventoryValidationContact.
         */
        contactEmail?: string;
        /**
         * Inventory validation contact name. Required only for
         * SetInventoryValidationContact.
         */
        contactName?: string;
        /**
         * The country code. Required only for RequestInventoryVerification.
         */
        country?: string;
        /**
         * The GMB account. Required only for RequestGmbAccess.
         */
        gmbEmail?: string;
        /**
         * The account Lia settings to update. Only defined if the method is update.
         */
        liaSettings?: Schema$LiaSettings;
        /**
         * The ID of the managing account.
         */
        merchantId?: string;
        method?: string;
        /**
         * The ID of POS data provider. Required only for SetPosProvider.
         */
        posDataProviderId?: string;
        /**
         * The account ID by which this merchant is known to the POS provider.
         */
        posExternalAccountId?: string;
    }
    interface Schema$LiasettingsCustomBatchResponse {
        /**
         * The result of the execution of the batch requests.
         */
        entries?: Schema$LiasettingsCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#liasettingsCustomBatchResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$LiasettingsCustomBatchResponseEntry {
        /**
         * The ID of the request entry to which this entry responds.
         */
        batchId?: number;
        /**
         * A list of errors defined if, and only if, the request failed.
         */
        errors?: Schema$Errors;
        /**
         * The the list of accessible GMB accounts.
         */
        gmbAccounts?: Schema$GmbAccounts;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#liasettingsCustomBatchResponseEntry&quot;.
         */
        kind?: string;
        /**
         * The retrieved or updated Lia settings.
         */
        liaSettings?: Schema$LiaSettings;
        /**
         * The list of POS data providers.
         */
        posDataProviders?: Schema$PosDataProviders[];
    }
    interface Schema$LiasettingsGetAccessibleGmbAccountsResponse {
        /**
         * The ID of the account.
         */
        accountId?: string;
        /**
         * A list of GMB accounts which are available to the merchant.
         */
        gmbAccounts?: Schema$GmbAccountsGmbAccount[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#liasettingsGetAccessibleGmbAccountsResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$LiasettingsListPosDataProvidersResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#liasettingsListPosDataProvidersResponse&quot;.
         */
        kind?: string;
        /**
         * The list of POS data providers for each eligible country
         */
        posDataProviders?: Schema$PosDataProviders[];
    }
    interface Schema$LiasettingsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#liasettingsListResponse&quot;.
         */
        kind?: string;
        /**
         * The token for the retrieval of the next page of LIA settings.
         */
        nextPageToken?: string;
        resources?: Schema$LiaSettings[];
    }
    interface Schema$LiasettingsRequestGmbAccessResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#liasettingsRequestGmbAccessResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$LiasettingsRequestInventoryVerificationResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#liasettingsRequestInventoryVerificationResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$LiasettingsSetInventoryVerificationContactResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#liasettingsSetInventoryVerificationContactResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$LiasettingsSetPosDataProviderResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#liasettingsSetPosDataProviderResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$LocationIdSet {
        /**
         * A non-empty list of location IDs. They must all be of the same location
         * type (e.g., state).
         */
        locationIds?: string[];
    }
    interface Schema$LoyaltyPoints {
        /**
         * Name of loyalty points program. It is recommended to limit the name to 12
         * full-width characters or 24 Roman characters.
         */
        name?: string;
        /**
         * The retailer&#39;s loyalty points in absolute value.
         */
        pointsValue?: string;
        /**
         * The ratio of a point when converted to currency. Google assumes currency
         * based on Merchant Center settings. If ratio is left out, it defaults
         * to 1.0.
         */
        ratio?: number;
    }
    interface Schema$MerchantOrderReturn {
        creationDate?: string;
        merchantOrderId?: string;
        orderId?: string;
        orderReturnId?: string;
        returnItems?: Schema$MerchantOrderReturnItem[];
        returnShipments?: Schema$ReturnShipment[];
    }
    interface Schema$MerchantOrderReturnItem {
        customerReturnReason?: Schema$CustomerReturnReason;
        itemId?: string;
        merchantReturnReason?: Schema$RefundReason;
        product?: Schema$OrderLineItemProduct;
        returnShipmentIds?: string[];
        state?: string;
    }
    /**
     * Order. All methods require the order manager role.
     */
    interface Schema$Order {
        /**
         * Whether the order was acknowledged.
         */
        acknowledged?: boolean;
        /**
         * Deprecated.
         */
        channelType?: string;
        /**
         * The details of the customer who placed the order.
         */
        customer?: Schema$OrderCustomer;
        /**
         * The details for the delivery.
         */
        deliveryDetails?: Schema$OrderDeliveryDetails;
        /**
         * The REST ID of the order. Globally unique.
         */
        id?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#order&quot;.
         */
        kind?: string;
        /**
         * Line items that are ordered.
         */
        lineItems?: Schema$OrderLineItem[];
        merchantId?: string;
        /**
         * Merchant-provided ID of the order.
         */
        merchantOrderId?: string;
        /**
         * The net amount for the order. For example, if an order was originally for
         * a grand total of $100 and a refund was issued for $20, the net amount
         * will be $80.
         */
        netAmount?: Schema$Price;
        /**
         * The details of the payment method.
         */
        paymentMethod?: Schema$OrderPaymentMethod;
        /**
         * The status of the payment.
         */
        paymentStatus?: string;
        /**
         * The date when the order was placed, in ISO 8601 format.
         */
        placedDate?: string;
        /**
         * The details of the merchant provided promotions applied to the order.
         * More details about the program are here.
         */
        promotions?: Schema$OrderLegacyPromotion[];
        /**
         * Refunds for the order.
         */
        refunds?: Schema$OrderRefund[];
        /**
         * Shipments of the order.
         */
        shipments?: Schema$OrderShipment[];
        /**
         * The total cost of shipping for all items.
         */
        shippingCost?: Schema$Price;
        /**
         * The tax for the total shipping cost.
         */
        shippingCostTax?: Schema$Price;
        /**
         * Deprecated. Shipping details are provided with line items instead.
         */
        shippingOption?: string;
        /**
         * The status of the order.
         */
        status?: string;
        /**
         * The party responsible for collecting and remitting taxes.
         */
        taxCollector?: string;
    }
    interface Schema$OrderAddress {
        /**
         * CLDR country code (e.g. &quot;US&quot;).
         */
        country?: string;
        /**
         * Strings representing the lines of the printed label for mailing the
         * order, for example: John Smith 1600 Amphitheatre Parkway Mountain View,
         * CA, 94043 United States
         */
        fullAddress?: string[];
        /**
         * Whether the address is a post office box.
         */
        isPostOfficeBox?: boolean;
        /**
         * City, town or commune. May also include dependent localities or
         * sublocalities (e.g. neighborhoods or suburbs).
         */
        locality?: string;
        /**
         * Postal Code or ZIP (e.g. &quot;94043&quot;).
         */
        postalCode?: string;
        /**
         * Name of the recipient.
         */
        recipientName?: string;
        /**
         * Top-level administrative subdivision of the country. For example, a state
         * like California (&quot;CA&quot;) or a province like Quebec
         * (&quot;QC&quot;).
         */
        region?: string;
        /**
         * Street-level part of the address.
         */
        streetAddress?: string[];
    }
    interface Schema$OrderCancellation {
        /**
         * The actor that created the cancellation.
         */
        actor?: string;
        /**
         * Date on which the cancellation has been created, in ISO 8601 format.
         */
        creationDate?: string;
        /**
         * The quantity that was canceled.
         */
        quantity?: number;
        /**
         * The reason for the cancellation. Orders that are cancelled with a
         * noInventory reason will lead to the removal of the product from Shopping
         * Actions until you make an update to that product. This will not affect
         * your Shopping ads.
         */
        reason?: string;
        /**
         * The explanation of the reason.
         */
        reasonText?: string;
    }
    interface Schema$OrderCustomer {
        /**
         * Deprecated.
         */
        email?: string;
        /**
         * Deprecated. Please use marketingRightsInfo instead.
         */
        explicitMarketingPreference?: boolean;
        /**
         * Full name of the customer.
         */
        fullName?: string;
        /**
         * Customer&#39;s marketing preferences.
         */
        marketingRightsInfo?: Schema$OrderCustomerMarketingRightsInfo;
    }
    interface Schema$OrderCustomerMarketingRightsInfo {
        /**
         * Last known user selection regarding marketing preferences. In certain
         * cases this selection might not be known, so this field would be empty.
         */
        explicitMarketingPreference?: string;
        /**
         * Timestamp when last time marketing preference was updated. Could be
         * empty, if user wasn&#39;t offered a selection yet.
         */
        lastUpdatedTimestamp?: string;
        /**
         * Email address that can be used for marketing purposes. The field may be
         * empty even if explicitMarketingPreference is &#39;granted&#39;. This
         * happens when retrieving an old order from the customer who deleted their
         * account.
         */
        marketingEmailAddress?: string;
    }
    interface Schema$OrderDeliveryDetails {
        /**
         * The delivery address
         */
        address?: Schema$OrderAddress;
        /**
         * The phone number of the person receiving the delivery.
         */
        phoneNumber?: string;
    }
    interface Schema$OrderinvoicesCreateChargeInvoiceRequest {
        /**
         * [required] The ID of the invoice.
         */
        invoiceId?: string;
        /**
         * [required] Invoice summary.
         */
        invoiceSummary?: Schema$InvoiceSummary;
        /**
         * [required] Invoice details per line item.
         */
        lineItemInvoices?: Schema$ShipmentInvoiceLineItemInvoice[];
        /**
         * [required] The ID of the operation, unique across all operations for a
         * given order.
         */
        operationId?: string;
        /**
         * [required] ID of the shipment group. It is assigned by the merchant in
         * the shipLineItems method and is used to group multiple line items that
         * have the same kind of shipping charges.
         */
        shipmentGroupId?: string;
    }
    interface Schema$OrderinvoicesCreateChargeInvoiceResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#orderinvoicesCreateChargeInvoiceResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrderinvoicesCreateRefundInvoiceRequest {
        /**
         * [required] The ID of the invoice.
         */
        invoiceId?: string;
        /**
         * [required] The ID of the operation, unique across all operations for a
         * given order.
         */
        operationId?: string;
        /**
         * Option to create a refund-only invoice. Exactly one of refundOnlyOption
         * or returnOption must be provided.
         */
        refundOnlyOption?: Schema$OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption;
        /**
         * Option to create an invoice for a refund and mark all items within the
         * invoice as returned. Exactly one of refundOnlyOption or returnOption must
         * be provided.
         */
        returnOption?: Schema$OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption;
        /**
         * Invoice details for different shipment groups.
         */
        shipmentInvoices?: Schema$ShipmentInvoice[];
    }
    interface Schema$OrderinvoicesCreateRefundInvoiceResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#orderinvoicesCreateRefundInvoiceResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption {
        /**
         * Optional description of the refund reason.
         */
        description?: string;
        /**
         * [required] Reason for the refund.
         */
        reason?: string;
    }
    interface Schema$OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption {
        /**
         * Optional description of the return reason.
         */
        description?: string;
        /**
         * [required] Reason for the return.
         */
        reason?: string;
    }
    interface Schema$OrderLegacyPromotion {
        benefits?: Schema$OrderLegacyPromotionBenefit[];
        /**
         * The date and time frame when the promotion is active and ready for
         * validation review. Note that the promotion live time may be delayed for a
         * few hours due to the validation review. Start date and end date are
         * separated by a forward slash (/). The start date is specified by the
         * format (YYYY-MM-DD), followed by the letter ?T?, the time of the day when
         * the sale starts (in Greenwich Mean Time, GMT), followed by an expression
         * of the time zone for the sale. The end date is in the same format.
         */
        effectiveDates?: string;
        /**
         * Optional. The text code that corresponds to the promotion when applied on
         * the retailer?s website.
         */
        genericRedemptionCode?: string;
        /**
         * The unique ID of the promotion.
         */
        id?: string;
        /**
         * The full title of the promotion.
         */
        longTitle?: string;
        /**
         * Whether the promotion is applicable to all products or only specific
         * products.
         */
        productApplicability?: string;
        /**
         * Indicates that the promotion is valid online.
         */
        redemptionChannel?: string;
    }
    interface Schema$OrderLegacyPromotionBenefit {
        /**
         * The discount in the order price when the promotion is applied.
         */
        discount?: Schema$Price;
        /**
         * The OfferId(s) that were purchased in this order and map to this specific
         * benefit of the promotion.
         */
        offerIds?: string[];
        /**
         * Further describes the benefit of the promotion. Note that we will expand
         * on this enumeration as we support new promotion sub-types.
         */
        subType?: string;
        /**
         * The impact on tax when the promotion is applied.
         */
        taxImpact?: Schema$Price;
        /**
         * Describes whether the promotion applies to products (e.g. 20% off) or to
         * shipping (e.g. Free Shipping).
         */
        type?: string;
    }
    interface Schema$OrderLineItem {
        /**
         * Annotations that are attached to the line item.
         */
        annotations?: Schema$OrderMerchantProvidedAnnotation[];
        /**
         * Cancellations of the line item.
         */
        cancellations?: Schema$OrderCancellation[];
        /**
         * The ID of the line item.
         */
        id?: string;
        /**
         * Total price for the line item. For example, if two items for $10 are
         * purchased, the total price will be $20.
         */
        price?: Schema$Price;
        /**
         * Product data as seen by customer from the time of the order placement.
         * Note that certain attributes values (e.g. title or gtin) might be
         * reformatted and no longer match values submitted via product feed.
         */
        product?: Schema$OrderLineItemProduct;
        /**
         * Number of items canceled.
         */
        quantityCanceled?: number;
        /**
         * Number of items delivered.
         */
        quantityDelivered?: number;
        /**
         * Number of items ordered.
         */
        quantityOrdered?: number;
        /**
         * Number of items pending.
         */
        quantityPending?: number;
        /**
         * Number of items returned.
         */
        quantityReturned?: number;
        /**
         * Number of items shipped.
         */
        quantityShipped?: number;
        /**
         * Details of the return policy for the line item.
         */
        returnInfo?: Schema$OrderLineItemReturnInfo;
        /**
         * Returns of the line item.
         */
        returns?: Schema$OrderReturn[];
        /**
         * Details of the requested shipping for the line item.
         */
        shippingDetails?: Schema$OrderLineItemShippingDetails;
        /**
         * Total tax amount for the line item. For example, if two items are
         * purchased, and each have a cost tax of $2, the total tax amount will be
         * $4.
         */
        tax?: Schema$Price;
    }
    interface Schema$OrderLineItemProduct {
        /**
         * Brand of the item.
         */
        brand?: string;
        /**
         * The item&#39;s channel (online or local).
         */
        channel?: string;
        /**
         * Condition or state of the item.
         */
        condition?: string;
        /**
         * The two-letter ISO 639-1 language code for the item.
         */
        contentLanguage?: string;
        /**
         * Associated fees at order creation time.
         */
        fees?: Schema$OrderLineItemProductFee[];
        /**
         * Global Trade Item Number (GTIN) of the item.
         */
        gtin?: string;
        /**
         * The REST ID of the product.
         */
        id?: string;
        /**
         * URL of an image of the item.
         */
        imageLink?: string;
        /**
         * Shared identifier for all variants of the same product.
         */
        itemGroupId?: string;
        /**
         * Manufacturer Part Number (MPN) of the item.
         */
        mpn?: string;
        /**
         * An identifier of the item.
         */
        offerId?: string;
        /**
         * Price of the item.
         */
        price?: Schema$Price;
        /**
         * URL to the cached image shown to the user when order was placed.
         */
        shownImage?: string;
        /**
         * The CLDR territory code of the target country of the product.
         */
        targetCountry?: string;
        /**
         * The title of the product.
         */
        title?: string;
        /**
         * Variant attributes for the item. These are dimensions of the product,
         * such as color, gender, material, pattern, and size. You can find a
         * comprehensive list of variant attributes here.
         */
        variantAttributes?: Schema$OrderLineItemProductVariantAttribute[];
    }
    interface Schema$OrderLineItemProductFee {
        /**
         * Amount of the fee.
         */
        amount?: Schema$Price;
        /**
         * Name of the fee.
         */
        name?: string;
    }
    interface Schema$OrderLineItemProductVariantAttribute {
        /**
         * The dimension of the variant.
         */
        dimension?: string;
        /**
         * The value for the dimension.
         */
        value?: string;
    }
    interface Schema$OrderLineItemReturnInfo {
        /**
         * How many days later the item can be returned.
         */
        daysToReturn?: number;
        /**
         * Whether the item is returnable.
         */
        isReturnable?: boolean;
        /**
         * URL of the item return policy.
         */
        policyUrl?: string;
    }
    interface Schema$OrderLineItemShippingDetails {
        /**
         * The delivery by date, in ISO 8601 format.
         */
        deliverByDate?: string;
        /**
         * Details of the shipping method.
         */
        method?: Schema$OrderLineItemShippingDetailsMethod;
        /**
         * The ship by date, in ISO 8601 format.
         */
        shipByDate?: string;
    }
    interface Schema$OrderLineItemShippingDetailsMethod {
        /**
         * The carrier for the shipping. Optional. See shipments[].carrier for a
         * list of acceptable values.
         */
        carrier?: string;
        /**
         * Maximum transit time.
         */
        maxDaysInTransit?: number;
        /**
         * The name of the shipping method.
         */
        methodName?: string;
        /**
         * Minimum transit time.
         */
        minDaysInTransit?: number;
    }
    interface Schema$OrderMerchantProvidedAnnotation {
        /**
         * Key for additional merchant provided (as key-value pairs) annotation
         * about the line item.
         */
        key?: string;
        /**
         * Value for additional merchant provided (as key-value pairs) annotation
         * about the line item.
         */
        value?: string;
    }
    interface Schema$OrderPaymentMethod {
        /**
         * The billing address.
         */
        billingAddress?: Schema$OrderAddress;
        /**
         * The card expiration month (January = 1, February = 2 etc.).
         */
        expirationMonth?: number;
        /**
         * The card expiration year (4-digit, e.g. 2015).
         */
        expirationYear?: number;
        /**
         * The last four digits of the card number.
         */
        lastFourDigits?: string;
        /**
         * The billing phone number.
         */
        phoneNumber?: string;
        /**
         * The type of instrument.  Acceptable values are:   - &quot;AMEX&quot;  -
         * &quot;DISCOVER&quot;  - &quot;JCB&quot;  - &quot;MASTERCARD&quot;  -
         * &quot;UNIONPAY&quot;  - &quot;VISA&quot;  - &quot;&quot;
         */
        type?: string;
    }
    interface Schema$OrderpaymentsNotifyAuthApprovedRequest {
        /**
         * Authorized amount for pre-tax charge on user&#39;s credit card.
         */
        authAmountPretax?: Schema$Price;
        /**
         * Authorized amount for tax charge on user&#39;s credit card.
         */
        authAmountTax?: Schema$Price;
    }
    interface Schema$OrderpaymentsNotifyAuthApprovedResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#orderpaymentsNotifyAuthApprovedResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrderpaymentsNotifyAuthDeclinedRequest {
        /**
         * Reason why payment authorization was declined.
         */
        declineReason?: string;
    }
    interface Schema$OrderpaymentsNotifyAuthDeclinedResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#orderpaymentsNotifyAuthDeclinedResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrderpaymentsNotifyChargeRequest {
        /**
         * Whether charge was successful.
         */
        chargeState?: string;
        /**
         * Deprecated. Please use invoiceIds instead.
         */
        invoiceId?: string;
        /**
         * Invoice IDs from the orderinvoices service that correspond to the charge.
         */
        invoiceIds?: string[];
    }
    interface Schema$OrderpaymentsNotifyChargeResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#orderpaymentsNotifyChargeResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrderpaymentsNotifyRefundRequest {
        /**
         * Deprecated. Please use invoiceIds instead.
         */
        invoiceId?: string;
        /**
         * Invoice IDs from the orderinvoices service that correspond to the refund.
         */
        invoiceIds?: string[];
        /**
         * Whether refund was successful.
         */
        refundState?: string;
    }
    interface Schema$OrderpaymentsNotifyRefundResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#orderpaymentsNotifyRefundResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrderRefund {
        /**
         * The actor that created the refund.
         */
        actor?: string;
        /**
         * The amount that is refunded.
         */
        amount?: Schema$Price;
        /**
         * Date on which the item has been created, in ISO 8601 format.
         */
        creationDate?: string;
        /**
         * The reason for the refund.
         */
        reason?: string;
        /**
         * The explanation of the reason.
         */
        reasonText?: string;
    }
    /**
     * Order disbursement. All methods require the payment analyst role.
     */
    interface Schema$OrderReportDisbursement {
        /**
         * The disbursement amount.
         */
        disbursementAmount?: Schema$Price;
        /**
         * The disbursement date, in ISO 8601 format.
         */
        disbursementCreationDate?: string;
        /**
         * The date the disbursement was initiated, in ISO 8601 format.
         */
        disbursementDate?: string;
        /**
         * The ID of the disbursement.
         */
        disbursementId?: string;
        /**
         * The ID of the managing account.
         */
        merchantId?: string;
    }
    interface Schema$OrderreportsListDisbursementsResponse {
        /**
         * The list of disbursements.
         */
        disbursements?: Schema$OrderReportDisbursement[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#orderreportsListDisbursementsResponse&quot;.
         */
        kind?: string;
        /**
         * The token for the retrieval of the next page of disbursements.
         */
        nextPageToken?: string;
    }
    interface Schema$OrderreportsListTransactionsResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#orderreportsListTransactionsResponse&quot;.
         */
        kind?: string;
        /**
         * The token for the retrieval of the next page of transactions.
         */
        nextPageToken?: string;
        /**
         * The list of transactions.
         */
        transactions?: Schema$OrderReportTransaction[];
    }
    interface Schema$OrderReportTransaction {
        /**
         * The disbursement amount.
         */
        disbursementAmount?: Schema$Price;
        /**
         * The date the disbursement was created, in ISO 8601 format.
         */
        disbursementCreationDate?: string;
        /**
         * The date the disbursement was initiated, in ISO 8601 format.
         */
        disbursementDate?: string;
        /**
         * The ID of the disbursement.
         */
        disbursementId?: string;
        /**
         * The ID of the managing account.
         */
        merchantId?: string;
        /**
         * Merchant-provided ID of the order.
         */
        merchantOrderId?: string;
        /**
         * The ID of the order.
         */
        orderId?: string;
        /**
         * Total amount for the items.
         */
        productAmount?: Schema$Amount;
        /**
         * Total amount with remitted tax for the items.
         */
        productAmountWithRemittedTax?: Schema$ProductAmount;
        /**
         * The date of the transaction, in ISO 8601 format.
         */
        transactionDate?: string;
    }
    interface Schema$OrderReturn {
        /**
         * The actor that created the refund.
         */
        actor?: string;
        /**
         * Date on which the item has been created, in ISO 8601 format.
         */
        creationDate?: string;
        /**
         * Quantity that is returned.
         */
        quantity?: number;
        /**
         * The reason for the return.
         */
        reason?: string;
        /**
         * The explanation of the reason.
         */
        reasonText?: string;
    }
    interface Schema$OrderreturnsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#orderreturnsListResponse&quot;.
         */
        kind?: string;
        /**
         * The token for the retrieval of the next page of returns.
         */
        nextPageToken?: string;
        resources?: Schema$MerchantOrderReturn[];
    }
    interface Schema$OrdersAcknowledgeRequest {
        /**
         * The ID of the operation. Unique across all operations for a given order.
         */
        operationId?: string;
    }
    interface Schema$OrdersAcknowledgeResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersAcknowledgeResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrdersAdvanceTestOrderResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersAdvanceTestOrderResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrdersCancelLineItemRequest {
        /**
         * Deprecated. Please use amountPretax and amountTax instead.
         */
        amount?: Schema$Price;
        /**
         * Amount to refund for the cancelation. Optional. If not set, Google will
         * calculate the default based on the price and tax of the items involved.
         * The amount must not be larger than the net amount left on the order.
         */
        amountPretax?: Schema$Price;
        /**
         * Tax amount that corresponds to cancellation amount in amountPretax.
         * Optional, but if filled, then amountPretax must be set. Calculated
         * automatically if not provided.
         */
        amountTax?: Schema$Price;
        /**
         * The ID of the line item to cancel. Either lineItemId or productId is
         * required.
         */
        lineItemId?: string;
        /**
         * The ID of the operation. Unique across all operations for a given order.
         */
        operationId?: string;
        /**
         * The ID of the product to cancel. This is the REST ID used in the products
         * service. Either lineItemId or productId is required.
         */
        productId?: string;
        /**
         * The quantity to cancel.
         */
        quantity?: number;
        /**
         * The reason for the cancellation.
         */
        reason?: string;
        /**
         * The explanation of the reason.
         */
        reasonText?: string;
    }
    interface Schema$OrdersCancelLineItemResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersCancelLineItemResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrdersCancelRequest {
        /**
         * The ID of the operation. Unique across all operations for a given order.
         */
        operationId?: string;
        /**
         * The reason for the cancellation.
         */
        reason?: string;
        /**
         * The explanation of the reason.
         */
        reasonText?: string;
    }
    interface Schema$OrdersCancelResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersCancelResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrdersCancelTestOrderByCustomerRequest {
        /**
         * The reason for the cancellation.
         */
        reason?: string;
    }
    interface Schema$OrdersCancelTestOrderByCustomerResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersCancelTestOrderByCustomerResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrdersCreateTestOrderRequest {
        /**
         * The  CLDR territory code of the country of the test order to create.
         * Affects the currency and addresses of orders created via template_name,
         * or the addresses of orders created via test_order.  Acceptable values
         * are:   - &quot;US&quot;  - &quot;FR&quot;  Defaults to US.
         */
        country?: string;
        /**
         * The test order template to use. Specify as an alternative to testOrder as
         * a shortcut for retrieving a template and then creating an order using
         * that template.
         */
        templateName?: string;
        /**
         * The test order to create.
         */
        testOrder?: Schema$TestOrder;
    }
    interface Schema$OrdersCreateTestOrderResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersCreateTestOrderResponse&quot;.
         */
        kind?: string;
        /**
         * The ID of the newly created test order.
         */
        orderId?: string;
    }
    interface Schema$OrdersCreateTestReturnRequest {
        /**
         * Returned items.
         */
        items?: Schema$OrdersCustomBatchRequestEntryCreateTestReturnReturnItem[];
    }
    interface Schema$OrdersCreateTestReturnResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersCreateTestReturnResponse&quot;.
         */
        kind?: string;
        /**
         * The ID of the newly created test order return.
         */
        returnId?: string;
    }
    interface Schema$OrdersCustomBatchRequest {
        /**
         * The request entries to be processed in the batch.
         */
        entries?: Schema$OrdersCustomBatchRequestEntry[];
    }
    interface Schema$OrdersCustomBatchRequestEntry {
        /**
         * An entry ID, unique within the batch request.
         */
        batchId?: number;
        /**
         * Required for cancel method.
         */
        cancel?: Schema$OrdersCustomBatchRequestEntryCancel;
        /**
         * Required for cancelLineItem method.
         */
        cancelLineItem?: Schema$OrdersCustomBatchRequestEntryCancelLineItem;
        /**
         * Required for inStoreReturnLineItem method.
         */
        inStoreRefundLineItem?: Schema$OrdersCustomBatchRequestEntryInStoreRefundLineItem;
        /**
         * The ID of the managing account.
         */
        merchantId?: string;
        /**
         * The merchant order ID. Required for updateMerchantOrderId and
         * getByMerchantOrderId methods.
         */
        merchantOrderId?: string;
        /**
         * The method to apply.
         */
        method?: string;
        /**
         * The ID of the operation. Unique across all operations for a given order.
         * Required for all methods beside get and getByMerchantOrderId.
         */
        operationId?: string;
        /**
         * The ID of the order. Required for all methods beside
         * getByMerchantOrderId.
         */
        orderId?: string;
        /**
         * Required for refund method.
         */
        refund?: Schema$OrdersCustomBatchRequestEntryRefund;
        /**
         * Required for rejectReturnLineItem method.
         */
        rejectReturnLineItem?: Schema$OrdersCustomBatchRequestEntryRejectReturnLineItem;
        /**
         * Required for returnLineItem method.
         */
        returnLineItem?: Schema$OrdersCustomBatchRequestEntryReturnLineItem;
        /**
         * Required for returnRefundLineItem method.
         */
        returnRefundLineItem?: Schema$OrdersCustomBatchRequestEntryReturnRefundLineItem;
        /**
         * Required for setLineItemMetadata method.
         */
        setLineItemMetadata?: Schema$OrdersCustomBatchRequestEntrySetLineItemMetadata;
        /**
         * Required for shipLineItems method.
         */
        shipLineItems?: Schema$OrdersCustomBatchRequestEntryShipLineItems;
        /**
         * Required for updateLineItemShippingDate method.
         */
        updateLineItemShippingDetails?: Schema$OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails;
        /**
         * Required for updateShipment method.
         */
        updateShipment?: Schema$OrdersCustomBatchRequestEntryUpdateShipment;
    }
    interface Schema$OrdersCustomBatchRequestEntryCancel {
        /**
         * The reason for the cancellation.
         */
        reason?: string;
        /**
         * The explanation of the reason.
         */
        reasonText?: string;
    }
    interface Schema$OrdersCustomBatchRequestEntryCancelLineItem {
        /**
         * Deprecated. Please use amountPretax and amountTax instead.
         */
        amount?: Schema$Price;
        /**
         * Amount to refund for the cancelation. Optional. If not set, Google will
         * calculate the default based on the price and tax of the items involved.
         * The amount must not be larger than the net amount left on the order.
         */
        amountPretax?: Schema$Price;
        /**
         * Tax amount that corresponds to cancellation amount in amountPretax.
         * Optional, but if filled, then amountPretax must be set. Calculated
         * automatically if not provided.
         */
        amountTax?: Schema$Price;
        /**
         * The ID of the line item to cancel. Either lineItemId or productId is
         * required.
         */
        lineItemId?: string;
        /**
         * The ID of the product to cancel. This is the REST ID used in the products
         * service. Either lineItemId or productId is required.
         */
        productId?: string;
        /**
         * The quantity to cancel.
         */
        quantity?: number;
        /**
         * The reason for the cancellation.
         */
        reason?: string;
        /**
         * The explanation of the reason.
         */
        reasonText?: string;
    }
    interface Schema$OrdersCustomBatchRequestEntryCreateTestReturnReturnItem {
        /**
         * The ID of the line item to return.
         */
        lineItemId?: string;
        /**
         * Quantity that is returned.
         */
        quantity?: number;
    }
    interface Schema$OrdersCustomBatchRequestEntryInStoreRefundLineItem {
        /**
         * The amount that is refunded. Required.
         */
        amountPretax?: Schema$Price;
        /**
         * Tax amount that correspond to refund amount in amountPretax. Required.
         */
        amountTax?: Schema$Price;
        /**
         * The ID of the line item to return. Either lineItemId or productId is
         * required.
         */
        lineItemId?: string;
        /**
         * The ID of the product to return. This is the REST ID used in the products
         * service. Either lineItemId or productId is required.
         */
        productId?: string;
        /**
         * The quantity to return and refund.
         */
        quantity?: number;
        /**
         * The reason for the return.
         */
        reason?: string;
        /**
         * The explanation of the reason.
         */
        reasonText?: string;
    }
    interface Schema$OrdersCustomBatchRequestEntryRefund {
        /**
         * Deprecated. Please use amountPretax and amountTax instead.
         */
        amount?: Schema$Price;
        /**
         * The amount that is refunded. Either amount or amountPretax should be
         * filled.
         */
        amountPretax?: Schema$Price;
        /**
         * Tax amount that corresponds to refund amount in amountPretax. Optional,
         * but if filled, amountPretax must be set. Calculated automatically if not
         * provided.
         */
        amountTax?: Schema$Price;
        /**
         * The reason for the refund.
         */
        reason?: string;
        /**
         * The explanation of the reason.
         */
        reasonText?: string;
    }
    interface Schema$OrdersCustomBatchRequestEntryRejectReturnLineItem {
        /**
         * The ID of the line item to return. Either lineItemId or productId is
         * required.
         */
        lineItemId?: string;
        /**
         * The ID of the product to return. This is the REST ID used in the products
         * service. Either lineItemId or productId is required.
         */
        productId?: string;
        /**
         * The quantity to return and refund.
         */
        quantity?: number;
        /**
         * The reason for the return.
         */
        reason?: string;
        /**
         * The explanation of the reason.
         */
        reasonText?: string;
    }
    interface Schema$OrdersCustomBatchRequestEntryReturnLineItem {
        /**
         * The ID of the line item to return. Either lineItemId or productId is
         * required.
         */
        lineItemId?: string;
        /**
         * The ID of the product to return. This is the REST ID used in the products
         * service. Either lineItemId or productId is required.
         */
        productId?: string;
        /**
         * The quantity to return.
         */
        quantity?: number;
        /**
         * The reason for the return.
         */
        reason?: string;
        /**
         * The explanation of the reason.
         */
        reasonText?: string;
    }
    interface Schema$OrdersCustomBatchRequestEntryReturnRefundLineItem {
        /**
         * The amount that is refunded. If omitted, refundless return is assumed
         * (same as calling returnLineItem method).
         */
        amountPretax?: Schema$Price;
        /**
         * Tax amount that corresponds to refund amount in amountPretax. Optional,
         * but if filled, then amountPretax must be set. Calculated automatically if
         * not provided.
         */
        amountTax?: Schema$Price;
        /**
         * The ID of the line item to return. Either lineItemId or productId is
         * required.
         */
        lineItemId?: string;
        /**
         * The ID of the product to return. This is the REST ID used in the products
         * service. Either lineItemId or productId is required.
         */
        productId?: string;
        /**
         * The quantity to return and refund.
         */
        quantity?: number;
        /**
         * The reason for the return.
         */
        reason?: string;
        /**
         * The explanation of the reason.
         */
        reasonText?: string;
    }
    interface Schema$OrdersCustomBatchRequestEntrySetLineItemMetadata {
        annotations?: Schema$OrderMerchantProvidedAnnotation[];
        /**
         * The ID of the line item to set metadata. Either lineItemId or productId
         * is required.
         */
        lineItemId?: string;
        /**
         * The ID of the product to set metadata. This is the REST ID used in the
         * products service. Either lineItemId or productId is required.
         */
        productId?: string;
    }
    interface Schema$OrdersCustomBatchRequestEntryShipLineItems {
        /**
         * Deprecated. Please use shipmentInfo instead. The carrier handling the
         * shipment. See shipments[].carrier in the  Orders resource representation
         * for a list of acceptable values.
         */
        carrier?: string;
        /**
         * Line items to ship.
         */
        lineItems?: Schema$OrderShipmentLineItemShipment[];
        /**
         * ID of the shipment group. Required for orders that use the orderinvoices
         * service.
         */
        shipmentGroupId?: string;
        /**
         * Deprecated. Please use shipmentInfo instead. The ID of the shipment.
         */
        shipmentId?: string;
        /**
         * Shipment information. This field is repeated because a single line item
         * can be shipped in several packages (and have several tracking IDs).
         */
        shipmentInfos?: Schema$OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
        /**
         * Deprecated. Please use shipmentInfo instead. The tracking ID for the
         * shipment.
         */
        trackingId?: string;
    }
    interface Schema$OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo {
        /**
         * The carrier handling the shipment. See shipments[].carrier in the  Orders
         * resource representation for a list of acceptable values.
         */
        carrier?: string;
        /**
         * The ID of the shipment. This is assigned by the merchant and is unique to
         * each shipment.
         */
        shipmentId?: string;
        /**
         * The tracking ID for the shipment.
         */
        trackingId?: string;
    }
    interface Schema$OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails {
        /**
         * Updated delivery by date, in ISO 8601 format. If not specified only ship
         * by date is updated.  Provided date should be within 1 year timeframe and
         * can not be a date in the past.
         */
        deliverByDate?: string;
        /**
         * The ID of the line item to set metadata. Either lineItemId or productId
         * is required.
         */
        lineItemId?: string;
        /**
         * The ID of the product to set metadata. This is the REST ID used in the
         * products service. Either lineItemId or productId is required.
         */
        productId?: string;
        /**
         * Updated ship by date, in ISO 8601 format. If not specified only deliver
         * by date is updated.  Provided date should be within 1 year timeframe and
         * can not be a date in the past.
         */
        shipByDate?: string;
    }
    interface Schema$OrdersCustomBatchRequestEntryUpdateShipment {
        /**
         * The carrier handling the shipment. Not updated if missing. See
         * shipments[].carrier in the  Orders resource representation for a list of
         * acceptable values.
         */
        carrier?: string;
        /**
         * Date on which the shipment has been delivered, in ISO 8601 format.
         * Optional and can be provided only if status is delivered.
         */
        deliveryDate?: string;
        /**
         * The ID of the shipment.
         */
        shipmentId?: string;
        /**
         * New status for the shipment. Not updated if missing.
         */
        status?: string;
        /**
         * The tracking ID for the shipment. Not updated if missing.
         */
        trackingId?: string;
    }
    interface Schema$OrdersCustomBatchResponse {
        /**
         * The result of the execution of the batch requests.
         */
        entries?: Schema$OrdersCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersCustomBatchResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrdersCustomBatchResponseEntry {
        /**
         * The ID of the request entry this entry responds to.
         */
        batchId?: number;
        /**
         * A list of errors defined if and only if the request failed.
         */
        errors?: Schema$Errors;
        /**
         * The status of the execution. Only defined if   - the request was
         * successful; and  - the method is not get, getByMerchantOrderId, or one of
         * the test methods.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersCustomBatchResponseEntry&quot;.
         */
        kind?: string;
        /**
         * The retrieved order. Only defined if the method is get and if the request
         * was successful.
         */
        order?: Schema$Order;
    }
    interface Schema$OrdersGetByMerchantOrderIdResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersGetByMerchantOrderIdResponse&quot;.
         */
        kind?: string;
        /**
         * The requested order.
         */
        order?: Schema$Order;
    }
    interface Schema$OrdersGetTestOrderTemplateResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersGetTestOrderTemplateResponse&quot;.
         */
        kind?: string;
        /**
         * The requested test order template.
         */
        template?: Schema$TestOrder;
    }
    interface Schema$OrderShipment {
        /**
         * The carrier handling the shipment.  Acceptable values for US are:   -
         * &quot;gsx&quot;  - &quot;ups&quot;  - &quot;usps&quot;  -
         * &quot;fedex&quot;  - &quot;dhl&quot;  - &quot;ecourier&quot;  -
         * &quot;cxt&quot;  - &quot;google&quot;  - &quot;ontrac&quot;  -
         * &quot;emsy&quot;  - &quot;ont&quot;  - &quot;deliv&quot;  -
         * &quot;dynamex&quot;  - &quot;lasership&quot;  - &quot;mpx&quot;  -
         * &quot;uds&quot;    Acceptable values for FR are:   -
         * &quot;colissimo&quot;  - &quot;chronopost&quot;
         */
        carrier?: string;
        /**
         * Date on which the shipment has been created, in ISO 8601 format.
         */
        creationDate?: string;
        /**
         * Date on which the shipment has been delivered, in ISO 8601 format.
         * Present only if status is delivered
         */
        deliveryDate?: string;
        /**
         * The ID of the shipment.
         */
        id?: string;
        /**
         * The line items that are shipped.
         */
        lineItems?: Schema$OrderShipmentLineItemShipment[];
        /**
         * The status of the shipment.
         */
        status?: string;
        /**
         * The tracking ID for the shipment.
         */
        trackingId?: string;
    }
    interface Schema$OrderShipmentLineItemShipment {
        /**
         * The ID of the line item that is shipped. Either lineItemId or productId
         * is required.
         */
        lineItemId?: string;
        /**
         * The ID of the product to ship. This is the REST ID used in the products
         * service. Either lineItemId or productId is required.
         */
        productId?: string;
        /**
         * The quantity that is shipped.
         */
        quantity?: number;
    }
    interface Schema$OrdersInStoreRefundLineItemRequest {
        /**
         * The amount that is refunded. Required.
         */
        amountPretax?: Schema$Price;
        /**
         * Tax amount that correspond to refund amount in amountPretax. Required.
         */
        amountTax?: Schema$Price;
        /**
         * The ID of the line item to return. Either lineItemId or productId is
         * required.
         */
        lineItemId?: string;
        /**
         * The ID of the operation. Unique across all operations for a given order.
         */
        operationId?: string;
        /**
         * The ID of the product to return. This is the REST ID used in the products
         * service. Either lineItemId or productId is required.
         */
        productId?: string;
        /**
         * The quantity to return and refund.
         */
        quantity?: number;
        /**
         * The reason for the return.
         */
        reason?: string;
        /**
         * The explanation of the reason.
         */
        reasonText?: string;
    }
    interface Schema$OrdersInStoreRefundLineItemResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersInStoreRefundLineItemResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrdersListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersListResponse&quot;.
         */
        kind?: string;
        /**
         * The token for the retrieval of the next page of orders.
         */
        nextPageToken?: string;
        resources?: Schema$Order[];
    }
    interface Schema$OrdersRefundRequest {
        /**
         * Deprecated. Please use amountPretax and amountTax instead.
         */
        amount?: Schema$Price;
        /**
         * The amount that is refunded. Either amount or amountPretax should be
         * filled.
         */
        amountPretax?: Schema$Price;
        /**
         * Tax amount that corresponds to refund amount in amountPretax. Optional,
         * but if filled, amountPretax must be set. Calculated automatically if not
         * provided.
         */
        amountTax?: Schema$Price;
        /**
         * The ID of the operation. Unique across all operations for a given order.
         */
        operationId?: string;
        /**
         * The reason for the refund.
         */
        reason?: string;
        /**
         * The explanation of the reason.
         */
        reasonText?: string;
    }
    interface Schema$OrdersRefundResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersRefundResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrdersRejectReturnLineItemRequest {
        /**
         * The ID of the line item to return. Either lineItemId or productId is
         * required.
         */
        lineItemId?: string;
        /**
         * The ID of the operation. Unique across all operations for a given order.
         */
        operationId?: string;
        /**
         * The ID of the product to return. This is the REST ID used in the products
         * service. Either lineItemId or productId is required.
         */
        productId?: string;
        /**
         * The quantity to return and refund.
         */
        quantity?: number;
        /**
         * The reason for the return.
         */
        reason?: string;
        /**
         * The explanation of the reason.
         */
        reasonText?: string;
    }
    interface Schema$OrdersRejectReturnLineItemResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersRejectReturnLineItemResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrdersReturnLineItemRequest {
        /**
         * The ID of the line item to return. Either lineItemId or productId is
         * required.
         */
        lineItemId?: string;
        /**
         * The ID of the operation. Unique across all operations for a given order.
         */
        operationId?: string;
        /**
         * The ID of the product to return. This is the REST ID used in the products
         * service. Either lineItemId or productId is required.
         */
        productId?: string;
        /**
         * The quantity to return.
         */
        quantity?: number;
        /**
         * The reason for the return.
         */
        reason?: string;
        /**
         * The explanation of the reason.
         */
        reasonText?: string;
    }
    interface Schema$OrdersReturnLineItemResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersReturnLineItemResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrdersReturnRefundLineItemRequest {
        /**
         * The amount that is refunded. If omitted, refundless return is assumed
         * (same as calling returnLineItem method).
         */
        amountPretax?: Schema$Price;
        /**
         * Tax amount that corresponds to refund amount in amountPretax. Optional,
         * but if filled, then amountPretax must be set. Calculated automatically if
         * not provided.
         */
        amountTax?: Schema$Price;
        /**
         * The ID of the line item to return. Either lineItemId or productId is
         * required.
         */
        lineItemId?: string;
        /**
         * The ID of the operation. Unique across all operations for a given order.
         */
        operationId?: string;
        /**
         * The ID of the product to return. This is the REST ID used in the products
         * service. Either lineItemId or productId is required.
         */
        productId?: string;
        /**
         * The quantity to return and refund.
         */
        quantity?: number;
        /**
         * The reason for the return.
         */
        reason?: string;
        /**
         * The explanation of the reason.
         */
        reasonText?: string;
    }
    interface Schema$OrdersReturnRefundLineItemResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersReturnRefundLineItemResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrdersSetLineItemMetadataRequest {
        annotations?: Schema$OrderMerchantProvidedAnnotation[];
        /**
         * The ID of the line item to set metadata. Either lineItemId or productId
         * is required.
         */
        lineItemId?: string;
        /**
         * The ID of the operation. Unique across all operations for a given order.
         */
        operationId?: string;
        /**
         * The ID of the product to set metadata. This is the REST ID used in the
         * products service. Either lineItemId or productId is required.
         */
        productId?: string;
    }
    interface Schema$OrdersSetLineItemMetadataResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersSetLineItemMetadataResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrdersShipLineItemsRequest {
        /**
         * Deprecated. Please use shipmentInfo instead. The carrier handling the
         * shipment. See shipments[].carrier in the  Orders resource representation
         * for a list of acceptable values.
         */
        carrier?: string;
        /**
         * Line items to ship.
         */
        lineItems?: Schema$OrderShipmentLineItemShipment[];
        /**
         * The ID of the operation. Unique across all operations for a given order.
         */
        operationId?: string;
        /**
         * ID of the shipment group. Required for orders that use the orderinvoices
         * service.
         */
        shipmentGroupId?: string;
        /**
         * Deprecated. Please use shipmentInfo instead. The ID of the shipment.
         */
        shipmentId?: string;
        /**
         * Shipment information. This field is repeated because a single line item
         * can be shipped in several packages (and have several tracking IDs).
         */
        shipmentInfos?: Schema$OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
        /**
         * Deprecated. Please use shipmentInfo instead. The tracking ID for the
         * shipment.
         */
        trackingId?: string;
    }
    interface Schema$OrdersShipLineItemsResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersShipLineItemsResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrdersUpdateLineItemShippingDetailsRequest {
        /**
         * Updated delivery by date, in ISO 8601 format. If not specified only ship
         * by date is updated.  Provided date should be within 1 year timeframe and
         * can not be a date in the past.
         */
        deliverByDate?: string;
        /**
         * The ID of the line item to set metadata. Either lineItemId or productId
         * is required.
         */
        lineItemId?: string;
        /**
         * The ID of the operation. Unique across all operations for a given order.
         */
        operationId?: string;
        /**
         * The ID of the product to set metadata. This is the REST ID used in the
         * products service. Either lineItemId or productId is required.
         */
        productId?: string;
        /**
         * Updated ship by date, in ISO 8601 format. If not specified only deliver
         * by date is updated.  Provided date should be within 1 year timeframe and
         * can not be a date in the past.
         */
        shipByDate?: string;
    }
    interface Schema$OrdersUpdateLineItemShippingDetailsResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersUpdateLineItemShippingDetailsResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrdersUpdateMerchantOrderIdRequest {
        /**
         * The merchant order id to be assigned to the order. Must be unique per
         * merchant.
         */
        merchantOrderId?: string;
        /**
         * The ID of the operation. Unique across all operations for a given order.
         */
        operationId?: string;
    }
    interface Schema$OrdersUpdateMerchantOrderIdResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersUpdateMerchantOrderIdResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$OrdersUpdateShipmentRequest {
        /**
         * The carrier handling the shipment. Not updated if missing. See
         * shipments[].carrier in the  Orders resource representation for a list of
         * acceptable values.
         */
        carrier?: string;
        /**
         * Date on which the shipment has been delivered, in ISO 8601 format.
         * Optional and can be provided only if status is delivered.
         */
        deliveryDate?: string;
        /**
         * The ID of the operation. Unique across all operations for a given order.
         */
        operationId?: string;
        /**
         * The ID of the shipment.
         */
        shipmentId?: string;
        /**
         * New status for the shipment. Not updated if missing.
         */
        status?: string;
        /**
         * The tracking ID for the shipment. Not updated if missing.
         */
        trackingId?: string;
    }
    interface Schema$OrdersUpdateShipmentResponse {
        /**
         * The status of the execution.
         */
        executionStatus?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#ordersUpdateShipmentResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$PosCustomBatchRequest {
        /**
         * The request entries to be processed in the batch.
         */
        entries?: Schema$PosCustomBatchRequestEntry[];
    }
    interface Schema$PosCustomBatchRequestEntry {
        /**
         * An entry ID, unique within the batch request.
         */
        batchId?: number;
        /**
         * The inventory to submit. Set this only if the method is inventory.
         */
        inventory?: Schema$PosInventory;
        /**
         * The ID of the POS data provider.
         */
        merchantId?: string;
        method?: string;
        /**
         * The sale information to submit. Set this only if the method is sale.
         */
        sale?: Schema$PosSale;
        /**
         * The store information to submit. Set this only if the method is insert.
         */
        store?: Schema$PosStore;
        /**
         * The store code. Set this only if the method is delete or get.
         */
        storeCode?: string;
        /**
         * The ID of the account for which to get/submit data.
         */
        targetMerchantId?: string;
    }
    interface Schema$PosCustomBatchResponse {
        /**
         * The result of the execution of the batch requests.
         */
        entries?: Schema$PosCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#posCustomBatchResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$PosCustomBatchResponseEntry {
        /**
         * The ID of the request entry to which this entry responds.
         */
        batchId?: number;
        /**
         * A list of errors defined if, and only if, the request failed.
         */
        errors?: Schema$Errors;
        /**
         * The updated inventory information.
         */
        inventory?: Schema$PosInventory;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#posCustomBatchResponseEntry&quot;.
         */
        kind?: string;
        /**
         * The updated sale information.
         */
        sale?: Schema$PosSale;
        /**
         * The retrieved or updated store information.
         */
        store?: Schema$PosStore;
    }
    interface Schema$PosDataProviders {
        /**
         * Country code.
         */
        country?: string;
        /**
         * A list of POS data providers.
         */
        posDataProviders?: Schema$PosDataProvidersPosDataProvider[];
    }
    interface Schema$PosDataProvidersPosDataProvider {
        /**
         * The display name of Pos data Provider.
         */
        displayName?: string;
        /**
         * The full name of this POS data Provider.
         */
        fullName?: string;
        /**
         * The ID of the account.
         */
        providerId?: string;
    }
    /**
     * The absolute quantity of an item available at the given store.
     */
    interface Schema$PosInventory {
        /**
         * The two-letter ISO 639-1 language code for the item.
         */
        contentLanguage?: string;
        /**
         * Global Trade Item Number.
         */
        gtin?: string;
        /**
         * A unique identifier for the item.
         */
        itemId?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#posInventory&quot;.
         */
        kind?: string;
        /**
         * The current price of the item.
         */
        price?: Schema$Price;
        /**
         * The available quantity of the item.
         */
        quantity?: string;
        /**
         * The identifier of the merchant&#39;s store. Either a storeCode inserted
         * via the API or the code of the store in Google My Business.
         */
        storeCode?: string;
        /**
         * The CLDR territory code for the item.
         */
        targetCountry?: string;
        /**
         * The inventory timestamp, in ISO 8601 format.
         */
        timestamp?: string;
    }
    interface Schema$PosInventoryRequest {
        /**
         * The two-letter ISO 639-1 language code for the item.
         */
        contentLanguage?: string;
        /**
         * Global Trade Item Number.
         */
        gtin?: string;
        /**
         * A unique identifier for the item.
         */
        itemId?: string;
        /**
         * The current price of the item.
         */
        price?: Schema$Price;
        /**
         * The available quantity of the item.
         */
        quantity?: string;
        /**
         * The identifier of the merchant&#39;s store. Either a storeCode inserted
         * via the API or the code of the store in Google My Business.
         */
        storeCode?: string;
        /**
         * The CLDR territory code for the item.
         */
        targetCountry?: string;
        /**
         * The inventory timestamp, in ISO 8601 format.
         */
        timestamp?: string;
    }
    interface Schema$PosInventoryResponse {
        /**
         * The two-letter ISO 639-1 language code for the item.
         */
        contentLanguage?: string;
        /**
         * Global Trade Item Number.
         */
        gtin?: string;
        /**
         * A unique identifier for the item.
         */
        itemId?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#posInventoryResponse&quot;.
         */
        kind?: string;
        /**
         * The current price of the item.
         */
        price?: Schema$Price;
        /**
         * The available quantity of the item.
         */
        quantity?: string;
        /**
         * The identifier of the merchant&#39;s store. Either a storeCode inserted
         * via the API or the code of the store in Google My Business.
         */
        storeCode?: string;
        /**
         * The CLDR territory code for the item.
         */
        targetCountry?: string;
        /**
         * The inventory timestamp, in ISO 8601 format.
         */
        timestamp?: string;
    }
    interface Schema$PosListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#posListResponse&quot;.
         */
        kind?: string;
        resources?: Schema$PosStore[];
    }
    /**
     * The change of the available quantity of an item at the given store.
     */
    interface Schema$PosSale {
        /**
         * The two-letter ISO 639-1 language code for the item.
         */
        contentLanguage?: string;
        /**
         * Global Trade Item Number.
         */
        gtin?: string;
        /**
         * A unique identifier for the item.
         */
        itemId?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#posSale&quot;.
         */
        kind?: string;
        /**
         * The price of the item.
         */
        price?: Schema$Price;
        /**
         * The relative change of the available quantity. Negative for items
         * returned.
         */
        quantity?: string;
        /**
         * A unique ID to group items from the same sale event.
         */
        saleId?: string;
        /**
         * The identifier of the merchant&#39;s store. Either a storeCode inserted
         * via the API or the code of the store in Google My Business.
         */
        storeCode?: string;
        /**
         * The CLDR territory code for the item.
         */
        targetCountry?: string;
        /**
         * The inventory timestamp, in ISO 8601 format.
         */
        timestamp?: string;
    }
    interface Schema$PosSaleRequest {
        /**
         * The two-letter ISO 639-1 language code for the item.
         */
        contentLanguage?: string;
        /**
         * Global Trade Item Number.
         */
        gtin?: string;
        /**
         * A unique identifier for the item.
         */
        itemId?: string;
        /**
         * The price of the item.
         */
        price?: Schema$Price;
        /**
         * The relative change of the available quantity. Negative for items
         * returned.
         */
        quantity?: string;
        /**
         * A unique ID to group items from the same sale event.
         */
        saleId?: string;
        /**
         * The identifier of the merchant&#39;s store. Either a storeCode inserted
         * via the API or the code of the store in Google My Business.
         */
        storeCode?: string;
        /**
         * The CLDR territory code for the item.
         */
        targetCountry?: string;
        /**
         * The inventory timestamp, in ISO 8601 format.
         */
        timestamp?: string;
    }
    interface Schema$PosSaleResponse {
        /**
         * The two-letter ISO 639-1 language code for the item.
         */
        contentLanguage?: string;
        /**
         * Global Trade Item Number.
         */
        gtin?: string;
        /**
         * A unique identifier for the item.
         */
        itemId?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#posSaleResponse&quot;.
         */
        kind?: string;
        /**
         * The price of the item.
         */
        price?: Schema$Price;
        /**
         * The relative change of the available quantity. Negative for items
         * returned.
         */
        quantity?: string;
        /**
         * A unique ID to group items from the same sale event.
         */
        saleId?: string;
        /**
         * The identifier of the merchant&#39;s store. Either a storeCode inserted
         * via the API or the code of the store in Google My Business.
         */
        storeCode?: string;
        /**
         * The CLDR territory code for the item.
         */
        targetCountry?: string;
        /**
         * The inventory timestamp, in ISO 8601 format.
         */
        timestamp?: string;
    }
    /**
     * Store resource.
     */
    interface Schema$PosStore {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#posStore&quot;.
         */
        kind?: string;
        /**
         * The street address of the store.
         */
        storeAddress?: string;
        /**
         * A store identifier that is unique for the given merchant.
         */
        storeCode?: string;
    }
    interface Schema$PostalCodeGroup {
        /**
         * The CLDR territory code of the country the postal code group applies to.
         * Required.
         */
        country?: string;
        /**
         * The name of the postal code group, referred to in headers. Required.
         */
        name?: string;
        /**
         * A range of postal codes. Required.
         */
        postalCodeRanges?: Schema$PostalCodeRange[];
    }
    interface Schema$PostalCodeRange {
        /**
         * A postal code or a pattern of the form prefix* denoting the inclusive
         * lower bound of the range defining the area. Examples values:
         * &quot;94108&quot;, &quot;9410*&quot;, &quot;9*&quot;. Required.
         */
        postalCodeRangeBegin?: string;
        /**
         * A postal code or a pattern of the form prefix* denoting the inclusive
         * upper bound of the range defining the area. It must have the same length
         * as postalCodeRangeBegin: if postalCodeRangeBegin is a postal code then
         * postalCodeRangeEnd must be a postal code too; if postalCodeRangeBegin is
         * a pattern then postalCodeRangeEnd must be a pattern with the same prefix
         * length. Optional: if not set, then the area is defined as being all the
         * postal codes matching postalCodeRangeBegin.
         */
        postalCodeRangeEnd?: string;
    }
    interface Schema$Price {
        /**
         * The currency of the price.
         */
        currency?: string;
        /**
         * The price represented as a number.
         */
        value?: string;
    }
    /**
     * Product data. After inserting, updating, or deleting a product, it may take
     * several minutes before changes take effect.
     */
    interface Schema$Product {
        /**
         * Additional URLs of images of the item.
         */
        additionalImageLinks?: string[];
        /**
         * Additional categories of the item (formatted as in products feed
         * specification).
         */
        additionalProductTypes?: string[];
        /**
         * Set to true if the item is targeted towards adults.
         */
        adult?: boolean;
        /**
         * Used to group items in an arbitrary way. Only for CPA%, discouraged
         * otherwise.
         */
        adwordsGrouping?: string;
        /**
         * Similar to adwords_grouping, but only works on CPC.
         */
        adwordsLabels?: string[];
        /**
         * Allows advertisers to override the item URL when the product is shown
         * within the context of Product Ads.
         */
        adwordsRedirect?: string;
        /**
         * Target age group of the item.
         */
        ageGroup?: string;
        /**
         * Deprecated. Do not use.
         */
        aspects?: Schema$ProductAspect[];
        /**
         * Availability status of the item.
         */
        availability?: string;
        /**
         * The day a pre-ordered product becomes available for delivery, in ISO 8601
         * format.
         */
        availabilityDate?: string;
        /**
         * Brand of the item.
         */
        brand?: string;
        /**
         * The item&#39;s channel (online or local).
         */
        channel?: string;
        /**
         * Color of the item.
         */
        color?: string;
        /**
         * Condition or state of the item.
         */
        condition?: string;
        /**
         * The two-letter ISO 639-1 language code for the item.
         */
        contentLanguage?: string;
        /**
         * Cost of goods sold. Used for gross profit reporting.
         */
        costOfGoodsSold?: Schema$Price;
        /**
         * A list of custom (merchant-provided) attributes. It can also be used for
         * submitting any attribute of the feed specification in its generic form
         * (e.g., { &quot;name&quot;: &quot;size type&quot;, &quot;value&quot;:
         * &quot;regular&quot; }). This is useful for submitting attributes not
         * explicitly exposed by the API.
         */
        customAttributes?: Schema$CustomAttribute[];
        /**
         * A list of custom (merchant-provided) custom attribute groups.
         */
        customGroups?: Schema$CustomGroup[];
        /**
         * Custom label 0 for custom grouping of items in a Shopping campaign.
         */
        customLabel0?: string;
        /**
         * Custom label 1 for custom grouping of items in a Shopping campaign.
         */
        customLabel1?: string;
        /**
         * Custom label 2 for custom grouping of items in a Shopping campaign.
         */
        customLabel2?: string;
        /**
         * Custom label 3 for custom grouping of items in a Shopping campaign.
         */
        customLabel3?: string;
        /**
         * Custom label 4 for custom grouping of items in a Shopping campaign.
         */
        customLabel4?: string;
        /**
         * Description of the item.
         */
        description?: string;
        /**
         * Specifies the intended destinations for the product.
         */
        destinations?: Schema$ProductDestination[];
        /**
         * An identifier for an item for dynamic remarketing campaigns.
         */
        displayAdsId?: string;
        /**
         * URL directly to your item&#39;s landing page for dynamic remarketing
         * campaigns.
         */
        displayAdsLink?: string;
        /**
         * Advertiser-specified recommendations.
         */
        displayAdsSimilarIds?: string[];
        /**
         * Title of an item for dynamic remarketing campaigns.
         */
        displayAdsTitle?: string;
        /**
         * Offer margin for dynamic remarketing campaigns.
         */
        displayAdsValue?: number;
        /**
         * The energy efficiency class as defined in EU directive 2010/30/EU.
         */
        energyEfficiencyClass?: string;
        /**
         * Date on which the item should expire, as specified upon insertion, in ISO
         * 8601 format. The actual expiration date in Google Shopping is exposed in
         * productstatuses as googleExpirationDate and might be earlier if
         * expirationDate is too far in the future.
         */
        expirationDate?: string;
        /**
         * Target gender of the item.
         */
        gender?: string;
        /**
         * Google&#39;s category of the item (see Google product taxonomy).
         */
        googleProductCategory?: string;
        /**
         * Global Trade Item Number (GTIN) of the item.
         */
        gtin?: string;
        /**
         * The REST ID of the product. Content API methods that operate on products
         * take this as their productId parameter. The REST ID for a product is of
         * the form channel:contentLanguage:targetCountry:offerId.
         */
        id?: string;
        /**
         * False when the item does not have unique product identifiers appropriate
         * to its category, such as GTIN, MPN, and brand. Required according to the
         * Unique Product Identifier Rules for all target countries except for
         * Canada.
         */
        identifierExists?: boolean;
        /**
         * URL of an image of the item.
         */
        imageLink?: string;
        /**
         * Number and amount of installments to pay for an item. Brazil only.
         */
        installment?: Schema$Installment;
        /**
         * Whether the item is a merchant-defined bundle. A bundle is a custom
         * grouping of different products sold by a merchant for a single price.
         */
        isBundle?: boolean;
        /**
         * Shared identifier for all variants of the same product.
         */
        itemGroupId?: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#product&quot;.
         */
        kind?: string;
        /**
         * URL directly linking to your item&#39;s page on your website.
         */
        link?: string;
        /**
         * Loyalty points that users receive after purchasing the item. Japan only.
         */
        loyaltyPoints?: Schema$LoyaltyPoints;
        /**
         * The material of which the item is made.
         */
        material?: string;
        /**
         * The energy efficiency class as defined in EU directive 2010/30/EU.
         */
        maxEnergyEfficiencyClass?: string;
        /**
         * Maximal product handling time (in business days).
         */
        maxHandlingTime?: string;
        /**
         * The energy efficiency class as defined in EU directive 2010/30/EU.
         */
        minEnergyEfficiencyClass?: string;
        /**
         * Minimal product handling time (in business days).
         */
        minHandlingTime?: string;
        /**
         * Link to a mobile-optimized version of the landing page.
         */
        mobileLink?: string;
        /**
         * Manufacturer Part Number (MPN) of the item.
         */
        mpn?: string;
        /**
         * The number of identical products in a merchant-defined multipack.
         */
        multipack?: string;
        /**
         * A unique identifier for the item. Leading and trailing whitespaces are
         * stripped and multiple whitespaces are replaced by a single whitespace
         * upon submission. Only valid unicode characters are accepted. See the
         * products feed specification for details. Note: Content API methods that
         * operate on products take the REST ID of the product, not this identifier.
         */
        offerId?: string;
        /**
         * Deprecated. Whether an item is available for purchase only online.
         */
        onlineOnly?: boolean;
        /**
         * The item&#39;s pattern (e.g. polka dots).
         */
        pattern?: string;
        /**
         * Price of the item.
         */
        price?: Schema$Price;
        /**
         * Your category of the item (formatted as in products feed specification).
         */
        productType?: string;
        /**
         * The unique ID of a promotion.
         */
        promotionIds?: string[];
        /**
         * Advertised sale price of the item.
         */
        salePrice?: Schema$Price;
        /**
         * Date range during which the item is on sale (see products feed
         * specification).
         */
        salePriceEffectiveDate?: string;
        /**
         * The quantity of the product that is available for selling on Google.
         * Supported only for online products.
         */
        sellOnGoogleQuantity?: string;
        /**
         * Shipping rules.
         */
        shipping?: Schema$ProductShipping[];
        /**
         * Height of the item for shipping.
         */
        shippingHeight?: Schema$ProductShippingDimension;
        /**
         * The shipping label of the product, used to group product in account-level
         * shipping rules.
         */
        shippingLabel?: string;
        /**
         * Length of the item for shipping.
         */
        shippingLength?: Schema$ProductShippingDimension;
        /**
         * Weight of the item for shipping.
         */
        shippingWeight?: Schema$ProductShippingWeight;
        /**
         * Width of the item for shipping.
         */
        shippingWidth?: Schema$ProductShippingDimension;
        /**
         * Size of the item.
         */
        sizes?: string[];
        /**
         * System in which the size is specified. Recommended for apparel items.
         */
        sizeSystem?: string;
        /**
         * The cut of the item. Recommended for apparel items.
         */
        sizeType?: string;
        /**
         * The source of the offer, i.e., how the offer was created.
         */
        source?: string;
        /**
         * The CLDR territory code for the item.
         */
        targetCountry?: string;
        /**
         * Tax information.
         */
        taxes?: Schema$ProductTax[];
        /**
         * Title of the item.
         */
        title?: string;
        /**
         * The preference of the denominator of the unit price.
         */
        unitPricingBaseMeasure?: Schema$ProductUnitPricingBaseMeasure;
        /**
         * The measure and dimension of an item.
         */
        unitPricingMeasure?: Schema$ProductUnitPricingMeasure;
        /**
         * Deprecated. The read-only list of intended destinations which passed
         * validation.
         */
        validatedDestinations?: string[];
        /**
         * Read-only warnings.
         */
        warnings?: Schema$Error[];
    }
    interface Schema$ProductAmount {
        /**
         * The pre-tax or post-tax price depending on the location of the order.
         */
        priceAmount?: Schema$Price;
        /**
         * Remitted tax value.
         */
        remittedTaxAmount?: Schema$Price;
        /**
         * Tax value.
         */
        taxAmount?: Schema$Price;
    }
    interface Schema$ProductAspect {
        /**
         * The name of the aspect.
         */
        aspectName?: string;
        /**
         * The name of the destination. Leave out to apply to all destinations.
         */
        destinationName?: string;
        /**
         * Whether the aspect is required, excluded or should be validated.
         */
        intention?: string;
    }
    interface Schema$ProductDestination {
        /**
         * The name of the destination.
         */
        destinationName?: string;
        /**
         * Whether the destination is required, excluded or should be validated.
         */
        intention?: string;
    }
    interface Schema$ProductsCustomBatchRequest {
        /**
         * The request entries to be processed in the batch.
         */
        entries?: Schema$ProductsCustomBatchRequestEntry[];
    }
    /**
     * A batch entry encoding a single non-batch products request.
     */
    interface Schema$ProductsCustomBatchRequestEntry {
        /**
         * An entry ID, unique within the batch request.
         */
        batchId?: number;
        /**
         * The ID of the managing account.
         */
        merchantId?: string;
        method?: string;
        /**
         * The product to insert. Only required if the method is insert.
         */
        product?: Schema$Product;
        /**
         * The ID of the product to get or delete. Only defined if the method is get
         * or delete.
         */
        productId?: string;
    }
    interface Schema$ProductsCustomBatchResponse {
        /**
         * The result of the execution of the batch requests.
         */
        entries?: Schema$ProductsCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#productsCustomBatchResponse&quot;.
         */
        kind?: string;
    }
    /**
     * A batch entry encoding a single non-batch products response.
     */
    interface Schema$ProductsCustomBatchResponseEntry {
        /**
         * The ID of the request entry this entry responds to.
         */
        batchId?: number;
        /**
         * A list of errors defined if and only if the request failed.
         */
        errors?: Schema$Errors;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#productsCustomBatchResponseEntry&quot;.
         */
        kind?: string;
        /**
         * The inserted product. Only defined if the method is insert and if the
         * request was successful.
         */
        product?: Schema$Product;
    }
    interface Schema$ProductShipping {
        /**
         * The CLDR territory code of the country to which an item will ship.
         */
        country?: string;
        /**
         * The location where the shipping is applicable, represented by a location
         * group name.
         */
        locationGroupName?: string;
        /**
         * The numeric ID of a location that the shipping rate applies to as defined
         * in the AdWords API.
         */
        locationId?: string;
        /**
         * The postal code range that the shipping rate applies to, represented by a
         * postal code, a postal code prefix followed by a * wildcard, a range
         * between two postal codes or two postal code prefixes of equal length.
         */
        postalCode?: string;
        /**
         * Fixed shipping price, represented as a number.
         */
        price?: Schema$Price;
        /**
         * The geographic region to which a shipping rate applies.
         */
        region?: string;
        /**
         * A free-form description of the service class or delivery speed.
         */
        service?: string;
    }
    interface Schema$ProductShippingDimension {
        /**
         * The unit of value.
         */
        unit?: string;
        /**
         * The dimension of the product used to calculate the shipping cost of the
         * item.
         */
        value?: number;
    }
    interface Schema$ProductShippingWeight {
        /**
         * The unit of value.
         */
        unit?: string;
        /**
         * The weight of the product used to calculate the shipping cost of the
         * item.
         */
        value?: number;
    }
    interface Schema$ProductsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#productsListResponse&quot;.
         */
        kind?: string;
        /**
         * The token for the retrieval of the next page of products.
         */
        nextPageToken?: string;
        resources?: Schema$Product[];
    }
    /**
     * The status of a product, i.e., information about a product computed
     * asynchronously.
     */
    interface Schema$ProductStatus {
        /**
         * Date on which the item has been created, in ISO 8601 format.
         */
        creationDate?: string;
        /**
         * DEPRECATED - never populated
         */
        dataQualityIssues?: Schema$ProductStatusDataQualityIssue[];
        /**
         * The intended destinations for the product.
         */
        destinationStatuses?: Schema$ProductStatusDestinationStatus[];
        /**
         * Date on which the item expires in Google Shopping, in ISO 8601 format.
         */
        googleExpirationDate?: string;
        /**
         * A list of all issues associated with the product.
         */
        itemLevelIssues?: Schema$ProductStatusItemLevelIssue[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#productStatus&quot;.
         */
        kind?: string;
        /**
         * Date on which the item has been last updated, in ISO 8601 format.
         */
        lastUpdateDate?: string;
        /**
         * The link to the product.
         */
        link?: string;
        /**
         * Product data after applying all the join inputs.
         */
        product?: Schema$Product;
        /**
         * The ID of the product for which status is reported.
         */
        productId?: string;
        /**
         * The title of the product.
         */
        title?: string;
    }
    interface Schema$ProductStatusDataQualityIssue {
        destination?: string;
        detail?: string;
        fetchStatus?: string;
        id?: string;
        location?: string;
        severity?: string;
        timestamp?: string;
        valueOnLandingPage?: string;
        valueProvided?: string;
    }
    interface Schema$ProductStatusDestinationStatus {
        /**
         * Whether the approval status might change due to further processing.
         */
        approvalPending?: boolean;
        /**
         * The destination&#39;s approval status.
         */
        approvalStatus?: string;
        /**
         * The name of the destination
         */
        destination?: string;
        /**
         * Provided for backward compatibility only. Always set to
         * &quot;required&quot;.
         */
        intention?: string;
    }
    interface Schema$ProductstatusesCustomBatchRequest {
        /**
         * The request entries to be processed in the batch.
         */
        entries?: Schema$ProductstatusesCustomBatchRequestEntry[];
    }
    /**
     * A batch entry encoding a single non-batch productstatuses request.
     */
    interface Schema$ProductstatusesCustomBatchRequestEntry {
        /**
         * An entry ID, unique within the batch request.
         */
        batchId?: number;
        /**
         * If set, only issues for the specified destinations are returned,
         * otherwise only issues for the Shopping destination.
         */
        destinations?: string[];
        includeAttributes?: boolean;
        /**
         * The ID of the managing account.
         */
        merchantId?: string;
        method?: string;
        /**
         * The ID of the product whose status to get.
         */
        productId?: string;
    }
    interface Schema$ProductstatusesCustomBatchResponse {
        /**
         * The result of the execution of the batch requests.
         */
        entries?: Schema$ProductstatusesCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#productstatusesCustomBatchResponse&quot;.
         */
        kind?: string;
    }
    /**
     * A batch entry encoding a single non-batch productstatuses response.
     */
    interface Schema$ProductstatusesCustomBatchResponseEntry {
        /**
         * The ID of the request entry this entry responds to.
         */
        batchId?: number;
        /**
         * A list of errors, if the request failed.
         */
        errors?: Schema$Errors;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#productstatusesCustomBatchResponseEntry&quot;.
         */
        kind?: string;
        /**
         * The requested product status. Only defined if the request was successful.
         */
        productStatus?: Schema$ProductStatus;
    }
    interface Schema$ProductstatusesListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#productstatusesListResponse&quot;.
         */
        kind?: string;
        /**
         * The token for the retrieval of the next page of products statuses.
         */
        nextPageToken?: string;
        resources?: Schema$ProductStatus[];
    }
    interface Schema$ProductStatusItemLevelIssue {
        /**
         * The attribute&#39;s name, if the issue is caused by a single attribute.
         */
        attributeName?: string;
        /**
         * The error code of the issue.
         */
        code?: string;
        /**
         * A short issue description in English.
         */
        description?: string;
        /**
         * The destination the issue applies to.
         */
        destination?: string;
        /**
         * A detailed issue description in English.
         */
        detail?: string;
        /**
         * The URL of a web page to help with resolving this issue.
         */
        documentation?: string;
        /**
         * Whether the issue can be resolved by the merchant.
         */
        resolution?: string;
        /**
         * How this issue affects serving of the offer.
         */
        servability?: string;
    }
    interface Schema$ProductTax {
        /**
         * The country within which the item is taxed, specified as a CLDR territory
         * code.
         */
        country?: string;
        /**
         * The numeric ID of a location that the tax rate applies to as defined in
         * the AdWords API.
         */
        locationId?: string;
        /**
         * The postal code range that the tax rate applies to, represented by a ZIP
         * code, a ZIP code prefix using * wildcard, a range between two ZIP codes
         * or two ZIP code prefixes of equal length. Examples: 94114, 94*,
         * 94002-95460, 94*-95*.
         */
        postalCode?: string;
        /**
         * The percentage of tax rate that applies to the item price.
         */
        rate?: number;
        /**
         * The geographic region to which the tax rate applies.
         */
        region?: string;
        /**
         * Set to true if tax is charged on shipping.
         */
        taxShip?: boolean;
    }
    interface Schema$ProductUnitPricingBaseMeasure {
        /**
         * The unit of the denominator.
         */
        unit?: string;
        /**
         * The denominator of the unit price.
         */
        value?: string;
    }
    interface Schema$ProductUnitPricingMeasure {
        /**
         * The unit of the measure.
         */
        unit?: string;
        /**
         * The measure of an item.
         */
        value?: number;
    }
    interface Schema$Promotion {
        /**
         * [required] Amount of the promotion. The values here are the promotion
         * applied to the unit price pretax and to the total of the tax amounts.
         */
        promotionAmount?: Schema$Amount;
        /**
         * [required] ID of the promotion.
         */
        promotionId?: string;
    }
    interface Schema$RateGroup {
        /**
         * A list of shipping labels defining the products to which this rate group
         * applies to. This is a disjunction: only one of the labels has to match
         * for the rate group to apply. May only be empty for the last rate group of
         * a service. Required.
         */
        applicableShippingLabels?: string[];
        /**
         * A list of carrier rates that can be referred to by mainTable or
         * singleValue.
         */
        carrierRates?: Schema$CarrierRate[];
        /**
         * A table defining the rate group, when singleValue is not expressive
         * enough. Can only be set if singleValue is not set.
         */
        mainTable?: Schema$Table;
        /**
         * Name of the rate group. Optional. If set has to be unique within shipping
         * service.
         */
        name?: string;
        /**
         * The value of the rate group (e.g. flat rate $10). Can only be set if
         * mainTable and subtables are not set.
         */
        singleValue?: Schema$Value;
        /**
         * A list of subtables referred to by mainTable. Can only be set if
         * mainTable is set.
         */
        subtables?: Schema$Table[];
    }
    interface Schema$RefundReason {
        description?: string;
        reasonCode?: string;
    }
    interface Schema$ReturnShipment {
        creationDate?: string;
        deliveryDate?: string;
        returnMethodType?: string;
        shipmentId?: string;
        shipmentTrackingInfos?: Schema$ShipmentTrackingInfo[];
        shippingDate?: string;
        state?: string;
    }
    interface Schema$Row {
        /**
         * The list of cells that constitute the row. Must have the same length as
         * columnHeaders for two-dimensional tables, a length of 1 for
         * one-dimensional tables. Required.
         */
        cells?: Schema$Value[];
    }
    interface Schema$Service {
        /**
         * A boolean exposing the active status of the shipping service. Required.
         */
        active?: boolean;
        /**
         * The CLDR code of the currency to which this service applies. Must match
         * that of the prices in rate groups.
         */
        currency?: string;
        /**
         * The CLDR territory code of the country to which the service applies.
         * Required.
         */
        deliveryCountry?: string;
        /**
         * Time spent in various aspects from order to the delivery of the product.
         * Required.
         */
        deliveryTime?: Schema$DeliveryTime;
        /**
         * Eligibility for this service.
         */
        eligibility?: string;
        /**
         * Minimum order value for this service. If set, indicates that customers
         * will have to spend at least this amount. All prices within a service must
         * have the same currency.
         */
        minimumOrderValue?: Schema$Price;
        /**
         * Free-form name of the service. Must be unique within target account.
         * Required.
         */
        name?: string;
        /**
         * Shipping rate group definitions. Only the last one is allowed to have an
         * empty applicableShippingLabels, which means &quot;everything else&quot;.
         * The other applicableShippingLabels must not overlap.
         */
        rateGroups?: Schema$RateGroup[];
    }
    interface Schema$ShipmentInvoice {
        /**
         * [required] Invoice summary.
         */
        invoiceSummary?: Schema$InvoiceSummary;
        /**
         * [required] Invoice details per line item.
         */
        lineItemInvoices?: Schema$ShipmentInvoiceLineItemInvoice[];
        /**
         * [required] ID of the shipment group. It is assigned by the merchant in
         * the shipLineItems method and is used to group multiple line items that
         * have the same kind of shipping charges.
         */
        shipmentGroupId?: string;
    }
    interface Schema$ShipmentInvoiceLineItemInvoice {
        /**
         * ID of the line item. Either lineItemId or productId must be set.
         */
        lineItemId?: string;
        /**
         * ID of the product. This is the REST ID used in the products service.
         * Either lineItemId or productId must be set.
         */
        productId?: string;
        /**
         * [required] The shipment unit ID is assigned by the merchant and defines
         * individual quantities within a line item. The same ID can be assigned to
         * units that are the same while units that differ must be assigned a
         * different ID (for example: free or promotional units).
         */
        shipmentUnitIds?: string[];
        /**
         * [required] Invoice details for a single unit.
         */
        unitInvoice?: Schema$UnitInvoice;
    }
    interface Schema$ShipmentTrackingInfo {
        carrier?: string;
        trackingNumber?: string;
    }
    /**
     * The merchant account&#39;s shipping settings. All methods except
     * getsupportedcarriers and getsupportedholidays require the admin role.
     */
    interface Schema$ShippingSettings {
        /**
         * The ID of the account to which these account shipping settings belong.
         * Ignored upon update, always present in get request responses.
         */
        accountId?: string;
        /**
         * A list of postal code groups that can be referred to in services.
         * Optional.
         */
        postalCodeGroups?: Schema$PostalCodeGroup[];
        /**
         * The target account&#39;s list of services. Optional.
         */
        services?: Schema$Service[];
    }
    interface Schema$ShippingsettingsCustomBatchRequest {
        /**
         * The request entries to be processed in the batch.
         */
        entries?: Schema$ShippingsettingsCustomBatchRequestEntry[];
    }
    /**
     * A batch entry encoding a single non-batch shippingsettings request.
     */
    interface Schema$ShippingsettingsCustomBatchRequestEntry {
        /**
         * The ID of the account for which to get/update account shipping settings.
         */
        accountId?: string;
        /**
         * An entry ID, unique within the batch request.
         */
        batchId?: number;
        /**
         * The ID of the managing account.
         */
        merchantId?: string;
        method?: string;
        /**
         * The account shipping settings to update. Only defined if the method is
         * update.
         */
        shippingSettings?: Schema$ShippingSettings;
    }
    interface Schema$ShippingsettingsCustomBatchResponse {
        /**
         * The result of the execution of the batch requests.
         */
        entries?: Schema$ShippingsettingsCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#shippingsettingsCustomBatchResponse&quot;.
         */
        kind?: string;
    }
    /**
     * A batch entry encoding a single non-batch shipping settings response.
     */
    interface Schema$ShippingsettingsCustomBatchResponseEntry {
        /**
         * The ID of the request entry to which this entry responds.
         */
        batchId?: number;
        /**
         * A list of errors defined if, and only if, the request failed.
         */
        errors?: Schema$Errors;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#shippingsettingsCustomBatchResponseEntry&quot;.
         */
        kind?: string;
        /**
         * The retrieved or updated account shipping settings.
         */
        shippingSettings?: Schema$ShippingSettings;
    }
    interface Schema$ShippingsettingsGetSupportedCarriersResponse {
        /**
         * A list of supported carriers. May be empty.
         */
        carriers?: Schema$CarriersCarrier[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#shippingsettingsGetSupportedCarriersResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$ShippingsettingsGetSupportedHolidaysResponse {
        /**
         * A list of holidays applicable for delivery guarantees. May be empty.
         */
        holidays?: Schema$HolidaysHoliday[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#shippingsettingsGetSupportedHolidaysResponse&quot;.
         */
        kind?: string;
    }
    interface Schema$ShippingsettingsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#shippingsettingsListResponse&quot;.
         */
        kind?: string;
        /**
         * The token for the retrieval of the next page of shipping settings.
         */
        nextPageToken?: string;
        resources?: Schema$ShippingSettings[];
    }
    interface Schema$Table {
        /**
         * Headers of the table&#39;s columns. Optional: if not set then the table
         * has only one dimension.
         */
        columnHeaders?: Schema$Headers;
        /**
         * Name of the table. Required for subtables, ignored for the main table.
         */
        name?: string;
        /**
         * Headers of the table&#39;s rows. Required.
         */
        rowHeaders?: Schema$Headers;
        /**
         * The list of rows that constitute the table. Must have the same length as
         * rowHeaders. Required.
         */
        rows?: Schema$Row[];
    }
    interface Schema$TestOrder {
        /**
         * The details of the customer who placed the order.
         */
        customer?: Schema$TestOrderCustomer;
        /**
         * Whether the orderinvoices service should support this order.
         */
        enableOrderinvoices?: boolean;
        /**
         * Identifies what kind of resource this is. Value: the fixed string
         * &quot;content#testOrder&quot;.
         */
        kind?: string;
        /**
         * Line items that are ordered. At least one line item must be provided.
         */
        lineItems?: Schema$TestOrderLineItem[];
        /**
         * Determines if test order must be pulled by merchant or pushed to merchant
         * via push integration.
         */
        notificationMode?: string;
        /**
         * The details of the payment method.
         */
        paymentMethod?: Schema$TestOrderPaymentMethod;
        /**
         * Identifier of one of the predefined delivery addresses for the delivery.
         */
        predefinedDeliveryAddress?: string;
        /**
         * Deprecated. Ignored if provided.
         */
        promotions?: Schema$OrderLegacyPromotion[];
        /**
         * The price of shipping for all items. Shipping tax is automatically
         * calculated for MFL orders. For non-MFL orders, tax settings from Merchant
         * Center are applied. Note that shipping is not taxed in certain states.
         */
        shippingCost?: Schema$Price;
        /**
         * Deprecated. Ignored if provided.
         */
        shippingCostTax?: Schema$Price;
        /**
         * The requested shipping option.
         */
        shippingOption?: string;
    }
    interface Schema$TestOrderCustomer {
        /**
         * Email address of the customer.
         */
        email?: string;
        /**
         * Deprecated. Please use marketingRightsInfo instead.
         */
        explicitMarketingPreference?: boolean;
        /**
         * Full name of the customer.
         */
        fullName?: string;
        /**
         * Customer&#39;s marketing preferences.
         */
        marketingRightsInfo?: Schema$TestOrderCustomerMarketingRightsInfo;
    }
    interface Schema$TestOrderCustomerMarketingRightsInfo {
        /**
         * Last know user use selection regards marketing preferences. In certain
         * cases selection might not be known, so this field would be empty.
         */
        explicitMarketingPreference?: string;
        /**
         * Timestamp when last time marketing preference was updated. Could be
         * empty, if user wasn&#39;t offered a selection yet.
         */
        lastUpdatedTimestamp?: string;
    }
    interface Schema$TestOrderLineItem {
        /**
         * Product data from the time of the order placement.
         */
        product?: Schema$TestOrderLineItemProduct;
        /**
         * Number of items ordered.
         */
        quantityOrdered?: number;
        /**
         * Details of the return policy for the line item.
         */
        returnInfo?: Schema$OrderLineItemReturnInfo;
        /**
         * Details of the requested shipping for the line item.
         */
        shippingDetails?: Schema$OrderLineItemShippingDetails;
        /**
         * Deprecated. Ignored if provided.
         */
        unitTax?: Schema$Price;
    }
    interface Schema$TestOrderLineItemProduct {
        /**
         * Brand of the item.
         */
        brand?: string;
        /**
         * Deprecated.
         */
        channel?: string;
        /**
         * Condition or state of the item.
         */
        condition?: string;
        /**
         * The two-letter ISO 639-1 language code for the item.
         */
        contentLanguage?: string;
        /**
         * Global Trade Item Number (GTIN) of the item. Optional.
         */
        gtin?: string;
        /**
         * URL of an image of the item.
         */
        imageLink?: string;
        /**
         * Shared identifier for all variants of the same product. Optional.
         */
        itemGroupId?: string;
        /**
         * Manufacturer Part Number (MPN) of the item. Optional.
         */
        mpn?: string;
        /**
         * An identifier of the item.
         */
        offerId?: string;
        /**
         * The price for the product. Tax is automatically calculated for MFL
         * orders. For non-MFL orders, tax settings from Merchant Center are
         * applied.
         */
        price?: Schema$Price;
        /**
         * The CLDR territory code of the target country of the product.
         */
        targetCountry?: string;
        /**
         * The title of the product.
         */
        title?: string;
        /**
         * Variant attributes for the item. Optional.
         */
        variantAttributes?: Schema$OrderLineItemProductVariantAttribute[];
    }
    interface Schema$TestOrderPaymentMethod {
        /**
         * The card expiration month (January = 1, February = 2 etc.).
         */
        expirationMonth?: number;
        /**
         * The card expiration year (4-digit, e.g. 2015).
         */
        expirationYear?: number;
        /**
         * The last four digits of the card number.
         */
        lastFourDigits?: string;
        /**
         * The billing address.
         */
        predefinedBillingAddress?: string;
        /**
         * The type of instrument. Note that real orders might have different values
         * than the four values accepted by createTestOrder.
         */
        type?: string;
    }
    interface Schema$TransitTable {
        /**
         * A list of postal group names. The last value can be &quot;all other
         * locations&quot;. Example: [&quot;zone 1&quot;, &quot;zone 2&quot;,
         * &quot;all other locations&quot;]. The referred postal code groups must
         * match the delivery country of the service.
         */
        postalCodeGroupNames?: string[];
        rows?: Schema$TransitTableTransitTimeRow[];
        /**
         * A list of transit time labels. The last value can be &quot;all other
         * labels&quot;. Example: [&quot;food&quot;, &quot;electronics&quot;,
         * &quot;all other labels&quot;].
         */
        transitTimeLabels?: string[];
    }
    interface Schema$TransitTableTransitTimeRow {
        values?: Schema$TransitTableTransitTimeRowTransitTimeValue[];
    }
    interface Schema$TransitTableTransitTimeRowTransitTimeValue {
        /**
         * Must be greater than or equal to minTransitTimeInDays.
         */
        maxTransitTimeInDays?: number;
        /**
         * Transit time range (min-max) in business days. 0 means same day delivery,
         * 1 means next day delivery.
         */
        minTransitTimeInDays?: number;
    }
    interface Schema$UnitInvoice {
        /**
         * Additional charges for a unit, e.g. shipping costs.
         */
        additionalCharges?: Schema$UnitInvoiceAdditionalCharge[];
        /**
         * Deprecated.
         */
        promotions?: Schema$Promotion[];
        /**
         * [required] Price of the unit, before applying taxes.
         */
        unitPricePretax?: Schema$Price;
        /**
         * Tax amounts to apply to the unit price.
         */
        unitPriceTaxes?: Schema$UnitInvoiceTaxLine[];
    }
    interface Schema$UnitInvoiceAdditionalCharge {
        /**
         * [required] Amount of the additional charge.
         */
        additionalChargeAmount?: Schema$Amount;
        /**
         * Deprecated.
         */
        additionalChargePromotions?: Schema$Promotion[];
        /**
         * [required] Type of the additional charge.
         */
        type?: string;
    }
    interface Schema$UnitInvoiceTaxLine {
        /**
         * [required] Tax amount for the tax type.
         */
        taxAmount?: Schema$Price;
        /**
         * Optional name of the tax type. This should only be provided if taxType is
         * otherFeeTax.
         */
        taxName?: string;
        /**
         * [required] Type of the tax.
         */
        taxType?: string;
    }
    /**
     * The single value of a rate group or the value of a rate group table&#39;s
     * cell. Exactly one of noShipping, flatRate, pricePercentage,
     * carrierRateName, subtableName must be set.
     */
    interface Schema$Value {
        /**
         * The name of a carrier rate referring to a carrier rate defined in the
         * same rate group. Can only be set if all other fields are not set.
         */
        carrierRateName?: string;
        /**
         * A flat rate. Can only be set if all other fields are not set.
         */
        flatRate?: Schema$Price;
        /**
         * If true, then the product can&#39;t ship. Must be true when set, can only
         * be set if all other fields are not set.
         */
        noShipping?: boolean;
        /**
         * A percentage of the price represented as a number in decimal notation
         * (e.g., &quot;5.4&quot;). Can only be set if all other fields are not set.
         */
        pricePercentage?: string;
        /**
         * The name of a subtable. Can only be set in table cells (i.e., not for
         * single values), and only if all other fields are not set.
         */
        subtableName?: string;
    }
    interface Schema$Weight {
        /**
         * The weight unit.
         */
        unit?: string;
        /**
         * The weight represented as a number.
         */
        value?: string;
    }
    class Resource$Accounts {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * content.accounts.authinfo
         * @desc Returns information about the authenticated user.
         * @alias content.accounts.authinfo
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        authinfo(params?: Params$Resource$Accounts$Authinfo, options?: MethodOptions): GaxiosPromise<Schema$AccountsAuthInfoResponse>;
        authinfo(params: Params$Resource$Accounts$Authinfo, options: MethodOptions | BodyResponseCallback<Schema$AccountsAuthInfoResponse>, callback: BodyResponseCallback<Schema$AccountsAuthInfoResponse>): void;
        authinfo(params: Params$Resource$Accounts$Authinfo, callback: BodyResponseCallback<Schema$AccountsAuthInfoResponse>): void;
        authinfo(callback: BodyResponseCallback<Schema$AccountsAuthInfoResponse>): void;
        /**
         * content.accounts.claimwebsite
         * @desc Claims the website of a Merchant Center sub-account.
         * @alias content.accounts.claimwebsite
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account whose website is claimed.
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {boolean=} params.overwrite Only available to selected merchants. When set to True, this flag removes any existing claim on the requested website by another account and replaces it with a claim from this account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        claimwebsite(params?: Params$Resource$Accounts$Claimwebsite, options?: MethodOptions): GaxiosPromise<Schema$AccountsClaimWebsiteResponse>;
        claimwebsite(params: Params$Resource$Accounts$Claimwebsite, options: MethodOptions | BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>, callback: BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>): void;
        claimwebsite(params: Params$Resource$Accounts$Claimwebsite, callback: BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>): void;
        claimwebsite(callback: BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>): void;
        /**
         * content.accounts.custombatch
         * @desc Retrieves, inserts, updates, and deletes multiple Merchant Center
         * (sub-)accounts in a single request.
         * @alias content.accounts.custombatch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {().AccountsCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch(params?: Params$Resource$Accounts$Custombatch, options?: MethodOptions): GaxiosPromise<Schema$AccountsCustomBatchResponse>;
        custombatch(params: Params$Resource$Accounts$Custombatch, options: MethodOptions | BodyResponseCallback<Schema$AccountsCustomBatchResponse>, callback: BodyResponseCallback<Schema$AccountsCustomBatchResponse>): void;
        custombatch(params: Params$Resource$Accounts$Custombatch, callback: BodyResponseCallback<Schema$AccountsCustomBatchResponse>): void;
        custombatch(callback: BodyResponseCallback<Schema$AccountsCustomBatchResponse>): void;
        /**
         * content.accounts.delete
         * @desc Deletes a Merchant Center sub-account.
         * @alias content.accounts.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account.
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {boolean=} params.force Flag to delete sub-accounts with products. The default value is false.
         * @param {string} params.merchantId The ID of the managing account. This must be a multi-client account, and accountId must be the ID of a sub-account of this account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Accounts$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * content.accounts.get
         * @desc Retrieves a Merchant Center account.
         * @alias content.accounts.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account.
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Accounts$Get, options?: MethodOptions): GaxiosPromise<Schema$Account>;
        get(params: Params$Resource$Accounts$Get, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        get(params: Params$Resource$Accounts$Get, callback: BodyResponseCallback<Schema$Account>): void;
        get(callback: BodyResponseCallback<Schema$Account>): void;
        /**
         * content.accounts.insert
         * @desc Creates a Merchant Center sub-account.
         * @alias content.accounts.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the managing account. This must be a multi-client account.
         * @param {().Account} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Accounts$Insert, options?: MethodOptions): GaxiosPromise<Schema$Account>;
        insert(params: Params$Resource$Accounts$Insert, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        insert(params: Params$Resource$Accounts$Insert, callback: BodyResponseCallback<Schema$Account>): void;
        insert(callback: BodyResponseCallback<Schema$Account>): void;
        /**
         * content.accounts.link
         * @desc Performs an action on a link between a Merchant Center account and
         * another account.
         * @alias content.accounts.link
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account that should be linked.
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {().AccountsLinkRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        link(params?: Params$Resource$Accounts$Link, options?: MethodOptions): GaxiosPromise<Schema$AccountsLinkResponse>;
        link(params: Params$Resource$Accounts$Link, options: MethodOptions | BodyResponseCallback<Schema$AccountsLinkResponse>, callback: BodyResponseCallback<Schema$AccountsLinkResponse>): void;
        link(params: Params$Resource$Accounts$Link, callback: BodyResponseCallback<Schema$AccountsLinkResponse>): void;
        link(callback: BodyResponseCallback<Schema$AccountsLinkResponse>): void;
        /**
         * content.accounts.list
         * @desc Lists the sub-accounts in your Merchant Center account.
         * @alias content.accounts.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of accounts to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the managing account. This must be a multi-client account.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$List, options?: MethodOptions): GaxiosPromise<Schema$AccountsListResponse>;
        list(params: Params$Resource$Accounts$List, options: MethodOptions | BodyResponseCallback<Schema$AccountsListResponse>, callback: BodyResponseCallback<Schema$AccountsListResponse>): void;
        list(params: Params$Resource$Accounts$List, callback: BodyResponseCallback<Schema$AccountsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$AccountsListResponse>): void;
        /**
         * content.accounts.patch
         * @desc Updates a Merchant Center account. This method supports patch
         * semantics.
         * @alias content.accounts.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account.
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {().Account} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Accounts$Patch, options?: MethodOptions): GaxiosPromise<Schema$Account>;
        patch(params: Params$Resource$Accounts$Patch, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        patch(params: Params$Resource$Accounts$Patch, callback: BodyResponseCallback<Schema$Account>): void;
        patch(callback: BodyResponseCallback<Schema$Account>): void;
        /**
         * content.accounts.update
         * @desc Updates a Merchant Center account.
         * @alias content.accounts.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account.
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {().Account} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Accounts$Update, options?: MethodOptions): GaxiosPromise<Schema$Account>;
        update(params: Params$Resource$Accounts$Update, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        update(params: Params$Resource$Accounts$Update, callback: BodyResponseCallback<Schema$Account>): void;
        update(callback: BodyResponseCallback<Schema$Account>): void;
    }
    interface Params$Resource$Accounts$Authinfo extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    interface Params$Resource$Accounts$Claimwebsite extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account whose website is claimed.
         */
        accountId?: string;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
        /**
         * Only available to selected merchants. When set to True, this flag removes
         * any existing claim on the requested website by another account and
         * replaces it with a claim from this account.
         */
        overwrite?: boolean;
    }
    interface Params$Resource$Accounts$Custombatch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AccountsCustomBatchRequest;
    }
    interface Params$Resource$Accounts$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account.
         */
        accountId?: string;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * Flag to delete sub-accounts with products. The default value is false.
         */
        force?: boolean;
        /**
         * The ID of the managing account. This must be a multi-client account, and
         * accountId must be the ID of a sub-account of this account.
         */
        merchantId?: string;
    }
    interface Params$Resource$Accounts$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account.
         */
        accountId?: string;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
    }
    interface Params$Resource$Accounts$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the managing account. This must be a multi-client account.
         */
        merchantId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Account;
    }
    interface Params$Resource$Accounts$Link extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that should be linked.
         */
        accountId?: string;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AccountsLinkRequest;
    }
    interface Params$Resource$Accounts$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of accounts to return in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * The ID of the managing account. This must be a multi-client account.
         */
        merchantId?: string;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    interface Params$Resource$Accounts$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account.
         */
        accountId?: string;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Account;
    }
    interface Params$Resource$Accounts$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account.
         */
        accountId?: string;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Account;
    }
    class Resource$Accountstatuses {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * content.accountstatuses.custombatch
         * @desc Retrieves multiple Merchant Center account statuses in a single
         * request.
         * @alias content.accountstatuses.custombatch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().AccountstatusesCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch(params?: Params$Resource$Accountstatuses$Custombatch, options?: MethodOptions): GaxiosPromise<Schema$AccountstatusesCustomBatchResponse>;
        custombatch(params: Params$Resource$Accountstatuses$Custombatch, options: MethodOptions | BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>, callback: BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>): void;
        custombatch(params: Params$Resource$Accountstatuses$Custombatch, callback: BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>): void;
        custombatch(callback: BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>): void;
        /**
         * content.accountstatuses.get
         * @desc Retrieves the status of a Merchant Center account. No
         * itemLevelIssues are returned for multi-client accounts.
         * @alias content.accountstatuses.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account.
         * @param {string=} params.destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Accountstatuses$Get, options?: MethodOptions): GaxiosPromise<Schema$AccountStatus>;
        get(params: Params$Resource$Accountstatuses$Get, options: MethodOptions | BodyResponseCallback<Schema$AccountStatus>, callback: BodyResponseCallback<Schema$AccountStatus>): void;
        get(params: Params$Resource$Accountstatuses$Get, callback: BodyResponseCallback<Schema$AccountStatus>): void;
        get(callback: BodyResponseCallback<Schema$AccountStatus>): void;
        /**
         * content.accountstatuses.list
         * @desc Lists the statuses of the sub-accounts in your Merchant Center
         * account.
         * @alias content.accountstatuses.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
         * @param {integer=} params.maxResults The maximum number of account statuses to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the managing account. This must be a multi-client account.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accountstatuses$List, options?: MethodOptions): GaxiosPromise<Schema$AccountstatusesListResponse>;
        list(params: Params$Resource$Accountstatuses$List, options: MethodOptions | BodyResponseCallback<Schema$AccountstatusesListResponse>, callback: BodyResponseCallback<Schema$AccountstatusesListResponse>): void;
        list(params: Params$Resource$Accountstatuses$List, callback: BodyResponseCallback<Schema$AccountstatusesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$AccountstatusesListResponse>): void;
    }
    interface Params$Resource$Accountstatuses$Custombatch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AccountstatusesCustomBatchRequest;
    }
    interface Params$Resource$Accountstatuses$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account.
         */
        accountId?: string;
        /**
         * If set, only issues for the specified destinations are returned,
         * otherwise only issues for the Shopping destination.
         */
        destinations?: string[];
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
    }
    interface Params$Resource$Accountstatuses$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * If set, only issues for the specified destinations are returned,
         * otherwise only issues for the Shopping destination.
         */
        destinations?: string[];
        /**
         * The maximum number of account statuses to return in the response, used
         * for paging.
         */
        maxResults?: number;
        /**
         * The ID of the managing account. This must be a multi-client account.
         */
        merchantId?: string;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    class Resource$Accounttax {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * content.accounttax.custombatch
         * @desc Retrieves and updates tax settings of multiple accounts in a single
         * request.
         * @alias content.accounttax.custombatch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {().AccounttaxCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch(params?: Params$Resource$Accounttax$Custombatch, options?: MethodOptions): GaxiosPromise<Schema$AccounttaxCustomBatchResponse>;
        custombatch(params: Params$Resource$Accounttax$Custombatch, options: MethodOptions | BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>, callback: BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>): void;
        custombatch(params: Params$Resource$Accounttax$Custombatch, callback: BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>): void;
        custombatch(callback: BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>): void;
        /**
         * content.accounttax.get
         * @desc Retrieves the tax settings of the account.
         * @alias content.accounttax.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account for which to get/update account tax settings.
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Accounttax$Get, options?: MethodOptions): GaxiosPromise<Schema$AccountTax>;
        get(params: Params$Resource$Accounttax$Get, options: MethodOptions | BodyResponseCallback<Schema$AccountTax>, callback: BodyResponseCallback<Schema$AccountTax>): void;
        get(params: Params$Resource$Accounttax$Get, callback: BodyResponseCallback<Schema$AccountTax>): void;
        get(callback: BodyResponseCallback<Schema$AccountTax>): void;
        /**
         * content.accounttax.list
         * @desc Lists the tax settings of the sub-accounts in your Merchant Center
         * account.
         * @alias content.accounttax.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of tax settings to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the managing account. This must be a multi-client account.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounttax$List, options?: MethodOptions): GaxiosPromise<Schema$AccounttaxListResponse>;
        list(params: Params$Resource$Accounttax$List, options: MethodOptions | BodyResponseCallback<Schema$AccounttaxListResponse>, callback: BodyResponseCallback<Schema$AccounttaxListResponse>): void;
        list(params: Params$Resource$Accounttax$List, callback: BodyResponseCallback<Schema$AccounttaxListResponse>): void;
        list(callback: BodyResponseCallback<Schema$AccounttaxListResponse>): void;
        /**
         * content.accounttax.patch
         * @desc Updates the tax settings of the account. This method supports patch
         * semantics.
         * @alias content.accounttax.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account for which to get/update account tax settings.
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {().AccountTax} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Accounttax$Patch, options?: MethodOptions): GaxiosPromise<Schema$AccountTax>;
        patch(params: Params$Resource$Accounttax$Patch, options: MethodOptions | BodyResponseCallback<Schema$AccountTax>, callback: BodyResponseCallback<Schema$AccountTax>): void;
        patch(params: Params$Resource$Accounttax$Patch, callback: BodyResponseCallback<Schema$AccountTax>): void;
        patch(callback: BodyResponseCallback<Schema$AccountTax>): void;
        /**
         * content.accounttax.update
         * @desc Updates the tax settings of the account.
         * @alias content.accounttax.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account for which to get/update account tax settings.
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {().AccountTax} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Accounttax$Update, options?: MethodOptions): GaxiosPromise<Schema$AccountTax>;
        update(params: Params$Resource$Accounttax$Update, options: MethodOptions | BodyResponseCallback<Schema$AccountTax>, callback: BodyResponseCallback<Schema$AccountTax>): void;
        update(params: Params$Resource$Accounttax$Update, callback: BodyResponseCallback<Schema$AccountTax>): void;
        update(callback: BodyResponseCallback<Schema$AccountTax>): void;
    }
    interface Params$Resource$Accounttax$Custombatch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AccounttaxCustomBatchRequest;
    }
    interface Params$Resource$Accounttax$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account for which to get/update account tax settings.
         */
        accountId?: string;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
    }
    interface Params$Resource$Accounttax$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of tax settings to return in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * The ID of the managing account. This must be a multi-client account.
         */
        merchantId?: string;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    interface Params$Resource$Accounttax$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account for which to get/update account tax settings.
         */
        accountId?: string;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AccountTax;
    }
    interface Params$Resource$Accounttax$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account for which to get/update account tax settings.
         */
        accountId?: string;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AccountTax;
    }
    class Resource$Datafeeds {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * content.datafeeds.custombatch
         * @desc Deletes, fetches, gets, inserts and updates multiple datafeeds in a
         * single request.
         * @alias content.datafeeds.custombatch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {().DatafeedsCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch(params?: Params$Resource$Datafeeds$Custombatch, options?: MethodOptions): GaxiosPromise<Schema$DatafeedsCustomBatchResponse>;
        custombatch(params: Params$Resource$Datafeeds$Custombatch, options: MethodOptions | BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>, callback: BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>): void;
        custombatch(params: Params$Resource$Datafeeds$Custombatch, callback: BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>): void;
        custombatch(callback: BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>): void;
        /**
         * content.datafeeds.delete
         * @desc Deletes a datafeed configuration from your Merchant Center account.
         * @alias content.datafeeds.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.datafeedId The ID of the datafeed.
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Datafeeds$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Datafeeds$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Datafeeds$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * content.datafeeds.fetchnow
         * @desc Invokes a fetch for the datafeed in your Merchant Center account.
         * @alias content.datafeeds.fetchnow
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.datafeedId The ID of the datafeed to be fetched.
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        fetchnow(params?: Params$Resource$Datafeeds$Fetchnow, options?: MethodOptions): GaxiosPromise<Schema$DatafeedsFetchNowResponse>;
        fetchnow(params: Params$Resource$Datafeeds$Fetchnow, options: MethodOptions | BodyResponseCallback<Schema$DatafeedsFetchNowResponse>, callback: BodyResponseCallback<Schema$DatafeedsFetchNowResponse>): void;
        fetchnow(params: Params$Resource$Datafeeds$Fetchnow, callback: BodyResponseCallback<Schema$DatafeedsFetchNowResponse>): void;
        fetchnow(callback: BodyResponseCallback<Schema$DatafeedsFetchNowResponse>): void;
        /**
         * content.datafeeds.get
         * @desc Retrieves a datafeed configuration from your Merchant Center
         * account.
         * @alias content.datafeeds.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.datafeedId The ID of the datafeed.
         * @param {string} params.merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Datafeeds$Get, options?: MethodOptions): GaxiosPromise<Schema$Datafeed>;
        get(params: Params$Resource$Datafeeds$Get, options: MethodOptions | BodyResponseCallback<Schema$Datafeed>, callback: BodyResponseCallback<Schema$Datafeed>): void;
        get(params: Params$Resource$Datafeeds$Get, callback: BodyResponseCallback<Schema$Datafeed>): void;
        get(callback: BodyResponseCallback<Schema$Datafeed>): void;
        /**
         * content.datafeeds.insert
         * @desc Registers a datafeed configuration with your Merchant Center
         * account.
         * @alias content.datafeeds.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
         * @param {().Datafeed} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Datafeeds$Insert, options?: MethodOptions): GaxiosPromise<Schema$Datafeed>;
        insert(params: Params$Resource$Datafeeds$Insert, options: MethodOptions | BodyResponseCallback<Schema$Datafeed>, callback: BodyResponseCallback<Schema$Datafeed>): void;
        insert(params: Params$Resource$Datafeeds$Insert, callback: BodyResponseCallback<Schema$Datafeed>): void;
        insert(callback: BodyResponseCallback<Schema$Datafeed>): void;
        /**
         * content.datafeeds.list
         * @desc Lists the configurations for datafeeds in your Merchant Center
         * account.
         * @alias content.datafeeds.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of products to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Datafeeds$List, options?: MethodOptions): GaxiosPromise<Schema$DatafeedsListResponse>;
        list(params: Params$Resource$Datafeeds$List, options: MethodOptions | BodyResponseCallback<Schema$DatafeedsListResponse>, callback: BodyResponseCallback<Schema$DatafeedsListResponse>): void;
        list(params: Params$Resource$Datafeeds$List, callback: BodyResponseCallback<Schema$DatafeedsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$DatafeedsListResponse>): void;
        /**
         * content.datafeeds.patch
         * @desc Updates a datafeed configuration of your Merchant Center account.
         * This method supports patch semantics.
         * @alias content.datafeeds.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.datafeedId The ID of the datafeed.
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
         * @param {().Datafeed} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Datafeeds$Patch, options?: MethodOptions): GaxiosPromise<Schema$Datafeed>;
        patch(params: Params$Resource$Datafeeds$Patch, options: MethodOptions | BodyResponseCallback<Schema$Datafeed>, callback: BodyResponseCallback<Schema$Datafeed>): void;
        patch(params: Params$Resource$Datafeeds$Patch, callback: BodyResponseCallback<Schema$Datafeed>): void;
        patch(callback: BodyResponseCallback<Schema$Datafeed>): void;
        /**
         * content.datafeeds.update
         * @desc Updates a datafeed configuration of your Merchant Center account.
         * @alias content.datafeeds.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.datafeedId The ID of the datafeed.
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
         * @param {().Datafeed} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Datafeeds$Update, options?: MethodOptions): GaxiosPromise<Schema$Datafeed>;
        update(params: Params$Resource$Datafeeds$Update, options: MethodOptions | BodyResponseCallback<Schema$Datafeed>, callback: BodyResponseCallback<Schema$Datafeed>): void;
        update(params: Params$Resource$Datafeeds$Update, callback: BodyResponseCallback<Schema$Datafeed>): void;
        update(callback: BodyResponseCallback<Schema$Datafeed>): void;
    }
    interface Params$Resource$Datafeeds$Custombatch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DatafeedsCustomBatchRequest;
    }
    interface Params$Resource$Datafeeds$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the datafeed.
         */
        datafeedId?: string;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the account that manages the datafeed. This account cannot be a
         * multi-client account.
         */
        merchantId?: string;
    }
    interface Params$Resource$Datafeeds$Fetchnow extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the datafeed to be fetched.
         */
        datafeedId?: string;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the account that manages the datafeed. This account cannot be a
         * multi-client account.
         */
        merchantId?: string;
    }
    interface Params$Resource$Datafeeds$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the datafeed.
         */
        datafeedId?: string;
        /**
         * The ID of the account that manages the datafeed. This account cannot be a
         * multi-client account.
         */
        merchantId?: string;
    }
    interface Params$Resource$Datafeeds$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the account that manages the datafeed. This account cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Datafeed;
    }
    interface Params$Resource$Datafeeds$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of products to return in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * The ID of the account that manages the datafeeds. This account cannot be
         * a multi-client account.
         */
        merchantId?: string;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    interface Params$Resource$Datafeeds$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the datafeed.
         */
        datafeedId?: string;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the account that manages the datafeed. This account cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Datafeed;
    }
    interface Params$Resource$Datafeeds$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the datafeed.
         */
        datafeedId?: string;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the account that manages the datafeed. This account cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Datafeed;
    }
    class Resource$Datafeedstatuses {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * content.datafeedstatuses.custombatch
         * @desc Gets multiple Merchant Center datafeed statuses in a single
         * request.
         * @alias content.datafeedstatuses.custombatch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().DatafeedstatusesCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch(params?: Params$Resource$Datafeedstatuses$Custombatch, options?: MethodOptions): GaxiosPromise<Schema$DatafeedstatusesCustomBatchResponse>;
        custombatch(params: Params$Resource$Datafeedstatuses$Custombatch, options: MethodOptions | BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>, callback: BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>): void;
        custombatch(params: Params$Resource$Datafeedstatuses$Custombatch, callback: BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>): void;
        custombatch(callback: BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>): void;
        /**
         * content.datafeedstatuses.get
         * @desc Retrieves the status of a datafeed from your Merchant Center
         * account.
         * @alias content.datafeedstatuses.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.country The country for which to get the datafeed status. If this parameter is provided then language must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
         * @param {string} params.datafeedId The ID of the datafeed.
         * @param {string=} params.language The language for which to get the datafeed status. If this parameter is provided then country must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
         * @param {string} params.merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Datafeedstatuses$Get, options?: MethodOptions): GaxiosPromise<Schema$DatafeedStatus>;
        get(params: Params$Resource$Datafeedstatuses$Get, options: MethodOptions | BodyResponseCallback<Schema$DatafeedStatus>, callback: BodyResponseCallback<Schema$DatafeedStatus>): void;
        get(params: Params$Resource$Datafeedstatuses$Get, callback: BodyResponseCallback<Schema$DatafeedStatus>): void;
        get(callback: BodyResponseCallback<Schema$DatafeedStatus>): void;
        /**
         * content.datafeedstatuses.list
         * @desc Lists the statuses of the datafeeds in your Merchant Center
         * account.
         * @alias content.datafeedstatuses.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of products to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Datafeedstatuses$List, options?: MethodOptions): GaxiosPromise<Schema$DatafeedstatusesListResponse>;
        list(params: Params$Resource$Datafeedstatuses$List, options: MethodOptions | BodyResponseCallback<Schema$DatafeedstatusesListResponse>, callback: BodyResponseCallback<Schema$DatafeedstatusesListResponse>): void;
        list(params: Params$Resource$Datafeedstatuses$List, callback: BodyResponseCallback<Schema$DatafeedstatusesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$DatafeedstatusesListResponse>): void;
    }
    interface Params$Resource$Datafeedstatuses$Custombatch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DatafeedstatusesCustomBatchRequest;
    }
    interface Params$Resource$Datafeedstatuses$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The country for which to get the datafeed status. If this parameter is
         * provided then language must also be provided. Note that this parameter is
         * required for feeds targeting multiple countries and languages, since a
         * feed may have a different status for each target.
         */
        country?: string;
        /**
         * The ID of the datafeed.
         */
        datafeedId?: string;
        /**
         * The language for which to get the datafeed status. If this parameter is
         * provided then country must also be provided. Note that this parameter is
         * required for feeds targeting multiple countries and languages, since a
         * feed may have a different status for each target.
         */
        language?: string;
        /**
         * The ID of the account that manages the datafeed. This account cannot be a
         * multi-client account.
         */
        merchantId?: string;
    }
    interface Params$Resource$Datafeedstatuses$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of products to return in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * The ID of the account that manages the datafeeds. This account cannot be
         * a multi-client account.
         */
        merchantId?: string;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    class Resource$Inventory {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * content.inventory.custombatch
         * @desc Updates price and availability for multiple products or stores in a
         * single request. This operation does not update the expiration date of the
         * products.
         * @alias content.inventory.custombatch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {().InventoryCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch(params?: Params$Resource$Inventory$Custombatch, options?: MethodOptions): GaxiosPromise<Schema$InventoryCustomBatchResponse>;
        custombatch(params: Params$Resource$Inventory$Custombatch, options: MethodOptions | BodyResponseCallback<Schema$InventoryCustomBatchResponse>, callback: BodyResponseCallback<Schema$InventoryCustomBatchResponse>): void;
        custombatch(params: Params$Resource$Inventory$Custombatch, callback: BodyResponseCallback<Schema$InventoryCustomBatchResponse>): void;
        custombatch(callback: BodyResponseCallback<Schema$InventoryCustomBatchResponse>): void;
        /**
         * content.inventory.set
         * @desc Updates price and availability of a product in your Merchant Center
         * account.
         * @alias content.inventory.set
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
         * @param {string} params.productId The REST ID of the product for which to update price and availability.
         * @param {string} params.storeCode The code of the store for which to update price and availability. Use online to update price and availability of an online product.
         * @param {().InventorySetRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        set(params?: Params$Resource$Inventory$Set, options?: MethodOptions): GaxiosPromise<Schema$InventorySetResponse>;
        set(params: Params$Resource$Inventory$Set, options: MethodOptions | BodyResponseCallback<Schema$InventorySetResponse>, callback: BodyResponseCallback<Schema$InventorySetResponse>): void;
        set(params: Params$Resource$Inventory$Set, callback: BodyResponseCallback<Schema$InventorySetResponse>): void;
        set(callback: BodyResponseCallback<Schema$InventorySetResponse>): void;
    }
    interface Params$Resource$Inventory$Custombatch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$InventoryCustomBatchRequest;
    }
    interface Params$Resource$Inventory$Set extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the account that contains the product. This account cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The REST ID of the product for which to update price and availability.
         */
        productId?: string;
        /**
         * The code of the store for which to update price and availability. Use
         * online to update price and availability of an online product.
         */
        storeCode?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$InventorySetRequest;
    }
    class Resource$Liasettings {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * content.liasettings.custombatch
         * @desc Retrieves and/or updates the LIA settings of multiple accounts in a
         * single request.
         * @alias content.liasettings.custombatch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {().LiasettingsCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch(params?: Params$Resource$Liasettings$Custombatch, options?: MethodOptions): GaxiosPromise<Schema$LiasettingsCustomBatchResponse>;
        custombatch(params: Params$Resource$Liasettings$Custombatch, options: MethodOptions | BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>, callback: BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>): void;
        custombatch(params: Params$Resource$Liasettings$Custombatch, callback: BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>): void;
        custombatch(callback: BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>): void;
        /**
         * content.liasettings.get
         * @desc Retrieves the LIA settings of the account.
         * @alias content.liasettings.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account for which to get or update LIA settings.
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Liasettings$Get, options?: MethodOptions): GaxiosPromise<Schema$LiaSettings>;
        get(params: Params$Resource$Liasettings$Get, options: MethodOptions | BodyResponseCallback<Schema$LiaSettings>, callback: BodyResponseCallback<Schema$LiaSettings>): void;
        get(params: Params$Resource$Liasettings$Get, callback: BodyResponseCallback<Schema$LiaSettings>): void;
        get(callback: BodyResponseCallback<Schema$LiaSettings>): void;
        /**
         * content.liasettings.getaccessiblegmbaccounts
         * @desc Retrieves the list of accessible Google My Business accounts.
         * @alias content.liasettings.getaccessiblegmbaccounts
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account for which to retrieve accessible Google My Business accounts.
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getaccessiblegmbaccounts(params?: Params$Resource$Liasettings$Getaccessiblegmbaccounts, options?: MethodOptions): GaxiosPromise<Schema$LiasettingsGetAccessibleGmbAccountsResponse>;
        getaccessiblegmbaccounts(params: Params$Resource$Liasettings$Getaccessiblegmbaccounts, options: MethodOptions | BodyResponseCallback<Schema$LiasettingsGetAccessibleGmbAccountsResponse>, callback: BodyResponseCallback<Schema$LiasettingsGetAccessibleGmbAccountsResponse>): void;
        getaccessiblegmbaccounts(params: Params$Resource$Liasettings$Getaccessiblegmbaccounts, callback: BodyResponseCallback<Schema$LiasettingsGetAccessibleGmbAccountsResponse>): void;
        getaccessiblegmbaccounts(callback: BodyResponseCallback<Schema$LiasettingsGetAccessibleGmbAccountsResponse>): void;
        /**
         * content.liasettings.list
         * @desc Lists the LIA settings of the sub-accounts in your Merchant Center
         * account.
         * @alias content.liasettings.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of LIA settings to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the managing account. This must be a multi-client account.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Liasettings$List, options?: MethodOptions): GaxiosPromise<Schema$LiasettingsListResponse>;
        list(params: Params$Resource$Liasettings$List, options: MethodOptions | BodyResponseCallback<Schema$LiasettingsListResponse>, callback: BodyResponseCallback<Schema$LiasettingsListResponse>): void;
        list(params: Params$Resource$Liasettings$List, callback: BodyResponseCallback<Schema$LiasettingsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$LiasettingsListResponse>): void;
        /**
         * content.liasettings.listposdataproviders
         * @desc Retrieves the list of POS data providers that have active settings
         * for the all eiligible countries.
         * @alias content.liasettings.listposdataproviders
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listposdataproviders(params?: Params$Resource$Liasettings$Listposdataproviders, options?: MethodOptions): GaxiosPromise<Schema$LiasettingsListPosDataProvidersResponse>;
        listposdataproviders(params: Params$Resource$Liasettings$Listposdataproviders, options: MethodOptions | BodyResponseCallback<Schema$LiasettingsListPosDataProvidersResponse>, callback: BodyResponseCallback<Schema$LiasettingsListPosDataProvidersResponse>): void;
        listposdataproviders(params: Params$Resource$Liasettings$Listposdataproviders, callback: BodyResponseCallback<Schema$LiasettingsListPosDataProvidersResponse>): void;
        listposdataproviders(callback: BodyResponseCallback<Schema$LiasettingsListPosDataProvidersResponse>): void;
        /**
         * content.liasettings.patch
         * @desc Updates the LIA settings of the account. This method supports patch
         * semantics.
         * @alias content.liasettings.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account for which to get or update LIA settings.
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {().LiaSettings} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Liasettings$Patch, options?: MethodOptions): GaxiosPromise<Schema$LiaSettings>;
        patch(params: Params$Resource$Liasettings$Patch, options: MethodOptions | BodyResponseCallback<Schema$LiaSettings>, callback: BodyResponseCallback<Schema$LiaSettings>): void;
        patch(params: Params$Resource$Liasettings$Patch, callback: BodyResponseCallback<Schema$LiaSettings>): void;
        patch(callback: BodyResponseCallback<Schema$LiaSettings>): void;
        /**
         * content.liasettings.requestgmbaccess
         * @desc Requests access to a specified Google My Business account.
         * @alias content.liasettings.requestgmbaccess
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account for which GMB access is requested.
         * @param {string} params.gmbEmail The email of the Google My Business account.
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        requestgmbaccess(params?: Params$Resource$Liasettings$Requestgmbaccess, options?: MethodOptions): GaxiosPromise<Schema$LiasettingsRequestGmbAccessResponse>;
        requestgmbaccess(params: Params$Resource$Liasettings$Requestgmbaccess, options: MethodOptions | BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>, callback: BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>): void;
        requestgmbaccess(params: Params$Resource$Liasettings$Requestgmbaccess, callback: BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>): void;
        requestgmbaccess(callback: BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>): void;
        /**
         * content.liasettings.requestinventoryverification
         * @desc Requests inventory validation for the specified country.
         * @alias content.liasettings.requestinventoryverification
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.country The country for which inventory validation is requested.
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        requestinventoryverification(params?: Params$Resource$Liasettings$Requestinventoryverification, options?: MethodOptions): GaxiosPromise<Schema$LiasettingsRequestInventoryVerificationResponse>;
        requestinventoryverification(params: Params$Resource$Liasettings$Requestinventoryverification, options: MethodOptions | BodyResponseCallback<Schema$LiasettingsRequestInventoryVerificationResponse>, callback: BodyResponseCallback<Schema$LiasettingsRequestInventoryVerificationResponse>): void;
        requestinventoryverification(params: Params$Resource$Liasettings$Requestinventoryverification, callback: BodyResponseCallback<Schema$LiasettingsRequestInventoryVerificationResponse>): void;
        requestinventoryverification(callback: BodyResponseCallback<Schema$LiasettingsRequestInventoryVerificationResponse>): void;
        /**
         * content.liasettings.setinventoryverificationcontact
         * @desc Sets the inventory verification contract for the specified country.
         * @alias content.liasettings.setinventoryverificationcontact
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.contactEmail The email of the inventory verification contact.
         * @param {string} params.contactName The name of the inventory verification contact.
         * @param {string} params.country The country for which inventory verification is requested.
         * @param {string} params.language The language for which inventory verification is requested.
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setinventoryverificationcontact(params?: Params$Resource$Liasettings$Setinventoryverificationcontact, options?: MethodOptions): GaxiosPromise<Schema$LiasettingsSetInventoryVerificationContactResponse>;
        setinventoryverificationcontact(params: Params$Resource$Liasettings$Setinventoryverificationcontact, options: MethodOptions | BodyResponseCallback<Schema$LiasettingsSetInventoryVerificationContactResponse>, callback: BodyResponseCallback<Schema$LiasettingsSetInventoryVerificationContactResponse>): void;
        setinventoryverificationcontact(params: Params$Resource$Liasettings$Setinventoryverificationcontact, callback: BodyResponseCallback<Schema$LiasettingsSetInventoryVerificationContactResponse>): void;
        setinventoryverificationcontact(callback: BodyResponseCallback<Schema$LiasettingsSetInventoryVerificationContactResponse>): void;
        /**
         * content.liasettings.setposdataprovider
         * @desc Sets the POS data provider for the specified country.
         * @alias content.liasettings.setposdataprovider
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account for which to retrieve accessible Google My Business accounts.
         * @param {string} params.country The country for which the POS data provider is selected.
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {string=} params.posDataProviderId The ID of POS data provider.
         * @param {string=} params.posExternalAccountId The account ID by which this merchant is known to the POS data provider.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setposdataprovider(params?: Params$Resource$Liasettings$Setposdataprovider, options?: MethodOptions): GaxiosPromise<Schema$LiasettingsSetPosDataProviderResponse>;
        setposdataprovider(params: Params$Resource$Liasettings$Setposdataprovider, options: MethodOptions | BodyResponseCallback<Schema$LiasettingsSetPosDataProviderResponse>, callback: BodyResponseCallback<Schema$LiasettingsSetPosDataProviderResponse>): void;
        setposdataprovider(params: Params$Resource$Liasettings$Setposdataprovider, callback: BodyResponseCallback<Schema$LiasettingsSetPosDataProviderResponse>): void;
        setposdataprovider(callback: BodyResponseCallback<Schema$LiasettingsSetPosDataProviderResponse>): void;
        /**
         * content.liasettings.update
         * @desc Updates the LIA settings of the account.
         * @alias content.liasettings.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account for which to get or update LIA settings.
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {().LiaSettings} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Liasettings$Update, options?: MethodOptions): GaxiosPromise<Schema$LiaSettings>;
        update(params: Params$Resource$Liasettings$Update, options: MethodOptions | BodyResponseCallback<Schema$LiaSettings>, callback: BodyResponseCallback<Schema$LiaSettings>): void;
        update(params: Params$Resource$Liasettings$Update, callback: BodyResponseCallback<Schema$LiaSettings>): void;
        update(callback: BodyResponseCallback<Schema$LiaSettings>): void;
    }
    interface Params$Resource$Liasettings$Custombatch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$LiasettingsCustomBatchRequest;
    }
    interface Params$Resource$Liasettings$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account for which to get or update LIA settings.
         */
        accountId?: string;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
    }
    interface Params$Resource$Liasettings$Getaccessiblegmbaccounts extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account for which to retrieve accessible Google My Business
         * accounts.
         */
        accountId?: string;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
    }
    interface Params$Resource$Liasettings$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of LIA settings to return in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * The ID of the managing account. This must be a multi-client account.
         */
        merchantId?: string;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    interface Params$Resource$Liasettings$Listposdataproviders extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    interface Params$Resource$Liasettings$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account for which to get or update LIA settings.
         */
        accountId?: string;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$LiaSettings;
    }
    interface Params$Resource$Liasettings$Requestgmbaccess extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account for which GMB access is requested.
         */
        accountId?: string;
        /**
         * The email of the Google My Business account.
         */
        gmbEmail?: string;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
    }
    interface Params$Resource$Liasettings$Requestinventoryverification extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        accountId?: string;
        /**
         * The country for which inventory validation is requested.
         */
        country?: string;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
    }
    interface Params$Resource$Liasettings$Setinventoryverificationcontact extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        accountId?: string;
        /**
         * The email of the inventory verification contact.
         */
        contactEmail?: string;
        /**
         * The name of the inventory verification contact.
         */
        contactName?: string;
        /**
         * The country for which inventory verification is requested.
         */
        country?: string;
        /**
         * The language for which inventory verification is requested.
         */
        language?: string;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
    }
    interface Params$Resource$Liasettings$Setposdataprovider extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account for which to retrieve accessible Google My Business
         * accounts.
         */
        accountId?: string;
        /**
         * The country for which the POS data provider is selected.
         */
        country?: string;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
        /**
         * The ID of POS data provider.
         */
        posDataProviderId?: string;
        /**
         * The account ID by which this merchant is known to the POS data provider.
         */
        posExternalAccountId?: string;
    }
    interface Params$Resource$Liasettings$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account for which to get or update LIA settings.
         */
        accountId?: string;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$LiaSettings;
    }
    class Resource$Orderinvoices {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * content.orderinvoices.createchargeinvoice
         * @desc Creates a charge invoice for a shipment group, and triggers a
         * charge capture for non-facilitated payment orders.
         * @alias content.orderinvoices.createchargeinvoice
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order.
         * @param {().OrderinvoicesCreateChargeInvoiceRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        createchargeinvoice(params?: Params$Resource$Orderinvoices$Createchargeinvoice, options?: MethodOptions): GaxiosPromise<Schema$OrderinvoicesCreateChargeInvoiceResponse>;
        createchargeinvoice(params: Params$Resource$Orderinvoices$Createchargeinvoice, options: MethodOptions | BodyResponseCallback<Schema$OrderinvoicesCreateChargeInvoiceResponse>, callback: BodyResponseCallback<Schema$OrderinvoicesCreateChargeInvoiceResponse>): void;
        createchargeinvoice(params: Params$Resource$Orderinvoices$Createchargeinvoice, callback: BodyResponseCallback<Schema$OrderinvoicesCreateChargeInvoiceResponse>): void;
        createchargeinvoice(callback: BodyResponseCallback<Schema$OrderinvoicesCreateChargeInvoiceResponse>): void;
        /**
         * content.orderinvoices.createrefundinvoice
         * @desc Creates a refund invoice for one or more shipment groups, and
         * triggers a refund for non-facilitated payment orders. This can only be
         * used for line items that have previously been charged using
         * createChargeInvoice. All amounts (except for the summary) are incremental
         * with respect to the previous invoice.
         * @alias content.orderinvoices.createrefundinvoice
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order.
         * @param {().OrderinvoicesCreateRefundInvoiceRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        createrefundinvoice(params?: Params$Resource$Orderinvoices$Createrefundinvoice, options?: MethodOptions): GaxiosPromise<Schema$OrderinvoicesCreateRefundInvoiceResponse>;
        createrefundinvoice(params: Params$Resource$Orderinvoices$Createrefundinvoice, options: MethodOptions | BodyResponseCallback<Schema$OrderinvoicesCreateRefundInvoiceResponse>, callback: BodyResponseCallback<Schema$OrderinvoicesCreateRefundInvoiceResponse>): void;
        createrefundinvoice(params: Params$Resource$Orderinvoices$Createrefundinvoice, callback: BodyResponseCallback<Schema$OrderinvoicesCreateRefundInvoiceResponse>): void;
        createrefundinvoice(callback: BodyResponseCallback<Schema$OrderinvoicesCreateRefundInvoiceResponse>): void;
    }
    interface Params$Resource$Orderinvoices$Createchargeinvoice extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrderinvoicesCreateChargeInvoiceRequest;
    }
    interface Params$Resource$Orderinvoices$Createrefundinvoice extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrderinvoicesCreateRefundInvoiceRequest;
    }
    class Resource$Orderpayments {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * content.orderpayments.notifyauthapproved
         * @desc Notify about successfully authorizing user's payment method for a
         * given amount.
         * @alias content.orderpayments.notifyauthapproved
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order for for which payment authorization is happening.
         * @param {().OrderpaymentsNotifyAuthApprovedRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        notifyauthapproved(params?: Params$Resource$Orderpayments$Notifyauthapproved, options?: MethodOptions): GaxiosPromise<Schema$OrderpaymentsNotifyAuthApprovedResponse>;
        notifyauthapproved(params: Params$Resource$Orderpayments$Notifyauthapproved, options: MethodOptions | BodyResponseCallback<Schema$OrderpaymentsNotifyAuthApprovedResponse>, callback: BodyResponseCallback<Schema$OrderpaymentsNotifyAuthApprovedResponse>): void;
        notifyauthapproved(params: Params$Resource$Orderpayments$Notifyauthapproved, callback: BodyResponseCallback<Schema$OrderpaymentsNotifyAuthApprovedResponse>): void;
        notifyauthapproved(callback: BodyResponseCallback<Schema$OrderpaymentsNotifyAuthApprovedResponse>): void;
        /**
         * content.orderpayments.notifyauthdeclined
         * @desc Notify about failure to authorize user's payment method.
         * @alias content.orderpayments.notifyauthdeclined
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order for which payment authorization was declined.
         * @param {().OrderpaymentsNotifyAuthDeclinedRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        notifyauthdeclined(params?: Params$Resource$Orderpayments$Notifyauthdeclined, options?: MethodOptions): GaxiosPromise<Schema$OrderpaymentsNotifyAuthDeclinedResponse>;
        notifyauthdeclined(params: Params$Resource$Orderpayments$Notifyauthdeclined, options: MethodOptions | BodyResponseCallback<Schema$OrderpaymentsNotifyAuthDeclinedResponse>, callback: BodyResponseCallback<Schema$OrderpaymentsNotifyAuthDeclinedResponse>): void;
        notifyauthdeclined(params: Params$Resource$Orderpayments$Notifyauthdeclined, callback: BodyResponseCallback<Schema$OrderpaymentsNotifyAuthDeclinedResponse>): void;
        notifyauthdeclined(callback: BodyResponseCallback<Schema$OrderpaymentsNotifyAuthDeclinedResponse>): void;
        /**
         * content.orderpayments.notifycharge
         * @desc Notify about charge on user's selected payments method.
         * @alias content.orderpayments.notifycharge
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order for which charge is happening.
         * @param {().OrderpaymentsNotifyChargeRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        notifycharge(params?: Params$Resource$Orderpayments$Notifycharge, options?: MethodOptions): GaxiosPromise<Schema$OrderpaymentsNotifyChargeResponse>;
        notifycharge(params: Params$Resource$Orderpayments$Notifycharge, options: MethodOptions | BodyResponseCallback<Schema$OrderpaymentsNotifyChargeResponse>, callback: BodyResponseCallback<Schema$OrderpaymentsNotifyChargeResponse>): void;
        notifycharge(params: Params$Resource$Orderpayments$Notifycharge, callback: BodyResponseCallback<Schema$OrderpaymentsNotifyChargeResponse>): void;
        notifycharge(callback: BodyResponseCallback<Schema$OrderpaymentsNotifyChargeResponse>): void;
        /**
         * content.orderpayments.notifyrefund
         * @desc Notify about refund on user's selected payments method.
         * @alias content.orderpayments.notifyrefund
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order for which charge is happening.
         * @param {().OrderpaymentsNotifyRefundRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        notifyrefund(params?: Params$Resource$Orderpayments$Notifyrefund, options?: MethodOptions): GaxiosPromise<Schema$OrderpaymentsNotifyRefundResponse>;
        notifyrefund(params: Params$Resource$Orderpayments$Notifyrefund, options: MethodOptions | BodyResponseCallback<Schema$OrderpaymentsNotifyRefundResponse>, callback: BodyResponseCallback<Schema$OrderpaymentsNotifyRefundResponse>): void;
        notifyrefund(params: Params$Resource$Orderpayments$Notifyrefund, callback: BodyResponseCallback<Schema$OrderpaymentsNotifyRefundResponse>): void;
        notifyrefund(callback: BodyResponseCallback<Schema$OrderpaymentsNotifyRefundResponse>): void;
    }
    interface Params$Resource$Orderpayments$Notifyauthapproved extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order for for which payment authorization is happening.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrderpaymentsNotifyAuthApprovedRequest;
    }
    interface Params$Resource$Orderpayments$Notifyauthdeclined extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order for which payment authorization was declined.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrderpaymentsNotifyAuthDeclinedRequest;
    }
    interface Params$Resource$Orderpayments$Notifycharge extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order for which charge is happening.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrderpaymentsNotifyChargeRequest;
    }
    interface Params$Resource$Orderpayments$Notifyrefund extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order for which charge is happening.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrderpaymentsNotifyRefundRequest;
    }
    class Resource$Orderreports {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * content.orderreports.listdisbursements
         * @desc Retrieves a report for disbursements from your Merchant Center
         * account.
         * @alias content.orderreports.listdisbursements
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.disbursementEndDate The last date which disbursements occurred. In ISO 8601 format. Default: current date.
         * @param {string} params.disbursementStartDate The first date which disbursements occurred. In ISO 8601 format.
         * @param {integer=} params.maxResults The maximum number of disbursements to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listdisbursements(params?: Params$Resource$Orderreports$Listdisbursements, options?: MethodOptions): GaxiosPromise<Schema$OrderreportsListDisbursementsResponse>;
        listdisbursements(params: Params$Resource$Orderreports$Listdisbursements, options: MethodOptions | BodyResponseCallback<Schema$OrderreportsListDisbursementsResponse>, callback: BodyResponseCallback<Schema$OrderreportsListDisbursementsResponse>): void;
        listdisbursements(params: Params$Resource$Orderreports$Listdisbursements, callback: BodyResponseCallback<Schema$OrderreportsListDisbursementsResponse>): void;
        listdisbursements(callback: BodyResponseCallback<Schema$OrderreportsListDisbursementsResponse>): void;
        /**
         * content.orderreports.listtransactions
         * @desc Retrieves a list of transactions for a disbursement from your
         * Merchant Center account.
         * @alias content.orderreports.listtransactions
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.disbursementId The Google-provided ID of the disbursement (found in Wallet).
         * @param {integer=} params.maxResults The maximum number of disbursements to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {string=} params.transactionEndDate The last date in which transaction occurred. In ISO 8601 format. Default: current date.
         * @param {string} params.transactionStartDate The first date in which transaction occurred. In ISO 8601 format.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listtransactions(params?: Params$Resource$Orderreports$Listtransactions, options?: MethodOptions): GaxiosPromise<Schema$OrderreportsListTransactionsResponse>;
        listtransactions(params: Params$Resource$Orderreports$Listtransactions, options: MethodOptions | BodyResponseCallback<Schema$OrderreportsListTransactionsResponse>, callback: BodyResponseCallback<Schema$OrderreportsListTransactionsResponse>): void;
        listtransactions(params: Params$Resource$Orderreports$Listtransactions, callback: BodyResponseCallback<Schema$OrderreportsListTransactionsResponse>): void;
        listtransactions(callback: BodyResponseCallback<Schema$OrderreportsListTransactionsResponse>): void;
    }
    interface Params$Resource$Orderreports$Listdisbursements extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The last date which disbursements occurred. In ISO 8601 format. Default:
         * current date.
         */
        disbursementEndDate?: string;
        /**
         * The first date which disbursements occurred. In ISO 8601 format.
         */
        disbursementStartDate?: string;
        /**
         * The maximum number of disbursements to return in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    interface Params$Resource$Orderreports$Listtransactions extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The Google-provided ID of the disbursement (found in Wallet).
         */
        disbursementId?: string;
        /**
         * The maximum number of disbursements to return in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
        /**
         * The last date in which transaction occurred. In ISO 8601 format. Default:
         * current date.
         */
        transactionEndDate?: string;
        /**
         * The first date in which transaction occurred. In ISO 8601 format.
         */
        transactionStartDate?: string;
    }
    class Resource$Orderreturns {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * content.orderreturns.get
         * @desc Retrieves an order return from your Merchant Center account.
         * @alias content.orderreturns.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.returnId Merchant order return ID generated by Google.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Orderreturns$Get, options?: MethodOptions): GaxiosPromise<Schema$MerchantOrderReturn>;
        get(params: Params$Resource$Orderreturns$Get, options: MethodOptions | BodyResponseCallback<Schema$MerchantOrderReturn>, callback: BodyResponseCallback<Schema$MerchantOrderReturn>): void;
        get(params: Params$Resource$Orderreturns$Get, callback: BodyResponseCallback<Schema$MerchantOrderReturn>): void;
        get(callback: BodyResponseCallback<Schema$MerchantOrderReturn>): void;
        /**
         * content.orderreturns.list
         * @desc Lists order returns in your Merchant Center account.
         * @alias content.orderreturns.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.createdEndDate Obtains order returns created before this date (inclusively), in ISO 8601 format.
         * @param {string=} params.createdStartDate Obtains order returns created after this date (inclusively), in ISO 8601 format.
         * @param {integer=} params.maxResults The maximum number of order returns to return in the response, used for paging. The default value is 25 returns per page, and the maximum allowed value is 250 returns per page.
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string=} params.orderBy Return the results in the specified order.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Orderreturns$List, options?: MethodOptions): GaxiosPromise<Schema$OrderreturnsListResponse>;
        list(params: Params$Resource$Orderreturns$List, options: MethodOptions | BodyResponseCallback<Schema$OrderreturnsListResponse>, callback: BodyResponseCallback<Schema$OrderreturnsListResponse>): void;
        list(params: Params$Resource$Orderreturns$List, callback: BodyResponseCallback<Schema$OrderreturnsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$OrderreturnsListResponse>): void;
    }
    interface Params$Resource$Orderreturns$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * Merchant order return ID generated by Google.
         */
        returnId?: string;
    }
    interface Params$Resource$Orderreturns$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Obtains order returns created before this date (inclusively), in ISO 8601
         * format.
         */
        createdEndDate?: string;
        /**
         * Obtains order returns created after this date (inclusively), in ISO 8601
         * format.
         */
        createdStartDate?: string;
        /**
         * The maximum number of order returns to return in the response, used for
         * paging. The default value is 25 returns per page, and the maximum allowed
         * value is 250 returns per page.
         */
        maxResults?: number;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * Return the results in the specified order.
         */
        orderBy?: string;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    class Resource$Orders {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * content.orders.acknowledge
         * @desc Marks an order as acknowledged.
         * @alias content.orders.acknowledge
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order.
         * @param {().OrdersAcknowledgeRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        acknowledge(params?: Params$Resource$Orders$Acknowledge, options?: MethodOptions): GaxiosPromise<Schema$OrdersAcknowledgeResponse>;
        acknowledge(params: Params$Resource$Orders$Acknowledge, options: MethodOptions | BodyResponseCallback<Schema$OrdersAcknowledgeResponse>, callback: BodyResponseCallback<Schema$OrdersAcknowledgeResponse>): void;
        acknowledge(params: Params$Resource$Orders$Acknowledge, callback: BodyResponseCallback<Schema$OrdersAcknowledgeResponse>): void;
        acknowledge(callback: BodyResponseCallback<Schema$OrdersAcknowledgeResponse>): void;
        /**
         * content.orders.advancetestorder
         * @desc Sandbox only. Moves a test order from state "inProgress" to state
         * "pendingShipment".
         * @alias content.orders.advancetestorder
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the test order to modify.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        advancetestorder(params?: Params$Resource$Orders$Advancetestorder, options?: MethodOptions): GaxiosPromise<Schema$OrdersAdvanceTestOrderResponse>;
        advancetestorder(params: Params$Resource$Orders$Advancetestorder, options: MethodOptions | BodyResponseCallback<Schema$OrdersAdvanceTestOrderResponse>, callback: BodyResponseCallback<Schema$OrdersAdvanceTestOrderResponse>): void;
        advancetestorder(params: Params$Resource$Orders$Advancetestorder, callback: BodyResponseCallback<Schema$OrdersAdvanceTestOrderResponse>): void;
        advancetestorder(callback: BodyResponseCallback<Schema$OrdersAdvanceTestOrderResponse>): void;
        /**
         * content.orders.cancel
         * @desc Cancels all line items in an order, making a full refund.
         * @alias content.orders.cancel
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order to cancel.
         * @param {().OrdersCancelRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancel(params?: Params$Resource$Orders$Cancel, options?: MethodOptions): GaxiosPromise<Schema$OrdersCancelResponse>;
        cancel(params: Params$Resource$Orders$Cancel, options: MethodOptions | BodyResponseCallback<Schema$OrdersCancelResponse>, callback: BodyResponseCallback<Schema$OrdersCancelResponse>): void;
        cancel(params: Params$Resource$Orders$Cancel, callback: BodyResponseCallback<Schema$OrdersCancelResponse>): void;
        cancel(callback: BodyResponseCallback<Schema$OrdersCancelResponse>): void;
        /**
         * content.orders.cancellineitem
         * @desc Cancels a line item, making a full refund.
         * @alias content.orders.cancellineitem
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order.
         * @param {().OrdersCancelLineItemRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancellineitem(params?: Params$Resource$Orders$Cancellineitem, options?: MethodOptions): GaxiosPromise<Schema$OrdersCancelLineItemResponse>;
        cancellineitem(params: Params$Resource$Orders$Cancellineitem, options: MethodOptions | BodyResponseCallback<Schema$OrdersCancelLineItemResponse>, callback: BodyResponseCallback<Schema$OrdersCancelLineItemResponse>): void;
        cancellineitem(params: Params$Resource$Orders$Cancellineitem, callback: BodyResponseCallback<Schema$OrdersCancelLineItemResponse>): void;
        cancellineitem(callback: BodyResponseCallback<Schema$OrdersCancelLineItemResponse>): void;
        /**
         * content.orders.canceltestorderbycustomer
         * @desc Sandbox only. Cancels a test order for customer-initiated
         * cancellation.
         * @alias content.orders.canceltestorderbycustomer
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the test order to cancel.
         * @param {().OrdersCancelTestOrderByCustomerRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        canceltestorderbycustomer(params?: Params$Resource$Orders$Canceltestorderbycustomer, options?: MethodOptions): GaxiosPromise<Schema$OrdersCancelTestOrderByCustomerResponse>;
        canceltestorderbycustomer(params: Params$Resource$Orders$Canceltestorderbycustomer, options: MethodOptions | BodyResponseCallback<Schema$OrdersCancelTestOrderByCustomerResponse>, callback: BodyResponseCallback<Schema$OrdersCancelTestOrderByCustomerResponse>): void;
        canceltestorderbycustomer(params: Params$Resource$Orders$Canceltestorderbycustomer, callback: BodyResponseCallback<Schema$OrdersCancelTestOrderByCustomerResponse>): void;
        canceltestorderbycustomer(callback: BodyResponseCallback<Schema$OrdersCancelTestOrderByCustomerResponse>): void;
        /**
         * content.orders.createtestorder
         * @desc Sandbox only. Creates a test order.
         * @alias content.orders.createtestorder
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that should manage the order. This cannot be a multi-client account.
         * @param {().OrdersCreateTestOrderRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        createtestorder(params?: Params$Resource$Orders$Createtestorder, options?: MethodOptions): GaxiosPromise<Schema$OrdersCreateTestOrderResponse>;
        createtestorder(params: Params$Resource$Orders$Createtestorder, options: MethodOptions | BodyResponseCallback<Schema$OrdersCreateTestOrderResponse>, callback: BodyResponseCallback<Schema$OrdersCreateTestOrderResponse>): void;
        createtestorder(params: Params$Resource$Orders$Createtestorder, callback: BodyResponseCallback<Schema$OrdersCreateTestOrderResponse>): void;
        createtestorder(callback: BodyResponseCallback<Schema$OrdersCreateTestOrderResponse>): void;
        /**
         * content.orders.createtestreturn
         * @desc Sandbox only. Creates a test return.
         * @alias content.orders.createtestreturn
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order.
         * @param {().OrdersCreateTestReturnRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        createtestreturn(params?: Params$Resource$Orders$Createtestreturn, options?: MethodOptions): GaxiosPromise<Schema$OrdersCreateTestReturnResponse>;
        createtestreturn(params: Params$Resource$Orders$Createtestreturn, options: MethodOptions | BodyResponseCallback<Schema$OrdersCreateTestReturnResponse>, callback: BodyResponseCallback<Schema$OrdersCreateTestReturnResponse>): void;
        createtestreturn(params: Params$Resource$Orders$Createtestreturn, callback: BodyResponseCallback<Schema$OrdersCreateTestReturnResponse>): void;
        createtestreturn(callback: BodyResponseCallback<Schema$OrdersCreateTestReturnResponse>): void;
        /**
         * content.orders.custombatch
         * @desc Retrieves or modifies multiple orders in a single request.
         * @alias content.orders.custombatch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().OrdersCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch(params?: Params$Resource$Orders$Custombatch, options?: MethodOptions): GaxiosPromise<Schema$OrdersCustomBatchResponse>;
        custombatch(params: Params$Resource$Orders$Custombatch, options: MethodOptions | BodyResponseCallback<Schema$OrdersCustomBatchResponse>, callback: BodyResponseCallback<Schema$OrdersCustomBatchResponse>): void;
        custombatch(params: Params$Resource$Orders$Custombatch, callback: BodyResponseCallback<Schema$OrdersCustomBatchResponse>): void;
        custombatch(callback: BodyResponseCallback<Schema$OrdersCustomBatchResponse>): void;
        /**
         * content.orders.get
         * @desc Retrieves an order from your Merchant Center account.
         * @alias content.orders.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Orders$Get, options?: MethodOptions): GaxiosPromise<Schema$Order>;
        get(params: Params$Resource$Orders$Get, options: MethodOptions | BodyResponseCallback<Schema$Order>, callback: BodyResponseCallback<Schema$Order>): void;
        get(params: Params$Resource$Orders$Get, callback: BodyResponseCallback<Schema$Order>): void;
        get(callback: BodyResponseCallback<Schema$Order>): void;
        /**
         * content.orders.getbymerchantorderid
         * @desc Retrieves an order using merchant order ID.
         * @alias content.orders.getbymerchantorderid
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.merchantOrderId The merchant order ID to be looked for.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getbymerchantorderid(params?: Params$Resource$Orders$Getbymerchantorderid, options?: MethodOptions): GaxiosPromise<Schema$OrdersGetByMerchantOrderIdResponse>;
        getbymerchantorderid(params: Params$Resource$Orders$Getbymerchantorderid, options: MethodOptions | BodyResponseCallback<Schema$OrdersGetByMerchantOrderIdResponse>, callback: BodyResponseCallback<Schema$OrdersGetByMerchantOrderIdResponse>): void;
        getbymerchantorderid(params: Params$Resource$Orders$Getbymerchantorderid, callback: BodyResponseCallback<Schema$OrdersGetByMerchantOrderIdResponse>): void;
        getbymerchantorderid(callback: BodyResponseCallback<Schema$OrdersGetByMerchantOrderIdResponse>): void;
        /**
         * content.orders.gettestordertemplate
         * @desc Sandbox only. Retrieves an order template that can be used to
         * quickly create a new order in sandbox.
         * @alias content.orders.gettestordertemplate
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.country The country of the template to retrieve. Defaults to US.
         * @param {string} params.merchantId The ID of the account that should manage the order. This cannot be a multi-client account.
         * @param {string} params.templateName The name of the template to retrieve.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        gettestordertemplate(params?: Params$Resource$Orders$Gettestordertemplate, options?: MethodOptions): GaxiosPromise<Schema$OrdersGetTestOrderTemplateResponse>;
        gettestordertemplate(params: Params$Resource$Orders$Gettestordertemplate, options: MethodOptions | BodyResponseCallback<Schema$OrdersGetTestOrderTemplateResponse>, callback: BodyResponseCallback<Schema$OrdersGetTestOrderTemplateResponse>): void;
        gettestordertemplate(params: Params$Resource$Orders$Gettestordertemplate, callback: BodyResponseCallback<Schema$OrdersGetTestOrderTemplateResponse>): void;
        gettestordertemplate(callback: BodyResponseCallback<Schema$OrdersGetTestOrderTemplateResponse>): void;
        /**
         * content.orders.instorerefundlineitem
         * @desc Notifies that item return and refund was handled directly by
         * merchant outside of Google payments processing (e.g. cash refund done in
         * store). Note: We recommend calling the returnrefundlineitem method to
         * refund in-store returns. We will issue the refund directly to the
         * customer. This helps to prevent possible differences arising between
         * merchant and Google transaction records. We also recommend having the
         * point of sale system communicate with Google to ensure that customers do
         * not receive a double refund by first refunding via Google then via an
         * in-store return.
         * @alias content.orders.instorerefundlineitem
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order.
         * @param {().OrdersInStoreRefundLineItemRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        instorerefundlineitem(params?: Params$Resource$Orders$Instorerefundlineitem, options?: MethodOptions): GaxiosPromise<Schema$OrdersInStoreRefundLineItemResponse>;
        instorerefundlineitem(params: Params$Resource$Orders$Instorerefundlineitem, options: MethodOptions | BodyResponseCallback<Schema$OrdersInStoreRefundLineItemResponse>, callback: BodyResponseCallback<Schema$OrdersInStoreRefundLineItemResponse>): void;
        instorerefundlineitem(params: Params$Resource$Orders$Instorerefundlineitem, callback: BodyResponseCallback<Schema$OrdersInStoreRefundLineItemResponse>): void;
        instorerefundlineitem(callback: BodyResponseCallback<Schema$OrdersInStoreRefundLineItemResponse>): void;
        /**
         * content.orders.list
         * @desc Lists the orders in your Merchant Center account.
         * @alias content.orders.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.acknowledged Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that have not been acknowledged. We recommend using this filter set to false, in conjunction with the acknowledge call, such that only un-acknowledged orders are returned.
         * @param {integer=} params.maxResults The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250 orders per page. Known issue: All List calls will return all Orders without limit regardless of the value of this field.
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string=} params.orderBy The ordering of the returned list. The only supported value are placedDate desc and placedDate asc for now, which returns orders sorted by placement date. "placedDate desc" stands for listing orders by placement date, from oldest to most recent. "placedDate asc" stands for listing orders by placement date, from most recent to oldest. In future releases we'll support other sorting criteria.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {string=} params.placedDateEnd Obtains orders placed before this date (exclusively), in ISO 8601 format.
         * @param {string=} params.placedDateStart Obtains orders placed after this date (inclusively), in ISO 8601 format.
         * @param {string=} params.statuses Obtains orders that match any of the specified statuses. Multiple values can be specified with comma separation. Additionally, please note that active is a shortcut for pendingShipment and partiallyShipped, and completed is a shortcut for shipped , partiallyDelivered, delivered, partiallyReturned, returned, and canceled.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Orders$List, options?: MethodOptions): GaxiosPromise<Schema$OrdersListResponse>;
        list(params: Params$Resource$Orders$List, options: MethodOptions | BodyResponseCallback<Schema$OrdersListResponse>, callback: BodyResponseCallback<Schema$OrdersListResponse>): void;
        list(params: Params$Resource$Orders$List, callback: BodyResponseCallback<Schema$OrdersListResponse>): void;
        list(callback: BodyResponseCallback<Schema$OrdersListResponse>): void;
        /**
         * content.orders.refund
         * @desc Deprecated, please use returnRefundLineItem instead.
         * @alias content.orders.refund
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order to refund.
         * @param {().OrdersRefundRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        refund(params?: Params$Resource$Orders$Refund, options?: MethodOptions): GaxiosPromise<Schema$OrdersRefundResponse>;
        refund(params: Params$Resource$Orders$Refund, options: MethodOptions | BodyResponseCallback<Schema$OrdersRefundResponse>, callback: BodyResponseCallback<Schema$OrdersRefundResponse>): void;
        refund(params: Params$Resource$Orders$Refund, callback: BodyResponseCallback<Schema$OrdersRefundResponse>): void;
        refund(callback: BodyResponseCallback<Schema$OrdersRefundResponse>): void;
        /**
         * content.orders.rejectreturnlineitem
         * @desc Rejects return on an line item.
         * @alias content.orders.rejectreturnlineitem
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order.
         * @param {().OrdersRejectReturnLineItemRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        rejectreturnlineitem(params?: Params$Resource$Orders$Rejectreturnlineitem, options?: MethodOptions): GaxiosPromise<Schema$OrdersRejectReturnLineItemResponse>;
        rejectreturnlineitem(params: Params$Resource$Orders$Rejectreturnlineitem, options: MethodOptions | BodyResponseCallback<Schema$OrdersRejectReturnLineItemResponse>, callback: BodyResponseCallback<Schema$OrdersRejectReturnLineItemResponse>): void;
        rejectreturnlineitem(params: Params$Resource$Orders$Rejectreturnlineitem, callback: BodyResponseCallback<Schema$OrdersRejectReturnLineItemResponse>): void;
        rejectreturnlineitem(callback: BodyResponseCallback<Schema$OrdersRejectReturnLineItemResponse>): void;
        /**
         * content.orders.returnlineitem
         * @desc Returns a line item.
         * @alias content.orders.returnlineitem
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order.
         * @param {().OrdersReturnLineItemRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        returnlineitem(params?: Params$Resource$Orders$Returnlineitem, options?: MethodOptions): GaxiosPromise<Schema$OrdersReturnLineItemResponse>;
        returnlineitem(params: Params$Resource$Orders$Returnlineitem, options: MethodOptions | BodyResponseCallback<Schema$OrdersReturnLineItemResponse>, callback: BodyResponseCallback<Schema$OrdersReturnLineItemResponse>): void;
        returnlineitem(params: Params$Resource$Orders$Returnlineitem, callback: BodyResponseCallback<Schema$OrdersReturnLineItemResponse>): void;
        returnlineitem(callback: BodyResponseCallback<Schema$OrdersReturnLineItemResponse>): void;
        /**
         * content.orders.returnrefundlineitem
         * @desc Returns and refunds a line item. Note that this method can only be
         * called on fully shipped orders.
         * @alias content.orders.returnrefundlineitem
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order.
         * @param {().OrdersReturnRefundLineItemRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        returnrefundlineitem(params?: Params$Resource$Orders$Returnrefundlineitem, options?: MethodOptions): GaxiosPromise<Schema$OrdersReturnRefundLineItemResponse>;
        returnrefundlineitem(params: Params$Resource$Orders$Returnrefundlineitem, options: MethodOptions | BodyResponseCallback<Schema$OrdersReturnRefundLineItemResponse>, callback: BodyResponseCallback<Schema$OrdersReturnRefundLineItemResponse>): void;
        returnrefundlineitem(params: Params$Resource$Orders$Returnrefundlineitem, callback: BodyResponseCallback<Schema$OrdersReturnRefundLineItemResponse>): void;
        returnrefundlineitem(callback: BodyResponseCallback<Schema$OrdersReturnRefundLineItemResponse>): void;
        /**
         * content.orders.setlineitemmetadata
         * @desc Sets (or overrides if it already exists) merchant provided
         * annotations in the form of key-value pairs. A common use case would be to
         * supply us with additional structured information about a line item that
         * cannot be provided via other methods. Submitted key-value pairs can be
         * retrieved as part of the orders resource.
         * @alias content.orders.setlineitemmetadata
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order.
         * @param {().OrdersSetLineItemMetadataRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setlineitemmetadata(params?: Params$Resource$Orders$Setlineitemmetadata, options?: MethodOptions): GaxiosPromise<Schema$OrdersSetLineItemMetadataResponse>;
        setlineitemmetadata(params: Params$Resource$Orders$Setlineitemmetadata, options: MethodOptions | BodyResponseCallback<Schema$OrdersSetLineItemMetadataResponse>, callback: BodyResponseCallback<Schema$OrdersSetLineItemMetadataResponse>): void;
        setlineitemmetadata(params: Params$Resource$Orders$Setlineitemmetadata, callback: BodyResponseCallback<Schema$OrdersSetLineItemMetadataResponse>): void;
        setlineitemmetadata(callback: BodyResponseCallback<Schema$OrdersSetLineItemMetadataResponse>): void;
        /**
         * content.orders.shiplineitems
         * @desc Marks line item(s) as shipped.
         * @alias content.orders.shiplineitems
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order.
         * @param {().OrdersShipLineItemsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        shiplineitems(params?: Params$Resource$Orders$Shiplineitems, options?: MethodOptions): GaxiosPromise<Schema$OrdersShipLineItemsResponse>;
        shiplineitems(params: Params$Resource$Orders$Shiplineitems, options: MethodOptions | BodyResponseCallback<Schema$OrdersShipLineItemsResponse>, callback: BodyResponseCallback<Schema$OrdersShipLineItemsResponse>): void;
        shiplineitems(params: Params$Resource$Orders$Shiplineitems, callback: BodyResponseCallback<Schema$OrdersShipLineItemsResponse>): void;
        shiplineitems(callback: BodyResponseCallback<Schema$OrdersShipLineItemsResponse>): void;
        /**
         * content.orders.updatelineitemshippingdetails
         * @desc Updates ship by and delivery by dates for a line item.
         * @alias content.orders.updatelineitemshippingdetails
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order.
         * @param {().OrdersUpdateLineItemShippingDetailsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updatelineitemshippingdetails(params?: Params$Resource$Orders$Updatelineitemshippingdetails, options?: MethodOptions): GaxiosPromise<Schema$OrdersUpdateLineItemShippingDetailsResponse>;
        updatelineitemshippingdetails(params: Params$Resource$Orders$Updatelineitemshippingdetails, options: MethodOptions | BodyResponseCallback<Schema$OrdersUpdateLineItemShippingDetailsResponse>, callback: BodyResponseCallback<Schema$OrdersUpdateLineItemShippingDetailsResponse>): void;
        updatelineitemshippingdetails(params: Params$Resource$Orders$Updatelineitemshippingdetails, callback: BodyResponseCallback<Schema$OrdersUpdateLineItemShippingDetailsResponse>): void;
        updatelineitemshippingdetails(callback: BodyResponseCallback<Schema$OrdersUpdateLineItemShippingDetailsResponse>): void;
        /**
         * content.orders.updatemerchantorderid
         * @desc Updates the merchant order ID for a given order.
         * @alias content.orders.updatemerchantorderid
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order.
         * @param {().OrdersUpdateMerchantOrderIdRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updatemerchantorderid(params?: Params$Resource$Orders$Updatemerchantorderid, options?: MethodOptions): GaxiosPromise<Schema$OrdersUpdateMerchantOrderIdResponse>;
        updatemerchantorderid(params: Params$Resource$Orders$Updatemerchantorderid, options: MethodOptions | BodyResponseCallback<Schema$OrdersUpdateMerchantOrderIdResponse>, callback: BodyResponseCallback<Schema$OrdersUpdateMerchantOrderIdResponse>): void;
        updatemerchantorderid(params: Params$Resource$Orders$Updatemerchantorderid, callback: BodyResponseCallback<Schema$OrdersUpdateMerchantOrderIdResponse>): void;
        updatemerchantorderid(callback: BodyResponseCallback<Schema$OrdersUpdateMerchantOrderIdResponse>): void;
        /**
         * content.orders.updateshipment
         * @desc Updates a shipment's status, carrier, and/or tracking ID.
         * @alias content.orders.updateshipment
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
         * @param {string} params.orderId The ID of the order.
         * @param {().OrdersUpdateShipmentRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateshipment(params?: Params$Resource$Orders$Updateshipment, options?: MethodOptions): GaxiosPromise<Schema$OrdersUpdateShipmentResponse>;
        updateshipment(params: Params$Resource$Orders$Updateshipment, options: MethodOptions | BodyResponseCallback<Schema$OrdersUpdateShipmentResponse>, callback: BodyResponseCallback<Schema$OrdersUpdateShipmentResponse>): void;
        updateshipment(params: Params$Resource$Orders$Updateshipment, callback: BodyResponseCallback<Schema$OrdersUpdateShipmentResponse>): void;
        updateshipment(callback: BodyResponseCallback<Schema$OrdersUpdateShipmentResponse>): void;
    }
    interface Params$Resource$Orders$Acknowledge extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrdersAcknowledgeRequest;
    }
    interface Params$Resource$Orders$Advancetestorder extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the test order to modify.
         */
        orderId?: string;
    }
    interface Params$Resource$Orders$Cancel extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order to cancel.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrdersCancelRequest;
    }
    interface Params$Resource$Orders$Cancellineitem extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrdersCancelLineItemRequest;
    }
    interface Params$Resource$Orders$Canceltestorderbycustomer extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the test order to cancel.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrdersCancelTestOrderByCustomerRequest;
    }
    interface Params$Resource$Orders$Createtestorder extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that should manage the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrdersCreateTestOrderRequest;
    }
    interface Params$Resource$Orders$Createtestreturn extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrdersCreateTestReturnRequest;
    }
    interface Params$Resource$Orders$Custombatch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrdersCustomBatchRequest;
    }
    interface Params$Resource$Orders$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order.
         */
        orderId?: string;
    }
    interface Params$Resource$Orders$Getbymerchantorderid extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The merchant order ID to be looked for.
         */
        merchantOrderId?: string;
    }
    interface Params$Resource$Orders$Gettestordertemplate extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The country of the template to retrieve. Defaults to US.
         */
        country?: string;
        /**
         * The ID of the account that should manage the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The name of the template to retrieve.
         */
        templateName?: string;
    }
    interface Params$Resource$Orders$Instorerefundlineitem extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrdersInStoreRefundLineItemRequest;
    }
    interface Params$Resource$Orders$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Obtains orders that match the acknowledgement status. When set to true,
         * obtains orders that have been acknowledged. When false, obtains orders
         * that have not been acknowledged. We recommend using this filter set to
         * false, in conjunction with the acknowledge call, such that only
         * un-acknowledged orders are returned.
         */
        acknowledged?: boolean;
        /**
         * The maximum number of orders to return in the response, used for paging.
         * The default value is 25 orders per page, and the maximum allowed value is
         * 250 orders per page. Known issue: All List calls will return all Orders
         * without limit regardless of the value of this field.
         */
        maxResults?: number;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ordering of the returned list. The only supported value are
         * placedDate desc and placedDate asc for now, which returns orders sorted
         * by placement date. "placedDate desc" stands for listing orders by
         * placement date, from oldest to most recent. "placedDate asc" stands for
         * listing orders by placement date, from most recent to oldest. In future
         * releases we'll support other sorting criteria.
         */
        orderBy?: string;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
        /**
         * Obtains orders placed before this date (exclusively), in ISO 8601 format.
         */
        placedDateEnd?: string;
        /**
         * Obtains orders placed after this date (inclusively), in ISO 8601 format.
         */
        placedDateStart?: string;
        /**
         * Obtains orders that match any of the specified statuses. Multiple values
         * can be specified with comma separation. Additionally, please note that
         * active is a shortcut for pendingShipment and partiallyShipped, and
         * completed is a shortcut for shipped , partiallyDelivered, delivered,
         * partiallyReturned, returned, and canceled.
         */
        statuses?: string[];
    }
    interface Params$Resource$Orders$Refund extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order to refund.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrdersRefundRequest;
    }
    interface Params$Resource$Orders$Rejectreturnlineitem extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrdersRejectReturnLineItemRequest;
    }
    interface Params$Resource$Orders$Returnlineitem extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrdersReturnLineItemRequest;
    }
    interface Params$Resource$Orders$Returnrefundlineitem extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrdersReturnRefundLineItemRequest;
    }
    interface Params$Resource$Orders$Setlineitemmetadata extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrdersSetLineItemMetadataRequest;
    }
    interface Params$Resource$Orders$Shiplineitems extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrdersShipLineItemsRequest;
    }
    interface Params$Resource$Orders$Updatelineitemshippingdetails extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrdersUpdateLineItemShippingDetailsRequest;
    }
    interface Params$Resource$Orders$Updatemerchantorderid extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrdersUpdateMerchantOrderIdRequest;
    }
    interface Params$Resource$Orders$Updateshipment extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that manages the order. This cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The ID of the order.
         */
        orderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrdersUpdateShipmentRequest;
    }
    class Resource$Pos {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * content.pos.custombatch
         * @desc Batches multiple POS-related calls in a single request.
         * @alias content.pos.custombatch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {().PosCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch(params?: Params$Resource$Pos$Custombatch, options?: MethodOptions): GaxiosPromise<Schema$PosCustomBatchResponse>;
        custombatch(params: Params$Resource$Pos$Custombatch, options: MethodOptions | BodyResponseCallback<Schema$PosCustomBatchResponse>, callback: BodyResponseCallback<Schema$PosCustomBatchResponse>): void;
        custombatch(params: Params$Resource$Pos$Custombatch, callback: BodyResponseCallback<Schema$PosCustomBatchResponse>): void;
        custombatch(callback: BodyResponseCallback<Schema$PosCustomBatchResponse>): void;
        /**
         * content.pos.delete
         * @desc Deletes a store for the given merchant.
         * @alias content.pos.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the POS or inventory data provider.
         * @param {string} params.storeCode A store code that is unique per merchant.
         * @param {string} params.targetMerchantId The ID of the target merchant.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Pos$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Pos$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Pos$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * content.pos.get
         * @desc Retrieves information about the given store.
         * @alias content.pos.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the POS or inventory data provider.
         * @param {string} params.storeCode A store code that is unique per merchant.
         * @param {string} params.targetMerchantId The ID of the target merchant.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Pos$Get, options?: MethodOptions): GaxiosPromise<Schema$PosStore>;
        get(params: Params$Resource$Pos$Get, options: MethodOptions | BodyResponseCallback<Schema$PosStore>, callback: BodyResponseCallback<Schema$PosStore>): void;
        get(params: Params$Resource$Pos$Get, callback: BodyResponseCallback<Schema$PosStore>): void;
        get(callback: BodyResponseCallback<Schema$PosStore>): void;
        /**
         * content.pos.insert
         * @desc Creates a store for the given merchant.
         * @alias content.pos.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the POS or inventory data provider.
         * @param {string} params.targetMerchantId The ID of the target merchant.
         * @param {().PosStore} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Pos$Insert, options?: MethodOptions): GaxiosPromise<Schema$PosStore>;
        insert(params: Params$Resource$Pos$Insert, options: MethodOptions | BodyResponseCallback<Schema$PosStore>, callback: BodyResponseCallback<Schema$PosStore>): void;
        insert(params: Params$Resource$Pos$Insert, callback: BodyResponseCallback<Schema$PosStore>): void;
        insert(callback: BodyResponseCallback<Schema$PosStore>): void;
        /**
         * content.pos.inventory
         * @desc Submit inventory for the given merchant.
         * @alias content.pos.inventory
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the POS or inventory data provider.
         * @param {string} params.targetMerchantId The ID of the target merchant.
         * @param {().PosInventoryRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        inventory(params?: Params$Resource$Pos$Inventory, options?: MethodOptions): GaxiosPromise<Schema$PosInventoryResponse>;
        inventory(params: Params$Resource$Pos$Inventory, options: MethodOptions | BodyResponseCallback<Schema$PosInventoryResponse>, callback: BodyResponseCallback<Schema$PosInventoryResponse>): void;
        inventory(params: Params$Resource$Pos$Inventory, callback: BodyResponseCallback<Schema$PosInventoryResponse>): void;
        inventory(callback: BodyResponseCallback<Schema$PosInventoryResponse>): void;
        /**
         * content.pos.list
         * @desc Lists the stores of the target merchant.
         * @alias content.pos.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the POS or inventory data provider.
         * @param {string} params.targetMerchantId The ID of the target merchant.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Pos$List, options?: MethodOptions): GaxiosPromise<Schema$PosListResponse>;
        list(params: Params$Resource$Pos$List, options: MethodOptions | BodyResponseCallback<Schema$PosListResponse>, callback: BodyResponseCallback<Schema$PosListResponse>): void;
        list(params: Params$Resource$Pos$List, callback: BodyResponseCallback<Schema$PosListResponse>): void;
        list(callback: BodyResponseCallback<Schema$PosListResponse>): void;
        /**
         * content.pos.sale
         * @desc Submit a sale event for the given merchant.
         * @alias content.pos.sale
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the POS or inventory data provider.
         * @param {string} params.targetMerchantId The ID of the target merchant.
         * @param {().PosSaleRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        sale(params?: Params$Resource$Pos$Sale, options?: MethodOptions): GaxiosPromise<Schema$PosSaleResponse>;
        sale(params: Params$Resource$Pos$Sale, options: MethodOptions | BodyResponseCallback<Schema$PosSaleResponse>, callback: BodyResponseCallback<Schema$PosSaleResponse>): void;
        sale(params: Params$Resource$Pos$Sale, callback: BodyResponseCallback<Schema$PosSaleResponse>): void;
        sale(callback: BodyResponseCallback<Schema$PosSaleResponse>): void;
    }
    interface Params$Resource$Pos$Custombatch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PosCustomBatchRequest;
    }
    interface Params$Resource$Pos$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the POS or inventory data provider.
         */
        merchantId?: string;
        /**
         * A store code that is unique per merchant.
         */
        storeCode?: string;
        /**
         * The ID of the target merchant.
         */
        targetMerchantId?: string;
    }
    interface Params$Resource$Pos$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the POS or inventory data provider.
         */
        merchantId?: string;
        /**
         * A store code that is unique per merchant.
         */
        storeCode?: string;
        /**
         * The ID of the target merchant.
         */
        targetMerchantId?: string;
    }
    interface Params$Resource$Pos$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the POS or inventory data provider.
         */
        merchantId?: string;
        /**
         * The ID of the target merchant.
         */
        targetMerchantId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PosStore;
    }
    interface Params$Resource$Pos$Inventory extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the POS or inventory data provider.
         */
        merchantId?: string;
        /**
         * The ID of the target merchant.
         */
        targetMerchantId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PosInventoryRequest;
    }
    interface Params$Resource$Pos$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the POS or inventory data provider.
         */
        merchantId?: string;
        /**
         * The ID of the target merchant.
         */
        targetMerchantId?: string;
    }
    interface Params$Resource$Pos$Sale extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the POS or inventory data provider.
         */
        merchantId?: string;
        /**
         * The ID of the target merchant.
         */
        targetMerchantId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PosSaleRequest;
    }
    class Resource$Products {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * content.products.custombatch
         * @desc Retrieves, inserts, and deletes multiple products in a single
         * request.
         * @alias content.products.custombatch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {().ProductsCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch(params?: Params$Resource$Products$Custombatch, options?: MethodOptions): GaxiosPromise<Schema$ProductsCustomBatchResponse>;
        custombatch(params: Params$Resource$Products$Custombatch, options: MethodOptions | BodyResponseCallback<Schema$ProductsCustomBatchResponse>, callback: BodyResponseCallback<Schema$ProductsCustomBatchResponse>): void;
        custombatch(params: Params$Resource$Products$Custombatch, callback: BodyResponseCallback<Schema$ProductsCustomBatchResponse>): void;
        custombatch(callback: BodyResponseCallback<Schema$ProductsCustomBatchResponse>): void;
        /**
         * content.products.delete
         * @desc Deletes a product from your Merchant Center account.
         * @alias content.products.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
         * @param {string} params.productId The REST ID of the product.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Products$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Products$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Products$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * content.products.get
         * @desc Retrieves a product from your Merchant Center account.
         * @alias content.products.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
         * @param {string} params.productId The REST ID of the product.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Products$Get, options?: MethodOptions): GaxiosPromise<Schema$Product>;
        get(params: Params$Resource$Products$Get, options: MethodOptions | BodyResponseCallback<Schema$Product>, callback: BodyResponseCallback<Schema$Product>): void;
        get(params: Params$Resource$Products$Get, callback: BodyResponseCallback<Schema$Product>): void;
        get(callback: BodyResponseCallback<Schema$Product>): void;
        /**
         * content.products.insert
         * @desc Uploads a product to your Merchant Center account. If an item with
         * the same channel, contentLanguage, offerId, and targetCountry already
         * exists, this method updates that entry.
         * @alias content.products.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
         * @param {().Product} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Products$Insert, options?: MethodOptions): GaxiosPromise<Schema$Product>;
        insert(params: Params$Resource$Products$Insert, options: MethodOptions | BodyResponseCallback<Schema$Product>, callback: BodyResponseCallback<Schema$Product>): void;
        insert(params: Params$Resource$Products$Insert, callback: BodyResponseCallback<Schema$Product>): void;
        insert(callback: BodyResponseCallback<Schema$Product>): void;
        /**
         * content.products.list
         * @desc Lists the products in your Merchant Center account.
         * @alias content.products.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.includeInvalidInsertedItems Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
         * @param {integer=} params.maxResults The maximum number of products to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the account that contains the products. This account cannot be a multi-client account.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Products$List, options?: MethodOptions): GaxiosPromise<Schema$ProductsListResponse>;
        list(params: Params$Resource$Products$List, options: MethodOptions | BodyResponseCallback<Schema$ProductsListResponse>, callback: BodyResponseCallback<Schema$ProductsListResponse>): void;
        list(params: Params$Resource$Products$List, callback: BodyResponseCallback<Schema$ProductsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$ProductsListResponse>): void;
    }
    interface Params$Resource$Products$Custombatch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ProductsCustomBatchRequest;
    }
    interface Params$Resource$Products$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the account that contains the product. This account cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The REST ID of the product.
         */
        productId?: string;
    }
    interface Params$Resource$Products$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account that contains the product. This account cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The REST ID of the product.
         */
        productId?: string;
    }
    interface Params$Resource$Products$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the account that contains the product. This account cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Product;
    }
    interface Params$Resource$Products$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to include the invalid inserted items in the result of the list
         * request. By default the invalid items are not shown (the default value is
         * false).
         */
        includeInvalidInsertedItems?: boolean;
        /**
         * The maximum number of products to return in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * The ID of the account that contains the products. This account cannot be
         * a multi-client account.
         */
        merchantId?: string;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    class Resource$Productstatuses {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * content.productstatuses.custombatch
         * @desc Gets the statuses of multiple products in a single request.
         * @alias content.productstatuses.custombatch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.includeAttributes Flag to include full product data in the results of this request. The default value is false.
         * @param {().ProductstatusesCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch(params?: Params$Resource$Productstatuses$Custombatch, options?: MethodOptions): GaxiosPromise<Schema$ProductstatusesCustomBatchResponse>;
        custombatch(params: Params$Resource$Productstatuses$Custombatch, options: MethodOptions | BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>, callback: BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>): void;
        custombatch(params: Params$Resource$Productstatuses$Custombatch, callback: BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>): void;
        custombatch(callback: BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>): void;
        /**
         * content.productstatuses.get
         * @desc Gets the status of a product from your Merchant Center account.
         * @alias content.productstatuses.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
         * @param {boolean=} params.includeAttributes Flag to include full product data in the result of this get request. The default value is false.
         * @param {string} params.merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
         * @param {string} params.productId The REST ID of the product.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Productstatuses$Get, options?: MethodOptions): GaxiosPromise<Schema$ProductStatus>;
        get(params: Params$Resource$Productstatuses$Get, options: MethodOptions | BodyResponseCallback<Schema$ProductStatus>, callback: BodyResponseCallback<Schema$ProductStatus>): void;
        get(params: Params$Resource$Productstatuses$Get, callback: BodyResponseCallback<Schema$ProductStatus>): void;
        get(callback: BodyResponseCallback<Schema$ProductStatus>): void;
        /**
         * content.productstatuses.list
         * @desc Lists the statuses of the products in your Merchant Center account.
         * @alias content.productstatuses.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
         * @param {boolean=} params.includeAttributes Flag to include full product data in the results of the list request. The default value is false.
         * @param {boolean=} params.includeInvalidInsertedItems Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
         * @param {integer=} params.maxResults The maximum number of product statuses to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the account that contains the products. This account cannot be a multi-client account.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Productstatuses$List, options?: MethodOptions): GaxiosPromise<Schema$ProductstatusesListResponse>;
        list(params: Params$Resource$Productstatuses$List, options: MethodOptions | BodyResponseCallback<Schema$ProductstatusesListResponse>, callback: BodyResponseCallback<Schema$ProductstatusesListResponse>): void;
        list(params: Params$Resource$Productstatuses$List, callback: BodyResponseCallback<Schema$ProductstatusesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$ProductstatusesListResponse>): void;
    }
    interface Params$Resource$Productstatuses$Custombatch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to include full product data in the results of this request. The
         * default value is false.
         */
        includeAttributes?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ProductstatusesCustomBatchRequest;
    }
    interface Params$Resource$Productstatuses$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * If set, only issues for the specified destinations are returned,
         * otherwise only issues for the Shopping destination.
         */
        destinations?: string[];
        /**
         * Flag to include full product data in the result of this get request. The
         * default value is false.
         */
        includeAttributes?: boolean;
        /**
         * The ID of the account that contains the product. This account cannot be a
         * multi-client account.
         */
        merchantId?: string;
        /**
         * The REST ID of the product.
         */
        productId?: string;
    }
    interface Params$Resource$Productstatuses$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * If set, only issues for the specified destinations are returned,
         * otherwise only issues for the Shopping destination.
         */
        destinations?: string[];
        /**
         * Flag to include full product data in the results of the list request. The
         * default value is false.
         */
        includeAttributes?: boolean;
        /**
         * Flag to include the invalid inserted items in the result of the list
         * request. By default the invalid items are not shown (the default value is
         * false).
         */
        includeInvalidInsertedItems?: boolean;
        /**
         * The maximum number of product statuses to return in the response, used
         * for paging.
         */
        maxResults?: number;
        /**
         * The ID of the account that contains the products. This account cannot be
         * a multi-client account.
         */
        merchantId?: string;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    class Resource$Shippingsettings {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * content.shippingsettings.custombatch
         * @desc Retrieves and updates the shipping settings of multiple accounts in
         * a single request.
         * @alias content.shippingsettings.custombatch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {().ShippingsettingsCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch(params?: Params$Resource$Shippingsettings$Custombatch, options?: MethodOptions): GaxiosPromise<Schema$ShippingsettingsCustomBatchResponse>;
        custombatch(params: Params$Resource$Shippingsettings$Custombatch, options: MethodOptions | BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>, callback: BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>): void;
        custombatch(params: Params$Resource$Shippingsettings$Custombatch, callback: BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>): void;
        custombatch(callback: BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>): void;
        /**
         * content.shippingsettings.get
         * @desc Retrieves the shipping settings of the account.
         * @alias content.shippingsettings.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account for which to get/update shipping settings.
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Shippingsettings$Get, options?: MethodOptions): GaxiosPromise<Schema$ShippingSettings>;
        get(params: Params$Resource$Shippingsettings$Get, options: MethodOptions | BodyResponseCallback<Schema$ShippingSettings>, callback: BodyResponseCallback<Schema$ShippingSettings>): void;
        get(params: Params$Resource$Shippingsettings$Get, callback: BodyResponseCallback<Schema$ShippingSettings>): void;
        get(callback: BodyResponseCallback<Schema$ShippingSettings>): void;
        /**
         * content.shippingsettings.getsupportedcarriers
         * @desc Retrieves supported carriers and carrier services for an account.
         * @alias content.shippingsettings.getsupportedcarriers
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account for which to retrieve the supported carriers.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getsupportedcarriers(params?: Params$Resource$Shippingsettings$Getsupportedcarriers, options?: MethodOptions): GaxiosPromise<Schema$ShippingsettingsGetSupportedCarriersResponse>;
        getsupportedcarriers(params: Params$Resource$Shippingsettings$Getsupportedcarriers, options: MethodOptions | BodyResponseCallback<Schema$ShippingsettingsGetSupportedCarriersResponse>, callback: BodyResponseCallback<Schema$ShippingsettingsGetSupportedCarriersResponse>): void;
        getsupportedcarriers(params: Params$Resource$Shippingsettings$Getsupportedcarriers, callback: BodyResponseCallback<Schema$ShippingsettingsGetSupportedCarriersResponse>): void;
        getsupportedcarriers(callback: BodyResponseCallback<Schema$ShippingsettingsGetSupportedCarriersResponse>): void;
        /**
         * content.shippingsettings.getsupportedholidays
         * @desc Retrieves supported holidays for an account.
         * @alias content.shippingsettings.getsupportedholidays
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account for which to retrieve the supported holidays.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getsupportedholidays(params?: Params$Resource$Shippingsettings$Getsupportedholidays, options?: MethodOptions): GaxiosPromise<Schema$ShippingsettingsGetSupportedHolidaysResponse>;
        getsupportedholidays(params: Params$Resource$Shippingsettings$Getsupportedholidays, options: MethodOptions | BodyResponseCallback<Schema$ShippingsettingsGetSupportedHolidaysResponse>, callback: BodyResponseCallback<Schema$ShippingsettingsGetSupportedHolidaysResponse>): void;
        getsupportedholidays(params: Params$Resource$Shippingsettings$Getsupportedholidays, callback: BodyResponseCallback<Schema$ShippingsettingsGetSupportedHolidaysResponse>): void;
        getsupportedholidays(callback: BodyResponseCallback<Schema$ShippingsettingsGetSupportedHolidaysResponse>): void;
        /**
         * content.shippingsettings.list
         * @desc Lists the shipping settings of the sub-accounts in your Merchant
         * Center account.
         * @alias content.shippingsettings.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of shipping settings to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the managing account. This must be a multi-client account.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Shippingsettings$List, options?: MethodOptions): GaxiosPromise<Schema$ShippingsettingsListResponse>;
        list(params: Params$Resource$Shippingsettings$List, options: MethodOptions | BodyResponseCallback<Schema$ShippingsettingsListResponse>, callback: BodyResponseCallback<Schema$ShippingsettingsListResponse>): void;
        list(params: Params$Resource$Shippingsettings$List, callback: BodyResponseCallback<Schema$ShippingsettingsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$ShippingsettingsListResponse>): void;
        /**
         * content.shippingsettings.patch
         * @desc Updates the shipping settings of the account. This method supports
         * patch semantics.
         * @alias content.shippingsettings.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account for which to get/update shipping settings.
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {().ShippingSettings} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Shippingsettings$Patch, options?: MethodOptions): GaxiosPromise<Schema$ShippingSettings>;
        patch(params: Params$Resource$Shippingsettings$Patch, options: MethodOptions | BodyResponseCallback<Schema$ShippingSettings>, callback: BodyResponseCallback<Schema$ShippingSettings>): void;
        patch(params: Params$Resource$Shippingsettings$Patch, callback: BodyResponseCallback<Schema$ShippingSettings>): void;
        patch(callback: BodyResponseCallback<Schema$ShippingSettings>): void;
        /**
         * content.shippingsettings.update
         * @desc Updates the shipping settings of the account.
         * @alias content.shippingsettings.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account for which to get/update shipping settings.
         * @param {boolean=} params.dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
         * @param {string} params.merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
         * @param {().ShippingSettings} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Shippingsettings$Update, options?: MethodOptions): GaxiosPromise<Schema$ShippingSettings>;
        update(params: Params$Resource$Shippingsettings$Update, options: MethodOptions | BodyResponseCallback<Schema$ShippingSettings>, callback: BodyResponseCallback<Schema$ShippingSettings>): void;
        update(params: Params$Resource$Shippingsettings$Update, callback: BodyResponseCallback<Schema$ShippingSettings>): void;
        update(callback: BodyResponseCallback<Schema$ShippingSettings>): void;
    }
    interface Params$Resource$Shippingsettings$Custombatch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ShippingsettingsCustomBatchRequest;
    }
    interface Params$Resource$Shippingsettings$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account for which to get/update shipping settings.
         */
        accountId?: string;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
    }
    interface Params$Resource$Shippingsettings$Getsupportedcarriers extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account for which to retrieve the supported carriers.
         */
        merchantId?: string;
    }
    interface Params$Resource$Shippingsettings$Getsupportedholidays extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account for which to retrieve the supported holidays.
         */
        merchantId?: string;
    }
    interface Params$Resource$Shippingsettings$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of shipping settings to return in the response, used
         * for paging.
         */
        maxResults?: number;
        /**
         * The ID of the managing account. This must be a multi-client account.
         */
        merchantId?: string;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    interface Params$Resource$Shippingsettings$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account for which to get/update shipping settings.
         */
        accountId?: string;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ShippingSettings;
    }
    interface Params$Resource$Shippingsettings$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the account for which to get/update shipping settings.
         */
        accountId?: string;
        /**
         * Flag to simulate a request like in a live environment. If set to true,
         * dry-run mode checks the validity of the request and returns errors (if
         * any).
         */
        dryRun?: boolean;
        /**
         * The ID of the managing account. If this parameter is not the same as
         * accountId, then this account must be a multi-client account and accountId
         * must be the ID of a sub-account of this account.
         */
        merchantId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ShippingSettings;
    }
}