// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import config from '../../../config.json';

const getConfig = async (res: NextApiResponse) => {
  const workflows = config.workflows.map((workflow) => ({
    workflow_token: workflow.workflow_token,
    workflow_type: workflow.workflow_type,
    workflow_name: workflow.workflow_name,
  }));
  res.status(200).json({
    sdk_keys: config.sdk_keys,
    journeys: config.journeys,
    workflows,
  });
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  getConfig(res);
}
