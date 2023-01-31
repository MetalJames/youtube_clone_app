import React from 'react';
import { Stack, Box } from '@mui/material';

import { ChannelCard, Loader, VideoCard } from './';

type VideosProps = {
    videos?: any;
};

const Videos = (props: VideosProps) => {
    // if (!props.videos?.length) return <Loader />;
    // console.log(props.videos)
    return (
        <Stack direction='row' flexWrap='wrap' justifyContent='center' alignItems='center' alignContent='space-evenly' gap={3}>
            {props.videos.map((video: any, idx: React.Key | null | undefined) => (
                <Box key={idx}>
                    {video.id.videoId && <VideoCard video={video} /> }
                    {video.id.channelId && <ChannelCard channelDetail={video} />}
                </Box>
            ))}
        </Stack>
    );
}

export default Videos;
