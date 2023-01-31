import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

type ChannelCardProps = {
    marginTop?: string,
    channelDetail?: {
        statistics?: {
            subscriberCount?: string,
        },
        id: {
            channelId?: string,
        },
        snippet?: {
            thumbnails?: {
                high: {
                    url: string
                }
            },
            title?: string,
            image?: string,
        } ,
    }
}

const ChannelCard = (props: ChannelCardProps) => {
    // console.log(props.channelDetail)
    return (
    <Box sx={{ boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', 
        width: { xs: '356px', md: '320px' }, height: '326px', margin: 'auto', marginTop: props.marginTop }}
    >
        <Link to={`/channel/${props.channelDetail?.id?.channelId || props.channelDetail?.id}}`}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
                <CardMedia
                    image={props.channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={props.channelDetail?.snippet?.title}
                    sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
                />
                <Typography variant='h6'>
                    {props.channelDetail?.snippet?.title}
                    <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
                </Typography>
                    {props.channelDetail?.statistics?.subscriberCount && (
                        <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
                            {parseInt(props.channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                        </Typography>
                    )}
            </CardContent>
        </Link>
    </Box>
)
    }

export default ChannelCard