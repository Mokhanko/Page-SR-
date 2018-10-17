import React from 'react';
import './styles.css'

const Content = () => (
    <div className="footer">
        <footer>
            <div className="col-lg-3">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet consectetur dolor in elementum.</p>
            </div>
            <div className="col-lg-3 list">
                <ul>
                <li><a href="#">Lorem Ipsum</a></li>
                <li><a href="#">Lorem Ipsum</a></li>
                <li><a href="#">Lorem Ipsum</a></li>
                <li><a href="#">Lorem Ipsum</a></li>
                </ul>
            </div>
            <div className="col-lg-3 list">
                <ul>
                <li><a href="#">Lorem Ipsum</a></li>
                <li><a href="#">Lorem Ipsum</a></li>
                <li><a href="#">Lorem Ipsum</a></li>
                <li><a href="#">Lorem Ipsum</a></li>
                </ul>
            </div>
            <div className="col-lg-3">
                <h5><strong>Contact Info</strong></h5>
                <p><strong>Adress:</strong> 514 S. Magnolia St.Orlando, FL 32806</p>
                <p><strong>Email:</strong> email@example.com</p>
                <p><strong>Tel.:</strong> (888) 888 8888</p>
            </div>
        </footer>
    </div> 
)

export default Content;