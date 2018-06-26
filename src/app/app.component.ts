import { Component, ViewChild } from '@angular/core';
import { TelerikReportViewerComponent } from '@progress/telerik-angular-report-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("reportviewer") reportViewer: TelerikReportViewerComponent;
  title = 'Telerik Reporting Angular Report Viewer';

  public defaultItem: { text: string, value: number } = { text: "Select employee...", value: null };
  public employees: Array<{ text: string, value: number }> = [
    { text: "Stephen Jiang", value: 268 },
    { text: "Michael Blythe", value: 275 },
    { text: "Linda Mitchell", value: 276 },
    { text: "Jillian Carson", value: 277 },
    { text: "Garrett Vargas", value: 278 }
  ];

  public selectedEmployee;
  public selectedDate: Date = new Date(2003, 6, 1)

  viewerContainerStyle = {
    position: 'relative',
    width: '1500px',
    height: '800px',
    ['font-family']: 'ms sans serif'
  };

  public selectionChange(): void {   
      var reportSource = this.reportViewer.getReportSource();
      // console.log(reportSource.parameters);
      let params = reportSource.parameters;    
      params.Employee = this.selectedEmployee.value; 
      params.ReportDate = this.selectedDate;   
      reportSource.parameters = params;  
      this.reportViewer.setReportSource(reportSource);    
  }
}
