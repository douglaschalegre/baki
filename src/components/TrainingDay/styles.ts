import styled from 'styled-components/native';

export const TitleWrapper = styled.View`
  display: flex;
  background: #50ffb1;
  border-radius: 2px;
  flex-direction: column;
  padding: 4px 8px 4px 8px;
`;
export const Exercises = styled.View`
  padding: 8px;
`;

export const Exercise = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ExerciseText = styled.Text`
  width: 150px;
  padding: 4px;
`;
export const ExerciseTextValues = styled.Text`
  width: 50px;
  padding: 4px;
`;

export const Title = styled.Text`
  color: #404040;
  font-weight: bold;
`;
export const SubTitle = styled.Text`
  color: #404040;
`;

export const TrainingDayWrapper = styled.View`
  min-width: 200px;
  margin: 8px;
  background: #f7f0f5;
  border-radius: 4px;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;
