import React from 'react';
import { Stack, Box } from '@mui/material';

import { ChannelCard, Loader, VideoCard } from './';

type VideosProps = {
    videos?: any;
};

const Videos = (props: VideosProps) => {
    if (!props.videos?.length) return <Loader />;

    return (
        <Stack direction='row' flexWrap='wrap' justifyContent='start' alignItems='start' gap={2}>
            {props.videos.map((item: any, idx: React.Key | null | undefined) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} /> }
                    {/* {item.id.channelId && <ChannelCard channelDetail={item} />} */}
                </Box>
            ))}
        </Stack>
    );
}

export default Videos;
