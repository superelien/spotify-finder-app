import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpg';
const AlbumList = ({ albums }) => {
    return(
        <React.Fragment>
        {Object.keys(albums).length > 0 && (
            <div className="albums">
                {albums.items.map((album, index) => {
                    return (
                        <React.Fragment>
                            <Card style={{ width: '18rem' }}>
                                <a
                                    target="_blank"
                                    href={album.external_urls.spotify}
                                    rel="noopener noreferrer"
                                    className="card-image-link"
                                    >                                    
                                    {!_.isEmpty(album.images) ? (
                                    <Card.Img
                                        variant="top"
                                        src={album.images[0].url}
                                        alt={ album.name }
                                    />
                                    ) : (
                                    <img src={music} alt="generic drum" />
                                    )}
                                </a>
                                <Card.Body>
                                    <Card.Title> { album.name } </Card.Title>
                                    <Card.Text>
                                        <small>
                                            {album.artists.map((artist) => artist.name).join(', ')}
                                        </small>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </React.Fragment>
                    );
                })}
            </div>
        )}
        </React.Fragment>
    );
};
export default AlbumList