import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface TrainingsProps {
  children: ReactNode;
}

function Trainings({ children }: TrainingsProps) {
  return (
    <Container>
      <Text>Trainings</Text>
      {children}
    </Container>
  );
};

export default Trainings;
