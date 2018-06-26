# KendoAngularReportViewer
This sample project implements an instance of Telerik Reporting's HTML5 Report Viewer within an Angular 6 view (https://docs.telerik.com/reporting/angular-report-viewer). The report that is displayed in the Report Viewer's content area has two parameters: Employee (id as number) and ReportDate(date). They are set by means of selections made in the Kendo UI DropDownList for Angular (https://www.telerik.com/kendo-angular-ui/components/dropdowns/dropdownlist/) and Kendo UI Date Picker (https://www.telerik.com/kendo-angular-ui/components/dateinputs/datepicker/). The selections are passed to the report on the Kendo UI button's click event. The click event is handled in the selectionChange event which sets the reportSource -> report property of the viewer.

The serviceURL that connects the embedded Report Viewer to a server implementation of a Telerik Reporting REST Service (https://docs.telerik.com/reporting/telerik-reporting-rest-conception) is set to an implementation of the ReportingRestServiceCors C# project available here: https://github.com/rzaslaw/ReportingRestServiceCors.

<tr-viewer #reportviewer
    [containerStyle]="viewerContainerStyle"
    [serviceUrl]="'http://localhost/ReportingRestServiceCors/api/reports'"
    [reportSource]="{
        report: 'Employee Sales Summary.trdp',
        parameters: {}
    }"
    [viewMode]="'INTERACTIVE'"
    [scaleMode]="'SPECIFIC'"
    [scale]="1.0">
</tr-viewer>


