import { SL_API_KEY } from '../../secret';
import axios, { AxiosInstance, AxiosPromise } from 'axios';

const format: String = 'json';
const timeWindow: Number = 60;
const stationID: Number = 3770; // Kistahöjden, checked via SL Platsuppslag

const instance: AxiosInstance = axios.create({
  baseURL: `http://api.sl.se/api2`,
  timeout: 1000,
});

export interface slResponseObject {
  StatusCode: Number;
  Message: String;
  ExecutionTime: Number;
  ResponseData: ResponseResult;
}

export interface ResponseResult {
  LatestUpdate: Date;
  DataAge: Number;
  Buses: [Departure];
  Metros: [Departure];
  Trains: [Departure];
  Trams: [Departure];
  Ships: [Departure];
  StopPointDeviations: [StopPointDeviation];
}
export interface Departure {
  TransportMode: String;
  LineNumber: String;
  Destination: String;
  JourneyDirection: Number;
  GroupOfLine: String;
  StopAreaName: String;
  StopAreaNumber: Number;
  StopPointDesignation: String;
  TimeTabledDateTime: Date;
  ExpectedDateTime: Date;
  DisplayTime: String;
  JourneyNumber: Number;
  Deviations: [Deviation];
  SecondaryDestiationName: String;
}
export interface Deviation {
  Consequence: String;
  ImportanceLevel: Number; // 0-9 where 9 is most severe
  Text: String;
}
export interface StopPointDeviation {
  StopInfo: StopInformation;
  Deviation: Deviation;
}
export interface StopInformation {
  GroupOfLine: String;
  StopAreaName: String;
  StopAreaNumber: Number;
  TransportMode: String;
}

export function getRealtimeHome() : AxiosPromise<slResponseObject> {
  return instance.get(
    `/realtimedeparturesV4.${format}?key=${SL_API_KEY}
    &siteid=${stationID}
    &timewindow=${timeWindow}`,
  );
}

