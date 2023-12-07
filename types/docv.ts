export interface DocVCallback {
  document_token_front: string; // the Alloy Document Token for the front of the ID
  document_token_back: string; // the Alloy Document Token for the back of the ID
  document_token_selfie: string; // the Alloy Document Token for selfie (if present)
  evaluation_token: string; // the Evaluation token for the final Decision
  entity_token: string; // the Entity Token for the user
  outcome: string; // the final decision. By default, it will be "Approved", "Manual Review", or "Denied"
  status: string; // "closed" if the user did not finish the process and "completed" if they did
}
