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
export declare namespace analyticsreporting_v4 {
    interface Options extends GlobalOptions {
        version: 'v4';
    }
    interface StandardParameters {
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
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
         * Available to use for quota purposes for server-side applications. Can be
         * any arbitrary string assigned to a user, but should not exceed 40
         * characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
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
        context: APIRequestContext;
        reports: Resource$Reports;
        userActivity: Resource$Useractivity;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * An Activity represents data for an activity of a user. Note that an
     * Activity is different from a hit. A hit might result in multiple
     * Activity&#39;s. For example, if a hit includes a transaction and a goal
     * completion, there will be two Activity protos for this hit, one for
     * ECOMMERCE and one for GOAL. Conversely, multiple hits can also construct
     * one Activity. In classic e-commerce, data for one transaction might be sent
     * through multiple hits. These hits will be merged into one ECOMMERCE
     * Activity.
     */
    interface Schema$Activity {
        /**
         * Timestamp of the activity.
         */
        activityTime?: string;
        /**
         * Type of this activity.
         */
        activityType?: string;
        /**
         * This will be set if `activity_type` equals `SCREEN_VIEW`.
         */
        appview?: Schema$ScreenviewData;
        /**
         * For manual campaign tracking, it is the value of the utm_campaign
         * campaign tracking parameter. For AdWords autotagging, it is the name(s)
         * of the online ad campaign(s) you use for the property. If you use
         * neither, its value is (not set).
         */
        campaign?: string;
        /**
         * The Channel Group associated with an end user&#39;s session for this View
         * (defined by the View&#39;s Channel Groupings).
         */
        channelGrouping?: string;
        /**
         * A list of all custom dimensions associated with this activity.
         */
        customDimension?: Schema$CustomDimension[];
        /**
         * This will be set if `activity_type` equals `ECOMMERCE`.
         */
        ecommerce?: Schema$EcommerceData;
        /**
         * This field contains all the details pertaining to an event and will be
         * set if `activity_type` equals `EVENT`.
         */
        event?: Schema$EventData;
        /**
         * This field contains a list of all the goals that were reached in this
         * activity when `activity_type` equals `GOAL`.
         */
        goals?: Schema$GoalSetData;
        /**
         * The hostname from which the tracking request was made.
         */
        hostname?: string;
        /**
         * For manual campaign tracking, it is the value of the utm_term campaign
         * tracking parameter. For AdWords traffic, it contains the best matching
         * targeting criteria. For the display network, where multiple targeting
         * criteria could have caused the ad to show up, it returns the best
         * matching targeting criteria as selected by Ads. This could be
         * display_keyword, site placement, boomuserlist, user_interest, age, or
         * gender. Otherwise its value is (not set).
         */
        keyword?: string;
        /**
         * The first page in users&#39; sessions, or the landing page.
         */
        landingPagePath?: string;
        /**
         * The type of referrals. For manual campaign tracking, it is the value of
         * the utm_medium campaign tracking parameter. For AdWords autotagging, it
         * is cpc. If users came from a search engine detected by Google Analytics,
         * it is organic. If the referrer is not a search engine, it is referral. If
         * users came directly to the property and document.referrer is empty, its
         * value is (none).
         */
        medium?: string;
        /**
         * This will be set if `activity_type` equals `PAGEVIEW`. This field
         * contains all the details about the visitor and the page that was visited.
         */
        pageview?: Schema$PageviewData;
        /**
         * The source of referrals. For manual campaign tracking, it is the value of
         * the utm_source campaign tracking parameter. For AdWords autotagging, it
         * is google. If you use neither, it is the domain of the source (e.g.,
         * document.referrer) referring the users. It may also contain a port
         * address. If users arrived without a referrer, its value is (direct).
         */
        source?: string;
    }
    /**
     * Defines a cohort. A cohort is a group of users who share a common
     * characteristic. For example, all users with the same acquisition date
     * belong to the same cohort.
     */
    interface Schema$Cohort {
        /**
         * This is used for `FIRST_VISIT_DATE` cohort, the cohort selects users
         * whose first visit date is between start date and end date defined in the
         * DateRange. The date ranges should be aligned for cohort requests. If the
         * request contains `ga:cohortNthDay` it should be exactly one day long, if
         * `ga:cohortNthWeek` it should be aligned to the week boundary (starting at
         * Sunday and ending Saturday), and for `ga:cohortNthMonth` the date range
         * should be aligned to the month (starting at the first and ending on the
         * last day of the month). For LTV requests there are no such restrictions.
         * You do not need to supply a date range for the
         * `reportsRequest.dateRanges` field.
         */
        dateRange?: Schema$DateRange;
        /**
         * A unique name for the cohort. If not defined name will be auto-generated
         * with values cohort_[1234...].
         */
        name?: string;
        /**
         * Type of the cohort. The only supported type as of now is
         * `FIRST_VISIT_DATE`. If this field is unspecified the cohort is treated as
         * `FIRST_VISIT_DATE` type cohort.
         */
        type?: string;
    }
    /**
     * Defines a cohort group. For example:      &quot;cohortGroup&quot;: {
     * &quot;cohorts&quot;: [{         &quot;name&quot;: &quot;cohort 1&quot;,
     * &quot;type&quot;: &quot;FIRST_VISIT_DATE&quot;, &quot;dateRange&quot;: {
     * &quot;startDate&quot;: &quot;2015-08-01&quot;, &quot;endDate&quot;:
     * &quot;2015-08-01&quot; }       },{         &quot;name&quot;: &quot;cohort
     * 2&quot;          &quot;type&quot;: &quot;FIRST_VISIT_DATE&quot;
     * &quot;dateRange&quot;: { &quot;startDate&quot;: &quot;2015-07-01&quot;,
     * &quot;endDate&quot;: &quot;2015-07-01&quot; }       }]     }
     */
    interface Schema$CohortGroup {
        /**
         * The definition for the cohort.
         */
        cohorts?: Schema$Cohort[];
        /**
         * Enable Life Time Value (LTV).  LTV measures lifetime value for users
         * acquired through different channels. Please see: [Cohort
         * Analysis](https://support.google.com/analytics/answer/6074676) and
         * [Lifetime Value](https://support.google.com/analytics/answer/6182550) If
         * the value of lifetimeValue is false:  - The metric values are similar to
         * the values in the web interface cohort   report. - The cohort definition
         * date ranges must be aligned to the calendar week   and month. i.e. while
         * requesting `ga:cohortNthWeek` the `startDate` in   the cohort definition
         * should be a Sunday and the `endDate` should be the   following Saturday,
         * and for `ga:cohortNthMonth`, the `startDate`   should be the 1st of the
         * month and `endDate` should be the last day   of the month.  When the
         * lifetimeValue is true:  - The metric values will correspond to the values
         * in the web interface   LifeTime value report. - The Lifetime Value report
         * shows you how user value (Revenue) and   engagement (Appviews, Goal
         * Completions, Sessions, and Session Duration)   grow during the 90 days
         * after a user is acquired. - The metrics are calculated as a cumulative
         * average per user per the time   increment. - The cohort definition date
         * ranges need not be aligned to the calendar   week and month boundaries. -
         * The `viewId` must be an   [app view
         * ID](https://support.google.com/analytics/answer/2649553#WebVersusAppViews)
         */
        lifetimeValue?: boolean;
    }
    /**
     * Column headers.
     */
    interface Schema$ColumnHeader {
        /**
         * The dimension names in the response.
         */
        dimensions?: string[];
        /**
         * Metric headers for the metrics in the response.
         */
        metricHeader?: Schema$MetricHeader;
    }
    /**
     * Custom dimension.
     */
    interface Schema$CustomDimension {
        /**
         * Slot number of custom dimension.
         */
        index?: number;
        /**
         * Value of the custom dimension. Default value (i.e. empty string)
         * indicates clearing sesion/visitor scope custom dimension value.
         */
        value?: string;
    }
    /**
     * A contiguous set of days: startDate, startDate + 1 day, ..., endDate. The
     * start and end dates are specified in
     * [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) date format `YYYY-MM-DD`.
     */
    interface Schema$DateRange {
        /**
         * The end date for the query in the format `YYYY-MM-DD`.
         */
        endDate?: string;
        /**
         * The start date for the query in the format `YYYY-MM-DD`.
         */
        startDate?: string;
    }
    /**
     * Used to return a list of metrics for a single DateRange / dimension
     * combination
     */
    interface Schema$DateRangeValues {
        /**
         * The values of each pivot region.
         */
        pivotValueRegions?: Schema$PivotValueRegion[];
        /**
         * Each value corresponds to each Metric in the request.
         */
        values?: string[];
    }
    /**
     * [Dimensions](https://support.google.com/analytics/answer/1033861) are
     * attributes of your data. For example, the dimension `ga:city` indicates the
     * city, for example, &quot;Paris&quot; or &quot;New York&quot;, from which a
     * session originates.
     */
    interface Schema$Dimension {
        /**
         * If non-empty, we place dimension values into buckets after string to
         * int64. Dimension values that are not the string representation of an
         * integral value will be converted to zero.  The bucket values have to be
         * in increasing order.  Each bucket is closed on the lower end, and open on
         * the upper end. The &quot;first&quot; bucket includes all values less than
         * the first boundary, the &quot;last&quot; bucket includes all values up to
         * infinity. Dimension values that fall in a bucket get transformed to a new
         * dimension value. For example, if one gives a list of &quot;0, 1, 3, 4,
         * 7&quot;, then we return the following buckets:  - bucket #1: values &lt;
         * 0, dimension value &quot;&lt;0&quot; - bucket #2: values in [0,1),
         * dimension value &quot;0&quot; - bucket #3: values in [1,3), dimension
         * value &quot;1-2&quot; - bucket #4: values in [3,4), dimension value
         * &quot;3&quot; - bucket #5: values in [4,7), dimension value
         * &quot;4-6&quot; - bucket #6: values &gt;= 7, dimension value
         * &quot;7+&quot;  NOTE: If you are applying histogram mutation on any
         * dimension, and using that dimension in sort, you will want to use the
         * sort type `HISTOGRAM_BUCKET` for that purpose. Without that the dimension
         * values will be sorted according to dictionary (lexicographic) order. For
         * example the ascending dictionary order is:     &quot;&lt;50&quot;,
         * &quot;1001+&quot;, &quot;121-1000&quot;, &quot;50-120&quot;  And the
         * ascending `HISTOGRAM_BUCKET` order is:     &quot;&lt;50&quot;,
         * &quot;50-120&quot;, &quot;121-1000&quot;, &quot;1001+&quot;  The client
         * has to explicitly request `&quot;orderType&quot;:
         * &quot;HISTOGRAM_BUCKET&quot;` for a histogram-mutated dimension.
         */
        histogramBuckets?: string[];
        /**
         * Name of the dimension to fetch, for example `ga:browser`.
         */
        name?: string;
    }
    /**
     * Dimension filter specifies the filtering options on a dimension.
     */
    interface Schema$DimensionFilter {
        /**
         * Should the match be case sensitive? Default is false.
         */
        caseSensitive?: boolean;
        /**
         * The dimension to filter on. A DimensionFilter must contain a dimension.
         */
        dimensionName?: string;
        /**
         * Strings or regular expression to match against. Only the first value of
         * the list is used for comparison unless the operator is `IN_LIST`. If
         * `IN_LIST` operator, then the entire list is used to filter the dimensions
         * as explained in the description of the `IN_LIST` operator.
         */
        expressions?: string[];
        /**
         * Logical `NOT` operator. If this boolean is set to true, then the matching
         * dimension values will be excluded in the report. The default is false.
         */
        not?: boolean;
        /**
         * How to match the dimension to the expression. The default is REGEXP.
         */
        operator?: string;
    }
    /**
     * A group of dimension filters. Set the operator value to specify how the
     * filters are logically combined.
     */
    interface Schema$DimensionFilterClause {
        /**
         * The repeated set of filters. They are logically combined based on the
         * operator specified.
         */
        filters?: Schema$DimensionFilter[];
        /**
         * The operator for combining multiple dimension filters. If unspecified, it
         * is treated as an `OR`.
         */
        operator?: string;
    }
    /**
     * Dynamic segment definition for defining the segment within the request. A
     * segment can select users, sessions or both.
     */
    interface Schema$DynamicSegment {
        /**
         * The name of the dynamic segment.
         */
        name?: string;
        /**
         * Session Segment to select sessions to include in the segment.
         */
        sessionSegment?: Schema$SegmentDefinition;
        /**
         * User Segment to select users to include in the segment.
         */
        userSegment?: Schema$SegmentDefinition;
    }
    /**
     * E-commerce details associated with the user activity.
     */
    interface Schema$EcommerceData {
        /**
         * Action associated with this e-commerce action.
         */
        actionType?: string;
        /**
         * The type of this e-commerce activity.
         */
        ecommerceType?: string;
        /**
         * Details of the products in this transaction.
         */
        products?: Schema$ProductData[];
        /**
         * Transaction details of this e-commerce action.
         */
        transaction?: Schema$TransactionData;
    }
    /**
     * Represents all the details pertaining to an event.
     */
    interface Schema$EventData {
        /**
         * Type of interaction with the object. Eg: &#39;play&#39;.
         */
        eventAction?: string;
        /**
         * The object on the page that was interacted with. Eg: &#39;Video&#39;.
         */
        eventCategory?: string;
        /**
         * Number of such events in this activity.
         */
        eventCount?: string;
        /**
         * Label attached with the event.
         */
        eventLabel?: string;
        /**
         * Numeric value associated with the event.
         */
        eventValue?: string;
    }
    /**
     * The batch request containing multiple report request.
     */
    interface Schema$GetReportsRequest {
        /**
         * Requests, each request will have a separate response. There can be a
         * maximum of 5 requests. All requests should have the same `dateRanges`,
         * `viewId`, `segments`, `samplingLevel`, and `cohortGroup`.
         */
        reportRequests?: Schema$ReportRequest[];
        /**
         * Enables [resource based
         * quotas](/analytics/devguides/reporting/core/v4/limits-quotas#analytics_reporting_api_v4),
         * (defaults to `False`). If this field is set to `True` the per view
         * (profile) quotas are governed by the computational cost of the request.
         * Note that using cost based quotas will higher enable sampling rates. (10
         * Million for `SMALL`, 100M for `LARGE`. See the [limits and quotas
         * documentation](/analytics/devguides/reporting/core/v4/limits-quotas#analytics_reporting_api_v4)
         * for details.
         */
        useResourceQuotas?: boolean;
    }
    /**
     * The main response class which holds the reports from the Reporting API
     * `batchGet` call.
     */
    interface Schema$GetReportsResponse {
        /**
         * The amount of resource quota tokens deducted to execute the query.
         * Includes all responses.
         */
        queryCost?: number;
        /**
         * Responses corresponding to each of the request.
         */
        reports?: Schema$Report[];
        /**
         * The amount of resource quota remaining for the property.
         */
        resourceQuotasRemaining?: Schema$ResourceQuotasRemaining;
    }
    /**
     * Represents all the details pertaining to a goal.
     */
    interface Schema$GoalData {
        /**
         * URL of the page where this goal was completed.
         */
        goalCompletionLocation?: string;
        /**
         * Total number of goal completions in this activity.
         */
        goalCompletions?: string;
        /**
         * This identifies the goal as configured for the profile.
         */
        goalIndex?: number;
        /**
         * Name of the goal.
         */
        goalName?: string;
        /**
         * URL of the page one step prior to the goal completion.
         */
        goalPreviousStep1?: string;
        /**
         * URL of the page two steps prior to the goal completion.
         */
        goalPreviousStep2?: string;
        /**
         * URL of the page three steps prior to the goal completion.
         */
        goalPreviousStep3?: string;
        /**
         * Value in this goal.
         */
        goalValue?: number;
    }
    /**
     * Represents a set of goals that were reached in an activity.
     */
    interface Schema$GoalSetData {
        /**
         * All the goals that were reached in the current activity.
         */
        goals?: Schema$GoalData[];
    }
    /**
     * [Metrics](https://support.google.com/analytics/answer/1033861) are the
     * quantitative measurements. For example, the metric `ga:users` indicates the
     * total number of users for the requested time period.
     */
    interface Schema$Metric {
        /**
         * An alias for the metric expression is an alternate name for the
         * expression. The alias can be used for filtering and sorting. This field
         * is optional and is useful if the expression is not a single metric but a
         * complex expression which cannot be used in filtering and sorting. The
         * alias is also used in the response column header.
         */
        alias?: string;
        /**
         * A metric expression in the request. An expression is constructed from one
         * or more metrics and numbers. Accepted operators include: Plus (+), Minus
         * (-), Negation (Unary -), Divided by (/), Multiplied by (*), Parenthesis,
         * Positive cardinal numbers (0-9), can include decimals and is limited to
         * 1024 characters. Example `ga:totalRefunds/ga:users`, in most cases the
         * metric expression is just a single metric name like `ga:users`. Adding
         * mixed `MetricType` (E.g., `CURRENCY` + `PERCENTAGE`) metrics will result
         * in unexpected results.
         */
        expression?: string;
        /**
         * Specifies how the metric expression should be formatted, for example
         * `INTEGER`.
         */
        formattingType?: string;
    }
    /**
     * MetricFilter specifies the filter on a metric.
     */
    interface Schema$MetricFilter {
        /**
         * The value to compare against.
         */
        comparisonValue?: string;
        /**
         * The metric that will be filtered on. A metricFilter must contain a metric
         * name. A metric name can be an alias earlier defined as a metric or it can
         * also be a metric expression.
         */
        metricName?: string;
        /**
         * Logical `NOT` operator. If this boolean is set to true, then the matching
         * metric values will be excluded in the report. The default is false.
         */
        not?: boolean;
        /**
         * Is the metric `EQUAL`, `LESS_THAN` or `GREATER_THAN` the comparisonValue,
         * the default is `EQUAL`. If the operator is `IS_MISSING`, checks if the
         * metric is missing and would ignore the comparisonValue.
         */
        operator?: string;
    }
    /**
     * Represents a group of metric filters. Set the operator value to specify how
     * the filters are logically combined.
     */
    interface Schema$MetricFilterClause {
        /**
         * The repeated set of filters. They are logically combined based on the
         * operator specified.
         */
        filters?: Schema$MetricFilter[];
        /**
         * The operator for combining multiple metric filters. If unspecified, it is
         * treated as an `OR`.
         */
        operator?: string;
    }
    /**
     * The headers for the metrics.
     */
    interface Schema$MetricHeader {
        /**
         * Headers for the metrics in the response.
         */
        metricHeaderEntries?: Schema$MetricHeaderEntry[];
        /**
         * Headers for the pivots in the response.
         */
        pivotHeaders?: Schema$PivotHeader[];
    }
    /**
     * Header for the metrics.
     */
    interface Schema$MetricHeaderEntry {
        /**
         * The name of the header.
         */
        name?: string;
        /**
         * The type of the metric, for example `INTEGER`.
         */
        type?: string;
    }
    /**
     * Specifies the sorting options.
     */
    interface Schema$OrderBy {
        /**
         * The field which to sort by. The default sort order is ascending. Example:
         * `ga:browser`. Note, that you can only specify one field for sort here.
         * For example, `ga:browser, ga:city` is not valid.
         */
        fieldName?: string;
        /**
         * The order type. The default orderType is `VALUE`.
         */
        orderType?: string;
        /**
         * The sorting order for the field.
         */
        sortOrder?: string;
    }
    /**
     * A list of segment filters in the `OR` group are combined with the logical
     * OR operator.
     */
    interface Schema$OrFiltersForSegment {
        /**
         * List of segment filters to be combined with a `OR` operator.
         */
        segmentFilterClauses?: Schema$SegmentFilterClause[];
    }
    /**
     * Represents details collected when the visitor views a page.
     */
    interface Schema$PageviewData {
        /**
         * The URL of the page that the visitor viewed.
         */
        pagePath?: string;
        /**
         * The title of the page that the visitor viewed.
         */
        pageTitle?: string;
    }
    /**
     * The Pivot describes the pivot section in the request. The Pivot helps
     * rearrange the information in the table for certain reports by pivoting your
     * data on a second dimension.
     */
    interface Schema$Pivot {
        /**
         * DimensionFilterClauses are logically combined with an `AND` operator:
         * only data that is included by all these DimensionFilterClauses
         * contributes to the values in this pivot region. Dimension filters can be
         * used to restrict the columns shown in the pivot region. For example if
         * you have `ga:browser` as the requested dimension in the pivot region, and
         * you specify key filters to restrict `ga:browser` to only &quot;IE&quot;
         * or &quot;Firefox&quot;, then only those two browsers would show up as
         * columns.
         */
        dimensionFilterClauses?: Schema$DimensionFilterClause[];
        /**
         * A list of dimensions to show as pivot columns. A Pivot can have a maximum
         * of 4 dimensions. Pivot dimensions are part of the restriction on the
         * total number of dimensions allowed in the request.
         */
        dimensions?: Schema$Dimension[];
        /**
         * Specifies the maximum number of groups to return. The default value is
         * 10, also the maximum value is 1,000.
         */
        maxGroupCount?: number;
        /**
         * The pivot metrics. Pivot metrics are part of the restriction on total
         * number of metrics allowed in the request.
         */
        metrics?: Schema$Metric[];
        /**
         * If k metrics were requested, then the response will contain some
         * data-dependent multiple of k columns in the report.  E.g., if you pivoted
         * on the dimension `ga:browser` then you&#39;d get k columns for
         * &quot;Firefox&quot;, k columns for &quot;IE&quot;, k columns for
         * &quot;Chrome&quot;, etc. The ordering of the groups of columns is
         * determined by descending order of &quot;total&quot; for the first of the
         * k values.  Ties are broken by lexicographic ordering of the first pivot
         * dimension, then lexicographic ordering of the second pivot dimension, and
         * so on.  E.g., if the totals for the first value for Firefox, IE, and
         * Chrome were 8, 2, 8, respectively, the order of columns would be Chrome,
         * Firefox, IE.  The following let you choose which of the groups of k
         * columns are included in the response.
         */
        startGroup?: number;
    }
    /**
     * The headers for each of the pivot sections defined in the request.
     */
    interface Schema$PivotHeader {
        /**
         * A single pivot section header.
         */
        pivotHeaderEntries?: Schema$PivotHeaderEntry[];
        /**
         * The total number of groups for this pivot.
         */
        totalPivotGroupsCount?: number;
    }
    /**
     * The headers for the each of the metric column corresponding to the metrics
     * requested in the pivots section of the response.
     */
    interface Schema$PivotHeaderEntry {
        /**
         * The name of the dimensions in the pivot response.
         */
        dimensionNames?: string[];
        /**
         * The values for the dimensions in the pivot.
         */
        dimensionValues?: string[];
        /**
         * The metric header for the metric in the pivot.
         */
        metric?: Schema$MetricHeaderEntry;
    }
    /**
     * The metric values in the pivot region.
     */
    interface Schema$PivotValueRegion {
        /**
         * The values of the metrics in each of the pivot regions.
         */
        values?: string[];
    }
    /**
     * Details of the products in an e-commerce transaction.
     */
    interface Schema$ProductData {
        /**
         * The total revenue from purchased product items.
         */
        itemRevenue?: number;
        /**
         * The product name, supplied by the e-commerce tracking application, for
         * the purchased items.
         */
        productName?: string;
        /**
         * Total number of this product units in the transaction.
         */
        productQuantity?: string;
        /**
         * Unique code that represents the product.
         */
        productSku?: string;
    }
    /**
     * The data response corresponding to the request.
     */
    interface Schema$Report {
        /**
         * The column headers.
         */
        columnHeader?: Schema$ColumnHeader;
        /**
         * Response data.
         */
        data?: Schema$ReportData;
        /**
         * Page token to retrieve the next page of results in the list.
         */
        nextPageToken?: string;
    }
    /**
     * The data part of the report.
     */
    interface Schema$ReportData {
        /**
         * The last time the data in the report was refreshed. All the hits received
         * before this timestamp are included in the calculation of the report.
         */
        dataLastRefreshed?: string;
        /**
         * Indicates if response to this request is golden or not. Data is golden
         * when the exact same request will not produce any new results if asked at
         * a later point in time.
         */
        isDataGolden?: boolean;
        /**
         * Minimum and maximum values seen over all matching rows. These are both
         * empty when `hideValueRanges` in the request is false, or when rowCount is
         * zero.
         */
        maximums?: Schema$DateRangeValues[];
        /**
         * Minimum and maximum values seen over all matching rows. These are both
         * empty when `hideValueRanges` in the request is false, or when rowCount is
         * zero.
         */
        minimums?: Schema$DateRangeValues[];
        /**
         * Total number of matching rows for this query.
         */
        rowCount?: number;
        /**
         * There&#39;s one ReportRow for every unique combination of dimensions.
         */
        rows?: Schema$ReportRow[];
        /**
         * If the results are
         * [sampled](https://support.google.com/analytics/answer/2637192), this
         * returns the total number of samples read, one entry per date range. If
         * the results are not sampled this field will not be defined. See
         * [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling)
         * for details.
         */
        samplesReadCounts?: string[];
        /**
         * If the results are
         * [sampled](https://support.google.com/analytics/answer/2637192), this
         * returns the total number of samples present, one entry per date range. If
         * the results are not sampled this field will not be defined. See
         * [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling)
         * for details.
         */
        samplingSpaceSizes?: string[];
        /**
         * For each requested date range, for the set of all rows that match the
         * query, every requested value format gets a total. The total for a value
         * format is computed by first totaling the metrics mentioned in the value
         * format and then evaluating the value format as a scalar expression. E.g.,
         * The &quot;totals&quot; for `3 / (ga:sessions + 2)` we compute `3 / ((sum
         * of all relevant ga:sessions) + 2)`. Totals are computed before
         * pagination.
         */
        totals?: Schema$DateRangeValues[];
    }
    /**
     * The main request class which specifies the Reporting API request.
     */
    interface Schema$ReportRequest {
        /**
         * Cohort group associated with this request. If there is a cohort group in
         * the request the `ga:cohort` dimension must be present. Every
         * [ReportRequest](#ReportRequest) within a `batchGet` method must contain
         * the same `cohortGroup` definition.
         */
        cohortGroup?: Schema$CohortGroup;
        /**
         * Date ranges in the request. The request can have a maximum of 2 date
         * ranges. The response will contain a set of metric values for each
         * combination of the dimensions for each date range in the request. So, if
         * there are two date ranges, there will be two set of metric values, one
         * for the original date range and one for the second date range. The
         * `reportRequest.dateRanges` field should not be specified for cohorts or
         * Lifetime value requests. If a date range is not provided, the default
         * date range is (startDate: current date - 7 days, endDate: current date -
         * 1 day). Every [ReportRequest](#ReportRequest) within a `batchGet` method
         * must contain the same `dateRanges` definition.
         */
        dateRanges?: Schema$DateRange[];
        /**
         * The dimension filter clauses for filtering Dimension Values. They are
         * logically combined with the `AND` operator. Note that filtering occurs
         * before any dimensions are aggregated, so that the returned metrics
         * represent the total for only the relevant dimensions.
         */
        dimensionFilterClauses?: Schema$DimensionFilterClause[];
        /**
         * The dimensions requested. Requests can have a total of 7 dimensions.
         */
        dimensions?: Schema$Dimension[];
        /**
         * Dimension or metric filters that restrict the data returned for your
         * request. To use the `filtersExpression`, supply a dimension or metric on
         * which to filter, followed by the filter expression. For example, the
         * following expression selects `ga:browser` dimension which starts with
         * Firefox; `ga:browser=~^Firefox`. For more information on dimensions and
         * metric filters, see [Filters
         * reference](https://developers.google.com/analytics/devguides/reporting/core/v3/reference#filters).
         */
        filtersExpression?: string;
        /**
         * If set to true, hides the total of all metrics for all the matching rows,
         * for every date range. The default false and will return the totals.
         */
        hideTotals?: boolean;
        /**
         * If set to true, hides the minimum and maximum across all matching rows.
         * The default is false and the value ranges are returned.
         */
        hideValueRanges?: boolean;
        /**
         * If set to false, the response does not include rows if all the retrieved
         * metrics are equal to zero. The default is false which will exclude these
         * rows.
         */
        includeEmptyRows?: boolean;
        /**
         * The metric filter clauses. They are logically combined with the `AND`
         * operator.  Metric filters look at only the first date range and not the
         * comparing date range. Note that filtering on metrics occurs after the
         * metrics are aggregated.
         */
        metricFilterClauses?: Schema$MetricFilterClause[];
        /**
         * The metrics requested. Requests must specify at least one metric.
         * Requests can have a total of 10 metrics.
         */
        metrics?: Schema$Metric[];
        /**
         * Sort order on output rows. To compare two rows, the elements of the
         * following are applied in order until a difference is found.  All date
         * ranges in the output get the same row order.
         */
        orderBys?: Schema$OrderBy[];
        /**
         * Page size is for paging and specifies the maximum number of returned
         * rows. Page size should be &gt;= 0. A query returns the default of 1,000
         * rows. The Analytics Core Reporting API returns a maximum of 100,000 rows
         * per request, no matter how many you ask for. It can also return fewer
         * rows than requested, if there aren&#39;t as many dimension segments as
         * you expect. For instance, there are fewer than 300 possible values for
         * `ga:country`, so when segmenting only by country, you can&#39;t get more
         * than 300 rows, even if you set `pageSize` to a higher value.
         */
        pageSize?: number;
        /**
         * A continuation token to get the next page of the results. Adding this to
         * the request will return the rows after the pageToken. The pageToken
         * should be the value returned in the nextPageToken parameter in the
         * response to the GetReports request.
         */
        pageToken?: string;
        /**
         * The pivot definitions. Requests can have a maximum of 2 pivots.
         */
        pivots?: Schema$Pivot[];
        /**
         * The desired report
         * [sample](https://support.google.com/analytics/answer/2637192) size. If
         * the the `samplingLevel` field is unspecified the `DEFAULT` sampling level
         * is used. Every [ReportRequest](#ReportRequest) within a `batchGet` method
         * must contain the same `samplingLevel` definition. See [developer
         * guide](/analytics/devguides/reporting/core/v4/basics#sampling)  for
         * details.
         */
        samplingLevel?: string;
        /**
         * Segment the data returned for the request. A segment definition helps
         * look at a subset of the segment request. A request can contain up to four
         * segments. Every [ReportRequest](#ReportRequest) within a `batchGet`
         * method must contain the same `segments` definition. Requests with
         * segments must have the `ga:segment` dimension.
         */
        segments?: Schema$Segment[];
        /**
         * The Analytics [view
         * ID](https://support.google.com/analytics/answer/1009618) from which to
         * retrieve data. Every [ReportRequest](#ReportRequest) within a `batchGet`
         * method must contain the same `viewId`.
         */
        viewId?: string;
    }
    /**
     * A row in the report.
     */
    interface Schema$ReportRow {
        /**
         * List of requested dimensions.
         */
        dimensions?: string[];
        /**
         * List of metrics for each requested DateRange.
         */
        metrics?: Schema$DateRangeValues[];
    }
    /**
     * The resource quota tokens remaining for the property after the request is
     * completed.
     */
    interface Schema$ResourceQuotasRemaining {
        /**
         * Daily resource quota remaining remaining.
         */
        dailyQuotaTokensRemaining?: number;
        /**
         * Hourly resource quota tokens remaining.
         */
        hourlyQuotaTokensRemaining?: number;
    }
    interface Schema$ScreenviewData {
        /**
         * The application name.
         */
        appName?: string;
        /**
         * Mobile manufacturer or branded name. Eg: &quot;Google&quot;,
         * &quot;Apple&quot; etc.
         */
        mobileDeviceBranding?: string;
        /**
         * Mobile device model. Eg: &quot;Pixel&quot;, &quot;iPhone&quot; etc.
         */
        mobileDeviceModel?: string;
        /**
         * The name of the screen.
         */
        screenName?: string;
    }
    /**
     * The request to fetch User Report from Reporting API `userActivity:get`
     * call.
     */
    interface Schema$SearchUserActivityRequest {
        /**
         * Set of all activity types being requested. Only acvities matching these
         * types will be returned in the response. If empty, all activies will be
         * returned.
         */
        activityTypes?: string[];
        /**
         * Date range for which to retrieve the user activity. If a date range is
         * not provided, the default date range is (startDate: current date - 7
         * days, endDate: current date - 1 day).
         */
        dateRange?: Schema$DateRange;
        /**
         * Page size is for paging and specifies the maximum number of returned
         * rows. Page size should be &gt; 0. If the value is 0 or if the field
         * isn&#39;t specified, the request returns the default of 1000 rows per
         * page.
         */
        pageSize?: number;
        /**
         * A continuation token to get the next page of the results. Adding this to
         * the request will return the rows after the pageToken. The pageToken
         * should be the value returned in the nextPageToken parameter in the
         * response to the [SearchUserActivityRequest](#SearchUserActivityRequest)
         * request.
         */
        pageToken?: string;
        /**
         * Required. Unique user Id to query for. Every
         * [SearchUserActivityRequest](#SearchUserActivityRequest) must contain this
         * field.
         */
        user?: Schema$User;
        /**
         * Required. The Analytics [view
         * ID](https://support.google.com/analytics/answer/1009618) from which to
         * retrieve data. Every
         * [SearchUserActivityRequest](#SearchUserActivityRequest) must contain the
         * `viewId`.
         */
        viewId?: string;
    }
    /**
     * The response from `userActivity:get` call.
     */
    interface Schema$SearchUserActivityResponse {
        /**
         * This token should be passed to
         * [SearchUserActivityRequest](#SearchUserActivityRequest) to retrieve the
         * next page.
         */
        nextPageToken?: string;
        /**
         * This field represents the [sampling
         * rate](https://support.google.com/analytics/answer/2637192) for the given
         * request and is a number between 0.0 to 1.0. See [developer
         * guide](/analytics/devguides/reporting/core/v4/basics#sampling) for
         * details.
         */
        sampleRate?: number;
        /**
         * Each record represents a session (device details, duration, etc).
         */
        sessions?: Schema$UserActivitySession[];
        /**
         * Total rows returned by this query (across different pages).
         */
        totalRows?: number;
    }
    /**
     * The segment definition, if the report needs to be segmented. A Segment is a
     * subset of the Analytics data. For example, of the entire set of users, one
     * Segment might be users from a particular country or city.
     */
    interface Schema$Segment {
        /**
         * A dynamic segment definition in the request.
         */
        dynamicSegment?: Schema$DynamicSegment;
        /**
         * The segment ID of a built-in or custom segment, for example `gaid::-3`.
         */
        segmentId?: string;
    }
    /**
     * SegmentDefinition defines the segment to be a set of SegmentFilters which
     * are combined together with a logical `AND` operation.
     */
    interface Schema$SegmentDefinition {
        /**
         * A segment is defined by a set of segment filters which are combined
         * together with a logical `AND` operation.
         */
        segmentFilters?: Schema$SegmentFilter[];
    }
    /**
     * Dimension filter specifies the filtering options on a dimension.
     */
    interface Schema$SegmentDimensionFilter {
        /**
         * Should the match be case sensitive, ignored for `IN_LIST` operator.
         */
        caseSensitive?: boolean;
        /**
         * Name of the dimension for which the filter is being applied.
         */
        dimensionName?: string;
        /**
         * The list of expressions, only the first element is used for all operators
         */
        expressions?: string[];
        /**
         * Maximum comparison values for `BETWEEN` match type.
         */
        maxComparisonValue?: string;
        /**
         * Minimum comparison values for `BETWEEN` match type.
         */
        minComparisonValue?: string;
        /**
         * The operator to use to match the dimension with the expressions.
         */
        operator?: string;
    }
    /**
     * SegmentFilter defines the segment to be either a simple or a sequence
     * segment. A simple segment condition contains dimension and metric
     * conditions to select the sessions or users. A sequence segment condition
     * can be used to select users or sessions based on sequential conditions.
     */
    interface Schema$SegmentFilter {
        /**
         * If true, match the complement of simple or sequence segment. For example,
         * to match all visits not from &quot;New York&quot;, we can define the
         * segment as follows:        &quot;sessionSegment&quot;: {
         * &quot;segmentFilters&quot;: [{           &quot;simpleSegment&quot; :{
         * &quot;orFiltersForSegment&quot;: [{ &quot;segmentFilterClauses&quot;:[{
         * &quot;dimensionFilter&quot;: { &quot;dimensionName&quot;:
         * &quot;ga:city&quot;,                   &quot;expressions&quot;:
         * [&quot;New York&quot;]                 }               }]             }]
         * },           &quot;not&quot;: &quot;True&quot;         }]       },
         */
        not?: boolean;
        /**
         * Sequence conditions consist of one or more steps, where each step is
         * defined by one or more dimension/metric conditions. Multiple steps can be
         * combined with special sequence operators.
         */
        sequenceSegment?: Schema$SequenceSegment;
        /**
         * A Simple segment conditions consist of one or more dimension/metric
         * conditions that can be combined
         */
        simpleSegment?: Schema$SimpleSegment;
    }
    /**
     * Filter Clause to be used in a segment definition, can be wither a metric or
     * a dimension filter.
     */
    interface Schema$SegmentFilterClause {
        /**
         * Dimension Filter for the segment definition.
         */
        dimensionFilter?: Schema$SegmentDimensionFilter;
        /**
         * Metric Filter for the segment definition.
         */
        metricFilter?: Schema$SegmentMetricFilter;
        /**
         * Matches the complement (`!`) of the filter.
         */
        not?: boolean;
    }
    /**
     * Metric filter to be used in a segment filter clause.
     */
    interface Schema$SegmentMetricFilter {
        /**
         * The value to compare against. If the operator is `BETWEEN`, this value is
         * treated as minimum comparison value.
         */
        comparisonValue?: string;
        /**
         * Max comparison value is only used for `BETWEEN` operator.
         */
        maxComparisonValue?: string;
        /**
         * The metric that will be filtered on. A `metricFilter` must contain a
         * metric name.
         */
        metricName?: string;
        /**
         * Specifies is the operation to perform to compare the metric. The default
         * is `EQUAL`.
         */
        operator?: string;
        /**
         * Scope for a metric defines the level at which that metric is defined. The
         * specified metric scope must be equal to or greater than its primary scope
         * as defined in the data model. The primary scope is defined by if the
         * segment is selecting users or sessions.
         */
        scope?: string;
    }
    /**
     * A segment sequence definition.
     */
    interface Schema$SegmentSequenceStep {
        /**
         * Specifies if the step immediately precedes or can be any time before the
         * next step.
         */
        matchType?: string;
        /**
         * A sequence is specified with a list of Or grouped filters which are
         * combined with `AND` operator.
         */
        orFiltersForSegment?: Schema$OrFiltersForSegment[];
    }
    /**
     * Sequence conditions consist of one or more steps, where each step is
     * defined by one or more dimension/metric conditions. Multiple steps can be
     * combined with special sequence operators.
     */
    interface Schema$SequenceSegment {
        /**
         * If set, first step condition must match the first hit of the visitor (in
         * the date range).
         */
        firstStepShouldMatchFirstHit?: boolean;
        /**
         * The list of steps in the sequence.
         */
        segmentSequenceSteps?: Schema$SegmentSequenceStep[];
    }
    /**
     * A Simple segment conditions consist of one or more dimension/metric
     * conditions that can be combined.
     */
    interface Schema$SimpleSegment {
        /**
         * A list of segment filters groups which are combined with logical `AND`
         * operator.
         */
        orFiltersForSegment?: Schema$OrFiltersForSegment[];
    }
    /**
     * Represents details collected when the visitor performs a transaction on the
     * page.
     */
    interface Schema$TransactionData {
        /**
         * The transaction ID, supplied by the e-commerce tracking method, for the
         * purchase in the shopping cart.
         */
        transactionId?: string;
        /**
         * The total sale revenue (excluding shipping and tax) of the transaction.
         */
        transactionRevenue?: number;
        /**
         * Total cost of shipping.
         */
        transactionShipping?: number;
        /**
         * Total tax for the transaction.
         */
        transactionTax?: number;
    }
    /**
     * Contains information to identify a particular user uniquely.
     */
    interface Schema$User {
        /**
         * Type of the user in the request. The field `userId` is associated with
         * this type.
         */
        type?: string;
        /**
         * Unique Id of the user for which the data is being requested.
         */
        userId?: string;
    }
    /**
     * This represents a user session performed on a specific device at a certain
     * time over a period of time.
     */
    interface Schema$UserActivitySession {
        /**
         * Represents a detailed view into each of the activity in this session.
         */
        activities?: Schema$Activity[];
        /**
         * The data source of a hit. By default, hits sent from analytics.js are
         * reported as &quot;web&quot; and hits sent from the mobile SDKs are
         * reported as &quot;app&quot;. These values can be overridden in the
         * Measurement Protocol.
         */
        dataSource?: string;
        /**
         * The type of device used: &quot;mobile&quot;, &quot;tablet&quot; etc.
         */
        deviceCategory?: string;
        /**
         * Platform on which the activity happened: &quot;android&quot;,
         * &quot;ios&quot; etc.
         */
        platform?: string;
        /**
         * Date of this session in ISO-8601 format.
         */
        sessionDate?: string;
        /**
         * Unique ID of the session.
         */
        sessionId?: string;
    }
    class Resource$Reports {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * analyticsreporting.reports.batchGet
         * @desc Returns the Analytics data.
         * @alias analyticsreporting.reports.batchGet
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().GetReportsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchGet(params?: Params$Resource$Reports$Batchget, options?: MethodOptions): GaxiosPromise<Schema$GetReportsResponse>;
        batchGet(params: Params$Resource$Reports$Batchget, options: MethodOptions | BodyResponseCallback<Schema$GetReportsResponse>, callback: BodyResponseCallback<Schema$GetReportsResponse>): void;
        batchGet(params: Params$Resource$Reports$Batchget, callback: BodyResponseCallback<Schema$GetReportsResponse>): void;
        batchGet(callback: BodyResponseCallback<Schema$GetReportsResponse>): void;
    }
    interface Params$Resource$Reports$Batchget extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GetReportsRequest;
    }
    class Resource$Useractivity {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * analyticsreporting.userActivity.search
         * @desc Returns User Activity data.
         * @alias analyticsreporting.userActivity.search
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().SearchUserActivityRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search(params?: Params$Resource$Useractivity$Search, options?: MethodOptions): GaxiosPromise<Schema$SearchUserActivityResponse>;
        search(params: Params$Resource$Useractivity$Search, options: MethodOptions | BodyResponseCallback<Schema$SearchUserActivityResponse>, callback: BodyResponseCallback<Schema$SearchUserActivityResponse>): void;
        search(params: Params$Resource$Useractivity$Search, callback: BodyResponseCallback<Schema$SearchUserActivityResponse>): void;
        search(callback: BodyResponseCallback<Schema$SearchUserActivityResponse>): void;
    }
    interface Params$Resource$Useractivity$Search extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SearchUserActivityRequest;
    }
}
