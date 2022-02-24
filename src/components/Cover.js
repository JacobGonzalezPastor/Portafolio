import React from 'react';
import coverVideo from '../components/media/coverVideo.mp4';
import { Containerv, Title, Video, Desp } from '../Styles/Styledvideo';

const Cover = () => {
    return (
        <Containerv className='cover-container'>
            <Video className='video' src={coverVideo} autoPlay loop muted />
            <Title>Jacob Enrique Gonzalez Pastor</Title>
            <Desp>Ingeniero de sistemas | Desarrollador Fronted</Desp>
        </Containerv>
    )
};

export default Cover;
