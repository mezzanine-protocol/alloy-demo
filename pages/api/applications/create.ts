// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getBasicAuthToken } from '../../../lib/apiHelpers';
import { domain } from '../../../config.json';
import * as path from 'path';

const baseUrl = domain || 'https://sandbox.alloy.co';
const apiBaseUrl = path.join(baseUrl, '/journeys/');

const postRequest = async (journeyToken: string, data: string) => {
  const apiUrl = apiBaseUrl + journeyToken + '/applications';
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: getBasicAuthToken(),
      'Content-Type': 'application/json',
      'alloy-journey-application-sync': 'true',
      'alloy-sandbox': 'true',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const journeyToken = req.query.journeyToken as string;
  const response = await postRequest(journeyToken, req.body);
  res.status(200).json(response);
}
