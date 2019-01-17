import { SL_API_KEY } from '../../secret';
import axios, { AxiosInstance, AxiosPromise } from 'axios';

const format: String = 'json';
const timeWindow: Number = 60;
const stationID: Number = 3770; // Kistahöjden, checked via SL Platsuppslag

const instance: AxiosInstance = axios.create({
  baseURL: `http://api.sl.se/api2`,
  timeout: 1000,
});

export function getRealtimeHome() : AxiosPromise {
  return instance.get(`/realtimedeparturesV4.${format}?key=${SL_API_KEY}&siteid=${stationID}&timewindow=${timeWindow}`);
}

