﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChart } from './workbookchart.entity';
import { WorkbookChartModel } from './workbookchart.model';
import { WorkbookChartCollection } from './workbookchart.collection';
//#endregion

export const WorkbookChartConfig = {
  name: "workbookChart",
  base: "microsoft.graph.entity",
  model: WorkbookChartModel,
  collection: WorkbookChartCollection,
  annotations: [],
  fields: {
    height: {type: 'Edm.Double', nullable: false},
    left: {type: 'Edm.Double', nullable: false},
    name: {type: 'Edm.String'},
    top: {type: 'Edm.Double', nullable: false},
    width: {type: 'Edm.Double', nullable: false},
    axes: {type: 'graph.workbookChartAxes', navigation: true},
    dataLabels: {type: 'graph.workbookChartDataLabels', navigation: true},
    format: {type: 'graph.workbookChartAreaFormat', navigation: true},
    legend: {type: 'graph.workbookChartLegend', navigation: true},
    series: {type: 'graph.workbookChartSeries', collection: true, navigation: true},
    title: {type: 'graph.workbookChartTitle', navigation: true},
    worksheet: {type: 'graph.workbookWorksheet', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChart>;