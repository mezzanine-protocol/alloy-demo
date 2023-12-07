const assert = require('node:assert/strict');

const hasProp = (obj, prop) => {
  assert.equal(obj.hasOwnProperty(prop), true);
};

const JOURNEY_TYPES = [
  'us_consumer_onboarding',
  'us_business_onboarding',
  'emea_consumer_onboarding',
  'emea_business_onboarding',
  'pii_change',
];

const WORKFLOW_TYPES = ['transaction_verification'];

const handleError = (msg) => {
  console.error(
    `ConfigError: ${msg}. Check config.sample.json to make sure your format is correct.`
  );
  process.exit(1);
};

let config;

try {
  config = require('./config.json');
} catch (err) {
  handleError(
    'Missing config.json file at the root of the demo-app/ directory'
  );
}

try {
  [
    'api_credentials',
    'journeys',
    'domain',
    'customer_slug',
    'sdk_keys',
    'workflows',
    'sdk_app_url',
    'sdk_api_url',
  ].forEach((key) => {
    hasProp(config, key);
  });
} catch (err) {
  handleError('config.json missing required key');
}

try {
  config.journeys.forEach((journey) => {
    assert.equal(JOURNEY_TYPES.includes(journey.journey_type), true);
    hasProp(journey, 'journey_token');
    hasProp(journey, 'journey_name');
  });
} catch (err) {
  console.log(err);
  handleError('journeys section improperly formatted');
}

try {
  config.workflows.forEach((workflow) => {
    assert.equal(WORKFLOW_TYPES.includes(workflow.workflow_type), true);
    hasProp(workflow, 'workflow_token');
    hasProp(workflow, 'workflow_name');
    hasProp(workflow, 'workflow_secret');
  });
} catch (err) {
  handleError('workflows section improperly formatted');
}

try {
  config.sdk_keys.forEach((sdk) => {
    hasProp(sdk, 'key');
  });
} catch (err) {
  handleError('sdk_keys section improperly formatted');
}

try {
  hasProp(config.api_credentials, 'workflow_token');
  hasProp(config.api_credentials, 'workflow_secret');
} catch (err) {
  handleError('api_credentials section improperly formatted');
}

console.log('config.json properly formatted!');
