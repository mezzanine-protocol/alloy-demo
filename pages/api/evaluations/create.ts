// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getBasicAuthToken } from '../../../lib/apiHelpers';
import { domain } from '../../../config.json';
const apiBaseUrl = domain || 'https://api.alloy.co';

const postRequest = async (
  stringifiedBody: string,
  extraHeaders: Record<string, string>
) => {
  const apiUrl = `${apiBaseUrl}/evaluations`;
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: getBasicAuthToken(true),
      'Content-Type': 'application/json',
      'alloy-external-entity-id': extraHeaders['alloy-external-entity-id'],
    },
    body: stringifiedBody,
  });
  return await response.json();
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ summary: { outcome: string } }>
) {
  const response = await postRequest(
    req.body,
    req.headers as Record<string, string>
  );
  res.status(200).json(response);
}
