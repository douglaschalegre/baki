import React from 'react';
import {
  Exercise,
  Exercises,
  ExerciseText,
  ExerciseTextValues,
  Icon,
  SubTitle,
  Title,
  TitleWrapper,
  TrainingDayWrapper,
} from './styles';

export default function TrainingDay(props: any) {
  function calculateTrainingVolume(exercisesList: []) {
    let vt = 0;
    exercisesList.forEach((item) => {
      vt += item.series * item.weight * item.reps;
    });
    return vt;
  }

  return (
    <TrainingDayWrapper>
      <Exercises>
        {props.trainingDay.exerciseList.map((exercise: any) => (
          <Exercise key={exercise.id}>
            <ExerciseText>{exercise.exerciseName}</ExerciseText>
            <ExerciseTextValues>{`${exercise.series}x${exercise.reps}`}</ExerciseTextValues>
            <ExerciseTextValues>{`${exercise.weight}kg`}</ExerciseTextValues>
          </Exercise>
        ))}
      </Exercises>
      <TitleWrapper>
        <Title>
          <Icon source={require('../../assets/calendar.png')} />
          {'  '}
          {props.trainingDay.day}
        </Title>
        <SubTitle>
          <Icon source={require('../../assets/weight-bar.png')} />
          {'  '}VT {calculateTrainingVolume(props.trainingDay.exerciseList)}
        </SubTitle>
      </TitleWrapper>
    </TrainingDayWrapper>
  );
}
