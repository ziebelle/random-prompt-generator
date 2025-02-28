import React, { useState } from 'react';
import { Button, Paper, Typography, Box, List, ListItem, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '15px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: '2rem',
    padding: '12px 32px',
    fontSize: '1.1rem',
    borderRadius: '50px',
    textTransform: 'none',
    background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 15px rgba(255, 107, 107, 0.3)',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
        background: 'linear-gradient(45deg, #FF8E53 30%, #FF6B6B 90%)',
    },
}));

const HistorySection = styled(Box)(({ theme }) => ({
    marginTop: '2rem',
    padding: '1rem',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    maxHeight: '300px',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '8px',
    },
    '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
        borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#FF8E53',
        borderRadius: '4px',
        '&:hover': {
            background: '#FF6B6B',
        },
    },
}));

const HistoryItem = styled(ListItem)(({ theme }) => ({
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '0.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '&:last-child': {
        marginBottom: 0,
    },
}));

// Collection of creative prompts
const prompts = [
    "Write down 10 innovative ideas for solving environmental problems.",
    "Create a story that begins with the line: 'The door opened by itself...'",
    "List 5 inventions that could change the way we live in 2050.",
    "Design a new holiday and describe its traditions and significance.",
    "Write a letter to your future self 10 years from now.",
    "Imagine and describe a new color that doesn't exist yet.",
    "Create a detailed plan for your dream adventure.",
    "Write down 10 ideas for making education more engaging and effective.",
    "Design a new sport that combines elements of three existing sports.",
    "Describe a day in the life of someone living on Mars in 2100.",
    "Create a new recipe using only ingredients that are blue.",
    "Write a manifesto for a movement that promotes creativity.",
    "Design a solution for a common everyday problem no one talks about.",
    "Create a new musical instrument and describe how it would sound.",
    "Write down 10 ways to make your city more sustainable and livable.",
    "Invent a new profession that might exist in 50 years.",
    "Design a garden that appeals to all five senses.",
    "Create a new board game concept and its rules.",
    "Write a short story using only dialogue between two characters.",
    "Design a new type of transportation for the future."
];

function App() {
    const [prompt, setPrompt] = useState('Click the button to generate a random prompt!');
    const [loading, setLoading] = useState(false);
    const [history, setHistory] = useState([]);

    const getRandomPrompt = () => {
        setLoading(true);
        // Simulate a brief loading state for better UX
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * prompts.length);
            const newPrompt = prompts[randomIndex];
            setPrompt(newPrompt);
            // Add the new prompt to history with timestamp
            setHistory(prevHistory => [{
                prompt: newPrompt,
                timestamp: new Date().toLocaleTimeString()
            }, ...prevHistory]);
            setLoading(false);
        }, 500);
    };

    return (
        <Box sx={{ padding: '20px' }}>
            <StyledPaper elevation={3}>
                <Typography variant="h4" component="h1" gutterBottom sx={{
                    fontWeight: 600,
                    background: 'linear-gradient(45deg, #FF6B6B, #FF8E53)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Random Prompt Generator
                </Typography>

                <Typography variant="body1" sx={{
                    fontSize: '1.2rem',
                    marginTop: '2rem',
                    marginBottom: '2rem',
                    lineHeight: 1.6,
                    color: '#4A4A4A'
                }}>
                    {prompt}
                </Typography>

                <StyledButton
                    variant="contained"
                    onClick={getRandomPrompt}
                    disabled={loading}
                >
                    {loading ? 'Generating...' : 'Generate Prompt'}
                </StyledButton>

                {history.length > 0 && (
                    <>
                        <Typography variant="h6" sx={{
                            marginTop: '2rem',
                            fontWeight: 500,
                            color: '#4A4A4A'
                        }}>
                            Prompt History
                        </Typography>
                        <HistorySection>
                            <List sx={{ padding: 0 }}>
                                {history.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <HistoryItem>
                                            <Typography variant="body2" sx={{ color: '#888', marginBottom: '0.25rem' }}>
                                                {item.timestamp}
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: '#4A4A4A' }}>
                                                {item.prompt}
                                            </Typography>
                                        </HistoryItem>
                                        {index < history.length - 1 && <Divider />}
                                    </React.Fragment>
                                ))}
                            </List>
                        </HistorySection>
                    </>
                )}
            </StyledPaper>
        </Box>
    );
}

export default App; 