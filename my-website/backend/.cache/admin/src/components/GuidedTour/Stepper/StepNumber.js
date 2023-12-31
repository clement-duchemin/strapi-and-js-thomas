import React from 'react';

import { Flex, Icon, Typography } from '@strapi/design-system';
import { pxToRem } from '@strapi/helper-plugin';
import { Check } from '@strapi/icons';
import PropTypes from 'prop-types';

import { IS_ACTIVE, IS_DONE, IS_NOT_DONE } from '../constants';

const StepNumber = ({ type, number }) => {
  if (type === IS_DONE) {
    return (
      <Flex
        background="primary600"
        padding={2}
        borderRadius="50%"
        width={pxToRem(30)}
        height={pxToRem(30)}
        justifyContent="center"
      >
        <Icon as={Check} aria-hidden width={pxToRem(16)} color="neutral0" />
      </Flex>
    );
  }

  if (type === IS_ACTIVE) {
    return (
      <Flex
        background="primary600"
        padding={2}
        borderRadius="50%"
        width={pxToRem(30)}
        height={pxToRem(30)}
        justifyContent="center"
      >
        <Typography fontWeight="semiBold" textColor="neutral0">
          {number}
        </Typography>
      </Flex>
    );
  }

  return (
    <Flex
      borderColor="neutral500"
      borderWidth="1px"
      borderStyle="solid"
      padding={2}
      borderRadius="50%"
      width={pxToRem(30)}
      height={pxToRem(30)}
      justifyContent="center"
    >
      <Typography fontWeight="semiBold" textColor="neutral600">
        {number}
      </Typography>
    </Flex>
  );
};

StepNumber.defaultProps = {
  number: undefined,
  type: IS_NOT_DONE,
};

StepNumber.propTypes = {
  number: PropTypes.number,
  type: PropTypes.oneOf([IS_ACTIVE, IS_DONE, IS_NOT_DONE]),
};

export default StepNumber;
