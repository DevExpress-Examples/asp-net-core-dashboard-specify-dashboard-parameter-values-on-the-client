<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/550745772/23.1.2%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1121315)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# BI Dashboard for ASP.NET Core - How to specify dashboard parameter values on the client

This example shows how to change dashboard parameter values in the Web Dashboard control on the [client](https://docs.devexpress.com/Dashboard/400192/web-dashboard/aspnet-core-dashboard-control/client-side-api-overview?p=netframework). 

![Web Dashboard](web-dashboard.png)

This example uses the following methods:

- [DashboardParameterDialogExtension.getParameters](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.DashboardParameterDialogExtension?p=netframework#js_devexpress_dashboard_dashboardparameterdialogextension_getparameters) - obtains the dashboard parameter settings and metadata.
- [DashboardParameter.setValue](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.DashboardParameter#js_devexpress_dashboard_dashboardparameter_setvalue_value_) - specifies the dashboard parameter value on the client. 
- [DashboardParameter.getDefaultValue](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.DashboardParameter#js_devexpress_dashboard_dashboardparameter_getdefaultvalue) - returns a default parameter value. 
- [DashboardParameterDialogExtension.show](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.DashboardParameterDialogExtension#js_devexpress_dashboard_dashboardparameterdialogextension_show) - invokes the Dashboard Parameters dialog that displays applied parameter values.

## Files to Review

* [ParameterValues.js](./CS/AspNetCoreDashboard/wwwroot/js/ParameterValues.js)
* [Index.cshtml](./CS/AspNetCoreDashboard/Pages/Index.cshtml)

## Documentation

- [Dashboard Parameters on the Web](https://docs.devexpress.com/Dashboard/117062/web-dashboard/create-dashboards-on-the-web/data-analysis/dashboard-parameters)


## More Examples

- [Dashboard for Web Forms - How to specify dashboard parameter values on the client](https://github.com/DevExpress-Examples/web-forms-dashboard-specify-dashboard-parameter-values-on-the-client)
<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=asp-net-core-dashboard-specify-dashboard-parameter-values-on-the-client&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=asp-net-core-dashboard-specify-dashboard-parameter-values-on-the-client&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
