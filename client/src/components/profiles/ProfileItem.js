import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const ProfileItem =  ({
    profile: {
        user: { _id, name, avatar },
        product,
        company,
        address,    
        phone,
        productcat
    }
}) => {  
    return (      
                <div class="featured-place-wrap">
                    <img src={avatar} class="img-fluid" alt='#'></img>                       
                        <div class="featured-title-box">
                                <h3> {name} </h3>
                            <ul>
                                <li>
                                <span><i class="fa fa-gavel" aria-hidden="true"></i></span>
                                    <p>{ product }</p>
                                </li>
                                <li>
                                <span><i class="fa fa-gift" aria-hidden="true"></i></span>
                                    <p>{ productcat }</p>
                                </li>
                                <li>
                                <span><i class="fa fa-gavel" aria-hidden="true"></i></span>
                                    <p>{ company }</p>
                                </li>
                                <li>
                                <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                                    <p>{ address }</p>
                                </li>
                                <li><span><i class="fa fa-phone" aria-hidden="true"></i></span>
                                    <p>{ phone }</p>
                                </li>

                        </ul>
                        <Link to={`/profile/${_id}`} className='btn btn-primary'>
                            View Profile
                         </Link>
                            <div class="bottom-icons">
                                <span> <i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                <span> <i class="fa fa-bookmark-o" aria-hidden="true"></i></span>
                            </div>  
                </div> 
            </div>
       
    );
};

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileItem;

