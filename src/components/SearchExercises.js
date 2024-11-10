import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [bodyParts, setBodyParts] = useState(['all', 'biceps', 'legs', 'chest', 'back']);

    // Sample exercise data
    const exerciseData = [
        { id: 1, name: 'Bicep Curl', bodyPart: 'biceps' },
        { id: 2, name: 'Leg Press', bodyPart: 'legs' },
        { id: 3, name: 'Chest Fly', bodyPart: 'chest' },
        { id: 4, name: 'Pull Up', bodyPart: 'back' },
        // Add more exercises as needed
    ];

    useEffect(() => {
        // Filter exercises based on selected body part
        if (bodyPart === 'all') {
            setExercises(exerciseData);
        } else {
            setExercises(exerciseData.filter((exercise) => exercise.bodyPart === bodyPart));
        }
    }, [bodyPart, setExercises]);

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography fontWeight="700" sx={{ fontSize: { lg: '50px', xs: '30px' } }} mb="50px" textAlign="center">
                Awesome Exercises You Should Know
            </Typography>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                {/* Horizontal Scrollbar to select body parts */}
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack>
    );
};

export default SearchExercises;
