import React from 'react';
import { Stack, Box } from '@mui/material';

import { ChannelCard, Loader, VideoCard } from './';

type VideosProps = {
    videos?: any;
};

const Videos = (props: VideosProps) => {
    // if (!props.videos?.length) return <Loader />;
    return (
        <Stack direction='row' flexWrap='wrap' justifyContent='start' alignItems='start' gap={2}>
            {props.videos.map((video: any, idx: React.Key | null | undefined) => (
                <Box key={idx}>
                    {video.id.videoId && <VideoCard video={video} /> }
                    {/* {item.id.channelId && <ChannelCard channelDetail={item} />} */}
                </Box>
            ))}
        </Stack>
    );
}

export default Videos;
