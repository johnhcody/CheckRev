import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ReviewText() {
    const star = <FontAwesomeIcon icon={['fas', 'star']} />
    return (
        <div className="review-text-wrapper">
            <div className="review-text-header">
                <a>{star} {star} {star} {star} {star}</a>
                <h2>10/1/2020</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis erat a lorem sodales venenatis et et lectus. Donec id consequat sapien. Nulla efficitur ut mauris id aliquet. Sed vitae massa dui. Donec lacinia bibendum diam. Donec id tortor ligula. Maecenas vitae scelerisque nibh. Praesent eget ex semper mauris bibendum rutrum sed id ante. Pellentesque in nunc et massa pharetra maximus vel quis enim. Cras vulputate enim a cursus imperdiet. Sed id diam posuere tellus.</p>
        </div>
    )
}

export default ReviewText;