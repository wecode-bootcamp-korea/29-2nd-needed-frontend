import React from 'react';
import JobDetailApply from './JobDetailApply';
import JobDetailApplicationForm from './JobDetailApplicationForm';

const JobDetailApplyRender = ({
  isApplicationFormOpen,
  setIsApplicationFormOpen,
  reward,
  isShareOpen,
  handleShareModal,
}) => {
  if (isApplicationFormOpen) {
    return (
      <JobDetailApplicationForm
        setIsApplicationFormOpen={setIsApplicationFormOpen}
      />
    );
  } else {
    return (
      <JobDetailApply
        reward={reward}
        setIsApplicationFormOpen={setIsApplicationFormOpen}
        isShareOpen={isShareOpen}
        handleShareModal={handleShareModal}
      />
    );
  }
};

export default JobDetailApplyRender;
