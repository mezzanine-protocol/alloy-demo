import { useContext } from 'react';
import { DevModeContext } from '../../pages/_app';
import {
  Box,
  ActionTitle,
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from './ResponseRecord.style';

const ResponseRecord = () => {
  const { apiCalls } = useContext(DevModeContext);

  return (
    <div>
      {apiCalls.length === 0 ? (
        <ActionTitle>No API calls yet!</ActionTitle>
      ) : (
        <Accordion type={'multiple'}>
          {apiCalls.map((apiCall, index) => {
            return (
              <AccordionItem value={index.toString()} key={index}>
                <AccordionHeader>
                  <AccordionTrigger>
                    <Box>
                      <ActionTitle>API Data {`(${index + 1})`}</ActionTitle>
                    </Box>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ActionTitle>Request:</ActionTitle>
                    <pre>{apiCall.request}</pre>
                    <ActionTitle>Response:</ActionTitle>
                    <pre>{apiCall.response}</pre>
                  </AccordionContent>
                </AccordionHeader>
              </AccordionItem>
            );
          })}
        </Accordion>
      )}
    </div>
  );
};

export default ResponseRecord;
