export interface ApplicationServerLoadConfiguration {
  loadConfiguration(): ApplicationServerStart;
}

export interface ApplicationServerStart {
  start(): void;
}