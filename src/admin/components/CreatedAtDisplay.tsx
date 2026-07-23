import React from 'react';
import { Box, Typography } from '@strapi/design-system';
import { unstable_useContentManagerContext, unstable_useDocument } from '@strapi/strapi/admin';

const CreatedAtDisplay = () => {
  const context = unstable_useContentManagerContext();

  if (!context) return null;

  const { isCreatingEntry, model, collectionType, id } = context;

  const docData = unstable_useDocument({
    model,
    collectionType,
    documentId: id,
  });

  const { document, isLoading } = docData;

  const createdAt = document?.createdAt || document?.updatedAt;

  if (isCreatingEntry || isLoading || !createdAt) {
    return null;
  }

  const date = new Date(createdAt).toLocaleString();

  return (
    <Box padding={4} background="neutral0" hasRadius shadow="filterShadow" marginTop={4}>
      <Typography variant="sigma" textColor="neutral600" id="created-at-title">
        Created At
      </Typography>
      <Box paddingTop={2}>
        <Typography variant="omega">
          {date}
        </Typography>
      </Box>
    </Box>
  );
};

export default CreatedAtDisplay;
