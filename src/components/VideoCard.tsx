import React from 'react';
import { Link } from 'react-router-dom'; 
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

type VideoCardProps = {
    video?: {
        id: {
            videoId?: string,
        },
        snippet?: {
            thumbnails?: {
                high: {
                    url: string
                }
            },
            title?: string,
            high?: string,
            url?: string,
            image?: string,
        } ,
    }
}

const VideoCard = (props: VideoCardProps) => {
    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px', }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={props.video?.id?.videoId ? `/video/${props.video.id.videoId}` : demoVideoUrl }>
                <CardMedia image={props.video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
                            sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
                            // to make it work - add to CardMedia 'alt?: string'
                            // node_modules>@mui>material>CardMedia>CardMedia.bind.ts
                            //alt?: string; - approximetly line 33
                            alt={props.video?.snippet?.title} 
                />
            </Link>
        </Card>
    )
}

export default VideoCard