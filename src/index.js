import './polyfill';
import HttpSupervisor       from './http-supervisor';
import HttpSupervisorWidget from './http-supervisor-widget';
import ConsoleReporter      from './console-reporter';

const httpSupervisor = new HttpSupervisor(new HttpSupervisorWidget(), new ConsoleReporter({
  id: 'Request No',
  url: 'URL',
  path: 'Path',
  method: 'Type',
  payload: 'Payload',
  payloadSize: 'Payload Size (bytes)',
  duration: 'Duration (ms)',
  responseStatus: 'Status',
  response: 'Response',
  responseSize: 'Size (bytes)',
  error: 'Is Error?',
  errorDescription: 'Error Description',
  exceedsQuota: 'Exceeds Quota?'
}));

export default httpSupervisor;
export { HttpSupervisor };
