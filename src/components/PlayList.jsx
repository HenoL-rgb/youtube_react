import React, { useRef } from 'react';
import {Left, Right} from '../icons/icons'
import classes from '../styles/playlist.module.css'
import VideoCard from './VideoCard';

export default function PlayList({title, image, videos, width, subscribe, subtext}) {
    const ref = useRef();
    
    function scroll(offset) {
        ref.current.scrollLeft += offset;
    }

    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <div className={classes.playlistName}>
                    {image ?
                        <img src={image}></img>
                        : ''
                    }
                    <span className={classes.nameText}>
                    <h2>{title}</h2>
                    { subtext ?
                        <span className={classes.subtext}>{subtext}</span>
                        : ''
                    }
                    </span>
                    
                </div>
                
                <div className={classes.controls}>
                    {subscribe ?
                        <div className={classes.subscribe}>Subscribe {subscribe}</div>
                        : ''
                    }
                    <div onClick={() => scroll(-100)}><Left/></div>
                    <div onClick={() => scroll(100)}><Right/></div>
                </div>
            </div>

            <ul className={classes.videos} ref={ref}>
                {videos.map(item => <li key={item.id}><VideoCard item={item} width={width}></VideoCard></li>)}
            </ul>
        </div>
    )
}
