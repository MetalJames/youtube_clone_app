import React from 'react';
import { Stack, Box, Card } from '@mui/material';

import { ChannelCard, Loader, VideoCard } from './';

type VideosProps = {
    videos?: any;
    direction?: string
};

const Videos = (props: VideosProps) => {
    if (!props.videos?.length) return <Loader />;
    return (
        //have to modify stack.d.ts line 19-20 to get read of error(typescript tricky)
        <Stack direction={props.direction || 'row' } flexWrap='wrap' justifyContent='center' alignItems='center' alignContent='space-evenly' gap={3}>
            {props.videos.map((item: any, idx: React.Key | null | undefined) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} /> }
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    );
}

export default Videos;
