export interface ApplicationResponse {
  journey_application_token: string;
  status: string;
  sandbox: boolean;
  created_at: number;
  updated_at: number;
  closed_at: null;
  recent_outcome: null;
  complete_outcome: null;
  journey_application_status: string;
  is_archived: boolean;
  archived_at: null;
  _embedded: _embedded;
  _links: _links;
}
interface _embedded {
  child_entities?: ChildEntitiesItem[];
  entity_applications?: EntityApplicationsItem[];
  entity?: Entity;
  events?: EventsItem[];
  journey: Journey;
  node?: Node;
}
interface ChildEntitiesItem {
  external_entity_identifier: null;
  name: string;
  token: string;
  type: string;
  entity_application_token: string;
  entity_application_status: string;
  entity_application_outcome: null;
  created: string;
}
interface EntityApplicationsItem {
  entity_token: string;
  entity_application_token: string;
  entity_application_outcome: null;
  entity_application_status: string;
  entity_application_status_details: Entity_application_status_details;
}
interface Entity_application_status_details {
  optional: OptionalItem[];
  required: RequiredItem[];
}
interface OptionalItem {
  key: string;
  type: string;
  regex?: string;
  description: string | null;
}
interface RequiredItem {
  key: string;
  type: string;
  regex: string;
  message: string;
  description: string;
}
interface Entity {
  external_entity_identifier: null;
  name: null;
  token: string;
  type: string;
}
interface EventsItem {
  journey_application_event_token: string;
  journey_application_token: string;
  type: string;
  timestamp: number;
  entity_token: null | string;
  entity_application_token: null | string;
  _embedded: _embedded;
  _links: _links;
  evaluation_token?: string;
  evaluation_tokens_sorted_by_created_dec?: string[];
}
interface Node {
  id: null | string;
  name: null;
  position: null;
  type: null | string;
  config?: Config;
  workflow_name?: string;
}
interface _links {
  evaluation?: Evaluation;
  self?: Self;
  callback?: Callback;
}
interface Config {
  application_token: string;
  workflow_token: string;
  application_version_id: number;
  workflow_version_id: number;
}
interface Evaluation {
  href: string;
}
interface Journey {
  journey_name: string;
  journey_token: string;
  journey_version_num: string;
  _links: _links;
}
interface Self {
  href: string;
}
interface Callback {
  href: string;
}
