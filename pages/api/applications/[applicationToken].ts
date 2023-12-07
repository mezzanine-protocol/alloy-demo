// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getBasicAuthToken } from '../../../lib/apiHelpers';
import { domain } from '../../../config.json';
import * as path from 'path';

const baseUrl = domain || 'https://sandbox.alloy.co';
const apiBaseUrl = path.join(baseUrl, '/journeys/');

const getRequest = async (journeyToken: string, applicationToken: string) => {
  const apiUrl =
    apiBaseUrl + journeyToken + '/applications/' + applicationToken;
  const response = await fetch(apiUrl, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      Authorization: getBasicAuthToken(),
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { applicationToken, journeyToken } = req.query;
  if (typeof applicationToken !== 'string') {
    res.status(400).send('applicationToken must be a string');
  } else if (typeof journeyToken !== 'string') {
    res.status(400).send('journeyToken must be a string');
  } else {
    const response = await getRequest(journeyToken, applicationToken);
    res.status(200).json(response);
  }
}
