import HttpSupervisor       from './http-supervisor';
import HttpSupervisorWidget from './http-supervisor-widget';
import ConsoleReporter      from './console-reporter';

const httpSupervisor = new HttpSupervisor(new HttpSupervisorWidget(), new ConsoleReporter());

export default httpSupervisor;
export { HttpSupervisor };
