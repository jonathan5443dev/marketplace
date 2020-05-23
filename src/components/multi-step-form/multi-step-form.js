import React, {useRef, useState, cloneElement} from 'react';
import PropTypes from 'prop-types';
import Text from '../../components/text/text';
import {Dimensions} from 'react-native';
import {MainContainer, Step, Header, Content, Back} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const MultiStepForm = ({defaultStep, steps}) => {
  const scrolling = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const deviceWidth = Dimensions.get('window').width;

  const nextStep = () => {
    const offset = currentStep * deviceWidth;
    scrolling.current.scrollTo({x: offset, y: 0, animated: true});
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    const offset = (currentStep - 1) * deviceWidth;
    scrolling.current.scrollTo({x: offset, y: 0, animated: true});
    setCurrentStep(currentStep - 1);
  };

  return (
    <MainContainer
      ref={scrolling}
      pagingEnabled={true}
      scrollEnabled={false}
      horizontal={true}>
      {steps.map(step => (
        <Step>
          <Header>
            <Back onPress={() => previousStep()}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{color: 'white', marginBottom: 8}}
              />
            </Back>
            <Text type="headline 4" color="white" numberOfLines={2}>
              {step.title}
            </Text>
          </Header>
          <Content>{cloneElement(step.content, {nextStep})}</Content>
        </Step>
      ))}
    </MainContainer>
  );
};

MultiStepForm.propTypes = {
  steps: PropTypes.shape([]),
  defaultStep: PropTypes.number,
};

MultiStepForm.defaultProps = {
  steps: [],
};

export default MultiStepForm;
