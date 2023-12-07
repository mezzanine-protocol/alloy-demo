import config from '../config.json';

export const getBasicAuthToken = (useOngoingWorkflow = false) => {
  let workflowToken: string, workflowSecret: string;
  const ongoingWorkflow = config.workflows.find(
    ({ workflow_type }) => workflow_type === 'transaction_verification'
  );
  if (useOngoingWorkflow && ongoingWorkflow) {
    workflowToken = ongoingWorkflow.workflow_token;
    workflowSecret = ongoingWorkflow.workflow_secret;
  } else {
    workflowToken = config.api_credentials.workflow_token;
    workflowSecret = config.api_credentials.workflow_secret;
  }
  return `Basic ${Buffer.from(`${workflowToken}:${workflowSecret}`).toString(
    'base64'
  )}`;
};
