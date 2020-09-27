import React from 'react';
import { Link } from 'react-router-dom';

export default function ForbiddenPage() {
    return(
        <div className="container">
            <h2>Sorry, You dont have permission to add new products</h2>
            <p><Link to="/">See our catalog</Link></p>
        </div>
    )
}