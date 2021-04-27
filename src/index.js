import HttpSupervisor       from './http-supervisor';
import HttpSupervisorWidget from './http-supervisor-widget';
import ConsoleReporter      from './console-reporter';

const http = new HttpSupervisor(new HttpSupervisorWidget(), new ConsoleReporter());
export default http;
export { HttpSupervisor };
