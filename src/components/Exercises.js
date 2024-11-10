import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material/';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  // Static exercise data with custom image URLs
  const allExercises = [
    { id: 1, name: 'Bicep Curl', bodyPart: 'biceps', image: 'https://cdn.shopify.com/s/files/1/0250/0362/2496/files/image2_0408198c-8e3f-4c37-86cf-a423f8e3e20f_480x480.gif?v=1669736995' },
    { id: 2, name: 'Leg Press', bodyPart: 'legs', image: 'https://media.tenor.com/e0qeS17dv7QAAAAM/legpress45-leg-press.gif' },
    { id: 3, name: 'Chest Press', bodyPart: 'chest', image: 'https://i.pinimg.com/originals/b6/28/0f/b6280fbba2b4e7155a4a1901dfeebc9d.gif' },
    { id: 4, name: 'Pull Up', bodyPart: 'back', image: 'https://media.tenor.com/bOA5VPeUz5QAAAAM/noequipmentexercisesmen-pullups.gif' },
    { id: 5, name: 'Squat', bodyPart: 'legs', image: 'https://media.tenor.com/Pfj8vy41k-0AAAAM/gym.gif' },
    { id: 6, name: 'Bench Press', bodyPart: 'chest', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif' },
    { id: 7, name: 'Deadlift', bodyPart: 'back', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDkThIy4oVo55s-nv_f1cqaHLUAMZMXGdtg&s' },
    { id: 8, name: 'Bicep Curl Machine', bodyPart: 'biceps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Bicep-Curl-Machine.gif' },
    { id: 9, name: 'Leg Extension', bodyPart: 'legs', image: 'https://media.tenor.com/bqKtsSuqilQAAAAM/gym.gif' },
    { id: 10, name: 'Push Up', bodyPart: 'chest', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Push-Up-Plus.gif' },
    // Add more exercises as needed
  ];

  // Filter exercises by body part or show all if 'all' is selected
  const filteredExercises = bodyPart === 'all'
    ? allExercises
    : allExercises.filter(exercise => exercise.bodyPart === bodyPart);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = filteredExercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing results
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {filteredExercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(filteredExercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
